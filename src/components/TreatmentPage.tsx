import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface TreatmentPageProps {
  title: string;
  subtitle: string;
  icon: string;
  description: string[];
  conditions: string[];
  procedures: {
    title: string;
    description: string;
  }[];
  benefits: string[];
  relatedTreatments: {
    title: string;
    href: string;
  }[];
}

const TreatmentPage = ({
  title,
  subtitle,
  icon,
  description,
  conditions,
  procedures,
  benefits,
  relatedTreatments,
}: TreatmentPageProps) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          title={title}
          subtitle={subtitle}
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Treatments', href: '/treatments' },
            { label: title }
          ]}
        />

        {/* Overview Section */}
        <section className="section-padding bg-card">
          <div className="container-medical">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div className="flex items-start gap-6">
                  <span className="text-6xl">{icon}</span>
                  <div className="space-y-4">
                    {description.map((paragraph, index) => (
                      <p key={index} className="text-muted-foreground text-lg leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Conditions Treated */}
                <div className="bg-background rounded-2xl p-8 border border-border">
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    Conditions Treated
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {conditions.map((condition, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{condition}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Procedures */}
                <div>
                  <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                    Procedures & Techniques
                  </h2>
                  <div className="space-y-4">
                    {procedures.map((procedure, index) => (
                      <div key={index} className="card-medical p-6">
                        <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                          {procedure.title}
                        </h3>
                        <p className="text-muted-foreground">{procedure.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Benefits */}
                <div className="bg-primary text-primary-foreground rounded-2xl p-6">
                  <h3 className="font-display text-xl font-semibold mb-4">
                    Why Choose Dr. Bañuls?
                  </h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Contact */}
                <div className="bg-background rounded-2xl p-6 border border-border">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                    Book a Consultation
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Ready to discuss your treatment options? Contact us today.
                  </p>
                  <div className="space-y-3">
                    <a 
                      href="https://wa.me/34606914833" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-whatsapp flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm"
                    >
                      WhatsApp Us
                    </a>
                    <a 
                      href="tel:+34606914833"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      Call +34 606 914 833
                    </a>
                  </div>
                </div>

                {/* Related Treatments */}
                <div className="bg-background rounded-2xl p-6 border border-border">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                    Related Treatments
                  </h3>
                  <div className="space-y-2">
                    {relatedTreatments.map((treatment, index) => (
                      <Link
                        key={index}
                        to={treatment.href}
                        className="flex items-center justify-between py-2 text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <span>{treatment.title}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default TreatmentPage;
