import { Building2 } from 'lucide-react';

export default function Portfolio() {
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
    </section>
  );
}
