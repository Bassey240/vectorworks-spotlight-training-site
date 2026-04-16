import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const distDir = resolve("dist");
const sitemapIndex = resolve(distDir, "sitemap-index.xml");
const sitemapTarget = resolve(distDir, "sitemap.xml");

if (existsSync(sitemapIndex)) {
  copyFileSync(sitemapIndex, sitemapTarget);
}
