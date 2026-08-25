import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogCTA from "../../components/BlogCTA";
import { articlesForProduct } from "../../lib/productArticles";
import { products, productHref } from "../../lib/products";
import { siteUrl } from "../../lib/site";

type Params=Promise<{product:string}>;
export function generateStaticParams(){return products.map(product=>({product:product.slug}))}
export async function generateMetadata({params}:{params:Params}):Promise<Metadata>{const slug=(await params).product;const product=products.find(p=>p.slug===slug);if(!product)return{};return{title:`Blog sobre ${product.name} em Minas Gerais`,description:`100 matérias sobre ${product.name.toLowerCase()} para Varginha, Três Corações, Campanha, Pouso Alegre, Divinópolis, Belo Horizonte e região.`,alternates:{canonical:`${siteUrl}/blog/${slug}/`}}}
export default async function ProductBlog({params}:{params:Params}){const slug=(await params).product;const product=products.find(p=>p.slug===slug);if(!product)notFound();const list=articlesForProduct(slug);const categories=[...new Set(list.map(a=>a.category))];return <main className="blog-site"><section className="blog-hero"><div className="blog-shell"><span>100 GUIAS ESPECIALIZADOS</span><h1>Blog sobre {product.name}</h1><p>{product.description} Conteúdo regional para ajudar você a comparar opções e contratar com clareza.</p><BlogCTA topic={`Blog sobre ${product.name}`} productName={product.name} compact/></div></section><div className="blog-shell category-links">{categories.map(category=><span key={category}>{category}</span>)}</div><section className="blog-shell article-grid">{list.map(article=><article className="article-card" key={article.slug}><span>{article.category} · Minas Gerais</span><h2><Link href={`/blog/${slug}/${article.slug}/`}>{article.title}</Link></h2><p>{article.description}</p><Link className="read-more" href={`/blog/${slug}/${article.slug}/`}>Ler matéria →</Link></article>)}</section><div className="blog-shell blog-back"><Link href={productHref(product)}>Conhecer {product.name} →</Link><Link href="/blog/">Ver todas as categorias →</Link></div></main>}
