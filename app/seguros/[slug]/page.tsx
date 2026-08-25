import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductTemplate from "../../components/ProductTemplate";
import { getProduct, products, serviceCities } from "../../lib/products";
import { siteUrl } from "../../lib/site";
type Params=Promise<{slug:string}>;
export function generateStaticParams(){return products.filter(p=>p.group==="seguros").map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Params}):Promise<Metadata>{const p=getProduct("seguros",(await params).slug);if(!p)return{};return{title:`${p.name} em Minas Gerais`,description:`${p.description} Atendimento em ${serviceCities.slice(0,8).join(", ")} e outras regiões de Minas Gerais.`,keywords:[p.name,`${p.name} Varginha`,`${p.name} Três Corações`,`${p.name} Pouso Alegre`,`${p.name} Belo Horizonte`],alternates:{canonical:`${siteUrl}/seguros/${p.slug}/`}}}
export default async function Page({params}:{params:Params}){const p=getProduct("seguros",(await params).slug);if(!p)notFound();return <ProductTemplate product={p}/>}
