<script setup lang="ts">
import doctorImage from '@/assets/doctor-portrait.jpg'
import CTASection from '@/components/CTASection.vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import PageHero from '@/components/PageHero.vue'
import { Award, CheckCircle, GraduationCap, Heart, Users } from 'lucide-vue-next'

const values = [
  {
    icon: Heart,
    title: 'Honest Approach',
    description: 'Clear, transparent communication about your condition and treatment options.'
  },
  {
    icon: Users,
    title: 'Personalized Care',
    description: 'Treatment plans tailored to your unique lifestyle and daily activities.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Commitment to the highest standards of surgical care and patient outcomes.'
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learning',
    description: 'Staying current with the latest techniques and medical advancements.'
  },
]

const timeline = [
  { title: 'Graduation', text: 'Graduated from the University of Valencia Medical School in 1989.' },
  { title: 'UK Training', text: 'Trained in Orthopaedic and Trauma Surgery in Cambridgeshire, Nottinghamshire, and Bristol.' },
  { title: 'Fellowship', text: 'Completed a fellowship in Spinal Surgery in Cape Town, South Africa in 2000.' },
  { title: 'Masters Degrees', text: 'Earned an MSc (Orth) from UCL and an MCh (Orth) from the University of Liverpool, winning a medal for best thesis.' },
  { title: 'Current Role', text: 'Consultant at Elche/Alicante University Hospital and runs a private practice in Jávea.' },
]

const affiliations = ['BOA Member', 'SECOT Member', 'UK Certified']

const clinicalInterests = [
  'Complex spinal pain',
  'Spinal stenosis',
  'Osteoporotic spine fractures',
  'Vertebroplasty and kyphoplasty',
  'Back pain/failed back syndrome',
  'Degenerative conditions of the lumbar and cervical spine',
  'Cervical and lumbar disc herniation',
  'Cervical and lumbar disc replacement',
  'Facet joint pain',
  'Discogenic/discal pain',
  'Acute/chronic sciatica',
  'Sacroiliac joint dysfunction',
  'Therapeutic injection and fusion',
  'Joint replacements (hips and knees)',
]
</script>

<template>
  <div class="min-h-screen">
    <Header />
    <main>
      <PageHero
        title="About Dr. Miguel Bañuls"
        subtitle="UK-trained orthopaedic surgeon with over 20 years of experience"
        :breadcrumbs="[
          { label: 'Home', href: '/' },
          { label: 'About Us' }
        ]"
      />

      <!-- Main About Section -->
      <section class="section-padding bg-card">
        <div class="container-medical">
          <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <!-- Image -->
            <div class="relative">
              <div class="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated">
                <img
                  :src="doctorImage"
                  alt="Dr. Miguel Bañuls"
                  class="w-full h-full object-cover"
                />
              </div>
              <!-- Floating stats -->
              <div class="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-elevated border border-border">
                <div class="text-center">
                  <p class="font-display text-4xl font-bold text-primary">+20</p>
                  <p class="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>

            <!-- Content -->
            <div class="space-y-6">
              <div class="space-y-4">
                <h2 class="font-display text-3xl md:text-4xl font-semibold text-foreground">
                  A Surgeon You Can Trust
                </h2>
                <p class="text-muted-foreground text-lg leading-relaxed">
                  Dr. Miguel Bañuls, born in 1960, is a Spanish doctor who graduated from the University of Valencia in 1989. He pursued his specialist training in Orthopaedic and Trauma Surgery in the United Kingdom, working in several renowned hospitals including Addenbrookes (Cambridge), Hinchinbrook (Huntington), Saint Richard’s (Chichester), Harlow Wood Orthopaedic Hospital (Nottingham), Queen’s Medical Centre (Nottingham), Avon Orthopaedic Centre (Bristol), and Gloucestershire Royal Hospital (Gloucester).
                </p>
                <p class="text-muted-foreground leading-relaxed">
                  He completed his training with a fellowship in Spinal Surgery in South Africa at Groote Schuur University Hospital and the Conradie Hospital Spinal Cord Injury Unit in Cape Town. Dr. Bañuls furthered his expertise by earning two Master's degrees: an MSc (Orth) from University College London and an MCh (Orth) from the University of Liverpool, where he was awarded a medal for the best thesis.
                </p>
                <p class="text-muted-foreground leading-relaxed">
                  Currently, he works at the Elche/Alicante University Hospital as a consultant in the Spine Unit and is attached to the Orthopaedic Professorial Unit at the Miguel Hernandez University. He also offers private services for surgical and non-surgical management of back pain.
                </p>
              </div>

              <!-- Affiliations -->
              <div class="flex flex-wrap gap-4 pt-4">
                <div v-for="item in affiliations" :key="item" class="flex items-center gap-2 bg-background px-4 py-2 rounded-full border border-border">
                  <CheckCircle class="w-4 h-4 text-accent" />
                  <span class="text-sm font-medium text-foreground">{{ item }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Values Section -->
      <section class="section-padding bg-background">
        <div class="container-medical">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <p class="text-primary font-medium tracking-wide uppercase text-sm mb-4">
              Our Philosophy
            </p>
            <h2 class="font-display text-3xl md:text-4xl font-semibold text-foreground">
              Values That Guide Our Care
            </h2>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="(value, index) in values" :key="index" class="card-medical p-6 text-center">
              <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <component :is="value.icon" class="w-7 h-7 text-primary" />
              </div>
              <h3 class="font-display text-xl font-semibold text-foreground mb-2">
                {{ value.title }}
              </h3>
              <p class="text-muted-foreground text-sm">
                {{ value.description }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Timeline Section -->
      <section class="section-padding bg-card">
        <div class="container-medical">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <p class="text-primary font-medium tracking-wide uppercase text-sm mb-4">
              Professional Journey
            </p>
            <h2 class="font-display text-3xl md:text-4xl font-semibold text-foreground">
              Training & Experience
            </h2>
          </div>

          <div class="max-w-2xl mx-auto">
            <div v-for="(item, index) in timeline" :key="index" class="flex gap-6 mb-8 last:mb-0">
              <div class="flex flex-col items-center">
                <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  {{ index + 1 }}
                </div>
                <div v-if="index < timeline.length - 1" class="w-0.5 h-full bg-border mt-2" />
              </div>
              <div class="pb-8">
                <h3 class="font-display text-xl font-semibold text-foreground mb-1">
                  {{ item.title }}
                </h3>
                <p class="text-muted-foreground">{{ item.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Clinical Interests Section -->
      <section class="section-padding bg-background">
        <div class="container-medical">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <p class="text-primary font-medium tracking-wide uppercase text-sm mb-4">
              Specializations
            </p>
            <h2 class="font-display text-3xl md:text-4xl font-semibold text-foreground">
              Clinical Interests
            </h2>
          </div>
          <div class="max-w-4xl mx-auto">
            <ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
              <li v-for="interest in clinicalInterests" :key="interest" class="flex items-start gap-3">
                <CheckCircle class="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span class="text-muted-foreground">{{ interest }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
    <Footer />
  </div>
</template>
