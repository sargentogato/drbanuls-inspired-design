<script setup lang="ts">
import CTASection from '@/components/CTASection.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import PageHero from '@/components/PageHero.vue'
import { ArrowRight, CheckCircle } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

interface RelatedTreatment {
  title: string
  href: string
}

interface Procedure {
  title: string
  description: string
}

interface TreatmentPageProps {
  title: string
  subtitle: string
  icon: string
  description: string[]
  conditions: string[]
  procedures: Procedure[]
  benefits: string[]
  relatedTreatments: RelatedTreatment[]
}

defineProps<TreatmentPageProps>()
</script>

<template>
  <div class="min-h-screen">
    <Header />
    <main>
      <PageHero
        :title="title"
        :subtitle="subtitle"
        :breadcrumbs="[
          { label: 'Home', href: '/' },
          { label: 'Treatments', href: '/treatments' },
          { label: title }
        ]"
      />

      <!-- Overview Section -->
      <section class="section-padding bg-card">
        <div class="container-medical">
          <div class="grid lg:grid-cols-3 gap-12">
            <!-- Main Content -->
            <div class="lg:col-span-2 space-y-8">
              <div class="flex items-start gap-6">
                <span class="text-6xl">{{ icon }}</span>
                <div class="space-y-4">
                  <p v-for="(paragraph, index) in description" :key="index" class="text-muted-foreground text-lg leading-relaxed">
                    {{ paragraph }}
                  </p>
                </div>
              </div>

              <!-- Conditions Treated -->
              <div class="bg-background rounded-2xl p-8 border border-border">
                <h2 class="font-display text-2xl font-semibold text-foreground mb-6">
                  Conditions Treated
                </h2>
                <div class="grid md:grid-cols-2 gap-4">
                  <div v-for="(condition, index) in conditions" :key="index" class="flex items-center gap-3">
                    <CheckCircle class="w-5 h-5 text-accent flex-shrink-0" />
                    <span class="text-foreground">{{ condition }}</span>
                  </div>
                </div>
              </div>

              <!-- Procedures -->
              <div>
                <h2 class="font-display text-2xl font-semibold text-foreground mb-6">
                  Procedures & Techniques
                </h2>
                <div class="space-y-4">
                  <div v-for="(procedure, index) in procedures" :key="index" class="card-medical p-6">
                    <h3 class="font-display text-xl font-semibold text-foreground mb-2">
                      {{ procedure.title }}
                    </h3>
                    <p class="text-muted-foreground">{{ procedure.description }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Sidebar -->
            <div class="space-y-6">
              <!-- Benefits -->
              <div class="bg-primary text-primary-foreground rounded-2xl p-6">
                <h3 class="font-display text-xl font-semibold mb-4">
                  Why Choose Dr. Bañuls?
                </h3>
                <ul class="space-y-3">
                  <li v-for="(benefit, index) in benefits" :key="index" class="flex items-start gap-3">
                    <CheckCircle class="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span class="text-sm">{{ benefit }}</span>
                  </li>
                </ul>
              </div>

              <!-- Quick Contact -->
              <div class="bg-background rounded-2xl p-6 border border-border">
                <h3 class="font-display text-xl font-semibold text-foreground mb-4">
                  Book a Consultation
                </h3>
                <p class="text-muted-foreground text-sm mb-4">
                  Ready to discuss your treatment options? Contact us today.
                </p>
                <div class="space-y-3">
                  <a 
                    href="https://wa.me/34606914833" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="btn-whatsapp flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm"
                  >
                    WhatsApp Us
                  </a>
                  <a 
                    href="tel:+34606914833"
                    class="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Call +34 606 914 833
                  </a>
                </div>
              </div>

              <!-- Related Treatments -->
              <div class="bg-background rounded-2xl p-6 border border-border">
                <h3 class="font-display text-xl font-semibold text-foreground mb-4">
                  Related Treatments
                </h3>
                <div class="space-y-2">
                  <RouterLink
                    v-for="(treatment, index) in relatedTreatments"
                    :key="index"
                    :to="treatment.href"
                    class="flex items-center justify-between py-2 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <span>{{ treatment.title }}</span>
                    <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
    <Footer />
  </div>
</template>
