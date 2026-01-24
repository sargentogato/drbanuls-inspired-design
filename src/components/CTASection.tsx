import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

const CTASection = ({ 
  title = "Ready to Take the Next Step?",
  subtitle = "Book a consultation with Dr. Bañuls to discuss your treatment options."
}: CTASectionProps) => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-medical text-center">
        <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
          {title}
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/34606914833" target="_blank" rel="noopener noreferrer">
            <Button className="btn-whatsapp flex items-center gap-2 text-base">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </Button>
          </a>
          <a href="tel:+34606914833">
            <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-base px-6 py-3">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
