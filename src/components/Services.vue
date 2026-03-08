<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';

const services = [
  {
    title: 'Spine Surgery',
    description: 'Minimally invasive techniques for herniated discs, vertebral fractures, and chronic back pain — especially in older patients.',
    icon: '🦴',
    href: '/treatments/spine-surgery'
  },
  {
    title: 'Knee Surgery',
    description: 'From arthroscopic procedures to total joint replacement – modern techniques for lasting stability and faster recovery.',
    icon: '🦵',
    href: '/treatments/knee-surgery'
  },
  {
    title: 'Hip Replacement',
    description: 'Customized prosthetic solutions to relieve pain, improve mobility, and restore quality of life in patients with hip degeneration or injury.',
    icon: '🏃',
    href: '/treatments/hip-replacement'
  },
  {
    title: 'Hand and Foot Surgery',
    description: 'Effective treatment for deformities, tendon injuries, and nerve compression, with a focus on precision and speed of recovery.',
    icon: '🤲',
    href: '/treatments/hand-foot'
  },
]
</script>

<template>
  <section id="services" class="section-padding bg-background">
    <div class="container-medical">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <p class="text-primary font-medium tracking-wide uppercase text-sm">
          Treatments
        </p>
        <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
          Orthopaedic Specialties
        </h2>
        <p class="text-muted-foreground text-lg">
          We offer specialized treatments with cutting-edge techniques and personalized care.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 gap-6 lg:gap-8">
        <router-link
          v-for="(service, index) in services"
          :key="index"
          :to="service.href"
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
              <div class="flex items-center gap-2 text-primary font-medium text-sm mt-4 group-hover:translate-x-1 transition-transform">
                <span>Learn more</span>
                <ArrowRight class="w-4 h-4" />
              </div>
            </div>
          </div>
        </router-link>
      </div>

      <!-- Bottom CTA -->
      <div class="mt-16 text-center">
        <p class="text-muted-foreground mb-4">
          Not sure which treatment you need?
        </p>
        <a 
          href="https://wa.me/34606914833" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 btn-primary"
        >
          Consult with Dr. Bañuls
          <ArrowRight class="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
</template>
