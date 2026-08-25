import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogCTA from "../../components/BlogCTA";
import WhatsAppLink from "../../components/WhatsAppLink";
import { articleSections, articles, getArticle, relatedArticles } from "../../lib/articles";
import { canonicalBase, companyName, susep, whatsappUrl } from "../../lib/site";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return {};
  const url = `${canonicalBase}/blog/${article.slug}/`;
  return {
    title: article.title,
    description: article.description,
    keywords: [article.keyword, "seguro auto", "Sul de Minas", "Vital Corretora"],
    alternates: { canonical: url },
    openGraph: { title: article.title, description: article.description, type: "article", url, locale: "pt_BR", publishedTime: article.publishedAt },
  };
}

export default async function ArticlePage({ params }: { params: Params }) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const sections = articleSections(article);
  const related = relatedArticles(article);
  const url = `${canonicalBase}/blog/${article.slug}/`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.description,
      datePublished: article.publishedAt,
      dateModified: article.publishedAt,
      mainEntityOfPage: url,
      author: { "@type": "Organization", name: "Equipe Vital Corretora", url: `${canonicalBase}/blog/autor/equipe-vital/` },
      publisher: { "@type": "Organization", name: companyName, url: canonicalBase },
      about: article.keyword,
      areaServed: article.city || "Sul de Minas Gerais",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Seguro Auto", item: `${canonicalBase}/` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${canonicalBase}/blog/` },
        { "@type": "ListItem", position: 3, name: article.title, item: url },
      ],
    },
  ];

  return (
    <main className="blog-site">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="blog-header"><div className="blog-shell blog-nav"><Link href="/">Vital Corretora</Link><Link href="/blog/">Blog Seguro Auto</Link></div></header>
      <article className="blog-shell article-page">
        <nav className="breadcrumbs"><Link href="/">Seguro Auto</Link><span>›</span><Link href="/blog/">Blog</Link><span>›</span><span>{article.category}</span></nav>
        <header className="article-heading">
          <span>{article.category}{article.city ? ` · ${article.city}` : ""}</span>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <small>Por Equipe Vital Corretora · Publicado em {new Date(`${article.publishedAt}T12:00:00`).toLocaleDateString("pt-BR")} · SUSEP {susep}</small>
        </header>
        <div className="article-body">
          <p className="article-lead">Contratar seguro auto exige mais do que encontrar uma parcela atraente. Neste guia, a Vital explica o que deve ser observado sobre <strong>{article.keyword}</strong> para que você compare propostas equivalentes e tome uma decisão consciente.</p>
          <BlogCTA topic={article.title} compact />
          {sections.map((section, index) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {index === 1 && <BlogCTA topic={article.title} />}
            </section>
          ))}
          <section className="source-note">
            <h2>Informação importante</h2>
            <p>As coberturas, exclusões, franquias e serviços variam conforme a seguradora e o produto contratado. Consulte sempre a proposta e as condições contratuais. Para verificar empresas autorizadas e obter informações regulatórias, consulte a SUSEP.</p>
          </section>
          <BlogCTA topic={article.title} />
        </div>
        <section className="related-posts">
          <h2>Continue aprendendo</h2>
          <div>{related.map((item) => <Link key={item.slug} href={`/blog/${item.slug}/`}>{item.title}<span>Leia agora →</span></Link>)}</div>
        </section>
      </article>
      <WhatsAppLink className="blog-floating" href={whatsappUrl(`Olá! Li a matéria “${article.title}” e quero cotar meu seguro auto.`)} target="_blank" rel="noreferrer" aria-label="Cotar seguro auto pelo WhatsApp">WhatsApp</WhatsAppLink>
      <footer className="blog-footer"><div className="blog-shell">{companyName} · SUSEP {susep} · Monsenhor Paulo, MG</div></footer>
    </main>
  );
}
