import sanitizeHtml from "sanitize-html";

const faqSanitizeConfig: sanitizeHtml.IOptions = {
  allowedTags: ["p", "a", "strong", "em", "ul", "ol", "li", "br", "code"],
  allowedAttributes: {
    a: ["href", "rel", "target"]
  },
  allowedSchemes: ["http", "https", "mailto", "tel"],
  allowedSchemesAppliedToAttributes: ["href"],
  allowProtocolRelative: false,
  transformTags: {
    a: (tagName, attribs) => {
      const href = attribs.href ?? "";
      const isExternal = /^https?:\/\//i.test(href);

      return {
        tagName,
        attribs: {
          href,
          ...(isExternal ? { rel: "noreferrer", target: "_blank" } : {})
        }
      };
    }
  }
};

const videoSanitizeConfig: sanitizeHtml.IOptions = {
  allowedTags: ["iframe"],
  allowedAttributes: {
    iframe: [
      "src",
      "title",
      "width",
      "height",
      "frameborder",
      "allow",
      "allowfullscreen",
      "referrerpolicy",
      "loading"
    ]
  },
  allowedSchemes: ["https"],
  allowedSchemesAppliedToAttributes: ["src"],
  allowProtocolRelative: false
};

function normalizeWhitespace(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

export function sanitizeFaqHtml(value?: string): string {
  return value ? sanitizeHtml(value, faqSanitizeConfig) : "";
}

export function faqHtmlToSchemaText(value?: string): string {
  const sanitized = sanitizeFaqHtml(value);
  const plainText = sanitizeHtml(sanitized, {
    allowedTags: [],
    allowedAttributes: {}
  });

  return normalizeWhitespace(plainText);
}

export function sanitizeVideoEmbedHtml(value?: string): string {
  if (!value) {
    return "";
  }

  const sanitized = sanitizeHtml(value, videoSanitizeConfig).trim();
  const match = sanitized.match(/<iframe\b[^>]*\bsrc="([^"]+)"[^>]*><\/iframe>/i);

  if (!match) {
    return "";
  }

  let src: URL;

  try {
    src = new URL(match[1]);
  } catch {
    return "";
  }

  const isAllowedHost = src.hostname === "www.youtube-nocookie.com" || src.hostname === "www.youtube.com";
  const isAllowedPath = /^\/embed\/[\w-]+$/i.test(src.pathname);

  if (!isAllowedHost || !isAllowedPath) {
    return "";
  }

  if (src.hostname === "www.youtube.com") {
    src.hostname = "www.youtube-nocookie.com";
  }

  return sanitizeHtml(
    sanitized.replace(match[1], src.toString()),
    videoSanitizeConfig
  ).trim();
}

export function getVideoEmbedSrc(value?: string): string {
  const sanitized = sanitizeVideoEmbedHtml(value);
  const match = sanitized.match(/<iframe\b[^>]*\bsrc="([^"]+)"[^>]*><\/iframe>/i);

  return match?.[1] ?? "";
}
