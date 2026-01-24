<script setup lang="ts">
import { CheckCircle } from 'lucide-vue-next';

const highlights = [
  'Enfoque honesto y transparente',
  'Técnicas mínimamente invasivas',
  'Atención personalizada a cada paciente',
  'Fellowship en Sudáfrica',
  'Cirugía de columna, cadera y rodilla',
  'Comunicación en inglés y español',
]
</script>

<template>
  <section id="about" class="section-padding bg-card">
    <div class="container-medical">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Content -->
        <div class="space-y-6">
          <div class="space-y-4">
            <p class="text-primary font-medium tracking-wide uppercase text-sm">
              Conóceme
            </p>
            <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
              Cirujano Ortopédico Especializado
            </h2>
          </div>

          <div class="space-y-4 text-muted-foreground text-lg leading-relaxed">
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

          <!-- Highlights grid -->
          <div class="grid sm:grid-cols-2 gap-3 pt-4">
            <div v-for="(item, index) in highlights" :key="index" class="flex items-center gap-3">
              <CheckCircle class="w-5 h-5 text-accent flex-shrink-0" />
              <span class="text-foreground font-medium">{{ item }}</span>
            </div>
          </div>
        </div>

        <!-- Credentials logos -->
        <div class="space-y-8">
          <div class="bg-background rounded-2xl p-8 shadow-soft border border-border">
            <p class="text-sm text-muted-foreground uppercase tracking-wide mb-6 text-center">
              Formación y Afiliaciones
            </p>
            <div class="grid grid-cols-2 gap-8 items-center justify-items-center">
              <div class="flex flex-col items-center gap-2">
                <div class="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center">
                  <span class="font-display text-2xl font-bold text-primary">UCL</span>
                </div>
                <span class="text-xs text-muted-foreground text-center">University College London</span>
              </div>
              <div class="flex flex-col items-center gap-2">
                <div class="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center">
                  <span class="font-display text-xl font-bold text-primary">BOA</span>
                </div>
                <span class="text-xs text-muted-foreground text-center">British Orthopaedic Association</span>
              </div>
              <div class="flex flex-col items-center gap-2">
                <div class="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center">
                  <span class="font-display text-lg font-bold text-primary">SECOT</span>
                </div>
                <span class="text-xs text-muted-foreground text-center">Sociedad Española de Cirugía Ortopédica</span>
              </div>
              <div class="flex flex-col items-center gap-2">
                <div class="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center">
                  <span class="font-display text-lg font-bold text-primary">UoL</span>
                </div>
                <span class="text-xs text-muted-foreground text-center">University of Liverpool</span>
              </div>
            </div>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-4">
            <div class="text-center p-4 bg-background rounded-xl shadow-soft border border-border">
              <p class="font-display text-3xl font-bold text-primary">+20</p>
              <p class="text-sm text-muted-foreground">Años de experiencia</p>
            </div>
            <div class="text-center p-4 bg-background rounded-xl shadow-soft border border-border">
              <p class="font-display text-3xl font-bold text-primary">+5K</p>
              <p class="text-sm text-muted-foreground">Cirugías realizadas</p>
            </div>
            <div class="text-center p-4 bg-background rounded-xl shadow-soft border border-border">
              <p class="font-display text-3xl font-bold text-primary">98%</p>
              <p class="text-sm text-muted-foreground">Pacientes satisfechos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
