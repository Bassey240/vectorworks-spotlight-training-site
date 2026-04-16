import { defineCollection, z } from "astro:content";

const linkSchema = z.object({
  label: z.string(),
  href: z.string()
});

const infoItemSchema = z.object({
  label: z.string(),
  value: z.string()
});

const highlightSchema = z.object({
  title: z.string(),
  text: z.string(),
  href: z.string().optional()
});

const faqItemSchema = z.object({
  question: z.string(),
  answer: z.string()
});

const sidebarSchema = z.object({
  title: z.string().optional(),
  paragraphs: z.array(z.string()).optional(),
  cta: linkSchema.optional()
});

const archiveSidebarSchema = z.object({
  search: z.boolean().optional(),
  archives: z.array(linkSchema).optional(),
  recentPosts: z.array(linkSchema).optional()
});

const commentSchema = z.object({
  author: z.string(),
  authorHref: z.string().optional(),
  date: z.string(),
  body: z.string(),
  reply: z
    .object({
      author: z.string(),
      authorHref: z.string().optional(),
      date: z.string(),
      body: z.string()
    })
    .optional()
});

const cardSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  price: z.string(),
  period: z.string(),
  features: z.array(z.string()),
  href: z.string(),
  buttonLabel: z.string().optional(),
  footerNote: z.string().optional()
});

const heroSchema = z.object({
  eyebrow: z.string().optional(),
  title: z.string().optional(),
  body: z.string().optional(),
  primaryCta: linkSchema.optional(),
  secondaryCta: linkSchema.optional()
});

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    kind: z.enum([
      "home",
      "overview",
      "course",
      "service",
      "about",
      "faq",
      "form",
      "legal",
      "archive"
    ]),
    seoTitle: z.string().optional(),
    hero: heroSchema.optional(),
    highlights: z.array(highlightSchema).optional(),
    practicalInfo: z.array(infoItemSchema).optional(),
    topics: z.array(z.string()).optional(),
    links: z.array(linkSchema).optional(),
    sidebar: sidebarSchema.optional(),
    archiveSidebar: archiveSidebarSchema.optional(),
    cards: z.array(cardSchema).optional(),
    faqItems: z.array(faqItemSchema).optional(),
    faqIntro: z.string().optional(),
    formType: z.enum(["contact", "signup"]).optional(),
    reviewedCopy: z.boolean().optional(),
    ogImage: z.string().optional(),
    published: z.string().optional(),
    updated: z.string().optional(),
    socialLinks: z.array(linkSchema).optional()
  })
});

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    excerpt: z.string(),
    author: z.string().optional(),
    authorHref: z.string().optional(),
    ogImage: z.string().optional(),
    thumbnail: z.string().optional(),
    download: z
      .object({
        label: z.string(),
        href: z.string()
      })
      .optional(),
    video: z
      .object({
        label: z.string(),
        href: z.string(),
        embed: z.string().optional()
      })
      .optional(),
    links: z.array(linkSchema).optional(),
    comments: z.array(commentSchema).optional()
  })
});

export const collections = { pages, posts };
