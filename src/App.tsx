import { Building2, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2025 Flying FCS Serviços em Edificações LTDA. Todos os direitos reservados.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            CNPJ: 40.036.058/0001-00
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
