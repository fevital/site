import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./blog.css";
import "./institutional.css";
import "./overrides.css";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const title = "Vital Corretora | Seguros, Consórcios e Planos de Saúde";
const description = "Seguros, planos de saúde e consórcios com atendimento humano em Minas Gerais. Vital Corretora, SUSEP 261180251.";

export const metadata: Metadata = {
  metadataBase: new URL("https://vital.net.br"),
  title: { default: title, template: "%s | Vital Corretora" },
  description,
  openGraph: { title, description, type: "website", locale: "pt_BR", siteName: "Vital Corretora", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Vital Corretora" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){
  const organization = { "@context": "https://schema.org", "@type": ["Organization", "InsuranceAgency"], name: "VITAL CORRETORA DE SEGUROS CONSÓRCIOS E PLANOS DE SAÚDE", url: "https://vital.net.br/", identifier: { "@type": "PropertyValue", name: "Registro SUSEP", value: "261180251" }, address: { "@type": "PostalAddress", addressLocality: "Monsenhor Paulo", addressRegion: "MG", addressCountry: "BR" }, areaServed: "Minas Gerais", telephone: "+55 35 8414-9766" };
  return <html lang="pt-BR"><body><SiteHeader/>{children}<SiteFooter/><Script id="vital-organization" type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(organization)}}/><Script src="https://www.googletagmanager.com/gtag/js?id=AW-18305681918" strategy="afterInteractive"/><Script id="google-ads-tag" strategy="afterInteractive">{`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'AW-18305681918');
  `}</Script></body></html>;
}
