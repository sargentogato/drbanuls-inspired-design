<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

interface Breadcrumb {
  label: string
  href?: string
}

interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumbs: Breadcrumb[]
  backgroundImage?: string
}

defineProps<PageHeroProps>()
</script>

<template>
  <section class="relative pt-20 pb-16 md:pb-24 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary to-background" />
    <div 
      v-if="backgroundImage"
      class="absolute inset-0 opacity-10"
      :style="{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }"
    />
    
    <!-- Decorative elements -->
    <div class="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

    <div class="container-medical relative z-10 px-4 pt-12">
      <!-- Breadcrumbs -->
      <nav class="flex items-center gap-2 text-sm mb-6">
        <span v-for="(crumb, index) in breadcrumbs" :key="index" class="flex items-center gap-2">
          <template v-if="crumb.href">
            <RouterLink :to="crumb.href" class="text-muted-foreground hover:text-primary transition-colors">
              {{ crumb.label }}
            </RouterLink>
          </template>
          <template v-else>
            <span class="text-foreground font-medium">{{ crumb.label }}</span>
          </template>
          
          <ChevronRight v-if="index < breadcrumbs.length - 1" class="w-4 h-4 text-muted-foreground" />
        </span>
      </nav>

      <!-- Title -->
      <div class="max-w-3xl">
        <h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
          {{ title }}
        </h1>
        <p v-if="subtitle" class="text-xl text-muted-foreground">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </section>
</template>
