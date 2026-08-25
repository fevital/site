import Link from "next/link";
import Image from "next/image";
import WhatsAppLink from "./WhatsAppLink";
import { companyName, susep, whatsappUrl } from "../lib/site";

export default function SiteFooter(){return <footer className="global-footer"><div className="global-shell footer-grid">
  <div className="footer-about"><Image src="/vital-lettering.png" alt="Vital" width={236} height={116}/><p>Proteção, saúde e planejamento com atendimento humano em Minas Gerais.</p><WhatsAppLink href={whatsappUrl("Olá! Quero falar com a Vital.")} target="_blank" rel="noreferrer">Chamar no WhatsApp</WhatsAppLink></div>
  <div><strong>Seguros</strong><Link href="/seguro-automovel/">Automóvel</Link><Link href="/seguros/seguro-de-vida/">Vida</Link><Link href="/seguros/seguro-empresarial/">Empresarial</Link><Link href="/seguros/responsabilidade-civil-profissional/">RC Profissional</Link><Link href="/seguros/">Todos os seguros</Link></div>
  <div><strong>Soluções</strong><Link href="/planos-de-saude/individual-e-familiar/">Plano Individual e Familiar</Link><Link href="/planos-de-saude/empresarial/">Plano Empresarial</Link><Link href="/consorcios/automoveis/">Consórcio Auto</Link><Link href="/consorcios/imoveis/">Consórcio Imóvel</Link></div>
  <div><strong>Institucional</strong><Link href="/blog/">Blog</Link><Link href="/politica-de-privacidade/">Privacidade</Link><Link href="/termos-de-uso/">Termos de Uso</Link><span>Monsenhor Paulo, MG</span><span>SUSEP {susep}</span></div>
  </div><div className="global-shell footer-legal"><span>{companyName}</span><span>Atendimento online em Minas Gerais</span></div></footer>}
