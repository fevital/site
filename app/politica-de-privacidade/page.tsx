import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = { title: "Política de Privacidade | Vital Corretora" };

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Política de Privacidade">
      <section><h2>1. Nosso compromisso</h2><p>A Vital Corretora de Seguros Ltda. respeita sua privacidade e trata dados pessoais de acordo com a legislação aplicável, especialmente a Lei Geral de Proteção de Dados Pessoais (LGPD).</p></section>
      <section><h2>2. Dados que podemos coletar</h2><p>Ao iniciar uma cotação ou entrar em contato, podemos receber dados de identificação e contato, informações sobre o veículo, perfil de utilização, histórico necessário à análise do risco e os dados que você optar por fornecer durante o atendimento.</p></section>
      <section><h2>3. Como utilizamos os dados</h2><p>Os dados podem ser utilizados para:</p><ul><li>atender solicitações e preparar cotações de seguro;</li><li>comparar propostas e intermediar a contratação com seguradoras;</li><li>prestar suporte durante a vigência da apólice e em caso de sinistro;</li><li>cumprir obrigações legais, regulatórias e contratuais;</li><li>prevenir fraudes e proteger os direitos da Vital e de seus clientes.</li></ul></section>
      <section><h2>4. Compartilhamento</h2><p>Quando necessário para executar os serviços solicitados, os dados poderão ser compartilhados com seguradoras, prestadores de assistência, empresas de tecnologia e autoridades competentes. Exigimos que os parceiros adotem medidas adequadas de segurança e utilizem os dados apenas para as finalidades autorizadas.</p></section>
      <section><h2>5. Armazenamento e segurança</h2><p>Adotamos medidas técnicas e administrativas razoáveis para evitar acesso não autorizado, perda, alteração ou divulgação indevida. Os dados são mantidos somente pelo período necessário às finalidades informadas e ao cumprimento de obrigações legais.</p></section>
      <section><h2>6. Seus direitos</h2><p>Nos termos da LGPD, você pode solicitar confirmação e acesso aos dados, correção, anonimização, bloqueio, eliminação quando aplicável, portabilidade, informações sobre compartilhamento e revisão ou revogação de consentimento.</p></section>
      <section><h2>7. Cookies e navegação</h2><p>Esta página pode utilizar recursos técnicos essenciais para seu funcionamento e serviços de terceiros necessários à comunicação. Caso ferramentas de análise ou publicidade sejam adicionadas, esta política deverá ser atualizada para informar seu uso.</p></section>
      <section><h2>8. Contato</h2><p>Para dúvidas ou solicitações relacionadas a dados pessoais, entre em contato com a Vital pelos canais de atendimento disponíveis na página de Seguro Automóvel.</p></section>
    </LegalPage>
  );
}
