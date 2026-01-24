<script setup lang="ts">
import CTASection from '@/components/CTASection.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import PageHero from '@/components/PageHero.vue'
import { ArrowRight } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

const treatments = [
  {
    title: 'Spine Surgery',
    description: 'Minimally invasive techniques for herniated discs, vertebral fractures, and chronic back pain — especially tailored for older patients seeking lasting relief.',
    href: '/treatments/spine-surgery',
    icon: '🦴',
    features: ['Herniated Discs', 'Spinal Stenosis', 'Vertebral Fractures', 'Chronic Back Pain'],
  },
  {
    title: 'Knee Surgery',
    description: 'From keyhole procedures to full joint replacement – modern techniques for lasting stability, pain relief, and faster recovery.',
    href: '/treatments/knee-surgery',
    icon: '🦵',
    features: ['ACL Reconstruction', 'Meniscus Repair', 'Total Knee Replacement', 'Arthroscopy'],
  },
  {
    title: 'Hip Replacement Surgery',
    description: 'Personalized prosthetic solutions to relieve pain, improve mobility, and restore quality of life in patients with hip degeneration or injury.',
    href: '/treatments/hip-replacement',
    icon: '🏃',
    features: ['Total Hip Replacement', 'Partial Hip Replacement', 'Hip Resurfacing', 'Revision Surgery'],
  },
  {
    title: 'Hand & Foot Surgery',
    description: 'Effective treatment for deformities, tendon injuries, and nerve compression, with a focus on precision and rapid recovery.',
    href: '/treatments/hand-foot',
    icon: '🤲',
    features: ['Carpal Tunnel', 'Trigger Finger', 'Bunion Correction', 'Tendon Repair'],
  },
  {
    title: 'Non-Surgical Treatments',
    description: 'Conservative treatment options including injections, physical therapy programs, and pain management for patients who may not require surgery.',
    href: '/treatments/non-surgical',
    icon: '💉',
    features: ['PRP Injections', 'Cortisone Injections', 'Physical Therapy', 'Pain Management'],
  },
]
</script>

<template>
  <div class="min-h-screen">
    <Header />
    <main>
      <PageHero
        title="Our Treatments"
        subtitle="Comprehensive orthopaedic care using the latest techniques and personalized treatment plans"
        :breadcrumbs="[
          { label: 'Home', href: '/' },
          { label: 'Our Treatments' }
        ]"
      />

      <!-- Treatments Grid -->
      <section class="section-padding bg-card">
        <div class="container-medical">
          <div class="space-y-8">
            <RouterLink 
              v-for="(treatment, index) in treatments"
              :key="index"
              :to="treatment.href"
              class="card-medical p-8 block group"
            >
              <div class="flex flex-col lg:flex-row gap-6 lg:gap-10">
                <!-- Icon -->
                <div class="text-5xl lg:text-6xl">{{ treatment.icon }}</div>
                
                <!-- Content -->
                <div class="flex-1 space-y-4">
                  <h2 class="font-display text-2xl md:text-3xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {{ treatment.title }}
                  </h2>
                  <p class="text-muted-foreground text-lg leading-relaxed">
                    {{ treatment.description }}
                  </p>
                  
                  <!-- Features -->
                  <div class="flex flex-wrap gap-2 pt-2">
                    <span 
                      v-for="(feature, i) in treatment.features"
                      :key="i"
                      class="bg-background px-3 py-1 rounded-full text-sm text-muted-foreground border border-border"
                    >
                      {{ feature }}
                    </span>
                  </div>

                  <div class="flex items-center gap-2 text-primary font-medium pt-2 group/btn">
                    Learn More
                    <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
      </section>

      <!-- Approach Section -->
      <section class="section-padding bg-background">
        <div class="container-medical">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
              <p class="text-primary font-medium tracking-wide uppercase text-sm">
                Our Approach
              </p>
              <h2 class="font-display text-3xl md:text-4xl font-semibold text-foreground">
                Personalized Treatment Plans
              </h2>
              <p class="text-muted-foreground text-lg leading-relaxed">
                Every patient is unique, and so is their treatment plan. Dr. Bañuls takes 
                the time to understand your specific condition, lifestyle, and goals before 
                recommending any treatment.
              </p>
              <p class="text-muted-foreground leading-relaxed">
                Whether you need surgery or can benefit from conservative treatment, you'll 
                receive honest advice and clear explanations every step of the way.
              </p>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-card p-6 rounded-xl border border-border text-center">
                <p class="font-display text-3xl font-bold text-primary">98%</p>
                <p class="text-sm text-muted-foreground">Patient Satisfaction</p>
              </div>
              <div class="bg-card p-6 rounded-xl border border-border text-center">
                <p class="font-display text-3xl font-bold text-primary">+5K</p>
                <p class="text-sm text-muted-foreground">Surgeries Performed</p>
              </div>
              <div class="bg-card p-6 rounded-xl border border-border text-center">
                <p class="font-display text-3xl font-bold text-primary">+20</p>
                <p class="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div class="bg-card p-6 rounded-xl border border-border text-center">
                <p class="font-display text-3xl font-bold text-primary">UK</p>
                <p class="text-sm text-muted-foreground">Trained & Certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Not Sure Which Treatment You Need?"
        subtitle="Book a consultation to discuss your symptoms and explore your options."
      />
    </main>
    <Footer />
  </div>
</template>
