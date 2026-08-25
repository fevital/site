import type { Product } from "../lib/products";
import Image from "next/image";
import WhatsAppLink from "./WhatsAppLink";
import { companyName, susep, whatsappUrl } from "../lib/site";

const faqs = [
  ["Como recebo uma cotação?","Envie uma mensagem pelo WhatsApp. A Vital solicitará apenas os dados necessários para entender o perfil, comparar opções e apresentar uma recomendação clara."],
  ["A contratação pode ser feita online?","Sim. A análise, troca de documentos e contratação podem ser conduzidas digitalmente, respeitando os processos da seguradora, operadora ou administradora."],
  ["A opção mais barata é sempre a melhor?","Não. Preço precisa ser comparado junto com coberturas, limites, rede, franquias, carências, taxas e regras do produto. A Vital mostra essas diferenças antes da decisão."],
  ["A Vital acompanha depois da contratação?","Sim. O atendimento continua para dúvidas, alterações, orientações e encaminhamento aos canais responsáveis sempre que necessário."],
];

const partnerAssets:Record<string,string>={"Allianz":"/insurers/allianz.png","Tokio Marine":"/insurers/tokio-marine.png","Bradesco Seguros":"/insurers/bradesco-seguros.png","AKAD":"/partners/akad.png"};

export default function ProductTemplate({product}:{product:Product}){
  const message=`Olá! Quero saber mais sobre ${product.name}.`;
  const schema={"@context":"https://schema.org","@type":"Service",name:product.name,description:product.description,provider:{"@type":"InsuranceAgency",name:companyName,identifier:susep,address:{"@type":"PostalAddress",addressLocality:"Monsenhor Paulo",addressRegion:"MG",addressCountry:"BR"}},areaServed:product.cities.map(name=>({"@type":"City",name})),audience:{"@type":"Audience",audienceType:product.audience}};
  return <main className="product-page"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    <section className="product-hero"><div className="global-shell product-hero-grid"><div><span>{product.eyebrow.toUpperCase()}</span><h1>{product.name}</h1><p>{product.description}</p><WhatsAppLink href={whatsappUrl(message)} target="_blank" rel="noreferrer">Solicitar cotação</WhatsAppLink></div><div className="product-symbol"><i>{product.icon}</i></div></div></section>
    <section className="product-block"><div className="global-shell"><header className="product-section-heading"><span>PARA QUEM É</span><h2>Uma solução construída para a sua realidade.</h2><p>{product.audience}</p></header><div className="benefit-grid">{product.benefits.map((benefit,index)=><article key={benefit}><b>0{index+1}</b><h3>{benefit}</h3><p>A contratação e os limites dependem da proposta, análise e condições do produto escolhido.</p></article>)}</div></div></section>
    <section className="product-block alt"><div className="global-shell"><header className="product-section-heading"><span>COMO FUNCIONA</span><h2>Da necessidade à contratação, sem complicação.</h2></header><div className="product-steps">{product.steps.map((step,index)=><article key={step}><b>0{index+1}</b><h3>{step}</h3></article>)}</div></div></section>
    <section className="product-block"><div className="global-shell"><header className="product-section-heading"><span>PARCEIROS DESTA SOLUÇÃO</span><h2>Produtos analisados com critério.</h2><p>A disponibilidade, aceitação e condições dependem do perfil e da região.</p></header><div className="partner-row">{product.partners.map(partner=><span key={partner}>{partnerAssets[partner]?<Image src={partnerAssets[partner]} alt={partner} width={150} height={64}/>:partner}</span>)}</div></div></section>
    <section className="product-region"><div className="global-shell"><div><span>ATENDIMENTO EM MINAS GERAIS</span><h2>Presença regional, atendimento digital e humano.</h2><p>Atendemos a partir de Monsenhor Paulo e alcançamos o Sul de Minas, Centro-Oeste mineiro e Belo Horizonte.</p></div><div className="city-cloud">{product.cities.map(city=><span key={city}>{city}</span>)}</div></div></section>
    <section className="product-block product-faq"><div className="global-shell"><header className="product-section-heading"><span>DÚVIDAS FREQUENTES</span><h2>Informação clara antes de contratar.</h2></header>{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>
    <section className="product-cta"><div className="global-shell"><h2>Vamos encontrar a melhor configuração para você?</h2><p>Receba orientação personalizada da Vital pelo WhatsApp.</p><WhatsAppLink href={whatsappUrl(message)} target="_blank" rel="noreferrer">Falar com a Vital</WhatsAppLink></div></section>
  </main>
}
