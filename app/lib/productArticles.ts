import { products, productHref, type Product } from "./products";

export type ProductArticle = {
  product: Product;
  slug: string;
  title: string;
  description: string;
  category: string;
  region: string;
  keyword: string;
  publishedAt: string;
};

const topics = [
  ["Guia completo para entender e contratar", "Guia"],
  ["Como funciona na prática", "Guia"],
  ["Principais coberturas, benefícios e limites", "Coberturas"],
  ["O que normalmente está incluído e o que pode ficar de fora", "Coberturas"],
  ["Como escolher uma opção adequada ao seu perfil", "Contratação"],
  ["Quais informações são necessárias para fazer uma cotação", "Cotação"],
  ["O que influencia o preço e as condições", "Preço"],
  ["Como economizar sem abrir mão do que é importante", "Preço"],
  ["Sete erros comuns antes da contratação", "Contratação"],
  ["Checklist para comparar propostas com segurança", "Comparação"],
  ["Como avaliar limites, franquias, carências ou taxas", "Comparação"],
  ["Documentos, proposta e contrato: o que conferir", "Contratação"],
  ["Quando vale a pena contratar", "Planejamento"],
  ["Como funciona a renovação e a revisão anual", "Renovação"],
  ["Como usar ou acionar o produto quando precisar", "Atendimento"],
  ["Dúvidas frequentes respondidas pela Vital", "Dúvidas"],
  ["Mitos e verdades que você precisa conhecer", "Dúvidas"],
  ["Como uma corretora ajuda na escolha", "Corretora"],
  ["Atendimento pelo WhatsApp: da simulação à contratação", "Cotação"],
  ["Como adaptar a proteção ou o planejamento à sua realidade", "Planejamento"],
  ["O que muda para famílias, profissionais e empresas", "Perfis"],
  ["Cuidados para não contratar apenas pelo menor preço", "Comparação"],
  ["Como comparar fornecedores e condições", "Comparação"],
  ["Perguntas que você deve fazer antes de decidir", "Contratação"],
  ["Como planejar a contratação sem imprevistos", "Planejamento"],
] as const;

const regions = [
  "em Varginha, Três Corações e Campanha",
  "em Monsenhor Paulo, Machado, Alfenas e Sul de Minas",
  "em Pouso Alegre, Poços de Caldas, Lavras e região",
  "em Divinópolis, Pará de Minas, Belo Horizonte e Minas Gerais",
] as const;

function slugify(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export const productArticles: ProductArticle[] = products.flatMap((product, productIndex) =>
  topics.flatMap(([topic, category], topicIndex) => regions.map((region, regionIndex) => {
    const title = `${product.name}: ${topic} ${region}`;
    return {
      product,
      title,
      slug: slugify(`${topic}-${region}`),
      category,
      region,
      keyword: `${product.name.toLowerCase()} ${region}`,
      description: `${topic} sobre ${product.name.toLowerCase()} ${region}. Conteúdo da Vital Corretora para comparar condições, evitar erros e tomar uma decisão consciente.`,
      publishedAt: new Date(Date.UTC(2026, 7, 25 - ((productIndex * 100 + topicIndex * 4 + regionIndex) % 180))).toISOString().slice(0, 10),
    };
  }))
);

export function articlesForProduct(productSlug: string) {
  return productArticles.filter((article) => article.product.slug === productSlug);
}

export function findProductArticle(productSlug: string, articleSlug: string) {
  return productArticles.find((article) => article.product.slug === productSlug && article.slug === articleSlug);
}

export function productArticleSections(article: ProductArticle) {
  const product = article.product;
  return [
    { heading: `O que considerar sobre ${product.name}`, paragraphs: [
      `${article.title} exige uma análise que vá além de uma promessa genérica ou do menor valor. O ponto de partida é entender o objetivo, o perfil de quem contrata e o impacto financeiro dos riscos ou compromissos envolvidos.`,
      `${product.description} As condições efetivas dependem da análise, das regras e dos documentos do fornecedor escolhido.`,
    ]},
    { heading: "Pontos que merecem comparação", paragraphs: [
      `Compare escopo, limites, prazos, participações, carências, taxas e serviços aplicáveis. Entre os pontos relevantes estão ${product.benefits.slice(0, 4).join(", ").toLowerCase()}.`,
      `Propostas visualmente parecidas podem ter diferenças importantes. Peça uma explicação objetiva do que muda e confirme tudo na proposta e nas condições contratuais.`,
    ]},
    { heading: `Contratação ${article.region}`, paragraphs: [
      `A Vital atende clientes ${article.region}, com orientação digital e humana a partir de Monsenhor Paulo. A cidade pode afetar disponibilidade, rede, aceitação ou características da análise, conforme o produto.`,
      `Não existe um preço único regional. Dados reais do contratante e do objeto da contratação são indispensáveis para uma simulação responsável.`,
    ]},
    { heading: "Como a Vital conduz a análise", paragraphs: product.steps.map((step, index) => `${index + 1}. ${step}. Nessa etapa, organizamos as informações e explicamos as decisões necessárias antes de avançar.`) },
    { heading: "Informação importante antes de decidir", paragraphs: [
      `A disponibilidade e as condições variam conforme perfil, região, análise e regras do produto. Não presuma coberturas, benefícios ou direitos que não estejam formalmente previstos.`,
      `A Vital Corretora possui registro SUSEP 261180251 e orienta a contratação com clareza, preservando a decisão final do cliente.`,
    ]},
  ];
}

export function productPageForArticle(article: ProductArticle) {
  return productHref(article.product);
}
