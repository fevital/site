import WhatsAppLink from "./WhatsAppLink";
import { whatsappUrl } from "../lib/site";

export default function BlogCTA({ topic, compact = false, productName = "seguro auto" }: { topic: string; compact?: boolean; productName?: string }) {
  const message = `Olá! Li a matéria “${topic}” no site da Vital e quero saber mais sobre ${productName}.`;
  return (
    <aside className={compact ? "blog-cta blog-cta-compact" : "blog-cta"}>
      <div>
        <strong>Quer receber uma orientação sem compromisso?</strong>
        <span>A Vital compara as opções e explica com clareza as diferenças importantes.</span>
      </div>
      <WhatsAppLink href={whatsappUrl(message)} target="_blank" rel="noreferrer">
        Cotar pelo WhatsApp
      </WhatsAppLink>
    </aside>
  );
}
