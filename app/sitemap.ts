import type { MetadataRoute } from "next";
import { articles } from "./lib/articles";
import { productArticles } from "./lib/productArticles";
import { products, productHref } from "./lib/products";
import { canonicalBase, siteUrl } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed=["","/blog","/seguros","/planos-de-saude","/consorcios","/politica-de-privacidade","/termos-de-uso","/seguro-automovel","/seguro-automovel/blog","/seguro-automovel/blog/autor/equipe-vital"].map(path=>({url:`${siteUrl}${path}/`,lastModified:new Date("2026-08-25"),changeFrequency:path.includes("blog")?"weekly" as const:"monthly" as const,priority:path===""?1:path==="/blog"?.95:.7}));
  const productPages=products.map(product=>({url:`${siteUrl}${productHref(product)}`,lastModified:new Date("2026-08-25"),changeFrequency:"monthly" as const,priority:.85}));
  const hubs=products.map(product=>({url:`${siteUrl}/blog/${product.slug}/`,lastModified:new Date("2026-08-25"),changeFrequency:"weekly" as const,priority:.82}));
  const autoPosts=articles.slice(0,100).map(article=>({url:`${canonicalBase}/blog/${article.slug}/`,lastModified:new Date(article.publishedAt),changeFrequency:"monthly" as const,priority:article.city?.8:.7}));
  const productPosts=productArticles.map(article=>({url:`${siteUrl}/blog/${article.product.slug}/${article.slug}/`,lastModified:new Date(article.publishedAt),changeFrequency:"monthly" as const,priority:.68}));
  return [...fixed,...productPages,...hubs,...autoPosts,...productPosts];
}
