import { CheckCircle } from 'lucide-react';

const About = () => {
  const highlights = [
    'Enfoque honesto y transparente',
    'Técnicas mínimamente invasivas',
    'Atención personalizada a cada paciente',
    'Fellowship en Sudáfrica',
    'Cirugía de columna, cadera y rodilla',
    'Comunicación en inglés y español',
  ];

  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-medical">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                Conóceme
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
                Cirujano Ortopédico Especializado
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Dr. Miguel Bañuls es un cirujano ortopédico formado en UK, especializado en 
                tratamientos de columna, cadera y rodilla.
              </p>
              <p>
                Con más de 20 años de experiencia y una fellowship en Sudáfrica, es conocido 
                por su enfoque honesto, técnicas mínimamente invasivas y atención personalizada 
                adaptada a la vida diaria de cada paciente.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Credentials logos */}
          <div className="space-y-8">
            <div className="bg-background rounded-2xl p-8 shadow-soft border border-border">
              <p className="text-sm text-muted-foreground uppercase tracking-wide mb-6 text-center">
                Formación y Afiliaciones
              </p>
              <div className="grid grid-cols-2 gap-8 items-center justify-items-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center">
                    <span className="font-display text-2xl font-bold text-primary">UCL</span>
                  </div>
                  <span className="text-xs text-muted-foreground text-center">University College London</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center">
                    <span className="font-display text-xl font-bold text-primary">BOA</span>
                  </div>
                  <span className="text-xs text-muted-foreground text-center">British Orthopaedic Association</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center">
                    <span className="font-display text-lg font-bold text-primary">SECOT</span>
                  </div>
                  <span className="text-xs text-muted-foreground text-center">Sociedad Española de Cirugía Ortopédica</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center">
                    <span className="font-display text-lg font-bold text-primary">UoL</span>
                  </div>
                  <span className="text-xs text-muted-foreground text-center">University of Liverpool</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-background rounded-xl shadow-soft border border-border">
                <p className="font-display text-3xl font-bold text-primary">+20</p>
                <p className="text-sm text-muted-foreground">Años de experiencia</p>
              </div>
              <div className="text-center p-4 bg-background rounded-xl shadow-soft border border-border">
                <p className="font-display text-3xl font-bold text-primary">+5K</p>
                <p className="text-sm text-muted-foreground">Cirugías realizadas</p>
              </div>
              <div className="text-center p-4 bg-background rounded-xl shadow-soft border border-border">
                <p className="font-display text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Pacientes satisfechos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
