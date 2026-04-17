import { createWriteStream, mkdirSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import PDFDocument from "pdfkit";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

const BLUE = "#3757a6";
const NAVY = "#0f1b3d";
const TEXT = "#4a4f5b";
const PAGE_MARGIN = 56;
const HEADER_HEIGHT = 72;
const CONTENT_TOP = 108;
const CONTENT_BOTTOM_MARGIN = 56;

const documents = [
  {
    source: "src/content/pages/privacyverklaring.md",
    output: "public/legal/Privacyverklaring-STB-Services.pdf"
  },
  {
    source: "src/content/pages/cookiebeleid-eu.md",
    output: "public/legal/Cookiebeleid-STB-Services.pdf"
  }
];

const md = new MarkdownIt({
  html: false,
  linkify: false,
  typographer: false
});

function linkTextForHref(text, href) {
  const comparableHref = href.replace(/^mailto:/i, "").replace(/^tel:/i, "");
  if (text === href || text === comparableHref) {
    return text;
  }

  return `${text} (${comparableHref})`;
}

function inlineTokenToText(token) {
  if (!token.children || token.children.length === 0) {
    return token.content ?? "";
  }

  let output = "";
  let activeLink = null;

  for (const child of token.children) {
    if (child.type === "link_open") {
      activeLink = {
        href: child.attrGet("href") ?? "",
        text: ""
      };
      continue;
    }

    if (child.type === "link_close") {
      if (activeLink) {
        output += linkTextForHref(activeLink.text, activeLink.href);
        activeLink = null;
      }
      continue;
    }

    let fragment = "";

    if (child.type === "text") {
      fragment = child.content;
    } else if (child.type === "code_inline") {
      fragment = `“${child.content}”`;
    } else if (child.type === "softbreak" || child.type === "hardbreak") {
      fragment = "\n";
    } else if (child.type === "html_inline") {
      fragment = "";
    } else if (child.content) {
      fragment = child.content;
    }

    if (!fragment) {
      continue;
    }

    if (activeLink) {
      activeLink.text += fragment;
    } else {
      output += fragment;
    }
  }

  return output.trim();
}

function markdownToBlocks(content) {
  const tokens = md.parse(content, {});
  const blocks = [];

  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i];

    if (token.type === "heading_open") {
      const level = Number(token.tag.slice(1));
      const inline = tokens[i + 1];
      blocks.push({
        type: "heading",
        level,
        text: inlineTokenToText(inline)
      });
      i += 2;
      continue;
    }

    if (token.type === "paragraph_open") {
      const inline = tokens[i + 1];
      blocks.push({
        type: "paragraph",
        text: inlineTokenToText(inline)
      });
      i += 2;
      continue;
    }

    if (token.type === "bullet_list_open") {
      const items = [];
      i += 1;

      while (i < tokens.length && tokens[i].type !== "bullet_list_close") {
        if (tokens[i].type === "inline") {
          items.push(inlineTokenToText(tokens[i]));
        }
        i += 1;
      }

      blocks.push({ type: "bullet_list", items });
    }
  }

  return blocks.filter((block) => {
    if (block.type === "bullet_list") {
      return block.items.length > 0;
    }

    return block.text.length > 0;
  });
}

function drawHeader(doc, title) {
  const { width } = doc.page;

  doc.save();
  doc.rect(0, 0, width, HEADER_HEIGHT).fill(BLUE);
  doc
    .fillColor("#ffffff")
    .font("Helvetica-Bold")
    .fontSize(20)
    .text(title, PAGE_MARGIN, 24, {
      width: width - PAGE_MARGIN * 2,
      align: "left",
      lineBreak: false
    });
  doc.restore();
  doc.y = CONTENT_TOP;
}

function renderBlocks(doc, blocks) {
  const width = doc.page.width - PAGE_MARGIN * 2;
  const maxY = doc.page.height - CONTENT_BOTTOM_MARGIN;

  function ensureSpace(height) {
    if (doc.y + height <= maxY) {
      return;
    }

    doc.addPage();
    drawHeader(doc, doc.info.Title || "");
  }

  for (const block of blocks) {
    if (block.type === "heading") {
      const spacer = block.level <= 2 ? 12 : 8;
      doc.y += spacer;
      const headingSize = block.level <= 2 ? 16 : 13;
      const headingOptions = {
        width,
        lineGap: 3
      };
      const headingHeight = doc
        .font("Helvetica-Bold")
        .fontSize(headingSize)
        .heightOfString(block.text, headingOptions);

      ensureSpace(headingHeight + 12);
      doc
        .font("Helvetica-Bold")
        .fontSize(headingSize)
        .fillColor(block.level <= 2 ? BLUE : NAVY)
        .text(block.text, PAGE_MARGIN, doc.y, headingOptions);
      doc.y += block.level <= 2 ? 6 : 3;
      continue;
    }

    if (block.type === "paragraph") {
      const paragraphOptions = {
        width,
        lineGap: 3
      };
      const paragraphHeight = doc
        .font("Helvetica")
        .fontSize(10.5)
        .heightOfString(block.text, paragraphOptions);

      ensureSpace(paragraphHeight + 8);
      doc
        .font("Helvetica")
        .fontSize(10.5)
        .fillColor(TEXT)
        .text(block.text, PAGE_MARGIN, doc.y, paragraphOptions);
      doc.y += 5;
      continue;
    }

    if (block.type === "bullet_list") {
      for (const item of block.items) {
        const itemText = `• ${item}`;
        const itemOptions = {
          width: width - 8,
          lineGap: 3,
          indent: 10,
          paragraphGap: 5
        };
        const itemHeight = doc
          .font("Helvetica")
          .fontSize(10.5)
          .heightOfString(itemText, itemOptions);

        ensureSpace(itemHeight + 4);
        doc
          .font("Helvetica")
          .fontSize(10.5)
          .fillColor(TEXT)
          .text(itemText, PAGE_MARGIN + 8, doc.y, itemOptions);
      }
      doc.y += 2;
    }
  }
}

function generatePdf({ source, output }) {
  const sourcePath = resolve(source);
  const outputPath = resolve(output);
  const { data, content } = matter(readFileSync(sourcePath, "utf8"));
  const blocks = markdownToBlocks(content);

  mkdirSync(dirname(outputPath), { recursive: true });

  const doc = new PDFDocument({
    size: "A4",
    margins: {
      top: PAGE_MARGIN,
      right: PAGE_MARGIN,
      bottom: PAGE_MARGIN,
      left: PAGE_MARGIN
    },
    autoFirstPage: false,
    info: {
      Title: data.title,
      Author: "STB Services",
      Subject: data.description ?? data.title
    }
  });

  const stream = createWriteStream(outputPath);
  doc.pipe(stream);
  doc.addPage();
  drawHeader(doc, data.title);
  renderBlocks(doc, blocks);
  doc.end();

  return new Promise((resolvePromise, rejectPromise) => {
    stream.on("finish", resolvePromise);
    stream.on("error", rejectPromise);
  });
}

for (const documentConfig of documents) {
  await generatePdf(documentConfig);
}
