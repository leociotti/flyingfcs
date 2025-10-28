import { Building2, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-600 flex items-center justify-center rounded">
              <span className="text-white font-bold text-lg">FCS</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">FLYING FCS</h1>
              <p className="text-sm text-green-600">SERVIÇOS</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-green-600 transition">
              Início
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-green-600 transition">
              Sobre
            </button>
            <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-green-600 transition">
              Serviços
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-green-600 transition">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-green-600 transition">
              Contato
            </button>
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-3">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-green-600 transition text-left">
              Início
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-green-600 transition text-left">
              Sobre
            </button>
            <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-green-600 transition text-left">
              Serviços
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-green-600 transition text-left">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-green-600 transition text-left">
              Contato
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
