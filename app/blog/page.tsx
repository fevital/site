import type { Metadata } from "next";
import Link from "next/link";
import BlogCTA from "../components/BlogCTA";
import { articles } from "../lib/articles";
import { canonicalBase } from "../lib/site";

export const metadata: Metadata = {
  title: "Blog de Seguro Auto no Sul de Minas",
  description: "Guias sobre seguro auto, coberturas, franquias, sinistros e contratação em Varginha, Campanha, Três Corações e todo o Sul de Minas.",
  alternates: { canonical: `${canonicalBase}/blog/` },
};

export default function BlogPage() {
  const categories = [...new Set(articles.map((article) => article.category))];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog de Seguro Auto da Vital Corretora",
    url: `${canonicalBase}/blog/`,
    publisher: { "@type": "Organization", name: "Vital Corretora" },
  };

  return (
    <main className="blog-site">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="blog-header">
        <div className="blog-shell blog-nav">
          <Link href="/">Vital Corretora</Link>
          <Link href="/">Seguro Auto</Link>
        </div>
      </header>
      <section className="blog-hero">
        <div className="blog-shell">
          <span>CONTEÚDO ESPECIALIZADO</span>
          <h1>Seguro Auto no Sul de Minas</h1>
          <p>Informação clara para comparar coberturas, evitar erros e proteger seu veículo em Varginha, Campanha, Três Corações e região.</p>
          <BlogCTA topic="Blog de Seguro Auto da Vital" compact />
        </div>
      </section>
      <div className="blog-shell category-links" aria-label="Categorias">
        {categories.map((category) => <span key={category}>{category}</span>)}
      </div>
      <section className="blog-shell article-grid">
        {articles.map((article) => (
          <article className="article-card" key={article.slug}>
            <span>{article.category}{article.city ? ` · ${article.city}` : ""}</span>
            <h2><Link href={`/blog/${article.slug}/`}>{article.title}</Link></h2>
            <p>{article.description}</p>
            <Link className="read-more" href={`/blog/${article.slug}/`}>Ler matéria →</Link>
          </article>
        ))}
      </section>
      <footer className="blog-footer"><div className="blog-shell">VITAL CORRETORA DE SEGUROS CONSÓRCIOS E PLANOS DE SAÚDE · SUSEP 261180251 · Monsenhor Paulo, MG</div></footer>
    </main>
  );
}
