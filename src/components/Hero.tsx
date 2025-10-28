export default function Hero() {

  return (
    <section 
      id="inicio" 
      className="relative text-white pt-24 min-h-screen flex items-center"
      style={{
        backgroundImage: 'url(/images/backgrounds/construction-sunset.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay escuro para melhor contraste do texto */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
            Excelência em <br /> Construção Civil
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-lg">
            Compromisso em cada etapa da sua obra.<br />
            Soluções completas em construção civil industrial e predial.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
