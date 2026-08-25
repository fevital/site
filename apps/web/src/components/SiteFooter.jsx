import React from 'react';
import { LOGO_SHIELD, WHATSAPP_URL, COMPANY, CNPJ, PHONE, EMAIL, INSTITUTIONAL, SLOGAN_IMG } from '@/lib/brand';

function WhatsAppIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 6.165L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const links = [
  { label: 'Privacidade', href: '#/politica-de-privacidade' },
  { label: 'Termos de Uso', href: '#/termos-de-uso' },
];

export default function SiteFooter({ ctaHref = WHATSAPP_URL }) {
  return (
    <footer className="relative overflow-hidden border-t border-ink/10 bg-ink text-paper" id="contato">
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 opacity-[0.12]"
        style={{
          backgroundImage: `url(https://horizons-cdn.hostinger.com/88e7e666-518e-4f0d-8b58-409cfd1bc04a/a40df55e0c64db7e6c7c7ac8640288af.png)`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={LOGO_SHIELD}
                alt="Vital Corretora de Seguros"
                className="h-14 w-auto shrink-0 object-contain object-left"
                width={64}
                height={64}
                loading="lazy"
                decoding="async"
              />
              <span className="flex flex-col justify-center leading-tight">
                <span className="font-display text-lg font-extrabold tracking-tight text-white">Vital Corretora</span>
                <span className="text-[0.7rem] font-normal leading-snug text-paper/65">{INSTITUTIONAL}</span>
              </span>
            </div>
            <p className="text-xs font-normal leading-relaxed text-paper/50">
              {COMPANY}
              <br />
              CNPJ {CNPJ}
              <br />
              {PHONE} · {EMAIL}
            </p>
          </div>

          <nav aria-label="Rodapé" className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-x-10">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="py-1.5 text-sm font-normal text-paper/75 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-start gap-3 lg:items-end">
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="whatsapp-footer"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm t-cta text-white shadow-[0_10px_28px_-10px_rgba(37,211,102,0.7)] transition hover:bg-whatsapp-dark active:scale-[0.98]"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chamar no WhatsApp
            </a>
            <p className="text-xs font-normal text-paper/45">Atendimento no Sul de Minas e 100% digital</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs font-normal text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} {COMPANY}. Todo cuidado é</span>
            <img src={SLOGAN_IMG} alt="Vital" className="inline-block h-3.5 w-auto" loading="lazy" decoding="async" />
          </p>
          <p>Seguro Auto · Cotação orientada · Sul de Minas</p>
        </div>
      </div>
    </footer>
  );
}
