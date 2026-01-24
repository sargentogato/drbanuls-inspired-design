import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const treatments = [
    { href: '/treatments/spine-surgery', label: 'Spine Surgery' },
    { href: '/treatments/knee-surgery', label: 'Knee Surgery' },
    { href: '/treatments/hip-replacement', label: 'Hip Replacement' },
    { href: '/treatments/hand-foot', label: 'Hand & Foot Surgery' },
    { href: '/treatments/non-surgical', label: 'Non-Surgical Treatments' },
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-medical px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-semibold">Dr. Miguel Bañuls</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              UK-trained orthopaedic surgeon specializing in spine, hip, and knee treatments. 
              Personalized care in Jávea, Alicante.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-background/70 hover:text-background transition-colors text-sm">
                Home
              </Link>
              <Link to="/about" className="text-background/70 hover:text-background transition-colors text-sm">
                About Us
              </Link>
              <Link to="/treatments" className="text-background/70 hover:text-background transition-colors text-sm">
                Our Treatments
              </Link>
              <Link to="/contact" className="text-background/70 hover:text-background transition-colors text-sm">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Treatments */}
          <div className="space-y-4">
            <h4 className="font-semibold">Treatments</h4>
            <nav className="flex flex-col gap-2">
              {treatments.map((treatment) => (
                <Link 
                  key={treatment.href}
                  to={treatment.href} 
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  {treatment.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
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
            © {currentYear} Dr. Miguel Bañuls. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Legal Notice</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
