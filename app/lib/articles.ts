export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  city?: string;
  keyword: string;
  publishedAt: string;
};

const topics: Array<[string, string, string?, string?]> = [
  ["Seguro auto: guia completo para contratar sem erro", "Guias", undefined, "seguro auto"],
  ["Como funciona o seguro de automóvel", "Guias", undefined, "como funciona seguro auto"],
  ["O que o seguro auto cobre e o que normalmente não cobre", "Coberturas", undefined, "coberturas seguro auto"],
  ["Seguro compreensivo: entenda colisão, roubo, furto e incêndio", "Coberturas", undefined, "seguro compreensivo"],
  ["Danos materiais a terceiros: como escolher o limite", "Coberturas", undefined, "danos materiais a terceiros"],
  ["Danos corporais a terceiros no seguro auto", "Coberturas", undefined, "danos corporais a terceiros"],
  ["Danos morais no seguro auto: quando essa cobertura pode ajudar", "Coberturas", undefined, "danos morais seguro auto"],
  ["Assistência 24 horas: o que comparar antes de contratar", "Coberturas", undefined, "assistência 24 horas"],
  ["Guincho ilimitado existe? Entenda os limites de quilometragem", "Coberturas", undefined, "guincho seguro auto"],
  ["Cobertura de vidros, faróis e retrovisores vale a pena?", "Coberturas", undefined, "cobertura de vidros"],
  ["Carro reserva: regras, prazos e situações cobertas", "Coberturas", undefined, "carro reserva"],
  ["Seguro para acessórios, som e equipamentos do veículo", "Coberturas", undefined, "seguro acessórios automotivos"],
  ["Alagamento e enchente: o seguro auto cobre?", "Coberturas", undefined, "seguro auto alagamento"],
  ["Queda de árvore e granizo: quando o seguro cobre", "Coberturas", undefined, "seguro auto granizo"],
  ["Incêndio do veículo: como funciona a indenização", "Coberturas", undefined, "seguro auto incêndio"],
  ["Roubo e furto: diferenças importantes para o seguro", "Coberturas", undefined, "seguro roubo e furto"],
  ["Perda total: quando o veículo é considerado indenização integral", "Sinistros", undefined, "perda total seguro auto"],
  ["Tabela FIPE e valor de mercado referenciado no seguro", "Contratação", undefined, "tabela FIPE seguro"],
  ["Valor determinado no seguro auto: quando considerar", "Contratação", undefined, "valor determinado seguro auto"],
  ["Franquia normal, reduzida e majorada: qual escolher", "Franquia", undefined, "tipos de franquia seguro"],
  ["Quando não é necessário pagar franquia no seguro auto", "Franquia", undefined, "quando não paga franquia"],
  ["Como calcular se vale a pena acionar o seguro", "Sinistros", undefined, "acionar seguro ou pagar reparo"],
  ["Bônus do seguro auto: classes e regras básicas", "Contratação", undefined, "classe de bônus seguro"],
  ["Seguro novo antes do vencimento: como funciona a renovação", "Contratação", undefined, "renovação seguro auto"],
  ["Por que o preço do seguro muda de uma seguradora para outra", "Preço", undefined, "preço seguro auto"],
  ["O que influencia o valor do seguro do carro", "Preço", undefined, "valor do seguro auto"],
  ["Seguro auto barato: como economizar sem ficar desprotegido", "Preço", undefined, "seguro auto barato"],
  ["Cotação de seguro auto: quais dados são necessários", "Contratação", undefined, "cotação seguro auto"],
  ["Seguro para carro zero-quilômetro: quando contratar", "Perfis", undefined, "seguro carro zero"],
  ["Seguro para carro usado: cuidados na contratação", "Perfis", undefined, "seguro carro usado"],
  ["Seguro para carro financiado: o que acontece em um sinistro", "Perfis", undefined, "seguro carro financiado"],
  ["Seguro para veículo alienado ou com leasing", "Perfis", undefined, "seguro veículo alienado"],
  ["Seguro para motorista jovem: como buscar melhor custo-benefício", "Perfis", undefined, "seguro motorista jovem"],
  ["Seguro auto para idosos: o que avaliar", "Perfis", undefined, "seguro auto idosos"],
  ["Seguro para quem trabalha com o carro", "Perfis", undefined, "seguro uso profissional"],
  ["Seguro para veículo de empresa e frota pequena", "Perfis", undefined, "seguro veículo empresa"],
  ["Seguro para carro de aplicativo: diferenças na contratação", "Perfis", undefined, "seguro carro aplicativo"],
  ["Seguro para picape: coberturas importantes", "Perfis", undefined, "seguro picape"],
  ["Seguro para SUV: como dimensionar as coberturas", "Perfis", undefined, "seguro SUV"],
  ["Seguro para carro elétrico e híbrido", "Perfis", undefined, "seguro carro elétrico"],
  ["Seguro para veículos modificados ou rebaixados", "Perfis", undefined, "seguro carro modificado"],
  ["Seguro auto mensal ou anual: entenda as diferenças", "Contratação", undefined, "seguro auto mensal"],
  ["Proteção veicular e seguro auto não são a mesma coisa", "Contratação", undefined, "seguro versus proteção veicular"],
  ["Corretora ou contratação direta: qual a diferença no seguro", "Contratação", undefined, "corretora seguro auto"],
  ["Como comparar propostas de seguro auto corretamente", "Contratação", undefined, "comparar seguro auto"],
  ["Apólice, proposta e endosso: entenda os documentos", "Contratação", undefined, "apólice proposta endosso"],
  ["Perfil de risco: por que é importante responder corretamente", "Contratação", undefined, "perfil de risco seguro"],
  ["Condutor principal e condutores eventuais: como declarar", "Contratação", undefined, "condutor principal seguro"],
  ["Mudança de endereço pode alterar o seguro do carro?", "Contratação", undefined, "mudança endereço seguro auto"],
  ["Troca de veículo durante a vigência do seguro", "Contratação", undefined, "troca veículo endosso"],
  ["Venda do carro: como cancelar ou transferir o seguro", "Contratação", undefined, "venda carro seguro"],
  ["Seguro auto recusado: motivos e alternativas", "Contratação", undefined, "seguro auto recusado"],
  ["Vistoria prévia: quando é exigida e como funciona", "Contratação", undefined, "vistoria prévia seguro"],
  ["Rastreador reduz o preço do seguro?", "Preço", undefined, "rastreador seguro auto"],
  ["Garagem influencia o valor do seguro?", "Preço", undefined, "garagem valor seguro"],
  ["CEP de pernoite: por que ele interfere na cotação", "Preço", undefined, "CEP pernoite seguro"],
  ["Seguro auto para viagens: o que revisar antes de pegar a estrada", "Viagem", undefined, "seguro auto viagem"],
  ["Pane na estrada: como usar a assistência do seguro", "Viagem", undefined, "pane assistência seguro"],
  ["Acidente fora da cidade: como acionar a seguradora", "Sinistros", undefined, "sinistro fora da cidade"],
  ["Batida com terceiro: passo a passo após o acidente", "Sinistros", undefined, "batida com terceiro"],
  ["Boletim de ocorrência é obrigatório no sinistro de automóvel?", "Sinistros", undefined, "boletim ocorrência seguro"],
  ["Fotos e documentos necessários para comunicar um sinistro", "Sinistros", undefined, "documentos sinistro auto"],
  ["Oficina referenciada ou de livre escolha: o que muda", "Sinistros", undefined, "oficina referenciada seguro"],
  ["Prazo para indenização do seguro auto", "Sinistros", undefined, "prazo indenização seguro"],
  ["Terceiro pode acionar diretamente a seguradora?", "Sinistros", undefined, "terceiro acionar seguradora"],
  ["Seguro auto em Varginha: como cotar e comparar", "Seguro Auto Local", "Varginha", "seguro auto Varginha"],
  ["Quanto custa o seguro de carro em Varginha", "Seguro Auto Local", "Varginha", "preço seguro auto Varginha"],
  ["Coberturas importantes para dirigir em Varginha e região", "Seguro Auto Local", "Varginha", "corretora seguro Varginha"],
  ["Seguro auto em Campanha MG: guia de contratação", "Seguro Auto Local", "Campanha", "seguro auto Campanha MG"],
  ["Cotação de seguro de carro em Campanha MG", "Seguro Auto Local", "Campanha", "cotação seguro Campanha"],
  ["Assistência 24 horas para motoristas de Campanha e região", "Seguro Auto Local", "Campanha", "seguro automóvel Campanha"],
  ["Seguro auto em Três Corações: compare seguradoras", "Seguro Auto Local", "Três Corações", "seguro auto Três Corações"],
  ["Preço do seguro de carro em Três Corações", "Seguro Auto Local", "Três Corações", "preço seguro Três Corações"],
  ["Como escolher uma corretora de seguros em Três Corações", "Seguro Auto Local", "Três Corações", "corretora seguros Três Corações"],
  ["Seguro auto em Três Pontas: coberturas e cotação", "Seguro Auto Local", "Três Pontas", "seguro auto Três Pontas"],
  ["Seguro de carro em Elói Mendes: como contratar", "Seguro Auto Local", "Elói Mendes", "seguro auto Elói Mendes"],
  ["Seguro auto em Monsenhor Paulo com atendimento local", "Seguro Auto Local", "Monsenhor Paulo", "seguro auto Monsenhor Paulo"],
  ["Seguro de carro em Lambari MG: guia prático", "Seguro Auto Local", "Lambari", "seguro auto Lambari MG"],
  ["Seguro auto em Cambuquira: compare antes de contratar", "Seguro Auto Local", "Cambuquira", "seguro auto Cambuquira"],
  ["Seguro de automóvel em São Gonçalo do Sapucaí", "Seguro Auto Local", "São Gonçalo do Sapucaí", "seguro auto São Gonçalo do Sapucaí"],
  ["Seguro auto em Boa Esperança MG: cotação personalizada", "Seguro Auto Local", "Boa Esperança", "seguro auto Boa Esperança MG"],
  ["Seguro auto em Lavras: o que avaliar na proposta", "Seguro Auto Local", "Lavras", "seguro auto Lavras"],
  ["Seguro de carro em Pouso Alegre: coberturas essenciais", "Seguro Auto Local", "Pouso Alegre", "seguro auto Pouso Alegre"],
  ["Seguro auto em Machado MG: cotação e assistência", "Seguro Auto Local", "Machado", "seguro auto Machado MG"],
  ["Seguro de carro em Alfenas: como comparar opções", "Seguro Auto Local", "Alfenas", "seguro auto Alfenas"],
  ["Seguro auto em Paraguaçu MG: proteção sob medida", "Seguro Auto Local", "Paraguaçu", "seguro auto Paraguaçu MG"],
  ["Seguro auto em Carmo da Cachoeira: guia local", "Seguro Auto Local", "Carmo da Cachoeira", "seguro auto Carmo da Cachoeira"],
  ["Seguro auto em São Lourenço MG: compare coberturas", "Seguro Auto Local", "São Lourenço", "seguro auto São Lourenço"],
  ["Seguro de carro em Caxambu: assistência e proteção", "Seguro Auto Local", "Caxambu", "seguro auto Caxambu"],
  ["Seguro auto em Nepomuceno MG: como fazer cotação", "Seguro Auto Local", "Nepomuceno", "seguro auto Nepomuceno"],
  ["Seguro auto no Sul de Minas: atendimento online e regional", "Seguro Auto Local", "Sul de Minas", "seguro auto Sul de Minas"],
  ["Rodovias do Sul de Minas: coberturas úteis para quem viaja", "Viagem", "Sul de Minas", "seguro estradas Sul de Minas"],
  ["BR-381 Fernão Dias: assistência para motoristas do Sul de Minas", "Viagem", "Sul de Minas", "seguro auto Fernão Dias"],
  ["BR-265 e MG-167: como se preparar para imprevistos", "Viagem", "Sul de Minas", "assistência 24 horas Sul de Minas"],
  ["Seguro para quem circula entre Varginha e Três Corações", "Seguro Auto Local", "Sul de Minas", "seguro Varginha Três Corações"],
  ["Seguro para quem trabalha viajando pelo Sul de Minas", "Perfis", "Sul de Minas", "seguro uso profissional Sul de Minas"],
  ["Renovação de seguro auto no Sul de Minas: compare antes", "Seguro Auto Local", "Sul de Minas", "renovação seguro Sul de Minas"],
  ["Como receber uma cotação de seguro auto pelo WhatsApp", "Contratação", undefined, "cotação seguro WhatsApp"],
  ["Vale a pena aumentar a cobertura para terceiros?", "Coberturas", undefined, "aumentar cobertura terceiros"],
  ["Cinco erros que deixam o seguro auto mais caro ou inadequado", "Contratação", undefined, "erros seguro auto"],
  ["Checklist anual para renovar o seguro do seu veículo", "Contratação", undefined, "checklist renovação seguro"],
];

