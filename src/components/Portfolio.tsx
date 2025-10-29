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

  const projectImages = [
    {
      title: 'Muro de Alvenaria',
      description: 'Construção de muros industriais',
      image: '/images/Muro de Alvenaria.png',
      category: 'Estruturas'
    },
    {
      title: 'Pavimentação Asfáltica',
      description: 'Estacionamentos e vias internas',
      image: '/images/Pavimentação Asfáltica.png',
      category: 'Pavimentação'
    },
    {
      title: 'Pintura Epóxi de Escada',
      description: 'Escadas e estruturas industriais',
      image: '/images/Pintura Epóxi de Escada.png',
      category: 'Pintura'
    },
    {
      title: 'Bases e Muretas de Concreto Armado',
      description: 'Fundações e muretas',
      image: '/images/Bases e Muretas de Concreto Armado.png',
      category: 'Estruturas'
    },
    {
      title: 'Dique e Base de Concreto Armado para Tanque',
      description: 'Estruturas de contenção',
      image: '/images/Dique e Base de Concreto Armado para Tanque.png',
      category: 'Estruturas'
    },
    {
      title: 'Canaleta de Concreto para Efluentes e Águas Pluviais',
      description: 'Sistemas de efluentes e águas pluviais',
      image: '/images/Canaleta de Concreto para Efluentes e Águas Pluviais.png',
      category: 'Infraestrutura'
    },
    {
      title: 'Pintura Epóxi de Tanque',
      description: 'Pintura especializada em tanques',
      image: '/images/Pintura Epóxi de Tanque.png',
      category: 'Pintura'
    },
    {
      title: 'Pintura de Piso de Concreto',
      description: 'Pisos industriais pintados',
      image: '/images/Pintura de Piso de Concreto.png',
      category: 'Pintura'
    },
    {
      title: 'Escada Revestida Com Mármore ou Granito',
      description: 'Acabamentos em mármore e granito',
      image: '/images/Escada Revestida Com Mármore ou Granito.jpg',
      category: 'Acabamentos'
    },
    {
      title: 'Piso Mármore ou Granito',
      description: 'Pisos em mármore e granito',
      image: '/images/Piso Mármore ou Granito.jpg',
      category: 'Acabamentos'
    },
    {
      title: 'Revestimento Cerâmico',
      description: 'Azulejos e revestimentos cerâmicos',
      image: '/images/Revestimento Cerâmico.jpg',
      category: 'Acabamentos'
    },
    {
      title: 'Azulejo e Moldura Gesso',
      description: 'Combinação de azulejos e molduras',
      image: '/images/Azulejo e Moldura Gesso.jpg',
      category: 'Acabamentos'
    },
    {
      title: 'Grafiato e Moldura Gesso',
      description: 'Texturas e molduras em gesso',
      image: '/images/Grafiato e Moldura Gesso.jpg',
      category: 'Acabamentos'
    },
    {
      title: 'Sanca de Gesso e Parede Grafiato',
      description: 'Sancas e texturas em gesso',
      image: '/images/Sanca de Gesso e Parede Grafiato.jpg',
      category: 'Acabamentos'
    }
  ];

  const categories = ['Todos', 'Estruturas', 'Pavimentação', 'Pintura', 'Acabamentos', 'Infraestrutura'];
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredImages = selectedCategory === 'Todos' 
    ? projectImages 
    : projectImages.filter(img => img.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-white bg-opacity-95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trabalhos realizados com compromisso para grandes empresas
          </p>
        </div>

        {/* Clientes Atendidos */}
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

        {/* Galeria de Projetos */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Galeria de Projetos
          </h3>
          
          {/* Filtros por categoria */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid de imagens */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredImages.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer group"
                onClick={() => setSelectedImage(project.image)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <ImageIcon className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
                  </div>
                </div>
                <div className="p-3">
                  <h4 className="font-bold text-sm text-gray-900 mb-1 line-clamp-2">{project.title}</h4>
                  <p className="text-gray-600 text-xs mb-2 line-clamp-2">{project.description}</p>
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal para visualização ampliada */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Projeto ampliado"
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
      </div>
    </section>
  );
}
