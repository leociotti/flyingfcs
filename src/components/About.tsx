import { Award, Users, Shield } from 'lucide-react';

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

        <div className="grid md:grid-cols-3 gap-8 mb-16">
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

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Responsabilidade Técnica</h3>
            <p className="text-gray-600">
              Eng. Lucas Mendes Coimbra - CREA-SP 5069506512-SP
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Nossa Administração</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-green-600">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Adilson Alves de Oliveira</h4>
              <p className="text-green-600 font-semibold">Comercial</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-green-600">
              <h4 className="font-bold text-lg text-gray-900 mb-2">Fábio Cruz da Silva</h4>
              <p className="text-green-600 font-semibold">Operacional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
