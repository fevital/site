import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BlogCTA from "../components/BlogCTA";
import { articles } from "../lib/articles";
import { products } from "../lib/products";
import { siteUrl } from "../lib/site";

export const metadata: Metadata = {title:"Blog da Vital: seguros, saúde e consórcios em Minas Gerais",description:"1.600 guias da Vital sobre seguros, planos de saúde e consórcios para o Sul de Minas, Centro-Oeste mineiro e Belo Horizonte.",alternates:{canonical:`${siteUrl}/blog/`}};

export default function GlobalBlogPage(){
  const hubs=[{slug:"seguro-automovel",name:"Seguro Automóvel",description:"Coberturas, franquias, sinistros, perfis e contratação.",hero:"/hero-vital-frota-desktop-v33.png",href:"/seguro-automovel/blog/",count:Math.min(100,articles.length)},...products.map(product=>({slug:product.slug,name:product.name,description:product.description,hero:`/brand/hero-${product.slug}.png`,href:`/blog/${product.slug}/`,count:100}))];
  const schema={"@context":"https://schema.org","@type":"Blog",name:"Blog da Vital Corretora",url:`${siteUrl}/blog/`,blogPost:hubs.map(h=>({"@type":"CollectionPage",name:h.name,url:`${siteUrl}${h.href}`}))};
  return <main className="blog-site"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><section className="blog-hero"><div className="blog-shell"><span>CONTEÚDO PARA DECIDIR MELHOR</span><h1>Blog da Vital</h1><p>Guias sobre seguros, planos de saúde e consórcios para clientes de Minas Gerais. Escolha um produto e explore 100 matérias dedicadas.</p><BlogCTA topic="Blog da Vital" productName="seguros, planos de saúde e consórcios" compact/></div></section><section className="blog-shell blog-hubs"><header><span>16 CATEGORIAS · 1.600 MATÉRIAS</span><h2>Encontre conteúdo por produto</h2></header><div>{hubs.map(hub=><article key={hub.slug}><Link href={hub.href}><div className="blog-hub-image"><Image src={hub.hero} alt={hub.name} fill sizes="(max-width: 700px) 100vw, 33vw"/></div><span>{hub.count} matérias</span><h3>{hub.name}</h3><p>{hub.description}</p><b>Abrir categoria →</b></Link></article>)}</div></section></main>;
}
