import React, { useEffect, useState } from 'react';
import { SiWhatsapp } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Building, Users, Award, Clock, Linkedin, Instagram, Facebook, Menu } from 'lucide-react';
import EmpreendimentosSection from './components/EmpreendimentosSection';
// Componente para o Logo (SVG para melhor qualidade)
const Logo = ({ className }) => (
  <svg className={className} viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="5" y="45" fontFamily="Montserrat, sans-serif" fontSize="20" fontWeight="600" fill="#334155">FERNANDES</text>
    <text x="5" y="58" fontFamily="Inter, sans-serif" fontSize="8" fill="#64748b">ASSESSORIA E EMPREENDIMENTOS</text>
    <path d="M150 5 L170 5 L170 50 L150 50 Z" fill="#4A90E2" />
    <path d="M140 15 L150 15 L150 50 L140 50 Z" fill="white" stroke="#E2E8F0" />
    <path d="M130 25 L140 25 L140 50 L130 50 Z" fill="white" stroke="#E2E8F0" />
    <path d="M170 15 L175 15 L175 20 L170 20 Z" fill="#4A90E2" />
    <path d="M170 22 L175 22 L175 27 L170 27 Z" fill="#4A90E2" />
    <path d="M170 29 L175 29 L175 34 L170 34 Z" fill="#4A90E2" />
    <path d="M170 36 L175 36 L175 41 L170 41 Z" fill="#4A90E2" />
    <path d="M0 50 L200 50" stroke="#4A90E2" strokeWidth="2" />
  </svg>
);

const FormScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    city: "",
    projectType: "",
    details: "",
  });

  const phoneNumber = "5511983082634"; // <-- coloque aqui o número do WhatsApp (com DDI +55 e DDD)

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
👋 Olá! vim pelo site e quero falar com um especialista.

📋 *Dados do contato:*
- Nome: ${form.name}
- E-mail: ${form.email}
- Cidade/Estado: ${form.city}
- Tipo de projeto: ${form.projectType}
- Detalhes: ${form.details}
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <FormInput
        id="name"
        label="Seu Nome Completo"
        placeholder="João da Silva"
        value={form.name}
        onChange={handleChange}
        required
      />

      <FormInput
        id="email"
        label="Seu E-mail"
        type="email"
        placeholder="joao.silva@email.com"
        value={form.email}
        onChange={handleChange}
        required
      />

      <FormInput
        id="city"
        label="Cidade / Estado"
        placeholder="São Paulo - SP"
        value={form.city}
        onChange={handleChange}
        required
      />

      <div>
        <label
          htmlFor="projectType"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Tipo de Projeto
        </label>
        <select
          id="projectType"
          className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
          value={form.projectType}
          onChange={handleChange}
          required
        >
          <option value="">Selecione uma opção</option>
          <option value="Residencial">Residencial</option>
          <option value="Comercial">Comercial</option>
          <option value="Reforma">Reforma</option>
          <option value="Outro">Outro</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="details"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Descreva brevemente seu projeto
        </label>
        <textarea
          id="details"
          rows="4"
          className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
          placeholder="Ex: construção de casa térrea de 3 quartos, com garagem e área gourmet."
          value={form.details}
          onChange={handleChange}
          required
        />
      </div>

      <MotionButton
        type="submit"
        className="w-full !mt-6 !py-4 text-lg flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold"
      >
        <SiWhatsapp size={24} />
        Falar com Especialista
      </MotionButton>
    </form>
  );
};


// Componentes reutilizáveis com animação
const MotionButton = ({ children, className, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(74, 144, 226, 0.3)' }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.2 }}
    className={`px-6 py-3 font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 ${className}`}
    onClick={onClick}
  >
    {children}
  </motion.button>
);

const AnimatedSection = ({ children, className = '' }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={`py-16 sm:py-24 ${className}`}
  >
    {children}
  </motion.section>
);

const FormInput = ({ id, label, value, type = 'text', placeholder, onChange, required = true }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
    <input
      type={type}
      id={id}
      name={id}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      required={required}
      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow duration-200"
    />
  </div>
);


// Seções da Página
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Sobre', id: 'about' },
    { name: 'Diferenciais', id: 'benefits' },
    { name: 'Depoimentos', id: 'testimonials' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Logo className="h-16 w-auto" />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-300">
                {link.name}
              </button>
            ))}
          </nav>
          <div className="hidden md:block">
            <MotionButton onClick={() => scrollToSection('contact')}>
              Fale Conosco
            </MotionButton>
          </div>
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-600 hover:bg-slate-100"
              aria-label="Abrir menu"
            >
              <Menu size={28} />
            </motion.button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-lg absolute top-20 left-0 right-0"
          >
            <div className="px-5 pt-2 pb-5 space-y-3">
              {navLinks.map((link) => (
                <button key={link.id} onClick={() => scrollToSection(link.id)} className="block w-full text-left py-2 text-slate-700 hover:bg-slate-50 rounded-md font-medium">
                  {link.name}
                </button>
              ))}
              <MotionButton onClick={() => scrollToSection('contact')} className="w-full mt-4">
                Fale Conosco
              </MotionButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const HeroSection = () => (
  <section id="hero" className="relative pt-20 min-h-screen flex items-center bg-slate-50">
    <div className="absolute inset-0 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
        alt="Obra de construção moderna com engenheiros"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-blue-900/50"></div>
    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Construindo o Futuro, <span className="text-blue-400">Assessorando o Sucesso.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-200 max-w-xl">
            Soluções completas em consultoria e construções de empreendimentos para transformar seus projetos mais ambiciosos em realidade.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl"
        >
          <h3 className="text-2xl font-bold text-slate-800 text-center">Fale com um de nossos especialistas</h3>
          <p className="text-center text-slate-600 mt-2 mb-6"></p>
          <FormScreen />

        </motion.div>
      </div>
    </div>
  </section>
);


