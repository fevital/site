import type { ReactNode } from "react";
import Link from "next/link";

export default function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="legal-page">
      <article className="shell legal-content">
        <Link href="/">← Voltar para a página inicial</Link>
        <h1>{title}</h1>
        <p className="legal-updated">Última atualização: 24 de agosto de 2026.</p>
        {children}
      </article>
    </main>
  );
}
