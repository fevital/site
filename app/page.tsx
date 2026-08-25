const basePath = "/seguro-automovel";
const asset = (path: string) => `${basePath}${path}`;
const whatsapp = "https://wa.me/553584149766?text=Oi%2C%20quero%20cotar%20um%20seguro%20para%20o%20meu%20autom%C3%B3vel%21";

const coverages = [
  ["01","Colisão e perda total","Proteção para os danos do seu veículo, de um reparo à indenização integral."],
  ["02","Roubo, furto e incêndio","Coberturas essenciais para proteger o patrimônio que você levou tempo para conquistar."],
  ["03","Danos a terceiros","Limites adequados para danos materiais, corporais e morais."],
  ["04","Assistência 24 horas","Guincho e serviços emergenciais para imprevistos na cidade ou na estrada."],
  ["05","Vidros e retrovisores","Reparo ou troca conforme o plano contratado e a necessidade do seu veículo."],
  ["06","Carro reserva","Mobilidade enquanto seu veículo estiver em reparo por um evento coberto."],
];
const insurerLogos = [
  ["MAPFRE", asset("/insurers/mapfre.png")],
  ["Suhai Seguradora", asset("/insurers/suhai.png")],
  ["Yelum Seguradora", asset("/insurers/yelum.png")],
  ["Porto", asset("/insurers/porto.png")],
  ["Tokio Marine Seguradora", asset("/insurers/tokio-marine.png")],
  ["Azul Seguros", asset("/insurers/azul-seguros.png")],
  ["Allianz", asset("/insurers/allianz.png")],
  ["HDI Seguros", asset("/insurers/hdi.png")],
  ["Bradesco Seguros", asset("/insurers/bradesco-seguros.png")],
  ["Itaú Seguros", asset("/insurers/itau-seguros.png")],
];
const faqs = [
  ["Por que contratar com a Vital?","Porque cuidamos de toda a jornada. Antes, entendemos seu perfil e comparamos as melhores opções. Durante, explicamos cada escolha com clareza. Depois, continuamos ao seu lado para manter sua proteção funcionando como deve."],
  ["A Vital atende toda Minas Gerais?","Sim. Atendemos todo o estado de forma 100% online, com agilidade, segurança e contato humano. Você resolve tudo pelo WhatsApp, sem perder proximidade ou qualidade no atendimento."],
  ["Como vocês encontram a melhor opção?","Analisamos preço, franquia, coberturas, limites para terceiros, assistência e rede de atendimento. Você recebe opções bem comparadas e uma recomendação clara para escolher com confiança."],
  ["A opção mais barata pode ser uma boa escolha?","Pode, desde que entregue a proteção que seu perfil realmente precisa. A Vital equilibra preço e cobertura para evitar excessos sem abrir mão do que é importante para você."],
  ["A Vital acompanha depois da contratação?","Com certeza. Acompanhamos alterações na apólice, dúvidas, assistências e sinistros. Você não fica sozinho depois de contratar: a Vital continua presente quando mais importa."],
];

function CoverageIcon({type}:{type:number}){
  const paths=[
    <><path d="M5 13h14l2 4v3H3v-3l2-4Z"/><path d="m7 13 2-5h6l2 5M7 20v2m10-2v2"/></>,
    <><path d="M12 3 4 6v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V6l-8-3Z"/><path d="m9 12 2 2 4-4"/></>,
    <><path d="M12 21s8-4 8-10V5l-8-3-8 3v6c0 6 8 10 8 10Z"/><path d="M8 12h8M12 8v8"/></>,
    <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2M5.6 5.6 3.5 3.5"/></>,
    <><path d="M4 18 7 6h10l3 12H4Z"/><path d="M8 18 10 8h4l2 10"/></>,
    <><path d="M3 16h18v4H3zM5 16l2-6h10l2 6"/><path d="M8 20v2m8-2v2"/></>
  ];
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[type]}</svg>
}

function BenefitIcon({type}:{type:number}){
  const paths=[
    <><path d="M4 13v-2a8 8 0 0 1 16 0v2"/><path d="M4 13H2v5h4v-5H4Zm16 0h2v5h-4v-5h2Zm0 5c0 2-2 3-5 3"/></>,
    <><path d="M4 20V10m6 10V6m6 14V3m-9 7 3-3 3 2 5-5"/></>,
    <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 2M7 2 4 5"/></>,
    <><path d="M7 3h10l3 3v15H7V3Z"/><path d="M17 3v4h3M10 11h7m-7 4h7"/><path d="M4 7v14h12"/></>
  ];
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[type]}</svg>
}

