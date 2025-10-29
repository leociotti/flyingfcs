import { Award, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white bg-opacity-95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sobre a Flying FCS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresa especializada em serviços de construção civil com responsabilidade técnica e equipe qualificada
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Qualidade Garantida</h3>
            <p className="text-gray-600">
              Trabalhos realizados com os mais altos padrões de qualidade e segurança
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Equipe Experiente</h3>
            <p className="text-gray-600">
              Profissionais qualificados e com vasta experiência no mercado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
