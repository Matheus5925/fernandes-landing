import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const EmpreendimentosSection = () => {
  const empreendimentos = [
    {
      name: "Alphaville Campo Grande",
      location: "Campo Grande - MS",
      image: "https://cdn6.campograndenews.com.br/uploads/noticias/2022/01/13/a0eec0ba99c6b3db29cbf39450493984fc24127c.jpeg",
      description:
        "Empreendimento de alto padrão com completa infraestrutura, segurança e áreas de lazer exclusivas.",
    },
    {
      name: "Terras Alpha 05 (Votorantim)",
      location: "Votorantim - SP",
      image: "https://img.olx.com.br/images/17/172573197204435.jpg",
      description:
        "Loteamento planejado com foco em sustentabilidade e qualidade de vida, localizado em uma das regiões mais valorizadas do interior paulista.",
    },
    {
      name: "Alphaville Belo Horizonte",
      location: "Belo Horizonte - MG",
      image: "https://alphavillemg.com.br/wp-content/uploads/2023/07/banner-home-1.jpg",
      description:
        "Residencial sofisticado com vista panorâmica e infraestrutura completa, ideal para quem busca exclusividade e conforto.",
    },
    {
      name: "Alphaville Ponta Grossa",
      location: "Ponta Grossa - PR",
      image: "https://alphaville.com.br/wp-content/uploads/2024/09/DJI_0805.jpg",
      description:
        "Empreendimento moderno e cercado por natureza, com fácil acesso ao centro urbano e estrutura de lazer diferenciada.",
    },
    {
      name: "Terras Alpha Uberaba",
      location: "Uberaba - MG",
      image: "https://alphaville.com.br/wp-content/uploads/2025/04/IMA-ALPHAVILLE_TA_UBERABA-PISCINA-ALTA.jpg",
      description:
        "Condomínio com excelente localização e projeto urbanístico inovador, oferecendo conforto e segurança aos moradores.",
    },
    {
      name: "Terras Alpha Uberlândia",
      location: "Uberlândia - MG",
      image: "https://img.olx.com.br/images/40/403550451186950.jpg",
      description:
        "Empreendimento de alto padrão com áreas verdes amplas e completa infraestrutura de lazer e convivência.",
    },
    {
      name: "Terras Alpha Itu",
      location: "Itu - SP",
      image: "https://img.olx.com.br/images/14/146542210382437.jpg",
      description:
        "Loteamento premium desenvolvido para oferecer qualidade de vida e contato com a natureza em uma das melhores regiões de Itu.",
    },
    {
      name: "Alphaville Jundiaí 01",
      location: "Jundiaí - SP",
      image: "https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/grq6lwb4htd1/b/tecimob-production/o/media/ccad8bbd-3ebd-4865-af04-9ee329d124b7/properties/06893fe2-46a5-455e-81ed-d02b787773ba/images/9d3c55fc-6e55-4306-88b1-eac0144c044b1747225953PZPU.jpg",
      description:
        "Empreendimento planejado com arquitetura moderna e localização privilegiada, oferecendo segurança e lazer completo.",
    },
    {
      name: "Alphaville Jundiaí 02",
      location: "Jundiaí - SP",
      image: "https://cdn.imoview.com.br/bertuol/Condominios/39/tratadas-11.jpg?1711454046",
      description:
        "Nova fase do projeto Alphaville Jundiaí, com lotes amplos, infraestrutura moderna e espaços verdes integrados.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // 👈 novo estado para modal

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === empreendimentos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? empreendimentos.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="empreendimentos" className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
          Incorporações Realizadas
        </h2>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
          Confira algumas Incorporações concluídas com excelência pela Fernandes Assessoria.
        </p>

        <div className="relative mt-12 overflow-hidden">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            {/* 👇 adicionamos onClick para abrir a imagem em destaque */}
            <img
              src={empreendimentos[currentIndex].image}
              alt={empreendimentos[currentIndex].name}
              className="rounded-2xl shadow-lg w-full max-w-4xl h-96 object-cover cursor-pointer hover:opacity-90 transition"
              onClick={() => setSelectedImage(empreendimentos[currentIndex].image)}
            />

            <div className="mt-6">
              <h3 className="text-2xl font-semibold text-slate-800">
                {empreendimentos[currentIndex].name}
              </h3>
              <p className="text-blue-600 text-sm mt-1">
                {empreendimentos[currentIndex].location}
              </p>
              <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                {empreendimentos[currentIndex].description}
              </p>
            </div>
          </motion.div>

          {/* Botões laterais */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-slate-800 text-white p-3 rounded-full hover:bg-slate-700"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-slate-800 text-white p-3 rounded-full hover:bg-slate-700"
          >
            ›
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-6 space-x-2">
          {empreendimentos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full transition-all ${index === currentIndex ? "bg-blue-600 w-6" : "bg-slate-300"
                }`}
            />
          ))}
        </div>
      </div>

      {/* 👇 Modal / Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Imagem ampliada"
              className="max-w-5xl max-h-[90vh] rounded-lg shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // impede fechar ao clicar na imagem
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EmpreendimentosSection;