function slugify(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export const articles: Article[] = topics.map(([title, category, city, keyword], index) => ({
  slug: slugify(title),
  title,
  category,
  city,
  keyword: keyword || title.toLowerCase(),
  description: `${title}. Entenda os pontos mais importantes e saiba como comparar opções com a Vital Corretora${city ? ` em ${city} e região` : ""}.`,
  publishedAt: new Date(Date.UTC(2026, 7, 25 - Math.floor(index / 4))).toISOString().slice(0, 10),
}));

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function relatedArticles(article: Article) {
  return articles.filter((item) => item.slug !== article.slug && (item.category === article.category || (article.city && item.city === article.city))).slice(0, 3);
}

export function articleSections(article: Article) {
  const place = article.city ? ` em ${article.city} e nas cidades próximas` : "";
  const localParagraph = article.city
    ? `O endereço de pernoite, a rotina de circulação, o perfil dos condutores e o uso do veículo influenciam a análise de risco. Por isso, uma cotação para ${article.city} deve usar os dados reais do motorista e do automóvel, sem simplesmente repetir um preço médio de outra cidade.`
    : `Cada seguradora combina informações do veículo, dos condutores, do endereço de pernoite e da utilização para calcular o risco. Por isso, o resultado correto depende de uma cotação individual, e não apenas de uma média encontrada na internet.`;

  return [
    {
      heading: `O que você precisa saber sobre ${article.keyword}`,
      paragraphs: [
        `${article.title} é uma dúvida importante para quem quer proteger o veículo sem pagar por uma apólice mal dimensionada. O ponto de partida é entender que seguro não deve ser comparado apenas pelo preço: franquia, limites para terceiros, assistência e regras de utilização podem mudar bastante entre as propostas.`,
        `Na prática, a melhor escolha é aquela que combina proteção compatível com o patrimônio, a rotina do motorista e sua capacidade de absorver pequenos prejuízos. As condições exatas sempre constam na proposta e nas condições contratuais da seguradora.`,
      ],
    },
    {
      heading: "Quais informações devem ser comparadas",
      paragraphs: [
        `Compare o tipo de cobertura do próprio veículo, o percentual da Tabela FIPE ou o valor determinado, a franquia, os limites de danos materiais, corporais e morais a terceiros, os serviços de assistência e as coberturas adicionais. Propostas com preços parecidos podem entregar proteções muito diferentes.`,
        `Também é importante verificar quilometragem de guincho, carro reserva, cobertura de vidros, regras para oficina, abrangência territorial e eventuais participações do segurado. O que não estiver contratado ou previsto nas condições não deve ser presumido como coberto.`,
      ],
    },
    {
      heading: `Como isso funciona${place}`,
      paragraphs: [localParagraph, `A Vital trabalha comparando seguradoras e explicando as diferenças de forma direta. O objetivo não é apresentar apenas a opção mais barata, mas identificar onde uma economia reduz proteção importante e onde uma cobertura adicional realmente faz sentido.`],
    },
    {
      heading: "Erros que devem ser evitados",
      paragraphs: [
        `Declarar incorretamente o condutor principal, o uso do veículo ou o CEP de pernoite pode gerar problemas na regulação de um sinistro. Outro erro comum é reduzir demais a cobertura de terceiros para baixar uma pequena parte do preço total.`,
        `Também não é recomendável comparar apenas o valor da parcela. Leia os limites, as franquias e os serviços. Em caso de dúvida, peça que o corretor mostre de forma objetiva o que muda de uma opção para outra.`,
      ],
    },
    {
      heading: "Como contratar com mais segurança",
      paragraphs: [
        `Tenha em mãos os dados do veículo e dos condutores, informe a utilização real e defina quais riscos teriam maior impacto financeiro. Depois, compare propostas equivalentes e registre as dúvidas antes da contratação.`,
        `A comercialização deve ocorrer por seguradoras e corretores habilitados. A Vital Corretora está registrada na SUSEP sob o número 261180251 e atende Monsenhor Paulo, Varginha, Campanha, Três Corações e todo o Sul de Minas de forma online e próxima.`,
      ],
    },
  ];
}
