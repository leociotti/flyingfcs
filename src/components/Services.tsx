import { CheckCircle } from 'lucide-react';

export default function Services() {
  const services = [
    'Construção, ampliação e adequação industrial e predial',
    'Pisos, canaletas e redes de drenagem',
    'Sarjetas e guias de concreto',
    'Paredes e muros de alvenaria',
    'Vigas e pilares de madeira',
    'Rede hidráulica, esgotos e elétrica',
    'Construção de tanques, diques e bases de concreto armado',
    'Tubulação',
    'Pavimentação asfáltica de estacionamentos e ruas',
    'Pinturas (látex, esmalte e epóxi)',
    'Texturas, grafiatos e gessos (liso, placas e drywall)',
    'Assentamento de pedras, pisos cerâmicos e azulejos',
    'Fornecimento de mão de obra para manutenção industrial e predial'
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50 bg-opacity-95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas em construção civil para atender todas as necessidades do seu projeto
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition flex items-start space-x-3">
              <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
              <span className="text-gray-700">{service}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-green-700 text-white rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Contratos de Prestação de Serviços
          </h3>
          <p className="text-xl text-green-50 max-w-3xl mx-auto">
            Oferecemos fornecimento de mão de obra efetiva para prestação de serviços de construção e manutenção em empresas
          </p>
        </div>
      </div>
    </section>
  );
}
