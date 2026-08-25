import React, { useEffect, useState } from 'react';
import { Link } from '../compat/Link';
import { Helmet } from '../compat/Helmet';
import { Mail, Phone, ArrowUp, ShieldCheck } from '../compat/Icons';

const COMPANY = 'Vital Corretora de Seguros Ltda.';
const CNPJ = '66.767.206/0001-50';
const UPDATED = '10 de agosto de 2026';
const EMAIL = 'contato@vital.net.br';
const PHONE = '(11) 98338-5494';
const DPO = 'Felipe Vital';
const SITE = 'www.vital.net.br';
const LOGO = 'https://horizons-cdn.hostinger.com/88e7e666-518e-4f0d-8b58-409cfd1bc04a/e31a59ba78ba0d8896c514c809e40720.png';

const sections = [
    { id: 'aceitacao', n: '1', title: 'Aceitação dos Termos' },
    { id: 'sobre', n: '2', title: 'Sobre a Vital Corretora' },
    { id: 'servicos', n: '3', title: 'Serviços oferecidos' },
    { id: 'whatsapp', n: '4', title: 'Uso do Canal WhatsApp (API Oficial)' },
    { id: 'responsabilidades', n: '5', title: 'Responsabilidades do Usuário' },
    { id: 'uso-permitido', n: '6', title: 'Uso Permitido e Uso Proibido' },
    { id: 'propriedade', n: '7', title: 'Propriedade Intelectual' },
    { id: 'limitacao', n: '8', title: 'Limitação de Responsabilidade' },
    { id: 'disponibilidade', n: '9', title: 'Disponibilidade dos Canais' },
    { id: 'privacidade', n: '10', title: 'Privacidade' },
    { id: 'legislacao', n: '11', title: 'Legislação Aplicável e Foro' },
    { id: 'alteracoes', n: '12', title: 'Alterações destes Termos' },
    { id: 'contato', n: '13', title: 'Contato' },
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

export default function TermsOfUsePage() {
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
                <title>Termos de Uso | Vital Corretora de Seguros</title>
                <meta
                    name="description"
                    content="Termos de Uso da Vital Corretora de Seguros Ltda. (CNPJ 66.767.206/0001-50): condições de uso dos canais, serviços de corretagem, uso do WhatsApp (API oficial), responsabilidades do usuário, propriedade intelectual e foro."
                />
            </Helmet>

            <header className="border-b border-brand-800/40 bg-brand-900 text-white">
                <div className="mx-auto flex max-w-[72rem] flex-col gap-6 px-5 py-10 sm:px-8 sm:py-14">
                    <div className="flex items-center gap-4">
                        <span className="flex h-16 w-16 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm">
                            <img src={LOGO} alt="Vital Corretora de Seguros" className="h-full w-full object-contain" />
                        </span>
                        <span>
                            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-white/90">Termos e condições de uso</span>
                            <span className="block text-lg font-semibold text-white">Todo cuidado é Vital</span>
                        </span>
                    </div>
                    <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                        Termos de Uso
                    </h1>
                    <p className="max-w-2xl text-brand-100/90">
                        {COMPANY} — CNPJ {CNPJ}. Estes Termos estabelecem as condições de uso dos nossos canais de
                        atendimento e dos serviços de corretagem de seguros que prestamos. Ao utilizar qualquer um de
                        nossos canais, você concorda com o que está descrito abaixo.
                    </p>
                    <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-brand-100/80">
                        <span>Última atualização: {UPDATED}</span>
                        <span>Vigência: a partir da publicação</span>
                    </div>
                    <div className="pt-2">
                        <Link
                            to="/politica-de-privacidade"
                            className="inline-flex items-center gap-2 rounded-md border border-brand-700/60 bg-brand-800/40 px-4 py-2 text-sm text-brand-100 transition-colors hover:bg-brand-800/70 hover:text-white"
                        >
                            <ShieldCheck className="h-4 w-4" strokeWidth={1.6} />
                            Ver Política de Privacidade
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
                            Estes Termos de Uso (“Termos”) regulam o acesso e a utilização dos canais de atendimento, do
                            site e dos serviços prestados pela <strong>{COMPANY}</strong>, inscrita no CNPJ nº{' '}
                            {CNPJ}.
                        </p>
                        <p>
                            Ao navegar em nosso site, iniciar conversas em nossos canais de atendimento (incluindo
                            WhatsApp), solicitar cotações ou contratar seguros por nosso intermédio, você declara ter
                            lido, compreendido e aceitado integralmente estes Termos. Caso não concorde com qualquer
                            disposição, não utilize nossos canais e serviços.
                        </p>
                        <p>
                            Menores de 18 (dezoito) anos devem utilizar nossos canais somente com a assistência dos pais
                            ou responsáveis legais.
                        </p>
                    </Section>

                    <Section {...sections[1]}>
                        <p>
                            A <strong>{COMPANY}</strong> é uma corretora de seguros regularmente constituída, inscrita
                            no CNPJ nº {CNPJ}, devidamente registrada na SUSEP.
                        </p>
                        <p>
                            Atuamos como intermediários na contratação de seguros entre você (tomador/segurado) e as
                            seguradoras parceiras, prestando assessoria técnica, comercial e de pós-venda. Não somos uma
                            seguradora e não assumimos o risco coberto pelas apólices — o risco é sempre assumido pela
                            seguradora emitente do contrato.
                        </p>
                        <p>
                            Site oficial: {SITE} · E-mail de contato: {EMAIL} · Telefone: {PHONE}
                        </p>
                    </Section>

                    <Section {...sections[2]}>
                        <p>Por meio de nossos canais, oferecemos os seguintes serviços:</p>
                        <Table
                            head={['Serviço', 'Descrição']}
                            rows={[
                                ['Cotação e simulação', 'Análise de necessidades e comparação de coberturas e preços entre seguradoras parceiras.'],
                                ['Intermediação de seguros', 'Auxílio na contratação, emissão e renovação de apólices junto às seguradoras.'],
                                ['Endossos e alterações', 'Solicitação de alterações contratuais (incluição/exclusão de coberturas, beneficiários, etc.).'],
                                ['Acompanhamento de sinistros', 'Orientação e suporte na comunicação e acompanhamento de sinistros junto à seguradora.'],
                                ['Atendimento e suporte', 'Esclarecimento de dúvidas e suporte pelos canais de contato, inclusive WhatsApp.'],
                                ['Avisos e comunicações', 'Envio de lembretes de vencimento, renovação e informações sobre apólices.'],
                            ]}
                        />
                        <p>
                            A disponibilidade de coberturas, produtos e seguradoras pode variar conforme a análise de
                            risco realizada pela seguradora, que detém a decisão final sobre a aceitação ou recusa do
                            risco.
                        </p>
                    </Section>

                    <Section {...sections[3]}>
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
                                'O tráfego das mensagens ocorre na infraestrutura da Meta, sujeita aos termos de uso e à política de privacidade dessa plataforma, sobre os quais não temos controle.',
                            ].map((t) => (
                                <li key={t} className="flex gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                                    <span>{t}</span>
                                </li>
                            ))}
                        </ul>
                        <p>
                            Para deixar de receber mensagens, responda <strong>SAIR</strong> ou solicite o descadastro
                            pelo canal de contato. Não utilizamos números obtidos de listas de terceiros para abordagem
                            comercial não solicitada.
                        </p>
                    </Section>

                    <Section {...sections[4]}>
                        <p>Ao utilizar nossos canais e serviços, você se compromete a:</p>
                        <ul className="ml-1 space-y-2">
                            {[
                                'Fornecer informações verdadeiras, completas e atualizadas para cotação e contratação de seguros;',
                                'Manter a confidencialidade de dados de acesso que eventualmente lhe sejam credenciados;',
                                'Não utilizar nossos canais para finalidades ilícitas, fraudulentas ou contrárias a estes Termos;',
                                'Respeitar os profissionais de nossa equipe, abstendo-se de condutas abusivas, ofensivas ou intimidatórias;',
                                'Informar prontamente qualquer alteração nos dados cadastrais ou nas condições do bem segurado;',
                                'Arquivar e conservar os documentos relativos à apólice e aos sinistros por sua conta e responsabilidade.',
                            ].map((t) => (
                                <li key={t} className="flex gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                                    <span>{t}</span>
                                </li>
                            ))}
                        </ul>
                        <p>
                            Você é responsável pela veracidade e exatidão das informações fornecidas. Informações
                            incorretas ou omissas podem resultar na recusa de cobertura, perda de direitos ou
                            cancelamento da apólice pela seguradora.
                        </p>
                    </Section>

                    <Section {...sections[5]}>
                        <p>É permitido utilizar nossos canais para:</p>
                        <ul className="ml-1 space-y-2">
                            {[
                                'Solicitar cotações, simulações e informações sobre seguros;',
                                'Contratar, renovar e endossar apólices;',
                                'Reportar sinistros e solicitar orientação;',
                                'Esclarecer dúvidas e exercer seus direitos como cliente.',
                            ].map((t) => (
                                <li key={t} className="flex gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                                    <span>{t}</span>
                                </li>
                            ))}
                        </ul>
                        <p>É expressamente proibido:</p>
                        <Table
                            head={['Conduta proibida', 'Motivo']}
                            rows={[
                                ['Utilizar canais para práticas fraudulentas ou falsificação de dados', 'Viola a lei e compromete a contratação do seguro'],
                                ['Praticar atos que violem direitos de terceiros ou de propriedade intelectual', 'Afronta a legislação civil e penal'],
                                ['Tentar acessar áreas restritas sem autorização', 'Compromete a segurança da informação'],
                                ['Enviar conteúdo ofensivo, difamatório ou ilícito', 'Desrespeito à equipe e a terceiros'],
                                ['Utilizar automações, bots ou scripts para manipular nossos canais', 'Distorce o atendimento e a integridade dos sistemas'],
                                ['Replicar, copiar ou explorar comercialmente nosso conteúdo sem autorização', 'Viola a propriedade intelectual (seção 7)'],
                            ]}
                        />
                        <p>
                            O descumprimento destas regras pode resultar no bloqueio do acesso aos nossos canais e, se
                            cabível, na adoção das medidas legais pertinentes.
                        </p>
                    </Section>

                    <Section {...sections[6]}>
                        <p>
                            Todo o conteúdo disponibilizado em nossos canais — incluindo textos, logotipos, marcas,
                            layouts, imagens, formulários e materiais informativos — é de propriedade da{' '}
                            <strong>{COMPANY}</strong> ou de seus parceiros e está protegido pela legislação brasileira
                            sobre direitos autorais e propriedade industrial.
                        </p>
                        <p>
                            É vedada a reprodução, distribuição, modificação, comunicação pública ou exploração
                            comercial de qualquer conteúdo sem autorização prévia e expressa por escrito.
                        </p>
                        <p>
                            Marcas, nomes e materiais de terceiros (incluindo seguradoras parceiras) eventualmente
                            mencionados pertencem a seus respectivos titulares e são utilizados apenas para fins
                            informativos e de identificação.
                        </p>
                    </Section>

                    <Section {...sections[7]}>
                        <p>
                            Na medida permitida pela legislação, a <strong>{COMPANY}</strong> atua como intermediadora e
                            não assume o risco segurado, que é de responsabilidade exclusiva da seguradora emitente da
                            apólice. Portanto:
                        </p>
                        <ul className="ml-1 space-y-2">
                            {[
                                'Não respondemos por decisões de aceitação, recusa, franquias, limites de cobertura ou pagamento de sinistros, que cabem à seguradora;',
                                'Não nos responsabilizamos por interrupções, falhas técnicas ou indisponibilidade temporária de nossos canais decorrentes de fatores externos;',
                                'Não garantimos a exatidão absoluta das informações de cotação, sujeitas a alterações pelas seguradoras até a efetiva contratação;',
                                'Não respondemos por danos indiretos, lucros cessantes ou perda de oportunidades decorrentes do uso dos canais.',
                            ].map((t) => (
                                <li key={t} className="flex gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                                    <span>{t}</span>
                                </li>
                            ))}
                        </ul>
                        <p>
                            Empenhamo-nos em prestar um serviço diligente, transparente e em conformidade com as normas
                            da SUSEP e do Código de Defesa do Consumidor.
                        </p>
                    </Section>

                    <Section {...sections[8]}>
                        <p>
                            Buscamos manter nossos canais disponíveis de forma contínua, porém a disponibilidade pode ser
                            afetada por manutenções programadas, atualizações, falhas de infraestrutura, eventos de
                            terceiros (como indisponibilidade da plataforma da Meta) ou casos fortuitos e de força maior.
                        </p>
                        <p>
                            Não nos responsabilizamos por indisponibilidades temporárias decorrentes de fatores fora de
                          nosso controle. Em caso de indisponibilidade prolongada, comunicaremos você pelos canais
                            alternativos sempre que possível.
                        </p>
                        <p>
                            Horário de atendimento: segunda a sexta, das 9h às 18h.
                        </p>
                    </Section>

                    <Section {...sections[9]}>
                        <p>
                            O tratamento de dados pessoais associado ao uso de nossos canais e serviços é regido por
                          nossa <strong>Política de Privacidade</strong>, disponível{' '}
                            <Link to="/politica-de-privacidade" className="font-medium text-brand-700 underline decoration-brand-300 underline-offset-2 hover:text-brand-900">
                                aqui
                            </Link>
                            . Recomendamos a leitura atenta desse documento, que detalha quais dados tratamos, as
                            finalidades, as bases legais e os seus direitos como titular.
                        </p>
                        <p>
                            Ao aceitar estes Termos, você também concorda com as condições descritas na Política de
                            Privacidade.
                        </p>
                    </Section>

                    <Section {...sections[10]}>
                        <p>
                            Estes Termos são regidos pelas leis da República Federativa do Brasil, em especial pela Lei
                            nº 8.078/1990 (Código de Defesa do Consumidor), pelo Decreto-Lei nº 73/1966, pelas
                            resoluções da SUSEP e pela legislação civil aplicável.
                        </p>
                        <p>
                            Fica eleito o foro do domicílio do consumidor como competente para dirimir quaisquer controvérsias decorrentes destes Termos, com renúncia
                          expressa a qualquer outro, por mais privilegiado que seja.
                        </p>
                    </Section>

                    <Section {...sections[11]}>
                        <p>
                            Reservamo-nos o direito de atualizar ou modificar estes Termos a qualquer tempo, para
                            refletir mudanças legais, regulatórias, em nossos serviços ou em nossos canais. A versão
                            vigente estará sempre disponível em nosso site, com a data da última atualização no topo
                            desta página.
                        </p>
                        <p>
                            Quando as alterações forem significativas, comunicaremos você pelos canais de contato
                            cadastrados. O uso continuado de nossos canais após a divulgação das alterações implica a
                            aceitação dos Termos revisados.
                        </p>
                    </Section>

                    <Section {...sections[12]}>
                        <p>
                            Para esclarecer dúvidas sobre estes Termos ou sobre nossos serviços, entre em contato pelos
                            canais abaixo:
                        </p>
                        <div className="grid gap-4 rounded-md border border-brand-200 bg-brand-50/60 p-5 sm:grid-cols-2">
                            <div>
                                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-brand-600">E-mail</p>
                                <p className="mt-1 text-slate-800">{EMAIL}</p>
                            </div>
                            <div>
                                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-brand-600">Telefone / WhatsApp</p>
                                <p className="mt-1 text-slate-800">{PHONE}</p>
                            </div>
                            <div>
                                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-brand-600">Encarregado de Dados (DPO)</p>
                                <p className="mt-1 text-slate-800">{DPO}</p>
                            </div>
                            <div>
                                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-brand-600">Horário de atendimento</p>
                                <p className="mt-1 text-slate-800">Segunda a sexta, das 9h às 18h</p>
                            </div>
                        </div>
                        <p>
                            Para questões relativas a dados pessoais, consulte nosso Encarregado de Proteção de Dados
                            (DPO) pelos canais indicados na{' '}
                            <Link to="/politica-de-privacidade" className="font-medium text-brand-700 underline decoration-brand-300 underline-offset-2 hover:text-brand-900">
                                Política de Privacidade
                            </Link>.
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
                        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/80">Documentos</p>
                        <p>
                            <Link to="/politica-de-privacidade" className="text-brand-100 underline decoration-brand-700 underline-offset-2 hover:text-white">
                                Política de Privacidade
                            </Link>
                        </p>
                        <p>Horário de atendimento: segunda a sexta, 9h às 18h</p>
                    </div>
                </div>
                <div className="border-t border-white/20 px-5 py-5 text-center text-xs text-white/80 sm:px-8">
                    © {new Date().getFullYear()} {COMPANY} — Todos os direitos reservados.
                </div>
            </footer>

            {showTop && (
                <a
                    href="#aceitacao"
                    className="fixed bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full bg-brand-900 text-white shadow-lg shadow-brand-900/20 transition-transform active:scale-95"
                    aria-label="Voltar ao topo"
                >
                    <ArrowUp className="h-5 w-5" strokeWidth={1.8} />
                </a>
            )}
        </div>
    );
}
