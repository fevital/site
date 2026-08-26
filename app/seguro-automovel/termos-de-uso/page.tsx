import type { Metadata } from "next";
import LegalPage from "../../components/LegalPage";

export const metadata: Metadata = { title: "Termos de Uso | Vital Corretora" };

export default function TermsOfUse() {
  return (
    <LegalPage title="Termos de Uso">
      <section><h2>1. Aceitação</h2><p>Ao acessar esta página, você declara que leu e concorda com estes Termos de Uso. Caso não concorde, interrompa a utilização do site.</p></section>
      <section><h2>2. Finalidade do site</h2><p>O site apresenta informações gerais sobre seguro automóvel e facilita o contato com a Vital Corretora de Seguros Ltda. O conteúdo não constitui proposta, apólice, garantia de contratação ou recomendação definitiva.</p></section>
      <section><h2>3. Cotações e contratação</h2><p>Cotações dependem das informações fornecidas pelo interessado, das regras de aceitação e das condições vigentes de cada seguradora. Preços, coberturas, franquias e demais condições somente serão válidos quando formalizados na proposta ou apólice correspondente.</p></section>
      <section><h2>4. Responsabilidades do usuário</h2><p>Você se compromete a fornecer informações verdadeiras, completas e atualizadas, utilizar o site de forma lícita e não tentar interferir em sua segurança ou funcionamento.</p></section>
      <section><h2>5. Conteúdo e disponibilidade</h2><p>Buscamos manter as informações corretas e o serviço disponível, mas não garantimos funcionamento ininterrupto ou ausência absoluta de erros. O conteúdo pode ser atualizado a qualquer momento para refletir alterações operacionais, comerciais ou legais.</p></section>
      <section><h2>6. Propriedade intelectual</h2><p>Marcas, textos, identidade visual, imagens e demais conteúdos próprios são protegidos pela legislação aplicável. O uso ou reprodução sem autorização, fora das hipóteses permitidas por lei, é proibido. Marcas de seguradoras pertencem aos respectivos titulares.</p></section>
      <section><h2>7. Links e serviços externos</h2><p>O site pode encaminhar o usuário a serviços de terceiros, como o WhatsApp. Esses serviços possuem termos e políticas próprios, e a Vital não controla sua disponibilidade ou suas práticas.</p></section>
      <section><h2>8. Privacidade</h2><p>O tratamento de dados pessoais relacionado ao site é descrito na Política de Privacidade, que integra estes termos.</p></section>
      <section><h2>9. Legislação aplicável</h2><p>Estes termos são regidos pela legislação brasileira. Eventuais controvérsias serão tratadas no foro competente, observadas as regras legais de proteção ao consumidor.</p></section>
      <section><h2>10. Contato</h2><p>Em caso de dúvida sobre estes termos, entre em contato pelos canais de atendimento apresentados na página de Seguro Automóvel.</p></section>
    </LegalPage>
  );
}
