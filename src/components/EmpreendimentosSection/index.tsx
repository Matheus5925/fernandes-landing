import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// EmpreendimentosSection - Versão Super Premium
// Uso: coloque este arquivo em /components e importe na sua página. Requer TailwindCSS + framer-motion.

type Empreendimento = {
  name: string;
  location: string;
  status: "Pronto" | "Em Obras" | "Lançamento" | string;
  description: string;
  highlights?: string[];
  images: string[]; // fotos comerciais / pronto
  constructionImages: { url: string; date?: string; note?: string }[]; // fotos de obra com metadata
};

const DATA: Empreendimento[] = [
  {
    name: "Alphaville Campo Grande",
    location: "Campo Grande - MS",
    status: "Pronto",
    description:
      "Empreendimento de alto padrão com completa infraestrutura, segurança e áreas de lazer exclusivas.",
    highlights: ["Segurança 24h", "Club house", "Piscina adulta e infantil"],
    images: [
      "https://cdn6.campograndenews.com.br/uploads/noticias/2022/01/13/a0eec0ba99c6b3db29cbf39450493984fc24127c.jpeg",
      "https://images.unsplash.com/photo-1560185127-6a3b09a6b6d6?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1505691723518-36a3b7b7f3b7?auto=format&fit=crop&w=1400&q=60",
    ],
    constructionImages: [
      {
        url: "https://cdn6.campograndenews.com.br/uploads/noticias/2022/01/13/a0eec0ba99c6b3db29cbf39450493984fc24127c.jpeg",
        date: "10/09/2024",
        note: "Estrutura finalizada",
      },
      {
        url: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1400&q=60",
        date: "22/11/2024",
        note: "Início de acabamento",
      },
    ],
  },

  {
    name: "Terras Alpha 05 (Votorantim)",
    location: "Votorantim - SP",
    status: "Pronto",
    description:
      "Loteamento planejado com foco em sustentabilidade e qualidade de vida.",
    highlights: ["Áreas verdes", "Ciclovias", "Rede de drenagem moderna"],
    images: [
      "https://img.olx.com.br/images/17/172573197204435.jpg",
      "/votorantim/photo-1.jpeg",
      "/votorantim/photo-2.jpeg",
      "/votorantim/photo-3.jpeg",
      "/votorantim/photo-4.jpeg",
      "/votorantim/photo-5.jpeg",
    ],
    constructionImages: [
      {
        url: "https://img.olx.com.br/images/17/172573197204435.jpg",
        date: "01/08/2025",
        note: "Serviços de terraplanagem",
      },
      {
        url: "/votorantim/photo-1.jpeg",
        date: "19/04/2023",
        note: "Instalação de infraestrutura",
      }
    ],
  },

  {
    name: "Alphaville Belo Horizonte",
    location: "Belo Horizonte - MG",
    status: "Pronto",
    description:
      "Residencial sofisticado com vista panorâmica e infraestrutura completa, ideal para quem busca exclusividade e conforto.",
    highlights: ["Vista panorâmica", "Clube completo", "Portaria blindada"],
    images: [
      "https://alphavillemg.com.br/wp-content/uploads/2023/07/banner-home-1.jpg",
      "https://images.unsplash.com/photo-1505691723518-36a3b7b7f3b7?auto=format&fit=crop&w=1400&q=60",
    ],
    constructionImages: [
      {
        url: "https://alphavillemg.com.br/wp-content/uploads/2023/07/banner-home-1.jpg",
        date: "01/01/2021",
        note: "Entrega finalizada",
      },
    ],
  },

  {
    name: "Alphaville Ponta Grossa",
    location: "Ponta Grossa - PR",
    status: "Pronto",
    description:
      "Empreendimento moderno e cercado por natureza, com fácil acesso ao centro urbano e estrutura de lazer diferenciada.",
    highlights: ["Natureza ao redor", "Acesso rápido à cidade", "Lazer sofisticado"],
    images: [
      "https://alphaville.com.br/wp-content/uploads/2024/09/DJI_0805.jpg",
      "https://images.unsplash.com/photo-1560185127-6a3b09a6b6d6?auto=format&fit=crop&w=1400&q=60",
    ],
    constructionImages: [
      {
        url: "https://alphaville.com.br/wp-content/uploads/2024/09/DJI_0805.jpg",
        date: "15/05/2023",
        note: "Obra finalizada",
      },
    ],
  },

  {
    name: "Terras Alpha Uberaba",
    location: "Uberaba - MG",
    status: "Pronto",
    description:
      "Condomínio com excelente localização e projeto urbanístico inovador, oferecendo conforto e segurança aos moradores.",
    highlights: ["Urbanismo moderno", "Localização estratégica", "Segurança 24h"],
    images: [
      "https://alphaville.com.br/wp-content/uploads/2025/04/IMA-ALPHAVILLE_TA_UBERABA-PISCINA-ALTA.jpg",
    ],
    constructionImages: [
      {
        url: "https://alphaville.com.br/wp-content/uploads/2025/04/IMA-ALPHAVILLE_TA_UBERABA-PISCINA-ALTA.jpg",
        date: "12/02/2025",
        note: "Estrutura em andamento",
      },
    ],
  },

  {
    name: "Terras Alpha Uberlândia",
    location: "Uberlândia - MG",
    status: "Pronto",
    description:
      "Empreendimento de alto padrão com áreas verdes amplas e completa infraestrutura de lazer e convivência.",
    highlights: ["Áreas verdes", "Convívio social", "Segurança 24h"],
    images: [
      "https://img.olx.com.br/images/40/403550451186950.jpg",
      "https://images.unsplash.com/photo-1508121337730-5b4a1f1f7a97?auto=format&fit=crop&w=1400&q=60",
    ],
    constructionImages: [
      {
        url: "https://img.olx.com.br/images/40/403550451186950.jpg",
        date: "20/03/2025",
        note: "Terraplanagem e infraestrutura",
      },
    ],
  },

  {
    name: "Terras Alpha Itu",
    location: "Itu - SP",
    status: "Pronto",
    description:
      "Loteamento premium desenvolvido para oferecer qualidade de vida e contato com a natureza em uma das melhores regiões de Itu.",
    highlights: ["Natureza", "Trilhas", "Espaços de lazer"],
    images: [
      "https://img.olx.com.br/images/14/146542210382437.jpg",
      "https://images.unsplash.com/photo-1505691723518-36a3b7b7f3b7?auto=format&fit=crop&w=1400&q=60",
    ],
    constructionImages: [
      {
        url: "https://img.olx.com.br/images/14/146542210382437.jpg",
        date: "11/11/2020",
        note: "Projeto entregue",
      },
    ],
  },

  {
    name: "Alphaville Jundiaí 01",
    location: "Jundiaí - SP",
    status: "Pronto",
    description:
      "Empreendimento planejado com arquitetura moderna e localização privilegiada, oferecendo segurança e lazer completo.",
    highlights: ["Arquitetura moderna", "Lazer completo", "Portaria 24h"],
    images: [
      "https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/grq6lwb4htd1/b/tecimob-production/o/media/ccad8bbd-3ebd-4865-af04-9ee329d124b7/properties/06893fe2-46a5-455e-81ed-d02b787773ba/images/9d3c55fc-6e55-4306-88b1-eac0144c044b1747225953PZPU.jpg",
    ],
    constructionImages: [
      {
        url: "https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/grq6lwb4htd1/b/tecimob-production/o/media/ccad8bbd-3ebd-4865-af04-9ee329d124b7/properties/06893fe2-46a5-455e-81ed-d02b787773ba/images/9d3c55fc-6e55-4306-88b1-eac0144c044b1747225953PZPU.jpg",
        date: "15/03/2019",
        note: "Entrega finalizada",
      },
    ],
  },

  {
    name: "Alphaville Jundiaí 02",
    location: "Jundiaí - SP",
    status: "Pronto",
    description:
      "Nova fase do projeto Alphaville Jundiaí, com lotes amplos, infraestrutura moderna e espaços verdes integrados.",
    highlights: ["Lotes amplos", "Áreas verdes", "Infraestrutura moderna"],
    images: [
      "https://cdn.imoview.com.br/bertuol/Condominios/39/tratadas-11.jpg?1711454046",
    ],
    constructionImages: [
      {
        url: "https://cdn.imoview.com.br/bertuol/Condominios/39/tratadas-11.jpg?1711454046",
        date: "22/07/2021",
        note: "Acabamento finalizado",
      },
    ],
  },
];


const tabVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

export default function EmpreendimentosSection() {
  const [selected, setSelected] = useState<Empreendimento | null>(null);
  const [tab, setTab] = useState<"overview" | "gallery" | "progress">("overview");
  const [galleryIndex, setGalleryIndex] = useState(0);

  return (
    <section id="empreendimentos" className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">Incorporações Realizadas</h2>
          <p className="mt-4 text-lg text-slate-600">
            Confira alguns empreendimentos realçados pela Fernandes Assessoria.
          </p>
        </div>

        {/* GRID PREMIUM */}
        <div className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {DATA.map((e, idx) => (
            <motion.article
              key={e.name}
              layout
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.04 }}
              className="relative bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100"
            >
              <div className="relative">
                <img
                  src={e.images[0]}
                  alt={e.name}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />

                {/* Badge de status */}
                <div className="absolute left-4 top-4">
                  <span
                    className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold shadow-sm text-white ${e.status === "Pronto"
                        ? "bg-green-600"
                        : e.status === "Em Obras"
                          ? "bg-yellow-600"
                          : "bg-blue-600"
                      }`}
                  >
                    {e.status}
                  </span>
                </div>

                {/* CTA pequena */}
                <button
                  onClick={() => {
                    setSelected(e);
                    setTab("overview");
                    setGalleryIndex(0);
                  }}
                  className="absolute right-4 bottom-4 bg-white bg-opacity-90 backdrop-blur-sm px-3 py-2 rounded-md text-sm font-medium shadow hover:shadow-lg"
                >
                  Ver Detalhes
                </button>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-slate-800">{e.name}</h3>
                <p className="text-sm text-blue-600 mt-1">{e.location}</p>

                <p className="mt-3 text-slate-600 line-clamp-3">{e.description}</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {(e.highlights || []).slice(0, 3).map((h) => (
                    <li
                      key={h}
                      className="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-700"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Indicadores / thumbnails - opcional */}
      </div>

      {/* MODAL PREMIUM */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header modal */}
              <div className="flex items-center justify-between p-5 border-b">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800">{selected.name}</h3>
                  <p className="text-sm text-blue-600 mt-1">{selected.location}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold text-white ${selected.status === "Pronto" ? "bg-green-600" : selected.status === "Em Obras" ? "bg-yellow-600" : "bg-blue-600"
                      }`}
                  >
                    {selected.status}
                  </span>

                  <button
                    onClick={() => setSelected(null)}
                    className="text-slate-500 hover:text-slate-700 rounded-md p-2"
                    aria-label="Fechar modal"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Conteúdo: coluna esquerda = imagens, direita = info */}
              <div className="flex-1 overflow-hidden grid grid-cols-1 lg:grid-cols-2">
                {/* Left: gallery large */}
                <div className="bg-slate-50 p-4 flex flex-col gap-4 overflow-auto">
                  {/* Tabs thumbnails */}
                  <div className="flex gap-2">
                    <button
                      className={`px-3 py-1 rounded-md text-sm ${tab === "overview" ? "bg-white shadow" : "text-slate-600"}`}
                      onClick={() => setTab("overview")}
                    >
                      Visão Geral
                    </button>
                    <button
                      className={`px-3 py-1 rounded-md text-sm ${tab === "gallery" ? "bg-white shadow" : "text-slate-600"}`}
                      onClick={() => setTab("gallery")}
                    >
                      Galeria
                    </button>
                    {/* <button
                      className={`px-3 py-1 rounded-md text-sm ${tab === "progress" ? "bg-white shadow" : "text-slate-600"}`}
                      onClick={() => setTab("progress")}
                    >
                      Andamento
                    </button> */}
                  </div>

                  <div className="flex-1 mt-2">
                    <AnimatePresence mode="wait">
                      {tab === "overview" && (
                        <motion.div key="ov" variants={tabVariants} initial="hidden" animate="visible" exit="hidden">
                          <img
                            src={selected.images[galleryIndex]}
                            alt={selected.name}
                            className="w-full h-[48vh] object-cover rounded-lg shadow-inner"
                          />

                          {/* thumbs */}
                          <div className="mt-3 flex gap-3 overflow-x-auto py-2">
                            {selected.images.map((img, i) => (
                              <button
                                key={img + i}
                                onClick={() => setGalleryIndex(i)}
                                className={`flex-none rounded-md overflow-hidden border ${i === galleryIndex ? "border-blue-600" : "border-transparent"}`}
                              >
                                <img src={img} alt={`thumb-${i}`} className="w-28 h-16 object-cover" />
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {tab === "gallery" && (
                        <motion.div key="gal" variants={tabVariants} initial="hidden" animate="visible" exit="hidden">
                          <div className="grid grid-cols-2 gap-3">
                            {selected.images.map((img, i) => (
                              <div key={img + i} className="rounded-md overflow-hidden">
                                <img src={img} alt={`gal-${i}`} className="w-full h-44 object-cover" />
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {tab === "progress" && (
                        <motion.div key="prog" variants={tabVariants} initial="hidden" animate="visible" exit="hidden">
                          <div className="space-y-4">
                            {selected.constructionImages.map((c, i) => (
                              <div key={c.url + i} className="flex gap-3 items-start">
                                <img src={c.url} alt={`prog-${i}`} className="w-28 h-20 object-cover rounded-md" />
                                <div>
                                  <div className="text-sm font-semibold">{c.date || "Sem data"}</div>
                                  <div className="text-sm text-slate-600">{c.note || "Atualização de obra"}</div>
                                  {/* Exemplo simples de barra de progresso (pode ser dinâmica) */}
                                  {i === 0 && (
                                    <div className="mt-2 bg-slate-200 rounded-full h-2 w-48 overflow-hidden">
                                      <div className="h-2 rounded-full" style={{ width: "58%", background: "linear-gradient(90deg,#60a5fa,#3b82f6)" }} />
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}

                            {selected.constructionImages.length === 0 && <div className="text-sm text-slate-500">Nenhuma foto de andamento disponível.</div>}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Right: info, highlights, CTA */}
                <div className="p-6 overflow-auto">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-slate-800">Destaques</h4>
                    <ul className="mt-2 space-y-2 text-slate-600">
                      {(selected.highlights || []).map((h) => (
                        <li key={h} className="flex items-center gap-3">
                          <span className="inline-block w-2 h-2 rounded-full bg-blue-600" />
                          <span className="text-sm">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-slate-800">Descrição</h4>
                    <p className="mt-2 text-slate-600">{selected.description}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-slate-800">Informações rápidas</h4>
                    <ul className="mt-2 text-slate-600 space-y-1 text-sm">
                      <li>✓ Localização: {selected.location}</li>
                      <li>✓ Status: {selected.status}</li>
                      <li>✓ Atualizações: {selected.constructionImages.length} fotos</li>
                    </ul>
                  </div>

                  {/* <div className="mt-auto flex gap-3">
                    <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:opacity-95">Agendar Visita</button>
                    <button className="flex-1 border border-slate-200 py-3 rounded-lg font-semibold">Receber Atualizações</button>
                  </div> */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
