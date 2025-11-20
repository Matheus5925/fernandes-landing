import { motion } from "framer-motion";

export default function ServicesUltraPremium() {
  const services = [
    {
      title: "Terraplanagem",
      image: "https://projetobatente.com.br/wp-content/uploads/2019/08/capa.jpg",
    },
    {
      title: "Baldrame",
      image: "https://casadoconstrutor.com.br/sites/default/files/inline-images/erros-comuns-baldrame.jpg",
    },
    {
      title: "Escavação",
      image: "https://grupoalps.com.br/wp-content/uploads/2024/07/servicos-de-escavacoes.jpg",
    },
    {
      title: "Pavimentação",
      image: "https://www.idrparana.pr.gov.br/sites/iapar/arquivos_restritos/files/imagem/2025-08/dji_20250813153051_0013_v.jpg",
    },
    {
      title: "Topografia",
      image: "https://images.openai.com/static-rsc-1/feYZaUdaecdyKhUKRg7WgG_jXbSquzVWXQZ8JAYNMOKJH1sxZjbI-oubYInWzhQ0Gt3ojVOibi6fTRoskhd9lCWhNDhKgfjAxjHsyJbEUmRUj8EOVOXx422yZKtmC-uok80EVeYCR7Ood8JUw-hxzg",
    },
    {
      title: "Locação de Máquinas",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCUQirZu3pKlL3WvjAtDif7ZWExmFj6tGo_Q&s",
    },
  ];

  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-neutral-900 to-black overflow-hidden">
      {/* Background decorative glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-500/10 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-amber-400/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl font-bold text-white mb-16"
        >
          Serviços Executados com<br />
          <span className="text-orange-400">Excelência e Precisão</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative group rounded-2xl overflow-hidden shadow-xl shadow-black/40 border border-white/10 bg-neutral-900"
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-xl font-semibold text-white drop-shadow-lg"
                >
                  {service.title}
                </motion.h3>
              </div>

              {/* Bottom glow on hover */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-orange-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
