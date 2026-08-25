import React, { useEffect, useState } from 'react';
import { Link } from '../compat/Link';
import { Helmet } from '../compat/Helmet';
import { Mail, Phone, ArrowUp, FileText } from '../compat/Icons';

const COMPANY = 'Vital Corretora de Seguros Ltda.';
const CNPJ = '66.767.206/0001-50';
const UPDATED = '10 de agosto de 2026';
const EMAIL = 'contato@vital.net.br';
const PHONE = '(11) 98338-5494';
const DPO = 'Felipe Vital';
const SITE = 'www.vital.net.br';
const LOGO = 'https://horizons-cdn.hostinger.com/88e7e666-518e-4f0d-8b58-409cfd1bc04a/e31a59ba78ba0d8896c514c809e40720.png';

const sections = [
    { id: 'quem-somos', n: '1', title: 'Quem somos' },
    { id: 'aplicacao', n: '2', title: 'A quem esta Política se aplica' },
    { id: 'dados', n: '3', title: 'Quais dados tratamos' },
    { id: 'finalidades', n: '4', title: 'Por que tratamos seus dados' },
    { id: 'whatsapp', n: '5', title: 'Uso da API oficial do WhatsApp' },
    { id: 'compartilhamento', n: '6', title: 'Compartilhamento de dados' },
    { id: 'transferencia', n: '7', title: 'Transferência internacional de dados' },
    { id: 'retencao', n: '8', title: 'Por quanto tempo guardamos seus dados' },
    { id: 'direitos', n: '9', title: 'Seus direitos como titular' },
    { id: 'seguranca', n: '10', title: 'Segurança da informação' },
    { id: 'cookies', n: '11', title: 'Cookies e tecnologias de rastreamento' },
    { id: 'alteracoes', n: '12', title: 'Alterações desta Política' },
    { id: 'contato', n: '13', title: 'Contato e Encarregado de Dados (DPO)' },
];

function Section({ id, n, title, children }) {
    return (
        <section id={id} className="scroll-mt-28 border-t border-slate-200 pt-10">
            <h2 className="flex items-baseline gap-3 font-display text-2xl font-semibold tracking-tight text-brand-900 sm:text-3xl">
                <span className="font-mono text-base font-normal text-brand-500">{n}</span>
                {title}
            </h2>
            <div className="mt-4 space-y-4 text-[0.975rem] leading-relaxed text-slate-700">{children}</div>
        </section>
    );
}

