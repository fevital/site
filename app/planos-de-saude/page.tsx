import type { Metadata } from "next";
import CategoryTemplate from "../components/CategoryTemplate";
import { products } from "../lib/products";
export const metadata:Metadata={title:"Planos de Saúde em Minas Gerais",description:"Compare Unimed, Azul Saúde, Bradesco Saúde, Amil, SulAmérica e Qualicorp em Minas Gerais.",alternates:{canonical:"https://vital.net.br/planos-de-saude/"}};
export default function Page(){return <CategoryTemplate title="Planos de Saúde" eyebrow="CUIDADO E REDE DE ATENDIMENTO" description="Compare redes, acomodações, coparticipação, abrangência e carências para sua família ou empresa." products={products.filter(p=>p.group==="planos-de-saude")}/>}
