import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative bg-gradient-to-br from-green-700 to-green-900 text-white pt-24">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Excelência em Construção Civil
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-50">
            Soluções completas para obras industriais e prediais com qualidade e responsabilidade técnica
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition flex items-center justify-center space-x-2"
            >
              <span>Solicitar Orçamento</span>
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition"
            >
              Nossos Serviços
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
