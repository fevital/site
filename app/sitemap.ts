import type {MetadataRoute} from "next";
import {articles} from "./lib/articles";
import {brandArticles} from "./lib/brand-articles";
import {canonicalBase} from "./lib/site";
export default function sitemap():MetadataRoute.Sitemap{
 const date=new Date("2026-09-03");
 const main=["","/blog"].map(path=>({url:`https://vital.net.br${path}/`,lastModified:date,changeFrequency:path?"weekly" as const:"monthly" as const,priority:path?.9:1}));
 const products=["/seguro-automovel","/seguro-de-vida"].map(path=>({url:`https://vital.net.br${path}/`,lastModified:date,changeFrequency:"monthly" as const,priority:.9}));
 const autoFixed=["/blog","/politica-de-privacidade","/termos-de-uso"].map(path=>({url:`${canonicalBase}${path}/`,lastModified:date,changeFrequency:"monthly" as const,priority:.6}));
 const brand=brandArticles.map(a=>({url:`https://vital.net.br/blog/${a.slug}/`,lastModified:date,changeFrequency:"monthly" as const,priority:a.category==="Vital Corretora"?.9:.75}));
 const auto=articles.map(a=>({url:`${canonicalBase}/blog/${a.slug}/`,lastModified:new Date(a.publishedAt),changeFrequency:"monthly" as const,priority:a.city?.8:.7}));
 return [...main,...products,...autoFixed,...brand,...auto];
}
