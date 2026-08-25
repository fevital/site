import type { Metadata } from "next";
import CategoryTemplate from "../components/CategoryTemplate";
import { products } from "../lib/products";
export const metadata:Metadata={title:"Consórcios Rodobens em Minas Gerais",description:"Consórcios Rodobens para automóveis, imóveis, caminhões, máquinas e equipamentos em Minas Gerais.",alternates:{canonical:"https://vital.net.br/consorcios/"}};
export default function Page(){return <CategoryTemplate title="Consórcios Rodobens" eyebrow="PLANEJAMENTO PARA CONQUISTAR" description="Cartas de crédito para veículos, imóveis, pesados, máquinas e equipamentos com orientação em cada etapa." products={products.filter(p=>p.group==="consorcios")}/>}
