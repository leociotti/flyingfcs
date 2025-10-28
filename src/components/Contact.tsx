import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atender seu projeto com qualidade e profissionalismo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-green-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Telefone</h3>
            <a href="tel:+551197612-0613" className="text-green-600 hover:text-green-700 font-semibold block mb-2">
              (11) 97612-0613
            </a>
            <a href="tel:+55112385-4864" className="text-green-600 hover:text-green-700 font-semibold block">
              (11) 2385-4864
            </a>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-green-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">E-mail</h3>
            <a href="mailto:fcsedificacoes@gmail.com" className="text-green-600 hover:text-green-700 font-semibold break-all">
              fcsedificacoes@gmail.com
            </a>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-green-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Endereço</h3>
            <p className="text-gray-700">
              Rua Lázaro Godoi, s/n<br />
              Casa 02 - Jardim Guapira<br />
              São Paulo - SP<br />
              CEP: 02.318-110
            </p>
          </div>
        </div>

        <div className="mt-12 bg-green-700 text-white rounded-lg p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            Solicite um Orçamento
          </h3>
          <p className="text-lg text-green-50 mb-6">
            Entre em contato conosco e receba um orçamento personalizado para seu projeto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+551197612-0613"
              className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition inline-flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Ligar Agora</span>
            </a>
            <a
              href="mailto:fcsedificacoes@gmail.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition inline-flex items-center justify-center space-x-2"
            >
              <Mail size={20} />
              <span>Enviar E-mail</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
