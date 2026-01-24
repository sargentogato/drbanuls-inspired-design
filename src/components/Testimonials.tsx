import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'John M.',
    country: 'Reino Unido',
    flag: '🇬🇧',
    text: 'Después de años de dolor de cadera, finalmente encontré al cirujano adecuado. La operación fue perfecta y mi recuperación fue mucho más rápida de lo esperado. Verdaderamente agradecido.',
    rating: 5,
  },
  {
    name: 'Susan R.',
    country: 'Países Bajos',
    flag: '🇳🇱',
    text: 'Estaba extremadamente preocupada por mi cirugía de columna, pero el Dr. Bañuls explicó todo claramente y estableció expectativas realistas. Un año después, estoy sin dolor y camino a diario.',
    rating: 5,
  },
  {
    name: 'Peter H.',
    country: 'Alemania',
    flag: '🇩🇪',
    text: 'Lo que más me impresionó fue la atención personal y la honestidad. El Dr. Bañuls se centró en mi situación y me guió a través de cada paso con confianza.',
    rating: 5,
  },
  {
    name: 'Linda S.',
    country: 'Reino Unido',
    flag: '🇬🇧',
    text: 'Profesional, humano y muy claro. Todo fue completamente explicado antes de mi reemplazo de rodilla. Lo recomendaría a cualquiera que necesite cirugía ortopédica en el extranjero.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-card">
      <div className="container-medical">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            Testimonios
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
            Opiniones de Pacientes Internacionales
          </h2>
          <p className="text-muted-foreground text-lg">
            Pacientes de toda Europa confían en el Dr. Bañuls para su atención ortopédica
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 shadow-soft border border-border relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                  {testimonial.flag}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
