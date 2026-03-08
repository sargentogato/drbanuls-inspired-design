<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import { Clock, MapPin, MessageCircle, Phone } from 'lucide-vue-next';
</script>

<template>
  <section id="contact" class="section-padding bg-background">
    <div class="container-medical">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <!-- Content -->
        <div class="space-y-8">
          <div class="space-y-4">
            <p class="text-primary font-medium tracking-wide uppercase text-sm">
              Contact
            </p>
            <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
              Book Your Consultation
            </h2>
            <p class="text-muted-foreground text-lg">
              Private appointments are available every Friday at Euroclínica Jávea. 
              Contact us to schedule your visit.
            </p>
          </div>

          <!-- Contact Info -->
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin class="w-6 h-6 text-primary" />
              </div>
              <div>
                <p class="font-semibold text-foreground">Location</p>
                <p class="text-muted-foreground">Av. Estrasburgo, Local 2, 03730 Xàbia, Alicante</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone class="w-6 h-6 text-primary" />
              </div>
              <div>
                <p class="font-semibold text-foreground">Phone</p>
                <a href="tel:+34606914833" class="text-muted-foreground hover:text-primary transition-colors">
                  +34 606 914 833
                </a>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock class="w-6 h-6 text-primary" />
              </div>
              <div>
                <p class="font-semibold text-foreground">Consultation Hours</p>
                <p class="text-muted-foreground">Friday: 9:00 AM - 2:00 PM | 4:00 PM - 8:00 PM</p>
              </div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap gap-4 pt-4">
            <a href="https://wa.me/34606914833" target="_blank" rel="noopener noreferrer">
              <Button class="btn-whatsapp flex items-center gap-2 text-base">
                <MessageCircle class="w-5 h-5" />
                WhatsApp
              </Button>
            </a>
            <a href="tel:+34606914833">
              <Button variant="outline" class="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base px-6 py-3">
                <Phone class="w-5 h-5 mr-2" />
                Call
              </Button>
            </a>
          </div>
        </div>

        <!-- Map -->
        <div class="relative">
          <div class="bg-card rounded-2xl overflow-hidden shadow-elevated border border-border h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.9080694833187!2d0.16661231525707548!3d38.79042647958808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129e1b3b30795555%3A0xa044ddb730f0f988!2sAv.%20Estrasburgo%2C%20Local%202%2C%2003730%20X%C3%A0bia%2C%20Alicante!5e0!3m2!1sen!2ses!4v1640000000000!5m2!1sen!2ses"
              width="100%"
              height="100%"
              style="border: 0; min-height: 400px;"
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
</template>
