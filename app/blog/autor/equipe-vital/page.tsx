import type { Metadata } from "next";
import Link from "next/link";
import { canonicalBase, companyName, susep } from "../../../lib/site";

export const metadata: Metadata = {
  title: "Equipe Vital Corretora | Autor",
  description: "Conteúdo editorial da Vital Corretora sobre seguro auto e proteção veicular securitária no Sul de Minas.",
  alternates: { canonical: `${canonicalBase}/blog/autor/equipe-vital/` },
};

export default function AuthorPage() {
  return <main className="blog-site"><header className="blog-header"><div className="blog-shell blog-nav"><Link href="/">Vital Corretora</Link><Link href="/blog/">Blog</Link></div></header><article className="blog-shell author-page"><span>AUTOR</span><h1>Equipe Vital Corretora</h1><p>A equipe editorial da {companyName} produz conteúdos para ajudar motoristas a entender coberturas, franquias, assistências e critérios de contratação do seguro de automóvel.</p><p>A Vital está sediada em Monsenhor Paulo, MG, atende todo o Sul de Minas e possui registro SUSEP nº {susep}.</p><Link href="/blog/">Ver todas as matérias →</Link></article></main>;
}
