<script setup lang="ts">
import { RouterLink } from 'vue-router';

const currentYear = new Date().getFullYear()

const treatments = [
  { href: '/treatments/spine-surgery', label: 'Spine Surgery' },
  { href: '/treatments/knee-surgery', label: 'Knee Surgery' },
  { href: '/treatments/hip-replacement', label: 'Hip Replacement' },
  { href: '/treatments/hand-foot', label: 'Hand & Foot Surgery' },
  { href: '/treatments/non-surgical', label: 'Non-Surgical Treatments' },
]
</script>

<template>
  <footer class="bg-foreground text-background py-12">
    <div class="container-medical px-4">
      <div class="grid md:grid-cols-4 gap-8 mb-8">
        <!-- Brand -->
        <div class="space-y-4">
          <h3 class="font-display text-2xl font-semibold">Dr. Miguel Bañuls</h3>
          <p class="text-background/70 text-sm leading-relaxed">
            UK-trained orthopaedic surgeon specializing in spine, hip, and knee treatments. 
            Personalized care in Jávea, Alicante.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="space-y-4">
          <h4 class="font-semibold">Quick Links</h4>
          <nav class="flex flex-col gap-2">
            <RouterLink to="/" class="text-background/70 hover:text-background transition-colors text-sm">
              Home
            </RouterLink>
            <RouterLink to="/about" class="text-background/70 hover:text-background transition-colors text-sm">
              About Us
            </RouterLink>
            <RouterLink to="/treatments" class="text-background/70 hover:text-background transition-colors text-sm">
              Our Treatments
            </RouterLink>
            <RouterLink to="/contact" class="text-background/70 hover:text-background transition-colors text-sm">
              Contact Us
            </RouterLink>
          </nav>
        </div>

        <!-- Treatments -->
        <div class="space-y-4">
          <h4 class="font-semibold">Treatments</h4>
          <nav class="flex flex-col gap-2">
            <RouterLink 
              v-for="treatment in treatments"
              :key="treatment.href"
              :to="treatment.href" 
              class="text-background/70 hover:text-background transition-colors text-sm"
            >
              {{ treatment.label }}
            </RouterLink>
          </nav>
        </div>

        <!-- Contact -->
        <div class="space-y-4">
          <h4 class="font-semibold">Contact</h4>
          <div class="space-y-2 text-sm text-background/70">
            <p>Av. Estrasburgo, Local 2</p>
            <p>03730 Xàbia, Alicante</p>
            <a href="tel:+34606914833" class="block hover:text-background transition-colors">
              +34 606 914 833
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div class="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm text-background/50">
          © {{ currentYear }} Dr. Miguel Bañuls. All rights reserved.
        </p>
        <div class="flex gap-6 text-sm text-background/50">
          <a href="#" class="hover:text-background transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-background transition-colors">Legal Notice</a>
        </div>
      </div>
    </div>
  </footer>
</template>
