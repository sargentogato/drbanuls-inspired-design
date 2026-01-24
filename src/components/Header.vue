<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import { ChevronDown, Menu, Phone, X } from 'lucide-vue-next'
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const isMenuOpen = ref(false)
const isTreatmentsOpen = ref(false)
const route = useRoute()

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { 
    href: '/treatments', 
    label: 'Our Treatments',
    submenu: [
      { href: '/treatments/spine-surgery', label: 'Spine Surgery' },
      { href: '/treatments/knee-surgery', label: 'Knee Surgery' },
      { href: '/treatments/hip-replacement', label: 'Hip Replacement Surgery' },
      { href: '/treatments/hand-foot', label: 'Hand & Foot Surgery' },
      { href: '/treatments/non-surgical', label: 'Non-Surgical Treatments' },
    ]
  },
  { href: '/contact', label: 'Contact Us' },
]

const isActive = (href: string) => route.path === href

// Helper to check if path starts with
const isTreatmentsPath = (path: string) => path.startsWith('/treatments/')
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
    <div class="container-medical">
      <div class="flex items-center justify-between h-16 md:h-20 px-4">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-2">
          <span class="font-display text-xl md:text-2xl font-semibold text-foreground">
            Dr. Miguel Bañuls
          </span>
        </RouterLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-6">
          <div v-for="link in navLinks" :key="link.href" class="relative group">
            <template v-if="link.submenu">
              <RouterLink
                :to="link.href"
                class="flex items-center gap-1 text-sm font-medium transition-colors py-2"
                :class="[
                  isActive(link.href) || isTreatmentsPath(route.path)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                ]"
              >
                {{ link.label }}
                <!-- Note: lucide-vue-next might treat class differently than react, but standard class prop should work -->
                <ChevronDown class="w-4 h-4 transition-transform group-hover:rotate-180" />
              </RouterLink>
              <!-- Dropdown -->
              <div class="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div class="bg-card rounded-xl shadow-elevated border border-border py-2 min-w-[220px]">
                  <RouterLink
                    v-for="sublink in link.submenu"
                    :key="sublink.href"
                    :to="sublink.href"
                    class="block px-4 py-2 text-sm transition-colors"
                    :class="[
                      isActive(sublink.href)
                        ? 'text-primary bg-primary/5'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    ]"
                  >
                    {{ sublink.label }}
                  </RouterLink>
                </div>
              </div>
            </template>
            <template v-else>
              <RouterLink
                :to="link.href"
                class="text-sm font-medium transition-colors py-2"
                :class="[
                  isActive(link.href)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                ]"
              >
                {{ link.label }}
              </RouterLink>
            </template>
          </div>
        </nav>

        <!-- CTA Button -->
        <div class="hidden lg:flex items-center gap-4">
          <a href="tel:+34606914833">
            <Button class="btn-primary flex items-center gap-2">
              <Phone class="w-4 h-4" />
              Book Consultation
            </Button>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="lg:hidden p-2 text-foreground"
          @click="isMenuOpen = !isMenuOpen"
        >
          <X v-if="isMenuOpen" class="w-6 h-6" />
          <Menu v-else class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <nav v-if="isMenuOpen" class="lg:hidden py-4 px-4 border-t border-border animate-fade-in">
        <div class="flex flex-col gap-2">
          <div v-for="link in navLinks" :key="link.href">
            <template v-if="link.submenu">
              <button
                @click="isTreatmentsOpen = !isTreatmentsOpen"
                class="flex items-center justify-between w-full text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {{ link.label }}
                <ChevronDown class="w-4 h-4 transition-transform" :class="{ 'rotate-180': isTreatmentsOpen }" />
              </button>
              <div v-if="isTreatmentsOpen" class="pl-4 space-y-1">
                <RouterLink
                  :to="link.href"
                  class="block text-sm text-muted-foreground hover:text-foreground py-2"
                  @click="isMenuOpen = false"
                >
                  All Treatments
                </RouterLink>
                <RouterLink
                  v-for="sublink in link.submenu"
                  :key="sublink.href"
                  :to="sublink.href"
                  class="block text-sm text-muted-foreground hover:text-foreground py-2"
                  @click="isMenuOpen = false"
                >
                  {{ sublink.label }}
                </RouterLink>
              </div>
            </template>
            <template v-else>
              <RouterLink
                :to="link.href"
                class="block text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                @click="isMenuOpen = false"
              >
                {{ link.label }}
              </RouterLink>
            </template>
          </div>
          <a href="tel:+34606914833" class="mt-4">
            <Button class="btn-primary flex items-center justify-center gap-2 w-full">
              <Phone class="w-4 h-4" />
              Book Consultation
            </Button>
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>
