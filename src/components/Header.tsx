import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { 
      href: '/treatments', 
      label: 'Our Treatments',
      submenu: [
        { href: '/treatments/spine-surgery', label: 'Spine Surgery' },
        { href: '/treatments/knee-surgery', label: 'Knee Surgery' },
        { href: '/treatments/hip-replacement', label: 'Hip Replacement Surgery' },
        { href: '/treatments/hand-foot', label: 'Hand & Foot Surgery' },
        { href: '/treatments/non-surgical', label: 'Non-Surgical Treatments' },
      ]
    },
    { href: '/contact', label: 'Contact Us' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container-medical">
        <div className="flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-xl md:text-2xl font-semibold text-foreground">
              Dr. Miguel Bañuls
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                {link.submenu ? (
                  <>
                    <Link
                      to={link.href}
                      className={`flex items-center gap-1 text-sm font-medium transition-colors py-2 ${
                        isActive(link.href) || location.pathname.startsWith('/treatments/')
                          ? 'text-primary'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </Link>
                    {/* Dropdown */}
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-card rounded-xl shadow-elevated border border-border py-2 min-w-[220px]">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.href}
                            to={sublink.href}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              isActive(sublink.href)
                                ? 'text-primary bg-primary/5'
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                            }`}
                          >
                            {sublink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className={`text-sm font-medium transition-colors py-2 ${
                      isActive(link.href)
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+34606914833">
              <Button className="btn-primary flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Book Consultation
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 px-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.submenu ? (
                    <>
                      <button
                        onClick={() => setIsTreatmentsOpen(!isTreatmentsOpen)}
                        className="flex items-center justify-between w-full text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${isTreatmentsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isTreatmentsOpen && (
                        <div className="pl-4 space-y-1">
                          <Link
                            to={link.href}
                            className="block text-sm text-muted-foreground hover:text-foreground py-2"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            All Treatments
                          </Link>
                          {link.submenu.map((sublink) => (
                            <Link
                              key={sublink.href}
                              to={sublink.href}
                              className="block text-sm text-muted-foreground hover:text-foreground py-2"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {sublink.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <a href="tel:+34606914833" className="mt-4">
                <Button className="btn-primary flex items-center justify-center gap-2 w-full">
                  <Phone className="w-4 h-4" />
                  Book Consultation
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
