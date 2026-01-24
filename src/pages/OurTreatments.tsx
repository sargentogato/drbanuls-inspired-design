import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { ArrowRight } from 'lucide-react';

const treatments = [
  {
    title: 'Spine Surgery',
    description: 'Minimally invasive techniques for herniated discs, vertebral fractures, and chronic back pain — especially tailored for older patients seeking lasting relief.',
    href: '/treatments/spine-surgery',
    icon: '🦴',
    features: ['Herniated Discs', 'Spinal Stenosis', 'Vertebral Fractures', 'Chronic Back Pain'],
  },
  {
    title: 'Knee Surgery',
    description: 'From keyhole procedures to full joint replacement – modern techniques for lasting stability, pain relief, and faster recovery.',
    href: '/treatments/knee-surgery',
    icon: '🦵',
    features: ['ACL Reconstruction', 'Meniscus Repair', 'Total Knee Replacement', 'Arthroscopy'],
  },
  {
    title: 'Hip Replacement Surgery',
    description: 'Personalized prosthetic solutions to relieve pain, improve mobility, and restore quality of life in patients with hip degeneration or injury.',
    href: '/treatments/hip-replacement',
    icon: '🏃',
    features: ['Total Hip Replacement', 'Partial Hip Replacement', 'Hip Resurfacing', 'Revision Surgery'],
  },
  {
    title: 'Hand & Foot Surgery',
    description: 'Effective treatment for deformities, tendon injuries, and nerve compression, with a focus on precision and rapid recovery.',
    href: '/treatments/hand-foot',
    icon: '🤲',
    features: ['Carpal Tunnel', 'Trigger Finger', 'Bunion Correction', 'Tendon Repair'],
  },
  {
    title: 'Non-Surgical Treatments',
    description: 'Conservative treatment options including injections, physical therapy programs, and pain management for patients who may not require surgery.',
    href: '/treatments/non-surgical',
    icon: '💉',
    features: ['PRP Injections', 'Cortisone Injections', 'Physical Therapy', 'Pain Management'],
  },
];

const OurTreatments = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          title="Our Treatments"
          subtitle="Comprehensive orthopaedic care using the latest techniques and personalized treatment plans"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Our Treatments' }
          ]}
        />

        {/* Treatments Grid */}
        <section className="section-padding bg-card">
          <div className="container-medical">
            <div className="space-y-8">
              {treatments.map((treatment, index) => (
                <Link 
                  key={index}
                  to={treatment.href}
                  className="card-medical p-8 block group"
                >
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                    {/* Icon */}
                    <div className="text-5xl lg:text-6xl">{treatment.icon}</div>
                    
                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {treatment.title}
                      </h2>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {treatment.description}
                      </p>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {treatment.features.map((feature, i) => (
                          <span 
                            key={i}
                            className="bg-background px-3 py-1 rounded-full text-sm text-muted-foreground border border-border"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-primary font-medium pt-2 group/btn">
                        Learn More
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="section-padding bg-background">
          <div className="container-medical">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-primary font-medium tracking-wide uppercase text-sm">
                  Our Approach
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                  Personalized Treatment Plans
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Every patient is unique, and so is their treatment plan. Dr. Bañuls takes 
                  the time to understand your specific condition, lifestyle, and goals before 
                  recommending any treatment.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you need surgery or can benefit from conservative treatment, you'll 
                  receive honest advice and clear explanations every step of the way.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card p-6 rounded-xl border border-border text-center">
                  <p className="font-display text-3xl font-bold text-primary">98%</p>
                  <p className="text-sm text-muted-foreground">Patient Satisfaction</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border text-center">
                  <p className="font-display text-3xl font-bold text-primary">+5K</p>
                  <p className="text-sm text-muted-foreground">Surgeries Performed</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border text-center">
                  <p className="font-display text-3xl font-bold text-primary">+20</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border text-center">
                  <p className="font-display text-3xl font-bold text-primary">UK</p>
                  <p className="text-sm text-muted-foreground">Trained & Certified</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection 
          title="Not Sure Which Treatment You Need?"
          subtitle="Book a consultation to discuss your symptoms and explore your options."
        />
      </main>
      <Footer />
    </div>
  );
};

export default OurTreatments;
