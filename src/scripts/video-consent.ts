document.querySelectorAll<HTMLElement>("[data-video-load]").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".video-consent-card");
    const target = card?.querySelector<HTMLElement>("[data-video-target]");
    const src = button.dataset.videoSrc;
    const title = button.dataset.videoTitle || "YouTube video";

    if (!card || !target || !src || target.querySelector("iframe")) {
      return;
    }

    const iframe = document.createElement("iframe");
    iframe.src = src;
    iframe.title = title;
    iframe.width = "560";
    iframe.height = "315";
    iframe.loading = "lazy";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allowFullscreen = true;

    target.hidden = false;
    target.appendChild(iframe);
    card.classList.add("video-consent-card--loaded");
  });
});
