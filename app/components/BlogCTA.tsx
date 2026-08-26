import WhatsAppLink from "./WhatsAppLink";
import { whatsappUrl } from "../lib/site";

export default function BlogCTA({ topic, compact = false }: { topic: string; compact?: boolean }) {
  const message = `Olá! Li a matéria “${topic}” no site da Vital e quero fazer uma cotação de seguro auto.`;
  return (
    <aside className={compact ? "blog-cta blog-cta-compact" : "blog-cta"}>
      <div>
        <strong>Quer comparar seu seguro sem compromisso?</strong>
        <span>A Vital compara seguradoras, coberturas e franquias e explica cada diferença.</span>
      </div>
      <WhatsAppLink href={whatsappUrl(message)} target="_blank" rel="noreferrer">
        Cotar pelo WhatsApp
      </WhatsAppLink>
    </aside>
  );
}
