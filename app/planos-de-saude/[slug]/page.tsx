import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductTemplate from "../../components/ProductTemplate";
import { getProduct, products, serviceCities } from "../../lib/products";
import { siteUrl } from "../../lib/site";
type Params=Promise<{slug:string}>;
export function generateStaticParams(){return products.filter(p=>p.group==="planos-de-saude").map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Params}):Promise<Metadata>{const p=getProduct("planos-de-saude",(await params).slug);if(!p)return{};return{title:`${p.name} em Minas Gerais`,description:`Compare ${p.partners.join(", ")} com atendimento em ${serviceCities.slice(0,8).join(", ")} e outras regiões de Minas Gerais.`,keywords:[p.name,"plano de saúde Sul de Minas","plano de saúde Varginha","plano de saúde Pouso Alegre","plano de saúde Belo Horizonte"],alternates:{canonical:`${siteUrl}/planos-de-saude/${p.slug}/`}}}
export default async function Page({params}:{params:Params}){const p=getProduct("planos-de-saude",(await params).slug);if(!p)notFound();return <ProductTemplate product={p}/>}