function Table({ head, rows }) {
    return (
        <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                <thead>
                    <tr className="bg-brand-900 text-white">
                        {head.map((h) => (
                            <th key={h} className="px-4 py-3 font-semibold uppercase tracking-wide text-[0.72rem]">
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((r, i) => (
                        <tr key={i} className={i % 2 ? 'bg-white' : 'bg-slate-50/80'}>
                            {r.map((c, j) => (
                                <td key={j} className="border-b border-slate-200 px-4 py-3 align-top text-slate-700">
                                    {c}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default function PrivacyPolicyPage() {
    const [active, setActive] = useState(sections[0].id);
    const [showTop, setShowTop] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActive(e.target.id);
                });
            },
            { rootMargin: '-96px 0px -70% 0px' }
        );
        sections.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) obs.observe(el);
        });
        const onScroll = () => setShowTop(window.scrollY > 700);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            obs.disconnect();
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <div className="min-h-screen bg-paper">
            <Helmet>
                <title>Política de Privacidade | Vital Corretora de Seguros</title>
                <meta
                    name="description"
                    content="Política de Privacidade da Vital Corretora de Seguros Ltda. (CNPJ 66.767.206/0001-50): quais dados tratamos, finalidades, bases legais, uso da API oficial do WhatsApp, seus direitos como titular e contato do DPO."
                />
            </Helmet>

            <header className="border-b border-brand-800/40 bg-brand-900 text-white">
                <div className="mx-auto flex max-w-[72rem] flex-col gap-6 px-5 py-10 sm:px-8 sm:py-14">
                    <div className="flex items-center gap-4">
                        <span className="flex h-16 w-16 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm">
                            <img src={LOGO} alt="Vital Corretora de Seguros" className="h-full w-full object-contain" />
                        </span>
                        <span>
                            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-white/90">Privacidade e proteção de dados</span>
                            <span className="block text-lg font-semibold text-white">Todo cuidado é Vital</span>
                        </span>
                    </div>
                    <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                        Política de Privacidade
                    </h1>
                    <p className="max-w-2xl text-brand-100/90">
                        {COMPANY} — CNPJ {CNPJ}. Este documento explica, de forma clara, como coletamos, usamos,
                        compartilhamos e protegemos seus dados pessoais, em conformidade com a Lei nº 13.709/2018 (LGPD).
                    </p>
                    <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-brand-100/80">
                        <span>Última atualização: {UPDATED}</span>
                        <span>Vigência: a partir da publicação</span>
                    </div>
                    <div className="pt-2">
                        <Link
                            to="/termos-de-uso"
                            className="inline-flex items-center gap-2 rounded-md border border-brand-700/60 bg-brand-800/40 px-4 py-2 text-sm text-brand-100 transition-colors hover:bg-brand-800/70 hover:text-white"
                        >
                            <FileText className="h-4 w-4" strokeWidth={1.6} />
                            Ver Termos de Uso
                        </Link>
                    </div>
                </div>
            </header>

            <div className="mx-auto flex max-w-[72rem] flex-col gap-10 px-5 py-12 sm:px-8 lg:flex-row lg:gap-14">
                <aside className="lg:w-72 lg:shrink-0">
                    <nav className="lg:sticky lg:top-8 rounded-md border border-slate-200 bg-slate-50/70 p-5">
                        <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
                            Sumário
                        </p>
                        <ol className="space-y-1">
                            {sections.map((s) => (
                                <li key={s.id}>
                                    <a
                                        href={`#${s.id}`}
                                        className={`flex gap-2 rounded px-2 py-1.5 text-sm transition-colors ${
                                            active === s.id
                                                ? 'bg-brand-900 text-white'
                                                : 'text-slate-600 hover:bg-brand-50 hover:text-brand-800'
                                        }`}
                                    >
                                        <span className="font-mono text-xs opacity-70">{s.n}</span>
                                        <span>{s.title}</span>
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </nav>
                </aside>

                <main className="min-w-0 flex-1 space-y-10">
                    <Section {...sections[0]}>
                        <p>
                            A <strong>{COMPANY}</strong>, inscrita no CNPJ nº {CNPJ}, é uma corretora de seguros que atua na intermediação de
                            seguros e na prestação de serviços de assessoria e atendimento a clientes e interessados.
                        </p>
                        <p>
                            Para as finalidades desta Política, atuamos como <strong>controladora</strong> dos dados
                            pessoais que tratamos e, em determinadas situações, como <strong>operadora</strong>, quando
                            tratamos dados por conta e ordem de seguradoras parceiras.
                        </p>
                        <p>
                            Site oficial: {SITE} · Canal de privacidade: {EMAIL}
                        </p>
                    </Section>

                    <Section {...sections[1]}>
                        <p>Esta Política se aplica a todas as pessoas que se relacionam conosco, incluindo:</p>
                        <ul className="ml-1 space-y-2">
                            {[
                                'Clientes, segurados, beneficiários e seus representantes legais;',
                                'Interessados que solicitam cotações, simulações ou informações;',
                                'Visitantes do nosso site, landing pages e redes sociais;',
                                'Pessoas que nos contatam por WhatsApp, telefone, e-mail ou formulários;',
                                'Parceiros comerciais, prestadores de serviço e candidatos a vagas.',
                            ].map((t) => (
                                <li key={t} className="flex gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                                    <span>{t}</span>
                                </li>
                            ))}
                        </ul>
                        <p>
                            Esta Política não se aplica a sites, aplicativos ou serviços de terceiros, que possuem
                            políticas próprias de privacidade.
                        </p>
                    </Section>

                    <Section {...sections[2]}>
                        <p>
                            Tratamos apenas os dados necessários para atender você e cumprir obrigações legais e
                            contratuais. As categorias de dados são:
                        </p>
                        <Table
                            head={['Categoria', 'Exemplos de dados', 'Origem']}
                            rows={[
                                ['Dados cadastrais', 'Nome completo, CPF/CNPJ, RG, data de nascimento, estado civil, profissão', 'Fornecidos por você'],
                                ['Dados de contato', 'Telefone, celular/WhatsApp, e-mail, endereço residencial ou comercial', 'Fornecidos por você'],
                                ['Dados contratuais', 'Apólices, coberturas, vigências, prêmios, sinistros, histórico de atendimento', 'Você e seguradoras parceiras'],
                                ['Dados de risco do bem', 'Dados de veículo (placa, chassi, modelo), imóvel, equipamentos, atividade empresarial', 'Você e bases públicas'],
                                ['Dados financeiros', 'Dados de pagamento, forma de cobrança, dados bancários para reembolso', 'Você e seguradoras'],
                                ['Dados sensíveis (quando indispensável)', 'Informações de saúde para seguros de vida, saúde e afins', 'Você, com consentimento específico'],
                                ['Dados de navegação', 'Endereço IP, dispositivo, navegador, páginas visitadas, cookies', 'Coleta automática'],
                                ['Registros de comunicação', 'Mensagens de WhatsApp, e-mails, gravações de chamadas quando informado', 'Interação com nossos canais'],
                            ]}
                        />
                        <p className="rounded-md border-l-2 border-brand-500 bg-brand-50/70 px-4 py-3 text-sm text-brand-900">
                            Não coletamos intencionalmente dados de crianças e adolescentes sem o consentimento
                            específico de pelo menos um dos pais ou do responsável legal.
                        </p>
                    </Section>

                    <Section {...sections[3]}>
                        <p>
                            Todo tratamento é feito com finalidade determinada e amparado em uma base legal prevista na
                            LGPD, conforme o quadro abaixo:
                        </p>
                        <Table
                            head={['Finalidade', 'Base legal (LGPD)']}
                            rows={[
                                ['Atender solicitações de cotação, simulação e informações', 'Procedimentos preliminares de contrato (art. 7º, V)'],
                                ['Intermediar a contratação, renovação e endosso de seguros', 'Execução de contrato (art. 7º, V)'],
                                ['Assessorar você na abertura e acompanhamento de sinistros', 'Execução de contrato (art. 7º, V)'],
                                ['Prestar atendimento e suporte pelos nossos canais, inclusive WhatsApp', 'Execução de contrato e legítimo interesse (art. 7º, V e IX)'],
                                ['Cumprir obrigações legais, regulatórias e da SUSEP', 'Obrigação legal ou regulatória (art. 7º, II)'],
                                ['Prevenir fraudes e garantir a segurança do titular', 'Prevenção à fraude e segurança (art. 11, II, "g") e legítimo interesse'],
                                ['Enviar comunicações sobre vencimentos, avisos e novidades', 'Legítimo interesse, com opção de descadastro (art. 7º, IX)'],
                                ['Enviar ofertas e comunicações de marketing', 'Consentimento (art. 7º, I)'],
                                ['Tratar dados de saúde para seguros de pessoas', 'Consentimento específico e destacado (art. 11, I)'],
                                ['Exercer direitos em processos judiciais, administrativos ou arbitrais', 'Exercício regular de direitos (art. 7º, VI)'],
                            ]}
                        />
                        <p>
                            Quando o tratamento depender de consentimento, você pode revogá-lo a qualquer momento pelos
                            canais indicados na seção 13, sem prejuízo dos tratamentos já realizados.
                        </p>
                    </Section>

                    <Section {...sections[4]}>
                        <p>
                            Utilizamos a <strong>API oficial do WhatsApp Business</strong>, disponibilizada pela Meta
                            Platforms, para atendimento, envio de avisos e continuidade de negociações. Ao iniciar uma
                            conversa com nosso número oficial {PHONE}, você concorda que:
                        </p>
                        <ul className="ml-1 space-y-2">
                            {[
                                'As mensagens trocadas podem ser armazenadas em nossa plataforma de atendimento para histórico, qualidade e comprovação de tratativas;',
                                'Podemos enviar mensagens de utilidade (avisos de vencimento, renovação, sinistro e documentos) relacionadas ao seu contrato;',
                                'Mensagens de marketing são enviadas somente após o seu aceite (opt-in) e podem ser interrompidas a qualquer momento;',
                                'O envio de dados sensíveis por WhatsApp deve ser limitado ao estritamente necessário e solicitado por nossa equipe;',
                                'O tráfego das mensagens ocorre na infraestrutura da Meta, sujeita às políticas de privacidade e segurança dessa plataforma.',
                            ].map((t) => (
                                <li key={t} className="flex gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                                    <span>{t}</span>
                                </li>
                            ))}
                        </ul>
                        <p>
                            Para deixar de receber mensagens, responda <strong>SAIR</strong> ou solicite o descadastro
                            pelo canal de privacidade. Não utilizamos números obtidos de listas de terceiros para
                            abordagem comercial não solicitada.
                        </p>
                    </Section>

                    <Section {...sections[5]}>
                        <p>Podemos compartilhar seus dados, sempre no mínimo necessário, com:</p>
                        <Table
                            head={['Com quem', 'Para quê']}
                            rows={[
                                ['Seguradoras e resseguradoras', 'Cotação, emissão, renovação de apólices e regulação de sinistros'],
                                ['Plataformas de cotação e multicálculo', 'Comparação de coberturas e preços entre seguradoras'],
                                ['Provedores de tecnologia e nuvem', 'Hospedagem, CRM, plataforma de atendimento e envio de mensagens'],
                                ['Meios de pagamento e instituições financeiras', 'Cobrança de prêmios, parcelamento e reembolsos'],
                                ['Prestadores de assistência e oficinas credenciadas', 'Execução de serviços vinculados às coberturas'],
                                ['Órgãos reguladores e autoridades', 'SUSEP, ANPD, Poder Judiciário e demais autoridades competentes'],
                                ['Assessoria jurídica, contábil e auditoria', 'Cumprimento de obrigações legais e defesa de direitos'],
                            ]}
                        />
                        <p>
                            Não vendemos seus dados pessoais. Exigimos de nossos parceiros e fornecedores compromissos
                            contratuais de confidencialidade e de conformidade com a LGPD.
                        </p>
                    </Section>

                    <Section {...sections[6]}>
                        <p>
                            Alguns de nossos fornecedores de tecnologia (por exemplo, serviços de nuvem, e-mail e
                            comunicação) podem armazenar ou processar dados fora do Brasil. Nesses casos, adotamos
                            salvaguardas previstas nos arts. 33 a 36 da LGPD, como cláusulas contratuais específicas,
                            avaliação do nível de proteção do país de destino e obrigações de segurança equivalentes às
                            aplicadas no Brasil.
                        </p>
                        <p>
                            Você pode solicitar informações sobre transferências internacionais relacionadas aos seus
                            dados pelo canal de privacidade indicado na seção 13.
                        </p>
                    </Section>

                    <Section {...sections[7]}>
                        <p>
                            Mantemos os dados apenas pelo tempo necessário às finalidades informadas e ao cumprimento de
                            obrigações legais:
                        </p>
                        <Table
                            head={['Tipo de registro', 'Prazo de guarda']}
                            rows={[
                                ['Cotações não convertidas em contrato', 'Até 12 meses'],
                                ['Dados de clientes e apólices', 'Durante a relação e por até 5 anos após o término, conforme prazos prescricionais'],
                                ['Documentos fiscais e contábeis', 'Pelo prazo exigido pela legislação fiscal (mínimo 5 anos)'],
                                ['Registros de acesso a aplicações de internet', '6 meses (Marco Civil da Internet, art. 15)'],
                                ['Históricos de atendimento e WhatsApp', 'Até 24 meses'],
                                ['Dados tratados com base em consentimento', 'Até a revogação do consentimento, salvo outra base legal aplicável'],
                            ]}
                        />
                        <p>
                            Encerrados os prazos, os dados são eliminados de forma segura ou anonimizados, quando a
                            retenção anonimizada for útil para fins estatísticos.
                        </p>
                    </Section>

                    <Section {...sections[8]}>
                        <p>Nos termos do art. 18 da LGPD, você pode, a qualquer momento, solicitar:</p>
                        <div className="grid gap-3 sm:grid-cols-2">
                            {[
                                ['Confirmação e acesso', 'Saber se tratamos seus dados e obter acesso a eles.'],
                                ['Correção', 'Atualizar dados incompletos, inexatos ou desatualizados.'],
                                ['Anonimização ou eliminação', 'Para dados desnecessários, excessivos ou tratados em desconformidade.'],
                                ['Portabilidade', 'Transferência a outro fornecedor, conforme regulamentação da ANPD.'],
                                ['Informação sobre compartilhamento', 'Saber com quais entidades públicas e privadas compartilhamos dados.'],
                                ['Revogação do consentimento', 'Retirar o consentimento e solicitar a eliminação dos dados relacionados.'],
                                ['Oposição', 'Opor-se a tratamento realizado com fundamento em outra base legal.'],
                                ['Revisão de decisões automatizadas', 'Solicitar revisão de decisões tomadas apenas por meios automatizados.'],
                            ].map(([t, d]) => (
                                <div key={t} className="rounded-md border border-slate-200 bg-slate-50/70 p-4">
                                    <p className="font-semibold text-brand-900">{t}</p>
                                    <p className="mt-1 text-sm text-slate-600">{d}</p>
                                </div>
                            ))}
                        </div>
                        <p>
                            Responderemos às solicitações no prazo legal. Podemos solicitar documentos para confirmar sua
                            identidade e evitar a divulgação indevida de dados a terceiros. Alguns pedidos podem ser
                            recusados quando houver obrigação legal ou regulatória de manter os dados.
                        </p>
                    </Section>

                    <Section {...sections[9]}>
                        <p>
                            Adotamos medidas técnicas e administrativas para proteger os dados pessoais contra acessos não
                            autorizados, perda, alteração ou divulgação indevida, entre elas: controle de acesso por
                            perfil, autenticação de usuários, criptografia em trânsito, backups, registro de atividades,
                            políticas internas de confidencialidade e treinamento periódico da equipe.
                        </p>
                        <p>
                            Nenhum sistema é totalmente imune a incidentes. Caso ocorra um incidente de segurança com
                            risco relevante aos titulares, comunicaremos a ANPD e os titulares afetados, conforme o art.
                            48 da LGPD.
                        </p>
                    </Section>

                    <Section {...sections[10]}>
                        <p>Nosso site pode utilizar cookies e tecnologias semelhantes para:</p>
                        <Table
                            head={['Tipo de cookie', 'Função']}
                            rows={[
                                ['Necessários', 'Garantir o funcionamento básico do site, segurança e formulários.'],
                                ['Desempenho e análise', 'Medir audiência e entender como as páginas são utilizadas.'],
                                ['Funcionalidade', 'Lembrar preferências, como idioma e dados de formulário.'],
                                ['Publicidade', 'Mensurar campanhas e exibir anúncios mais relevantes (somente com consentimento).'],
                            ]}
                        />
                        <p>
                            Você pode gerenciar cookies no banner de consentimento do site ou nas configurações do seu
                            navegador. A desativação de determinados cookies pode afetar funcionalidades das páginas.
                        </p>
                    </Section>

                    <Section {...sections[11]}>
                        <p>
                            Esta Política pode ser atualizada para refletir mudanças legais, regulatórias ou em nossos
                            processos. A versão vigente estará sempre disponível em nosso site, com a data da última
                            atualização no topo desta página.
                        </p>
                        <p>
                            Quando as alterações forem significativas, comunicaremos você pelos canais de contato
                            cadastrados. Recomendamos a leitura periódica deste documento.
                        </p>
                    </Section>

                    <Section {...sections[12]}>
                        <p>
                            Para exercer seus direitos, esclarecer dúvidas ou registrar reclamações sobre o tratamento de
                            dados pessoais, fale com nosso Encarregado de Proteção de Dados (DPO):
                        </p>
                        <div className="grid gap-4 rounded-md border border-brand-200 bg-brand-50/60 p-5 sm:grid-cols-2">
                            <div>
                                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-brand-600">Encarregado (DPO)</p>
                                <p className="mt-1 text-slate-800">{DPO}</p>
                            </div>
                            <div>
                                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-brand-600">E-mail</p>
                                <p className="mt-1 text-slate-800">{EMAIL}</p>
                            </div>
                            <div>
                                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-brand-600">Telefone / WhatsApp</p>
                                <p className="mt-1 text-slate-800">{PHONE}</p>
                            </div>
                        </div>
                        <p>
                            Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD)
                            caso entenda que seus direitos não foram atendidos.
                        </p>
                    </Section>
                </main>
            </div>

            <footer className="border-t border-slate-200 bg-brand-900 text-brand-100">
                <div className="mx-auto grid max-w-[72rem] gap-8 px-5 py-12 sm:px-8 md:grid-cols-3">
                    <div>
                        <p className="font-display text-lg font-semibold text-white">{COMPANY}</p>
                        <p className="mt-2 text-sm text-white/90">CNPJ {CNPJ}</p>
                        <p className="mt-1 text-sm text-white/90">Todo cuidado é Vital</p>
                    </div>
                    <div className="space-y-2 text-sm">
                        <p className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" strokeWidth={1.6} />{PHONE}</p>
                        <p className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" strokeWidth={1.6} />{EMAIL}</p>
                    </div>
                    <div className="space-y-2 text-sm">
                        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/80">Privacidade</p>
                        <p>Encarregado de Dados (DPO): {DPO} — {EMAIL}</p>
                        <p>
                            <Link to="/termos-de-uso" className="text-brand-100 underline decoration-brand-700 underline-offset-2 hover:text-white">
                                Termos de Uso
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="border-t border-white/20 px-5 py-5 text-center text-xs text-white/80 sm:px-8">
                    © {new Date().getFullYear()} {COMPANY} — Todos os direitos reservados.
                </div>
            </footer>

            {showTop && (
                <a
                    href="#quem-somos"
                    className="fixed bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full bg-brand-900 text-white shadow-lg shadow-brand-900/20 transition-transform active:scale-95"
                    aria-label="Voltar ao topo"
                >
                    <ArrowUp className="h-5 w-5" strokeWidth={1.8} />
                </a>
            )}
        </div>
    );
}
