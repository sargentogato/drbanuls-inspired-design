import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-medical">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                Contacto
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
                Reserve su Consulta
              </h2>
              <p className="text-muted-foreground text-lg">
                Citas privadas cada viernes en Euroclínica Jávea. 
                Contacte con nosotros para programar su visita.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Ubicación</p>
                  <p className="text-muted-foreground">Av. Estrasburgo, Local 2, 03730 Xàbia, Alicante</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Teléfono</p>
                  <a href="tel:+34606914833" className="text-muted-foreground hover:text-primary transition-colors">
                    +34 606 914 833
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Horario de Consulta</p>
                  <p className="text-muted-foreground">Viernes: 9:00 - 14:00 | 16:00 - 20:00</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="https://wa.me/34606914833" target="_blank" rel="noopener noreferrer">
                <Button className="btn-whatsapp flex items-center gap-2 text-base">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Button>
              </a>
              <a href="tel:+34606914833">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base px-6 py-3">
                  <Phone className="w-5 h-5 mr-2" />
                  Llamar
                </Button>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="bg-card rounded-2xl overflow-hidden shadow-elevated border border-border h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.9080694833187!2d0.16661231525707548!3d38.79042647958808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129e1b3b30795555%3A0xa044ddb730f0f988!2sAv.%20Estrasburgo%2C%20Local%202%2C%2003730%20X%C3%A0bia%2C%20Alicante!5e0!3m2!1sen!2ses!4v1640000000000!5m2!1sen!2ses"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Euroclínica Jávea"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
