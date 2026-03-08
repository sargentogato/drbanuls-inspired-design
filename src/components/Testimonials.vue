<script setup lang="ts">
import { Quote, Star } from 'lucide-vue-next';

const testimonials = [
  {
    name: 'John M.',
    country: 'United Kingdom',
    flag: '🇬🇧',
    text: 'After years of hip pain, I finally found the right surgeon. The operation was perfect, and my recovery was much faster than expected. Truly grateful.',
    rating: 5,
  },
  {
    name: 'Susan R.',
    country: 'Netherlands',
    flag: '🇳🇱',
    text: 'I was extremely worried about my spine surgery, but Dr. Bañuls explained everything clearly and set realistic expectations. A year later, I am pain-free and walk daily.',
    rating: 5,
  },
  {
    name: 'Peter H.',
    country: 'Germany',
    flag: '🇩🇪',
    text: 'What impressed me most was the personal attention and honesty. Dr. Bañuls focused on my situation and guided me through each step with confidence.',
    rating: 5,
  },
  {
    name: 'Linda S.',
    country: 'United Kingdom',
    flag: '🇬🇧',
    text: 'Professional, humane, and very clear. Everything was thoroughly explained before my knee replacement. I would recommend him to anyone needing orthopedic surgery abroad.',
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
          Testimonials
        </p>
        <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
          Reviews from International Patients
        </h2>
        <p class="text-muted-foreground text-lg">
          Patients from all over Europe trust Dr. Bañuls for their orthopedic care.
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
