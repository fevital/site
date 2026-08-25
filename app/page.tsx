import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import WhatsAppLink from "./components/WhatsAppLink";
import { autoProduct, products, productHref, serviceCities } from "./lib/products";
import { companyName, siteUrl, susep, whatsappUrl } from "./lib/site";

export const metadata: Metadata = {
  title: "Vital Corretora | Seguros, Consórcios e Planos de Saúde em Minas Gerais",
  description: "Corretora em Monsenhor Paulo com atendimento em Varginha, Três Corações, Campanha, Pouso Alegre, Divinópolis, Belo Horizonte e toda Minas Gerais.",
  keywords: ["corretora de seguros Minas Gerais","seguros Varginha","seguros Três Corações","seguros Campanha MG","planos de saúde Sul de Minas","consórcio Rodobens Minas Gerais"],
  alternates: { canonical: `${siteUrl}/` },
};

const insurance = products.filter(p=>p.group==="seguros");
const health = products.filter(p=>p.group==="planos-de-saude");
const consortium = products.filter(p=>p.group==="consorcios");

function ProductCard({name,description,icon,href,featured=false}:{name:string;description:string;icon:string;href:string;featured?:boolean}){
  return <Link className={featured?"home-product-card featured":"home-product-card"} href={href}><i>{icon}</i><div><h3>{name}</h3><p>{description}</p><span>Conhecer solução →</span></div></Link>
}

