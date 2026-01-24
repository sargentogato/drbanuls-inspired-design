<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';

const services = [
  {
    title: 'Cirugía de Columna',
    description: 'Técnicas mínimamente invasivas para hernias discales, fracturas vertebrales y dolor crónico de espalda — especialmente en pacientes mayores.',
    icon: '🦴',
  },
  {
    title: 'Cirugía de Rodilla',
    description: 'Desde procedimientos artroscópicos hasta reemplazo total de articulación – técnicas modernas para estabilidad duradera y recuperación más rápida.',
    icon: '🦵',
  },
  {
    title: 'Reemplazo de Cadera',
    description: 'Soluciones protésicas personalizadas para aliviar el dolor, mejorar la movilidad y restaurar la calidad de vida en pacientes con degeneración o lesión de cadera.',
    icon: '🏃',
  },
  {
    title: 'Cirugía de Mano y Pie',
    description: 'Tratamiento efectivo para deformidades, lesiones de tendones y compresión nerviosa, con enfoque en precisión y velocidad de recuperación.',
    icon: '🤲',
  },
]
</script>

<template>
  <section id="services" class="section-padding bg-background">
    <div class="container-medical">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <p class="text-primary font-medium tracking-wide uppercase text-sm">
          Tratamientos
        </p>
        <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
          Especialidades Ortopédicas
        </h2>
        <p class="text-muted-foreground text-lg">
          Ofrecemos tratamientos especializados con técnicas de vanguardia y atención personalizada
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 gap-6 lg:gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="card-medical p-8 group cursor-pointer"
        >
          <div class="flex items-start gap-6">
            <div class="text-4xl">{{ service.icon }}</div>
            <div class="flex-1 space-y-3">
              <h3 class="font-display text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {{ service.title }}
              </h3>
              <p class="text-muted-foreground leading-relaxed">
                {{ service.description }}
              </p>
              <button class="flex items-center gap-2 text-primary font-medium text-sm mt-4 group/btn">
                Más información
                <ArrowRight class="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="mt-16 text-center">
        <p class="text-muted-foreground mb-4">
          ¿No está seguro de qué tratamiento necesita?
        </p>
        <a 
          href="https://wa.me/34606914833" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 btn-primary"
        >
          Consulte con el Dr. Bañuls
          <ArrowRight class="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
</template>
