import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';
import { CheckCircle, Award, GraduationCap, Heart, Users } from 'lucide-react';
import doctorImage from '@/assets/doctor-portrait.jpg';

const AboutUs = () => {
  const values = [
    {
      icon: Heart,
      title: 'Honest Approach',
      description: 'Clear, transparent communication about your condition and treatment options.'
    },
    {
      icon: Users,
      title: 'Personalized Care',
      description: 'Treatment plans tailored to your unique lifestyle and daily activities.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Commitment to the highest standards of surgical care and patient outcomes.'
    },
    {
      icon: GraduationCap,
      title: 'Continuous Learning',
      description: 'Staying current with the latest techniques and medical advancements.'
    },
  ];

  const timeline = [
    { year: 'Education', text: 'Trained at Cambridge, Liverpool, and London' },
    { year: 'Fellowship', text: 'Specialized fellowship in South Africa' },
    { year: 'UK Certification', text: 'Obtained UK orthopaedic surgery certification' },
    { year: 'Present', text: 'Private practice in Jávea, serving international patients' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PageHero
          title="About Dr. Miguel Bañuls"
          subtitle="UK-trained orthopaedic surgeon with over 20 years of experience"
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'About Us' }
          ]}
        />

        {/* Main About Section */}
        <section className="section-padding bg-card">
          <div className="container-medical">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image */}
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={doctorImage}
                    alt="Dr. Miguel Bañuls"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating stats */}
                <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-elevated border border-border">
                  <div className="text-center">
                    <p className="font-display text-4xl font-bold text-primary">+20</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                    A Surgeon You Can Trust
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Dr. Miguel Bañuls is a UK-trained orthopaedic surgeon who brings together 
                    exceptional medical training, extensive experience, and a deeply personal 
                    approach to patient care.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Having trained at some of the most prestigious institutions in the UK, 
                    including Cambridge, Liverpool, and London, Dr. Bañuls combines world-class 
                    surgical skills with a warm, honest approach that puts patients at ease.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    His fellowship in South Africa further expanded his expertise, particularly 
                    in complex cases and minimally invasive techniques. Today, he serves patients 
                    from across Europe at his private practice in Jávea, Alicante.
                  </p>
                </div>

                {/* Affiliations */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {['BOA Member', 'SECOT Member', 'UK Certified'].map((item) => (
                    <div key={item} className="flex items-center gap-2 bg-background px-4 py-2 rounded-full border border-border">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-background">
          <div className="container-medical">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
                Our Philosophy
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                Values That Guide Our Care
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="card-medical p-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="section-padding bg-card">
          <div className="container-medical">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
                Professional Journey
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
                Training & Experience
              </h2>
            </div>

            <div className="max-w-2xl mx-auto">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                      {index + 1}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                      {item.year}
                    </h3>
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
