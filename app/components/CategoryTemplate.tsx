import Link from "next/link";
import type { Product } from "../lib/products";
import { productHref } from "../lib/products";
import WhatsAppLink from "./WhatsAppLink";
import { whatsappUrl } from "../lib/site";

export default function CategoryTemplate({title,eyebrow,description,products}:{title:string;eyebrow:string;description:string;products:Product[]}){return <main className="product-page"><section className="product-hero"><div className="global-shell"><span>{eyebrow}</span><h1>{title}</h1><p>{description}</p><WhatsAppLink href={whatsappUrl(`Olá! Quero conhecer as opções de ${title}.`)} target="_blank" rel="noreferrer">Falar com a Vital</WhatsAppLink></div></section><section className="product-block"><div className="global-shell"><header className="product-section-heading"><span>ESCOLHA UMA SOLUÇÃO</span><h2>Encontre o produto para o seu objetivo.</h2></header><div className="home-product-grid">{products.map(product=><Link className="home-product-card" key={product.slug} href={productHref(product)}><i>{product.icon}</i><div><h3>{product.name}</h3><p>{product.description}</p><span>Conhecer solução →</span></div></Link>)}</div></div></section></main>}
