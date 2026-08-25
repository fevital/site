import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductTemplate from "../../components/ProductTemplate";
import { getProduct, products, serviceCities } from "../../lib/products";
import { siteUrl } from "../../lib/site";
type Params=Promise<{slug:string}>;
export function generateStaticParams(){return products.filter(p=>p.group==="consorcios").map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Params}):Promise<Metadata>{const p=getProduct("consorcios",(await params).slug);if(!p)return{};return{title:`${p.name} em Minas Gerais`,description:`${p.description} Simulações para ${serviceCities.slice(0,8).join(", ")} e outras regiões de Minas Gerais.`,keywords:[p.name,"consórcio Rodobens Minas Gerais","consórcio Varginha","consórcio Pouso Alegre","consórcio Belo Horizonte"],alternates:{canonical:`${siteUrl}/consorcios/${p.slug}/`}}}
export default async function Page({params}:{params:Params}){const p=getProduct("consorcios",(await params).slug);if(!p)notFound();return <ProductTemplate product={p}/>}
