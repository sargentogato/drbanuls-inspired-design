<script setup lang="ts">
import TreatmentPage from '@/components/TreatmentPage.vue';
</script>

<template>
  <TreatmentPage
    title="Hand & Foot Surgery"
    subtitle="Aesthetic and functional solutions for bunions, hammertoes, and foot pain"
    icon="🤲"
    :description="[
      'Hand and foot problems can significantly impact quality of life. At Euroclínica Jávea, Dr. Miguel Bañuls offers expert surgical treatment for a wide range of hand and foot conditions for patients in Jávea and the Costa Blanca.',
      'He emphasizes a conservative approach, exploring non-surgical options like physical therapy and injections first. When surgery is necessary, he utilizes minimally invasive techniques to ensure faster recovery times.',
      'From carpal tunnel syndrome to painful bunions and hammertoes, Dr. Bañuls provides precise surgical solutions that not only restore function but also deliver excellent aesthetic results.'
    ]"
    :conditions="[
      'Bunions (Hallux Valgus)',
      'Hammer Toes',
      'Carpal Tunnel Syndrome',
      'Trigger Finger',
      'Plantar Fasciitis',
      'Tendon Injuries',
      'Hand & Foot Fractures'
    ]"
    :procedures="[
      {
        title: 'Bunion & Hammertoe Correction',
        description: 'Surgical correction of bunions (Hallux Valgus) and hammertoes with a strong focus on achieving excellent, natural-looking aesthetic results while restoring foot mechanics.'
      },
      {
        title: 'Carpal Tunnel Release',
        description: 'Surgical release of the carpal ligament to relieve pressure on the median nerve, restoring sensation and strength to the hand.'
      },
      {
        title: 'Trigger Finger Release',
        description: 'A minor procedure to release the tendon sheath that is causing the finger to lock or catch during movement.'
      },
      {
        title: 'Tendon Repair',
        description: 'Surgical repair of torn or damaged tendons in the hand or foot to restore function and strength.'
      }
    ]"
    :benefits="[
      'Excellent aesthetic outcomes',
      'Expertise in delicate hand & foot surgery',
      'Minimally invasive approach for faster recovery',
      'Non-surgical options are always considered first',
      'Focus on restoring optimal function',
      'Personalized multilingual care'
    ]"
    :relatedTreatments="[
      { title: 'Non-Surgical Treatments', href: '/treatments/non-surgical' },
      { title: 'Knee Surgery', href: '/treatments/knee-surgery' },
      { title: 'Spine Surgery', href: '/treatments/spine-surgery' }
    ]"
  />
</template>
