const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-medical px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-semibold">Dr. Miguel Bañuls</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Cirujano ortopédico formado en UK, especializado en columna, cadera y rodilla. 
              Atención personalizada en Jávea, Alicante.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Enlaces Rápidos</h4>
            <nav className="flex flex-col gap-2">
              <a href="#about" className="text-background/70 hover:text-background transition-colors text-sm">
                Sobre Mí
              </a>
              <a href="#services" className="text-background/70 hover:text-background transition-colors text-sm">
                Tratamientos
              </a>
              <a href="#testimonials" className="text-background/70 hover:text-background transition-colors text-sm">
                Testimonios
              </a>
              <a href="#contact" className="text-background/70 hover:text-background transition-colors text-sm">
                Contacto
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contacto</h4>
            <div className="space-y-2 text-sm text-background/70">
              <p>Av. Estrasburgo, Local 2</p>
              <p>03730 Xàbia, Alicante</p>
              <a href="tel:+34606914833" className="block hover:text-background transition-colors">
                +34 606 914 833
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {currentYear} Dr. Miguel Bañuls. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <a href="#" className="hover:text-background transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-background transition-colors">Aviso Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
