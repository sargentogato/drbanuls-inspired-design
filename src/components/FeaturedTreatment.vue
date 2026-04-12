<script setup lang="ts">
import { ArrowRight, CheckCircle2, Clock, Footprints, ShieldCheck } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';

const benefits = [
  {
    icon: Clock,
    title: 'Surgery in minutes, walk out the same day',
    description: 'A completely outpatient procedure. No hospital stay required.'
  },
  {
    icon: ShieldCheck,
    title: 'No screws or pins',
    description: 'Deformities are corrected naturally through 3mm micro-incisions.'
  },
  {
    icon: Footprints,
    title: 'Immediate recovery',
    description: 'Walk on your own feet immediately using a special post-op shoe.'
  }
];
</script>

<template>
  <section class="relative py-24 overflow-hidden">
    <!-- Premium Background Styling -->
    <div class="absolute inset-0 bg-secondary/30" />
    <div class="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
    
    <!-- Decorative Blurs -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-50" />
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl opacity-50" />

    <div class="container-medical relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        <!-- Left Content: Value Proposition -->
        <div class="space-y-8 animate-fade-up">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm shadow-soft">
            <span class="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span class="text-sm font-semibold tracking-wide uppercase">Featured Treatment</span>
          </div>
          
          <div class="space-y-4">
            <h2 class="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Advanced Percutaneous <br>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Foot Surgery</span>
            </h2>
            <p class="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Say goodbye to bunions and painful deformities without the stress of traditional surgery. 
            </p>
          </div>

          <!-- Key Features grid -->
          <div class="space-y-6">
            <div 
              v-for="(item, index) in benefits" 
              :key="index"
              class="flex gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:bg-card/80 transition-colors backdrop-blur-sm"
            >
              <div class="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <component :is="item.icon" class="w-6 h-6" />
              </div>
              <div>
                <h4 class="text-lg font-semibold text-foreground mb-1">{{ item.title }}</h4>
                <p class="text-muted-foreground">{{ item.description }}</p>
              </div>
            </div>
          </div>

          <div class="pt-4 flex flex-wrap gap-4">
            <RouterLink to="/treatments/hand-foot" class="btn-primary group inline-flex items-center gap-2 text-lg px-8 py-4">
              Explore the Technique
              <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </RouterLink>
          </div>
        </div>

        <!-- Right Content: Visual/Aesthetic Focus -->
        <div class="relative animate-fade-in lg:ml-auto w-full max-w-md mx-auto" style="animation-delay: 0.2s">
           <!-- Glassmorphism Card Feature -->
           <div class="relative z-10 rounded-2xl bg-card/80 backdrop-blur-md border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 overflow-hidden group">
             <div class="absolute top-0 right-0 p-6 opacity-20 group-hover:scale-110 transition-transform duration-500">
               <Footprints class="w-32 h-32 text-primary" />
             </div>
             
             <div class="relative z-20 space-y-6">
               <div>
                 <h3 class="font-display text-2xl font-bold text-foreground mb-2">Why Percutaneous?</h3>
                 <p class="text-muted-foreground">The gold standard for foot corrections, avoiding massive incisions and minimizing patient downtime.</p>
               </div>
               
               <ul class="space-y-4">
                 <li class="flex items-center gap-3">
                   <div class="p-1 rounded-full bg-accent/20 text-accent"><CheckCircle2 class="w-5 h-5" /></div>
                   <span class="font-medium text-foreground">Local Anesthesia Only</span>
                 </li>
                 <li class="flex items-center gap-3">
                   <div class="p-1 rounded-full bg-accent/20 text-accent"><CheckCircle2 class="w-5 h-5" /></div>
                   <span class="font-medium text-foreground">Minimal Scarring (< 3mm)</span>
                 </li>
                 <li class="flex items-center gap-3">
                   <div class="p-1 rounded-full bg-accent/20 text-accent"><CheckCircle2 class="w-5 h-5" /></div>
                   <span class="font-medium text-foreground">Significantly less pain</span>
                 </li>
               </ul>

               <div class="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/20">
                 <p class="text-sm font-medium text-primary text-center">
                   "Pioneering minimally invasive techniques for pain-free mobility."
                 </p>
               </div>
             </div>
           </div>
           
           <!-- Decorative blob behind -->
           <div class="absolute -top-10 -right-10 w-full h-full bg-gradient-to-br from-primary/30 to-accent/30 rounded-[3rem] blur-2xl -z-10" />
        </div>
      </div>
    </div>
  </section>
</template>