export default function Home(){
  const schema = {"@context":"https://schema.org","@type":"InsuranceAgency",name:companyName,url:siteUrl,identifier:susep,address:{"@type":"PostalAddress",addressLocality:"Monsenhor Paulo",addressRegion:"MG",addressCountry:"BR"},areaServed:serviceCities.map(name=>({"@type":"City",name})),knowsAbout:["Seguros","Planos de Saúde","Consórcios Rodobens"]};
  return <main className="institutional-home">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    <section className="institutional-hero"><Image src="/brand/hero-vital-institucional-v1.png" alt="Consultor da Vital Corretora representando proteção, saúde e planejamento" fill priority sizes="100vw"/><div className="institutional-hero-shade"/><div className="global-shell institutional-hero-content"><span>PROTEÇÃO NÃO É LUXO, É VITAL.</span><h1>Preços menores.<strong>Proteções melhores.</strong></h1><p>Comparamos seguros, planos de saúde e consórcios para encontrar a solução certa para você, sua família e sua empresa.</p><div><WhatsAppLink href={whatsappUrl("Olá! Quero uma cotação com a Vital.")} target="_blank" rel="noreferrer">Fazer uma cotação</WhatsAppLink><Link href="#solucoes">Conhecer soluções</Link></div><small>Atendimento humano em Minas Gerais · SUSEP {susep}</small></div></section>

    <section className="home-trust"><div className="global-shell"><span><b>✓</b> Comparação transparente</span><span><b>✓</b> Proteção bem dimensionada</span><span><b>✓</b> Suporte antes e depois</span></div></section>

    <section className="home-products" id="solucoes"><div className="global-shell"><header className="institutional-heading"><span>TUDO EM UM SÓ LUGAR</span><h2>Proteção para cada fase da sua vida.</h2><p>Escolha uma categoria e conheça as soluções que a Vital pode estruturar para você.</p></header>
      <div className="home-category-title" id="seguros"><div><span>01</span><h2>Seguros</h2></div><p>Seu patrimônio, sua família, sua profissão e seu negócio protegidos do jeito certo.</p></div>
      <div className="home-product-grid"><ProductCard featured name={autoProduct.name} description={autoProduct.description} icon={autoProduct.icon} href="/seguro-automovel/"/>{insurance.map(p=><ProductCard key={p.slug} name={p.name} description={p.description} icon={p.icon} href={productHref(p)}/>)}</div>
    </div></section>

    <section className="home-health"><div className="global-shell home-split"><div><span>PLANOS DE SAÚDE</span><h2>Escolha pela rede e pelo cuidado. Não apenas pelo preço.</h2><p>Comparamos Unimed, Azul Saúde, Bradesco Saúde, Amil, SulAmérica e Qualicorp considerando cidades atendidas, hospitais, acomodação, coparticipação e carências.</p><div className="partner-pills">{["Unimed","Azul Saúde","Bradesco Saúde","Amil","SulAmérica","Qualicorp"].map(x=><b key={x}>{x}</b>)}</div><WhatsAppLink href={whatsappUrl("Olá! Quero comparar planos de saúde.")} target="_blank" rel="noreferrer">Comparar planos</WhatsAppLink></div><div className="health-cards">{health.map(p=><ProductCard key={p.slug} name={p.name} description={p.description} icon={p.icon} href={productHref(p)}/>)}</div></div></section>

    <section className="home-consortium"><div className="global-shell"><header className="institutional-heading light"><span>CONSÓRCIOS RODOBENS</span><h2>Planejamento para conquistar, ampliar ou renovar.</h2><p>Cartas de crédito para veículos, imóveis, caminhões, máquinas e equipamentos, com orientação sobre prazos, sorteios e lances.</p></header><div className="consortium-grid">{consortium.map(p=><ProductCard key={p.slug} name={p.name} description={p.description} icon={p.icon} href={productHref(p)}/>)}</div></div></section>

    <section className="home-comparison"><div className="global-shell"><header className="institutional-heading"><span>O JEITO VITAL</span><h2>Você recebe análise. Não apenas uma proposta.</h2></header><div className="comparison-columns"><article><b>NÓS</b><h3>Vital Corretora</h3><ul><li>✓ Foco no cliente</li><li>✓ Proteções bem dimensionadas</li><li>✓ Comparação entre opções</li><li>✓ Acompanhamento humano</li></ul></article><article><b>ELES</b><h3>Venda sem análise</h3><ul><li>× Foco somente no preço</li><li>× Coberturas desconectadas</li><li>× Pouca explicação</li><li>× Atendimento termina na venda</li></ul></article></div></div></section>

    <section className="home-region"><div className="global-shell region-home-grid"><div><span>DE MONSENHOR PAULO PARA MINAS GERAIS</span><h2>Perto de você, mesmo quando o atendimento é online.</h2><p>Atendemos todo o Sul de Minas e expandimos nossa atuação até Pouso Alegre, Poços de Caldas, Lavras, Divinópolis, Pará de Minas, Belo Horizonte e outras regiões do estado.</p><div className="city-cloud">{serviceCities.map(city=><span key={city}>{city}</span>)}</div><WhatsAppLink href={whatsappUrl("Olá! Quero atendimento da Vital na minha cidade.")} target="_blank" rel="noreferrer">Consultar minha região</WhatsAppLink></div><div className="home-map"><div className="home-map-shape"/><i className="map-dot d1"/><i className="map-dot d2"/><i className="map-dot d3"/><i className="map-dot d4"/><strong>Atendimento<br/>em Minas Gerais</strong></div></div></section>

    <section className="home-process"><div className="global-shell"><header className="institutional-heading"><span>SIMPLES E HUMANO</span><h2>A Vital faz o trabalho pesado. Você decide com clareza.</h2></header><div><article><b>01</b><h3>Entendemos</h3><p>Você conta o que precisa, sua realidade e seu objetivo.</p></article><article><b>02</b><h3>Comparamos</h3><p>Analisamos produtos, preços, limites e condições.</p></article><article><b>03</b><h3>Explicamos</h3><p>Mostramos o que realmente muda entre as opções.</p></article><article><b>04</b><h3>Acompanhamos</h3><p>Continuamos ao seu lado depois da contratação.</p></article></div></div></section>

    <section className="home-final"><div className="global-shell"><span>TODO CUIDADO É VITAL.</span><h2>Vamos encontrar a proteção certa para você?</h2><p>Conte o que precisa e receba orientação personalizada pelo WhatsApp.</p><WhatsAppLink href={whatsappUrl("Olá! Quero encontrar a melhor solução com a Vital.")} target="_blank" rel="noreferrer">Começar agora</WhatsAppLink></div></section>
  </main>
}