const AboutSection = () => (
  <AnimatedSection id="about" className="bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">Sua Visão, Nossa Expertise</h2>
          <p className="mt-4 text-lg text-slate-600">
            Com anos de experiência no mercado da construção civil, a Fernandes Assessoria e Empreendimentos se destaca pela excelência e compromisso em cada projeto. Nossa missão é oferecer soluções integradas, desde o planejamento inicial até a entrega final da obra.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-blue-100 text-blue-600 p-3 rounded-full">
                <Building size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-700">Consultoria Especializada</h4>
                <p className="text-slate-500 text-sm mt-1">Análise de viabilidade, gestão de projetos e otimização de custos.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 bg-blue-100 text-blue-600 p-3 rounded-full">
                <Users size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-700">Execução de Obras</h4>
                <p className="text-slate-500 text-sm mt-1">Construção e reforma de projetos residenciais, comerciais e industriais.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-80 lg:h-full rounded-2xl overflow-hidden">
          <img
            src="https://thumbs.dreamstime.com/b/equipe-de-arquitetos-ou-consultoria-engenharia-e-an%C3%A1lise-trabalhos-sobre-ferramentas-objetos-desenhos-constru%C3%A7%C3%A3o-inspe%C3%A7%C3%A3o-que-213102085.jpg"
            alt="Engenheiro analisando planta de construção"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />

        </div>
      </div>
    </div>
  </AnimatedSection>
);

const BenefitsSection = () => {
  const benefits = [
    { icon: Award, title: "Qualidade Premium", description: "Utilizamos materiais de ponta e contamos com mão de obra qualificada para garantir um acabamento impecável." },
    { icon: Clock, title: "Prazo Garantido", description: "Nosso planejamento rigoroso e gestão eficiente asseguram a entrega do seu projeto no prazo combinado, sem surpresas." },
    { icon: Users, title: "Atendimento Personalizado", description: "Oferecemos um acompanhamento próximo e transparente em todas as etapas, entendendo suas necessidades." },
  ];

  return (
    <AnimatedSection id="benefits" className="bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">Nossos Diferenciais</h2>
        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
          Entendemos as dores do setor e trabalhamos para oferecer uma experiência tranquila e com resultados que superam expectativas.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="inline-block bg-blue-600 text-white p-4 rounded-full mb-5">
                <benefit.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">{benefit.title}</h3>
              <p className="mt-2 text-slate-500">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

const ContactSection = () => (
  <AnimatedSection id="contact" className="bg-slate-100">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">Pronto para Iniciar Seu Projeto?</h2>
        <p className="mt-4 text-lg text-slate-600">
          Preencha o formulário abaixo e nossa equipe de especialistas entrará em contato em breve para entender suas necessidades e oferecer a melhor solução.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="mt-12 max-w-2xl mx-auto bg-white p-8 sm:p-10 rounded-2xl shadow-xl"
      >
        <FormScreen />
      </motion.div>
    </div>
  </AnimatedSection>
);

const Footer = () => (
  <footer className="bg-slate-800 text-slate-300">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <Logo className="h-20 w-auto mb-4" />
          <p className="max-w-md">Realizando projetos e construindo relações de confiança através da engenharia de ponta e assessoria completa.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Contato</h4>
          <ul className="space-y-2">
            <li className="flex items-center"><Mail size={16} className="mr-2" /> contato@fernandes.com</li>
            <li className="flex items-center"><Phone size={16} className="mr-2" /> (11) 4002-8922</li>
            <li className="flex items-center"><MapPin size={16} className="mr-2" /> Av. Paulista, 1000, São Paulo - SP</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Siga-nos</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Facebook size={24} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Instagram size={24} /></a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
        <p>&copy; {new Date().getFullYear()} Fernandes Assessoria e Empreendimentos. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);


// Componente Principal
export default function App() {
  return (
    <div className="bg-white font-sans antialiased">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <BenefitsSection />
        <EmpreendimentosSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
