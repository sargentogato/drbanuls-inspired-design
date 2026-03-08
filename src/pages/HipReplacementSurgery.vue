<script setup lang="ts">
import TreatmentPage from '@/components/TreatmentPage.vue';
</script>

<template>
  <TreatmentPage
    title="Hip Replacement Surgery"
    subtitle="Personalized solutions to restore mobility and quality of life"
    icon="🏃"
    :description="[
      'For patients in Jávea and across the Costa Blanca, hip replacement surgery with Dr. Miguel Bañuls can be a life-changing solution for severe hip pain. With over 20 years of experience, Dr. Bañuls specializes in using high-quality prostheses and minimally invasive techniques to ensure a faster recovery.',
      'An individualized surgical plan is created for every patient. Non-surgical options like physiotherapy and injections are always considered first, and surgery is only recommended when these treatments are no longer effective.',
      'His goal is to restore mobility and quality of life, allowing patients to return to the activities they love with significantly reduced pain.'
    ]"
    :conditions="[
      'Hip Osteoarthritis',
      'Rheumatoid Arthritis',
      'Hip Fractures',
      'Avascular Necrosis',
      'Post-Traumatic Hip Damage',
      'Failed Previous Hip Surgery'
    ]"
    :procedures="[
      {
        title: 'Total Hip Replacement',
        description: 'Complete replacement of the hip joint with a prosthetic ball and socket, providing lasting pain relief and restored function for severe hip arthritis.'
      },
      {
        title: 'Partial Hip Replacement',
        description: 'Replacement of only the femoral head (ball), often used for certain types of hip fractures in older patients.'
      },
      {
        title: 'Hip Resurfacing',
        description: 'A bone-conserving alternative to total replacement where the femoral head is reshaped and capped with a metal prosthesis.'
      },
      {
        title: 'Revision Hip Surgery',
        description: 'Replacement of a worn or failed hip prosthesis with a new implant, restoring function in patients with previous hip replacement surgery.'
      }
    ]"
    :benefits="[
      'Over 20 years of hip surgery experience',
      'High-quality prosthesis for durability',
      'Minimally invasive techniques for faster recovery',
      'Individualized surgical plans',
      'Non-surgical options considered first',
      'Personalized multilingual care'
    ]"
    :relatedTreatments="[
      { title: 'Knee Surgery', href: '/treatments/knee-surgery' },
      { title: 'Spine Surgery', href: '/treatments/spine-surgery' },
      { title: 'Non-Surgical Treatments', href: '/treatments/non-surgical' }
    ]"
  />
</template>
