import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import { MapPin, Phone, Clock, MessageCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          title="Contact Us"
          subtitle="Get in touch to book your consultation or ask any questions"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Contact Us' }
          ]}
        />

        {/* Contact Section */}
        <section className="section-padding bg-card">
          <div className="container-medical">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                    Book Your Consultation
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Private appointments available every Friday at Euroclínica Jávea. 
                    Contact us today to schedule your visit.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg">Location</p>
                      <p className="text-muted-foreground">Euroclínica Jávea</p>
                      <p className="text-muted-foreground">Av. Estrasburgo, Local 2</p>
                      <p className="text-muted-foreground">03730 Xàbia, Alicante, Spain</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg">Phone</p>
                      <a href="tel:+34606914833" className="text-muted-foreground hover:text-primary transition-colors text-lg">
                        +34 606 914 833
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg">Email</p>
                      <a href="mailto:info@drbanuls.com" className="text-muted-foreground hover:text-primary transition-colors">
                        info@drbanuls.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-lg">Consultation Hours</p>
                      <p className="text-muted-foreground">Friday: 9:00 AM - 2:00 PM</p>
                      <p className="text-muted-foreground">Friday: 4:00 PM - 8:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="https://wa.me/34606914833" target="_blank" rel="noopener noreferrer">
                    <Button className="btn-whatsapp flex items-center gap-2 text-base px-8">
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp
                    </Button>
                  </a>
                  <a href="tel:+34606914833">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base px-8 py-3">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </Button>
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="space-y-6">
                <div className="bg-background rounded-2xl overflow-hidden shadow-elevated border border-border h-[400px] lg:h-full min-h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.9080694833187!2d0.16661231525707548!3d38.79042647958808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129e1b3b30795555%3A0xa044ddb730f0f988!2sAv.%20Estrasburgo%2C%20Local%202%2C%2003730%20X%C3%A0bia%2C%20Alicante!5e0!3m2!1sen!2ses!4v1640000000000!5m2!1sen!2ses"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Euroclínica Jávea Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* International Patients Section */}
        <section className="section-padding bg-background">
          <div className="container-medical">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
                International Patients
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                We Welcome Patients from Across Europe
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Dr. Bañuls regularly treats patients from the UK, Germany, Netherlands, Belgium, 
                and other European countries. Our team can assist with travel arrangements and 
                provide all consultations in English.
              </p>
              <div className="flex justify-center gap-4 text-4xl">
                <span>🇬🇧</span>
                <span>🇩🇪</span>
                <span>🇳🇱</span>
                <span>🇧🇪</span>
                <span>🇫🇷</span>
                <span>🇪🇸</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
