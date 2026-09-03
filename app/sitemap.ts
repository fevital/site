import type { MetadataRoute } from "next";
import { articles } from "./lib/articles";
import { canonicalBase } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = ["", "/politica-de-privacidade", "/termos-de-uso", "/blog", "/blog/autor/equipe-vital"].map((path) => ({
    url: `${canonicalBase}${path}/`,
    lastModified: new Date("2026-08-25"),
    changeFrequency: path === "/blog" ? "weekly" as const : "monthly" as const,
    priority: path === "" ? 1 : path === "/blog" ? 0.9 : 0.5,
  }));
  const products = [{ url: "https://vital.net.br/seguro-de-vida/", lastModified: new Date("2026-09-03"), changeFrequency: "monthly" as const, priority: 0.9 }];
  return [...fixed, ...products, ...articles.map((article) => ({ url: `${canonicalBase}/blog/${article.slug}/`, lastModified: new Date(article.publishedAt), changeFrequency: "monthly" as const, priority: article.city ? 0.8 : 0.7 }))];
}
