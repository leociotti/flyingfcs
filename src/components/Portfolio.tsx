import { Building2, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const clients = [
    'Votorantim Metais Níquel',
    'Salix Engenharia Ltda',
    'SEW Eurodrive Brasil Ltda',
    'Shopping Golden Square',
    'Sendas Distribuidora S/A',
    'Honeywell Industria Automotiva Ltda',
    'Roldão Atacadista',
    'Comercial Zaragoza (Spani Atacadista)'
  ];

  const projects = [
    { title: 'Muro de Alvenaria', description: 'Construção de muros industriais' },
    { title: 'Pavimentação Asfáltica', description: 'Estacionamentos e vias internas' },
    { title: 'Pintura Epóxi', description: 'Escadas e estruturas industriais' },
    { title: 'Bases de Concreto Armado', description: 'Fundações e muretas' },
    { title: 'Diques e Tanques', description: 'Estruturas de contenção' },
    { title: 'Canaletas de Drenagem', description: 'Sistemas de efluentes e águas pluviais' },
    { title: 'Acabamentos', description: 'Pisos, azulejos e revestimentos' },
    { title: 'Gessos e Texturas', description: 'Sancas, molduras e grafiatos' }
  ];

  // Array de imagens do portfolio - você pode adicionar mais imagens aqui
  const portfolioImages = [
    { src: '/images/portfolio/obra1.jpg', alt: 'Obra Industrial - Votorantim', title: 'Construção Industrial' },
    { src: '/images/portfolio/obra2.jpg', alt: 'Pavimentação Asfáltica', title: 'Pavimentação' },
    { src: '/images/portfolio/obra3.jpg', alt: 'Pintura Epóxi', title: 'Pintura Industrial' },
    { src: '/images/portfolio/obra4.jpg', alt: 'Muro de Alvenaria', title: 'Alvenaria' },
    { src: '/images/portfolio/obra5.jpg', alt: 'Base de Concreto', title: 'Concreto Armado' },
    { src: '/images/portfolio/obra6.jpg', alt: 'Canaletas de Drenagem', title: 'Drenagem' },
    { src: '/images/portfolio/obra7.jpg', alt: 'Acabamentos', title: 'Acabamentos' },
    { src: '/images/portfolio/obra8.jpg', alt: 'Gessos e Texturas', title: 'Gessos' }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trabalhos realizados com excelência para grandes empresas
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Clientes Atendidos
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:bg-green-50 transition">
                <Building2 className="text-green-600 mx-auto mb-3" size={32} />
                <p className="font-semibold text-gray-800">{client}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Galeria de Obras
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioImages.map((image, index) => (
              <div 
                key={index} 
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="aspect-w-16 aspect-h-12 bg-gray-200 flex items-center justify-center">
                  <ImageIcon className="text-gray-400" size={48} />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                    <ImageIcon size={32} className="mx-auto mb-2" />
                    <p className="font-semibold">{image.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Serviços Executados
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-white p-6 rounded-lg border border-green-100 hover:shadow-lg transition">
                <h4 className="font-bold text-lg text-gray-900 mb-2">{project.title}</h4>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal para visualizar imagem em tamanho maior */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Obra Flying FCS" 
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-2 transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
