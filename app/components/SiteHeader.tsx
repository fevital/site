import Link from "next/link";
import Image from "next/image";
import WhatsAppLink from "./WhatsAppLink";
import { whatsappUrl } from "../lib/site";

const insurance = [
  ["Seguro Auto","/seguro-automovel/"],["Seguro Residencial","/seguros/seguro-residencial/"],["Seguro de Vida","/seguros/seguro-de-vida/"],["Seguro Empresarial","/seguros/seguro-empresarial/"],["Seguro Rural","/seguros/seguro-rural-agricola/"],["Transportes","/seguros/seguro-transporte-logistica/"],["RC Profissional","/seguros/responsabilidade-civil-profissional/"],
];

export default function SiteHeader(){
  return <header className="global-header"><div className="global-shell global-header-inner">
    <Link className="global-brand" href="/"><Image src="/vital-lettering.png" alt="Vital" width={184} height={92}/><span>Seguros, Consórcios<br/>e Planos de Saúde</span></Link>
    <nav className="desktop-nav" aria-label="Navegação principal">
      <details><summary>Seguros</summary><div>{insurance.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}<Link href="/seguros/">Ver todos os seguros</Link></div></details>
      <details><summary>Planos de Saúde</summary><div><Link href="/planos-de-saude/">Visão geral</Link><Link href="/planos-de-saude/individual-e-familiar/">Individual e Familiar</Link><Link href="/planos-de-saude/empresarial/">Empresarial</Link></div></details>
      <details><summary>Consórcios</summary><div><Link href="/consorcios/">Visão geral</Link><Link href="/consorcios/automoveis/">Automóveis</Link><Link href="/consorcios/imoveis/">Imóveis</Link><Link href="/consorcios/pesados-maquinas-e-equipamentos/">Pesados e Máquinas</Link></div></details>
      <details><summary>Blog</summary><div><Link href="/blog/">Todos os conteúdos</Link><Link href="/seguro-automovel/blog/">Seguro Auto</Link><Link href="/blog/seguro-residencial/">Residencial</Link><Link href="/blog/seguro-de-vida/">Vida</Link><Link href="/blog/individual-e-familiar/">Planos de Saúde</Link><Link href="/blog/automoveis/">Consórcios</Link></div></details>
    </nav>
    <WhatsAppLink className="global-header-cta" href={whatsappUrl("Olá! Quero conhecer as opções da Vital.")} target="_blank" rel="noreferrer">Falar com a Vital</WhatsAppLink>
    <details className="mobile-menu"><summary aria-label="Abrir menu">Menu</summary><nav>{insurance.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}<Link href="/planos-de-saude/individual-e-familiar/">Planos de Saúde</Link><Link href="/consorcios/automoveis/">Consórcios</Link><Link href="/blog/">Blog: todos os produtos</Link></nav></details>
  </div></header>
}
