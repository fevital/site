import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const title = "Seguro Auto | Vital Corretora";
const description = "Compare seguradoras, coberturas, franquias e assistência para proteger seu carro com a Vital Corretora.";

export const metadata: Metadata = {
  metadataBase: new URL("https://vital.net.br"),
  title,
  description,
  openGraph: { title, description, type: "website", locale: "pt_BR", siteName: "Vital Corretora", images: [{ url: "/seguro-automovel/og.png", width: 1200, height: 630, alt: "Seguro Auto Vital" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/seguro-automovel/og.png"] },
};

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){
  return <html lang="pt-BR"><body>{children}<Script src="https://www.googletagmanager.com/gtag/js?id=AW-18305681918" strategy="afterInteractive"/><Script id="google-ads-tag" strategy="afterInteractive">{`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'AW-18305681918');
  `}</Script></body></html>;
}
