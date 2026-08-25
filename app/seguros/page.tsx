import type { Metadata } from "next";
import CategoryTemplate from "../components/CategoryTemplate";
import { products } from "../lib/products";
export const metadata:Metadata={title:"Seguros em Minas Gerais",description:"Seguros para pessoas, famílias, profissionais e empresas em Varginha, Três Corações, Campanha, Pouso Alegre, Divinópolis e Belo Horizonte.",alternates:{canonical:"https://vital.net.br/seguros/"}};
export default function Page(){return <CategoryTemplate title="Seguros" eyebrow="PROTEÇÃO PARA CADA RISCO" description="Soluções para proteger seu patrimônio, sua família, sua profissão e sua empresa com coberturas bem dimensionadas." products={products.filter(p=>p.group==="seguros")}/>}
