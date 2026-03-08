<script setup lang="ts">
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import PageHero from '@/components/PageHero.vue'
import Button from '@/components/ui/Button.vue'
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen">
    <Header />
    <main>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch to book your consultation or ask any questions"
        :breadcrumbs="[
          { label: 'Home', href: '/' },
          { label: 'Contact Us' }
        ]"
      />

      <!-- Contact Section -->
      <section class="section-padding bg-card">
        <div class="container-medical">
          <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <!-- Contact Info -->
            <div class="space-y-8">
              <div class="space-y-4">
                <h2 class="font-display text-3xl md:text-4xl font-semibold text-foreground">
                  Book Your Consultation
                </h2>
                <p class="text-muted-foreground text-lg">
                  Private appointments available every Friday at Euroclínica Jávea. 
                  Contact us today to schedule your visit.
                </p>
              </div>

              <!-- Contact Details -->
              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin class="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p class="font-semibold text-foreground text-lg">Location</p>
                    <p class="text-muted-foreground">Euroclínica Jávea</p>
                    <p class="text-muted-foreground">Av. Estrasburgo, Local 2</p>
                    <p class="text-muted-foreground">03730 Xàbia, Alicante, Spain</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone class="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p class="font-semibold text-foreground text-lg">Phone</p>
                    <a href="tel:+34606914833" class="text-muted-foreground hover:text-primary transition-colors text-lg">
                      +34 606 914 833
                    </a>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail class="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p class="font-semibold text-foreground text-lg">Email</p>
                    <a href="mailto:drmbanuls@gmail.com" class="text-muted-foreground hover:text-primary transition-colors">
                      drmbanuls@gmail.com
                    </a>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock class="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p class="font-semibold text-foreground text-lg">Consultation Hours</p>
                    <p class="text-muted-foreground">Fridays: 9:00 AM - 2:00 PM & 4:00 PM - 8:00 PM</p>
                  </div>
                </div>
              </div>

              <!-- CTA Buttons -->
              <div class="flex flex-wrap gap-4 pt-4">
                <a href="https://wa.me/34606914833" target="_blank" rel="noopener noreferrer">
                  <Button class="btn-whatsapp flex items-center gap-2 text-base px-8">
                    <MessageCircle class="w-5 h-5" />
                    WhatsApp
                  </Button>
                </a>
                <a href="tel:+34606914833">
                  <Button variant="outline" class="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base px-8 py-3">
                    <Phone class="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>

            <!-- Map -->
            <div class="space-y-6">
              <div class="bg-background rounded-2xl overflow-hidden shadow-elevated border border-border h-[400px] lg:h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.9080694833187!2d0.16661231525707548!3d38.79042647958808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129e1b3b30795555%3A0xa044ddb730f0f988!2sAv.%20Estrasburgo%2C%20Local%202%2C%2003730%20X%C3%A0bia%2C%20Alicante!5e0!3m2!1sen!2ses!4v1640000000000!5m2!1sen!2ses"
                  width="100%"
                  height="100%"
                  style="border: 0;"
                  allowfullscreen
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="Euroclínica Jávea Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- International Patients Section -->
      <section class="section-padding bg-background">
        <div class="container-medical">
          <div class="text-center max-w-3xl mx-auto">
            <p class="text-primary font-medium tracking-wide uppercase text-sm mb-4">
              International Patients
            </p>
            <h2 class="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
              We Welcome Patients from Across Europe
            </h2>
            <p class="text-muted-foreground text-lg mb-8">
              Dr. Bañuls regularly treats patients from the UK, Germany, Netherlands, Belgium, and other European countries. Consultations are available in English and Spanish, and we guarantee strict confidentiality for all medical records and patient information.
            </p>
            <div class="flex justify-center gap-4 text-4xl">
              <span>🇬🇧</span>
              <span>🇩🇪</span>
              <span>🇳🇱</span>
              <span>🇧🇪</span>
              <span>🇫🇷</span>
              <span>🇪🇸</span>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>
