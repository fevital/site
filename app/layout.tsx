import type { Metadata } from "next";
import "./globals.css";

const title = "Seguro Auto | Vital Corretora";
const description = "Compare seguradoras, coberturas, franquias e assistência para proteger seu carro com a Vital Corretora.";

export const metadata: Metadata = {
  metadataBase: new URL("https://vital.net.br/seguro-automovel"),
  title,
  description,
  openGraph: { title, description, type: "website", locale: "pt_BR", siteName: "Vital Corretora", images: [{ url: "https://vital.net.br/seguro-automovel/og.png", width: 1200, height: 630, alt: "Seguro Auto Vital" }] },
  twitter: { card: "summary_large_image", title, description, images: ["https://vital.net.br/seguro-automovel/og.png"] },
};

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){
  return <html lang="pt-BR"><body>{children}</body></html>;
}
