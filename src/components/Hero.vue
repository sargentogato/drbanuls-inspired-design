<script setup lang="ts">
import doctorImage from '@/assets/doctor-portrait.jpg';
import Button from '@/components/ui/Button.vue';
import { Award, GraduationCap, Stethoscope } from 'lucide-vue-next';

const credentials = [
  { icon: GraduationCap, text: 'Formación en UK' },
  { icon: Stethoscope, text: '+20 años experiencia' },
  { icon: Award, text: 'Especialista en Columna, Cadera y Rodilla' },
]
</script>

<template>
  <section class="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <!-- Background gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
    
    <!-- Decorative elements -->
    <div class="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    <div class="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

    <div class="container-medical relative z-10 px-4">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Content -->
        <div class="space-y-8 animate-fade-up">
          <div class="space-y-4">
            <p class="text-primary font-medium tracking-wide uppercase text-sm">
              Cirujano Ortopédico en Jávea
            </p>
            <h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
              Dr. Miguel Bañuls
            </h1>
            <p class="text-xl md:text-2xl text-muted-foreground font-light">
              Atención personalizada · Técnicas mínimamente invasivas · Resultados excepcionales
            </p>
          </div>

          <p class="text-muted-foreground text-lg leading-relaxed max-w-xl">
            Formado en Cambridge, Liverpool, Londres y Sudáfrica. Cirujano ortopédico certificado en UK 
            con más de 20 años de experiencia en tratamientos de columna, cadera y rodilla.
          </p>

          <!-- Credentials -->
          <div class="flex flex-wrap gap-4">
            <div
              v-for="(cred, index) in credentials"
              :key="index"
              class="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border shadow-soft"
            >
              <component :is="cred.icon" class="w-4 h-4 text-primary" />
              <span class="text-sm font-medium text-foreground">{{ cred.text }}</span>
            </div>
          </div>

          <!-- CTAs -->
          <div class="flex flex-wrap gap-4 pt-4">
            <a href="https://wa.me/34606914833" target="_blank" rel="noopener noreferrer">
              <Button class="btn-whatsapp flex items-center gap-2 text-base">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </Button>
            </a>
            <a href="tel:+34606914833">
              <Button variant="outline" class="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base px-6 py-3">
                Llamar Ahora
              </Button>
            </a>
          </div>
        </div>

        <!-- Image -->
        <div class="relative animate-fade-in" style="animation-delay: 0.3s">
          <div class="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
            <!-- Image container with decorative border -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-3" />
            <div class="relative h-full rounded-2xl overflow-hidden shadow-elevated border-4 border-card">
              <img
                :src="doctorImage"
                alt="Dr. Miguel Bañuls - Cirujano Ortopédico"
                class="w-full h-full object-cover"
              />
            </div>
            
            <!-- Floating badge -->
            <div class="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-elevated border border-border">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award class="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p class="text-sm font-semibold text-foreground">Certificado UK</p>
                  <p class="text-xs text-muted-foreground">BOA & SECOT Member</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
