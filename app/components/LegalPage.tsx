import type { ReactNode } from "react";

const basePath = "/seguro-automovel";

export default function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <div className="shell">
          <a href={`${basePath}/`} aria-label="Voltar para Seguro Automóvel">
            <img src="/vital-lettering.png" alt="Vital" />
          </a>
        </div>
      </header>
      <article className="shell legal-content">
        <a href={`${basePath}/`}>← Voltar para Seguro Automóvel</a>
        <h1>{title}</h1>
        <p className="legal-updated">Última atualização: 24 de agosto de 2026.</p>
        {children}
      </article>
    </main>
  );
}
