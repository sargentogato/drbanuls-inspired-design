<script setup lang="ts">
import { Quote, Star } from 'lucide-vue-next';

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
]
</script>

<template>
  <section id="testimonials" class="section-padding bg-card">
    <div class="container-medical">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <p class="text-primary font-medium tracking-wide uppercase text-sm">
          Testimonios
        </p>
        <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
          Opiniones de Pacientes Internacionales
        </h2>
        <p class="text-muted-foreground text-lg">
          Pacientes de toda Europa confían en el Dr. Bañuls para su atención ortopédica
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid md:grid-cols-2 gap-6 lg:gap-8">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="bg-background rounded-2xl p-8 shadow-soft border border-border relative"
        >
          <!-- Quote icon -->
          <Quote class="absolute top-6 right-6 w-10 h-10 text-primary/10" />
          
          <!-- Stars -->
          <div class="flex gap-1 mb-4">
            <Star v-for="i in testimonial.rating" :key="i" class="w-5 h-5 fill-gold text-gold" />
          </div>

          <!-- Text -->
          <p class="text-foreground leading-relaxed mb-6 relative z-10">
            "{{ testimonial.text }}"
          </p>

          <!-- Author -->
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
              {{ testimonial.flag }}
            </div>
            <div>
              <p class="font-semibold text-foreground">{{ testimonial.name }}</p>
              <p class="text-sm text-muted-foreground">{{ testimonial.country }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
