import type { MetadataRoute } from "next";
import { articles } from "./lib/articles";
import { products, productHref } from "./lib/products";
import { canonicalBase, siteUrl } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = ["", "/seguros", "/planos-de-saude", "/consorcios", "/politica-de-privacidade", "/termos-de-uso", "/seguro-automovel", "/seguro-automovel/blog", "/seguro-automovel/blog/autor/equipe-vital"].map((path) => ({
    url: `${siteUrl}${path}/`,
    lastModified: new Date("2026-08-25"),
    changeFrequency: path === "/seguro-automovel/blog" ? "weekly" as const : "monthly" as const,
    priority: path === "" ? 1 : path === "/seguro-automovel" ? 0.95 : path === "/seguro-automovel/blog" ? 0.9 : 0.5,
  }));
  const productPages=products.map(product=>({url:`${siteUrl}${productHref(product)}`,lastModified:new Date("2026-08-25"),changeFrequency:"monthly" as const,priority:.85}));
  return [...fixed,...productPages, ...articles.map((article) => ({ url: `${canonicalBase}/blog/${article.slug}/`, lastModified: new Date(article.publishedAt), changeFrequency: "monthly" as const, priority: article.city ? 0.8 : 0.7 }))];
}
