import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = { title: "Termos de Uso | Vital Corretora de Seguros" };

const sections = [
  { title: "Aceitação dos Termos", paragraphs: ["Estes Termos regulam o acesso ao site, aos canais de atendimento e aos serviços prestados pela Vital Corretora de Seguros Ltda., CNPJ 66.767.206/0001-50.", "Ao utilizar nossos canais, solicitar cotações ou contratar seguros por nosso intermédio, você declara que leu e aceitou estas condições. Menores de 18 anos devem estar assistidos por responsável legal."] },
  { title: "Sobre a Vital Corretora", paragraphs: ["A Vital é uma corretora de seguros regularmente constituída. Atuamos como intermediários entre clientes e seguradoras, com assessoria técnica, comercial e de pós-venda.", "Não somos uma seguradora e não assumimos o risco coberto pelas apólices; a aceitação do risco e a indenização são responsabilidades da seguradora emitente."] },
  { title: "Serviços oferecidos", paragraphs: ["Oferecemos cotação e comparação, intermediação de seguros, apoio em renovações e endossos, acompanhamento de sinistros, atendimento e envio de avisos relacionados às apólices.", "Produtos, coberturas e condições dependem da análise e aceitação de cada seguradora."] },
  { title: "Uso do Canal WhatsApp (API Oficial)", paragraphs: ["Utilizamos a API oficial do WhatsApp Business para atendimento e mensagens relacionadas ao serviço. As conversas podem ser armazenadas para histórico e comprovação das tratativas.", "Mensagens de marketing podem ser interrompidas a qualquer momento. Evite enviar dados sensíveis que não tenham sido solicitados por nossa equipe."] },
  { title: "Responsabilidades do Usuário", paragraphs: ["O usuário deve fornecer informações verdadeiras, completas e atualizadas, preservar seus dados de acesso, comunicar alterações relevantes ao risco e guardar os documentos relacionados à contratação."], bullets: ["Não omitir informações relevantes para a análise do risco;", "Não usar os canais para fraude ou finalidade ilícita;", "Tratar a equipe com respeito e urbanidade."] },
  { title: "Uso Permitido e Uso Proibido", paragraphs: ["Os canais devem ser usados para conhecer, contratar e acompanhar os serviços da Vital. É proibido tentar acessar áreas restritas, interferir no funcionamento, disseminar código malicioso, copiar conteúdo de forma indevida ou praticar atos ilegais."] },
  { title: "Propriedade Intelectual", paragraphs: ["Marcas, textos, imagens, elementos gráficos, software e demais conteúdos pertencem à Vital ou a seus licenciadores. O acesso ao site não transfere qualquer direito de propriedade intelectual."] },
  { title: "Limitação de Responsabilidade", paragraphs: ["A Vital se compromete a atuar com diligência na intermediação e no atendimento, mas não responde por decisões de aceitação, precificação, regulação ou indenização tomadas pelas seguradoras, nem por indisponibilidades de serviços de terceiros."] },
  { title: "Disponibilidade dos Canais", paragraphs: ["Podemos realizar manutenção, atualização ou interrupção temporária dos canais. Buscaremos restabelecer o serviço com agilidade, sem garantia de funcionamento ininterrupto."] },
  { title: "Privacidade", paragraphs: ["O tratamento de dados pessoais segue nossa Política de Privacidade, que integra estes Termos e está disponível no link ao início e ao final desta página."] },
  { title: "Legislação Aplicável e Foro", paragraphs: ["Estes Termos são regidos pelas leis brasileiras. Fica preservado o foro legalmente competente, inclusive o domicílio do consumidor quando aplicável."] },
  { title: "Alterações destes Termos", paragraphs: ["Podemos atualizar estes Termos para refletir mudanças legais, operacionais ou nos serviços. A versão vigente será publicada nesta página com sua data de atualização."] },
  { title: "Contato", paragraphs: ["Dúvidas podem ser enviadas para contato@vital.net.br. Site oficial: www.vital.net.br."] },
];

export default function TermsPage() {
  return <LegalPage eyebrow="Termos e condições de uso" title="Termos de Uso" intro="Estes Termos estabelecem as condições de uso dos nossos canais de atendimento e dos serviços de corretagem de seguros." counterpartHref="/seguro-automovel/politica-de-privacidade/" counterpartLabel="Ver Política de Privacidade" sections={sections} />;
}
