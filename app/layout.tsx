import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./blog.css";
import "./home.css";

const title = "Seguro Auto | Vital Corretora";
const description = "Compare seguradoras, coberturas, franquias e assistência para proteger seu carro com a Vital Corretora.";

export const metadata: Metadata = {
  metadataBase: new URL("https://vital.net.br"),
  title: { default: title, template: "%s | Vital Corretora" },
  description,
  alternates: { canonical: "/seguro-automovel/" },
  openGraph: { title, description, type: "website", locale: "pt_BR", siteName: "Vital Corretora", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Seguro Auto Vital" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){
  const organization = { "@context": "https://schema.org", "@type": ["Organization", "InsuranceAgency"], name: "VITAL CORRETORA DE SEGUROS CONSÓRCIOS E PLANOS DE SAÚDE", url: "https://vital.net.br/seguro-automovel/", identifier: { "@type": "PropertyValue", name: "Registro SUSEP", value: "261180251" }, address: { "@type": "PostalAddress", addressLocality: "Monsenhor Paulo", addressRegion: "MG", addressCountry: "BR" }, areaServed: "Sul de Minas Gerais", telephone: "+55 35 8414-9766" };
  return <html lang="pt-BR"><body>{children}<Script id="vital-organization" type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organization)}}/><Script id="meta-pixel" strategy="afterInteractive">{`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '2644890082634989');
    fbq('track', 'PageView');
  `}</Script><noscript><img height="1" width="1" style={{display:"none"}} src="https://www.facebook.com/tr?id=2644890082634989&ev=PageView&noscript=1" alt=""/></noscript><Script src="https://www.googletagmanager.com/gtag/js?id=AW-18305681918" strategy="afterInteractive"/><Script id="google-ads-tag" strategy="afterInteractive">{`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'AW-18305681918');
  `}</Script></body></html>;
}
