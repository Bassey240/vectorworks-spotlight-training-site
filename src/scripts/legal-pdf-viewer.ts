import { GlobalWorkerOptions, getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";
import workerSrc from "pdfjs-dist/legacy/build/pdf.worker.min.mjs?url";

GlobalWorkerOptions.workerSrc = workerSrc;

const maxDevicePixelRatio = 2;
const resizeTimers = new WeakMap<HTMLElement, number>();

type ViewerRoot = HTMLElement & {
  __pdfDocument?: Awaited<ReturnType<typeof getDocument>>["promise"];
  __pdfWidth?: number;
};

async function renderPages(root: ViewerRoot) {
  const pdf = root.__pdfDocument;
  const pagesElement = root.querySelector<HTMLElement>("[data-pdf-pages]");
  const loadingElement = root.querySelector<HTMLElement>("[data-pdf-loading]");
  const errorElement = root.querySelector<HTMLElement>("[data-pdf-error]");

  if (!pdf || !pagesElement) {
    return;
  }

  const availableWidth = Math.max((pagesElement.clientWidth || root.clientWidth || 900) - 36, 240);

  if (root.__pdfWidth && Math.abs(root.__pdfWidth - availableWidth) < 16) {
    return;
  }

  root.__pdfWidth = availableWidth;
  pagesElement.replaceChildren();
  loadingElement?.removeAttribute("hidden");
  errorElement?.setAttribute("hidden", "");

  const outputScale = Math.min(window.devicePixelRatio || 1, maxDevicePixelRatio);

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const baseViewport = page.getViewport({ scale: 1 });
    const scale = availableWidth / baseViewport.width;
    const viewport = page.getViewport({ scale });

    const pageElement = document.createElement("div");
    pageElement.className = "legal-document__page";

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    if (!context) {
      throw new Error("Canvas context kon niet worden gemaakt.");
    }

    canvas.width = Math.floor(viewport.width * outputScale);
    canvas.height = Math.floor(viewport.height * outputScale);
    canvas.style.width = `${viewport.width}px`;
    canvas.style.height = `${viewport.height}px`;

    await page.render({
      canvasContext: context,
      viewport,
      transform:
        outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : undefined
    }).promise;

    pageElement.append(canvas);
    pagesElement.append(pageElement);
  }

  loadingElement?.setAttribute("hidden", "");
}

async function initializeViewer(root: ViewerRoot) {
  const src = root.dataset.pdfSrc;
  const loadingElement = root.querySelector<HTMLElement>("[data-pdf-loading]");
  const errorElement = root.querySelector<HTMLElement>("[data-pdf-error]");

  if (!src || root.__pdfDocument) {
    return;
  }

  try {
    loadingElement?.removeAttribute("hidden");
    errorElement?.setAttribute("hidden", "");
    root.__pdfDocument = await getDocument({
      url: src,
      withCredentials: false
    }).promise;

    await renderPages(root);

    const onResize = () => {
      const existingTimer = resizeTimers.get(root);
      if (existingTimer) {
        window.clearTimeout(existingTimer);
      }

      const timer = window.setTimeout(() => {
        renderPages(root).catch(() => {
          errorElement?.removeAttribute("hidden");
          loadingElement?.setAttribute("hidden", "");
        });
      }, 160);

      resizeTimers.set(root, timer);
    };

    window.addEventListener("resize", onResize, { passive: true });
  } catch (error) {
    console.error("PDF viewer initialisatie mislukt.", error);
    loadingElement?.setAttribute("hidden", "");
    errorElement?.removeAttribute("hidden");
  }
}

function bootPdfViewers() {
  document.querySelectorAll<ViewerRoot>("[data-pdf-viewer]").forEach((root) => {
    initializeViewer(root);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootPdfViewers, { once: true });
} else {
  bootPdfViewers();
}