function WhatsIcon(){
  return <svg className="whats-icon" viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 3A13 13 0 0 0 4.8 22.6L3 29l6.6-1.7A13 13 0 1 0 16 3Zm0 23.6c-2 0-3.9-.5-5.5-1.5l-.4-.2-3.9 1 1.1-3.8-.3-.4A10.6 10.6 0 1 1 16 26.6Zm5.8-7.9c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8.7 8.7 0 0 1-2.6-1.6 9.8 9.8 0 0 1-1.8-2.3c-.2-.3 0-.5.1-.7l.5-.6.3-.6c.1-.2 0-.4 0-.6s-.7-1.7-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.5-.1-.1-.4-.3-.7-.4Z"/></svg>;
}
function CTA({children="Fazer minha cotação",light=false}:{children?:React.ReactNode;light?:boolean}) {
  return <a className={light?"cta light":"cta"} href={whatsapp} target="_blank" rel="noreferrer"><WhatsIcon/>{children}</a>;
}

export default function Home(){
  return <main>
    <header className="site-header"><div className="shell header-inner">
      <a className="brand brand-header" href="#inicio">
        <img src={asset("/vital-lettering.png")} alt="Vital"/>
        <span>Corretora de Seguros,<br/>Consórcios &amp; Planos de Saúde</span>
      </a>
      <CTA>Cotar agora</CTA>
    </div></header>

    <section className="hero" id="inicio">
      <picture className="hero-media" aria-hidden="true">
        <source media="(max-width: 640px)" srcSet={`${asset("/hero-vital-frota-mobile-v33.png")}?v=33`}/>
        <img className="hero-background" src={`${asset("/hero-vital-frota-desktop-v33.png")}?v=33`} alt=""/>
      </picture>
      <div className="hero-overlay"/>
      <div className="shell hero-inner"><div className="hero-copy">
        <span className="eyebrow regional-badge">
          <svg className="mg-flag" viewBox="0 0 48 32" aria-hidden="true">
            <rect x="1" y="1" width="46" height="30" rx="2"/>
            <path d="M24 7 34 24H14L24 7Z"/>
          </svg>
          A mais completa do Sul de Minas Gerais!
        </span>
        <h1>Seu automóvel<strong>precisa da nossa proteção.</strong></h1>
        <p>A gente compara as principais seguradoras, explica cada diferença e encontra a proteção certa para o seu carro — sem exageros, do tamanho certo.</p>
        <div className="hero-actions"><CTA/><a className="text-link" href="#como-funciona">Veja como funciona <b>↘</b></a></div>
        <small>✓ Cotação gratuita, rápida e com atendimento humano.</small>
      </div></div>
      <div className="shell proof"><span><b>✓</b> Coberturas bem dimensionadas</span><span><b>✓</b> Comparação entre seguradoras</span><span><b>✓</b> Suporte quando você precisar</span></div>
    </section>

    <section className="manifest" id="como-funciona">
      <img className="manifest-watermark" src={asset("/vital-shield.png")} alt="" aria-hidden="true"/>
      <div className="shell manifest-content">
        <div className="manifest-heading">
          <span>Seguro pensado para você</span>
          <h2>Estruturamos sua apólice <em>do jeito certo.</em></h2>
          <p>Proteção suficiente para o que realmente importa, sem riscos exagerados ou coberturas que você não precisa.</p>
        </div>
        <div className="comparison-grid">
          <article className="comparison-card comparison-us">
            <div className="comparison-label"><b>NÓS</b><span>Vital Corretora</span></div>
            <ul>
              <li><i>✓</i><span><strong>Foco no cliente</strong><small>Entendemos seu perfil antes de cotar.</small></span></li>
              <li><i>✓</i><span><strong>Sem riscos excessivos</strong><small>Limites ajustados à sua realidade.</small></span></li>
              <li><i>✓</i><span><strong>Zero coberturas desnecessárias</strong><small>Você paga pelo que realmente faz sentido.</small></span></li>
              <li><i>✓</i><span><strong>Melhores condições</strong><small>Comparamos seguradoras, preços e franquias.</small></span></li>
            </ul>
          </article>
          <article className="comparison-card comparison-them">
            <div className="comparison-label"><b>ELES</b><span>Venda sem análise</span></div>
            <ul>
              <li><i>×</i><span><strong>Foco em comissão</strong><small>A proposta atende mais à venda do que ao cliente.</small></span></li>
              <li><i>×</i><span><strong>Riscos exagerados</strong><small>Limites maiores sem necessidade real.</small></span></li>
              <li><i>×</i><span><strong>Coberturas inúteis</strong><small>Itens que encarecem e pouco protegem.</small></span></li>
              <li><i>×</i><span><strong>Preços maiores</strong><small>Sem comparação transparente entre opções.</small></span></li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section className="coverages" id="coberturas"><div className="shell">
      <div className="section-heading"><span>Proteção sob medida</span><h2>Do pequeno imprevisto ao grande prejuízo.</h2><p>Montamos sua cotação de acordo com o veículo, o perfil de uso e o nível de proteção que você deseja.</p></div>
      <div className="coverage-grid">{coverages.map(([n,title,text],i)=><article key={n}><span>{n}</span><i><CoverageIcon type={i}/></i><h3>{title}</h3><p>{text}</p></article>)}</div>
      <CTA>Quero comparar opções</CTA>
    </div></section>

    <section className="insurers" id="seguradoras"><img className="insurers-shield" src={asset("/vital-shield.png")} alt="" aria-hidden="true"/><div className="shell insurer-heading"><div><span>Uma cotação. Várias possibilidades.</span><h2>As principais seguradoras competindo pela sua escolha.</h2></div><p>Comparamos preço, franquia, assistência, rede de atendimento e coberturas para mostrar o que muda de verdade.</p></div><div className="logo-marquee" aria-label="Seguradoras parceiras"><div className="logo-strip">{[0,1].map(group=><div className="logo-set" key={group} aria-hidden={group===1}>{insurerLogos.map(([name,src])=><div className="insurer-logo" key={`${group}-${name}`}><img src={src} alt={group===0?name:""}/></div>)}</div>)}</div></div></section>

    <section className="method" id="processo"><div className="shell">
      <div className="section-heading centered"><span>Simples do começo ao fim</span><h2>Seu seguro em apenas 3 passos.</h2></div>
      <div className="steps"><article><b>01</b><h3>Conte sobre seu carro</h3><p>Você envia os dados básicos do veículo e como ele é usado.</p></article><article><b>02</b><h3>A Vital faz o trabalho</h3><p>Comparamos propostas, franquias, limites e assistências.</p></article><article><b>03</b><h3>Você escolhe com clareza</h3><p>Explicamos as diferenças e você contrata a melhor opção.</p></article></div>
      <div className="centered"><CTA>Começar minha cotação</CTA></div>
    </div></section>

    <section className="region" id="minas-gerais">
      <svg className="region-shield" viewBox="0 0 500 590" aria-hidden="true"><path d="M250 20C185 70 111 97 42 109v173c0 137 78 238 208 288 130-50 208-151 208-288V109C389 97 315 70 250 20Z"/></svg>
      <div className="shell region-content">
        <div className="region-copy">
          <span>Vital em toda Minas Gerais</span>
          <h2>Do Sul de Minas para todo o estado.</h2>
          <p>Somos referência no Sul de Minas e atendemos todo o estado de forma 100% online, com a mesma proximidade, segurança e suporte humano de um atendimento presencial.</p>
          <div className="region-assurance"><b>Sem distância no atendimento.</b><small>Cotação, contratação e suporte com acompanhamento de verdade, onde você estiver.</small></div>
          <CTA>Falar com a Vital</CTA>
        </div>
        <div className="region-map" aria-label="Atendimento em todo o estado de Minas Gerais">
          <div className="mg-map-image" role="img" aria-label="Mapa de Minas Gerais"><div className="mg-silhouette"/><span className="pin pin-1"/><span className="pin pin-2"/><span className="pin pin-3"/><span className="pin pin-4"/><span className="pin pin-5"/><span className="pin pin-6"/></div>
          <div className="map-caption"><strong>Minas Gerais inteira</strong><span>Atendimento humano, ágil e 100% online</span></div>
        </div>
        <div className="region-benefits">
          <article><b>01</b><i><BenefitIcon type={0}/></i><h3>Acompanhamento integral de sinistros</h3></article>
          <article><b>02</b><i><BenefitIcon type={1}/></i><h3>Bônus progressivos em apólices</h3></article>
          <article><b>03</b><i><BenefitIcon type={2}/></i><h3>Atendimento ágil, 7 dias por semana, 24 horas</h3></article>
          <article><b>04</b><i><BenefitIcon type={3}/></i><h3>Suporte em endossos, perícias e documentos</h3></article>
        </div>
      </div>
    </section>

    <section className="faq" id="duvidas"><div className="shell faq-grid">
      <div><span>Antes, durante e depois</span><h2>Você protegido em toda a jornada.</h2><p>A Vital entende antes, orienta durante a escolha e continua ao seu lado depois da contratação.</p><CTA>Falar com um especialista</CTA></div>
      <div className="questions">{faqs.map(([q,a])=><details key={q}><summary>{q}<span>⌄</span></summary><p>{a}</p></details>)}</div>
    </div></section>

    <section className="final-cta"><div className="shell"><span>Todo cuidado é Vital.</span><h2>Proteja seu veículo sem pagar por aquilo que você não precisa.</h2><p>Compare as melhores condições para o seu perfil em uma cotação gratuita.</p><CTA light>Quero cotar meu seguro</CTA></div></section>
    <footer><div className="shell footer-main"><div className="footer-brand"><img src={asset("/vital-shield.png")} alt="Vital"/><span>Corretora de Seguros,<br/>Consórcios &amp; Planos de Saúde</span></div><nav aria-label="Informações legais"><a href={`${basePath}/politica-de-privacidade/`}>Política de Privacidade</a><a href={`${basePath}/termos-de-uso/`}>Termos de Uso</a></nav><CTA>Chamar no WhatsApp</CTA></div><div className="shell footer-bottom"><span>Vital Corretora de Seguros Ltda.</span><span>Seguro Auto • Atendimento personalizado</span></div></footer>
    <a className="floating" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Fazer cotação pelo WhatsApp"><WhatsIcon/></a>
  </main>
}
