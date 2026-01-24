import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href?: string }[];
  backgroundImage?: string;
}

const PageHero = ({ title, subtitle, breadcrumbs, backgroundImage }: PageHeroProps) => {
  return (
    <section className="relative pt-20 pb-16 md:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary to-background" />
      {backgroundImage && (
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      )}
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-medical relative z-10 px-4 pt-12">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm mb-6">
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className="flex items-center gap-2">
              {crumb.href ? (
                <Link to={crumb.href} className="text-muted-foreground hover:text-primary transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-foreground font-medium">{crumb.label}</span>
              )}
              {index < breadcrumbs.length - 1 && (
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              )}
            </span>
          ))}
        </nav>

        {/* Title */}
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
