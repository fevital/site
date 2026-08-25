type LegalSection = { title: string; paragraphs: string[]; bullets?: string[] };

export default function LegalPage({
  eyebrow,
  title,
  intro,
  counterpartHref,
  counterpartLabel,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  counterpartHref: string;
  counterpartLabel: string;
  sections: LegalSection[];
}) {
  return (
    <main className="legal-page">
      <header className="legal-hero">
        <div className="legal-shell">
          <a className="legal-brand" href="/seguro-automovel/">
            <img src="/seguro-automovel/vital-shield.png" alt="Vital Corretora" />
            <span><b>{eyebrow}</b>Todo cuidado é Vital</span>
          </a>
          <h1>{title}</h1>
          <p>{intro}</p>
          <div className="legal-meta"><span>Última atualização: 10 de agosto de 2026</span><span>Vigência: a partir da publicação</span></div>
          <a className="legal-switch" href={counterpartHref}>{counterpartLabel}</a>
        </div>
      </header>
      <div className="legal-shell legal-layout">
        <aside><nav aria-label="Sumário"><b>SUMÁRIO</b>{sections.map((section, index) => <a key={section.title} href={`#secao-${index + 1}`}><span>{index + 1}</span>{section.title}</a>)}</nav></aside>
        <article>
          {sections.map((section, index) => (
            <section id={`secao-${index + 1}`} key={section.title}>
              <h2><span>{index + 1}</span>{section.title}</h2>
              {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && <ul>{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}
            </section>
          ))}
        </article>
      </div>
      <footer className="legal-footer"><div className="legal-shell"><span>Vital Corretora de Seguros Ltda. • CNPJ 66.767.206/0001-50</span><a href="/seguro-automovel/">Voltar ao Seguro Auto</a></div></footer>
    </main>
  );
}
