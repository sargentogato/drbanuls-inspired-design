<script setup lang="ts">
import TreatmentPage from '@/components/TreatmentPage.vue';
</script>

<template>
  <TreatmentPage
    title="Hip Replacement Surgery"
    subtitle="Personalized solutions to restore mobility and quality of life"
    icon="🏃"
    :description="[
      'Hip replacement surgery can be life-changing for patients suffering from severe hip pain and limited mobility. Dr. Bañuls specializes in both total and partial hip replacement procedures, using the latest prosthetic technology and surgical techniques.',
      'Each patient receives a personalized evaluation to determine the best approach for their specific condition, lifestyle, and goals. Dr. Bañuls takes the time to explain all options and set realistic expectations for recovery.',
      'With proper surgical technique and rehabilitation, most patients experience significant pain relief and improved mobility, allowing them to return to activities they may have given up years ago.'
    ]"
    :conditions="[
      'Hip Osteoarthritis',
      'Rheumatoid Arthritis',
      'Hip Fractures',
      'Avascular Necrosis',
      'Hip Dysplasia',
      'Post-Traumatic Arthritis',
      'Failed Previous Surgery',
      'Bone Tumors'
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
      'Extensive hip replacement experience',
      'Latest prosthetic technology',
      'Minimally invasive approaches when suitable',
      'Comprehensive pre-operative planning',
      'Dedicated rehabilitation support',
      'Long-lasting results'
    ]"
    :relatedTreatments="[
      { title: 'Knee Surgery', href: '/treatments/knee-surgery' },
      { title: 'Spine Surgery', href: '/treatments/spine-surgery' },
      { title: 'Non-Surgical Treatments', href: '/treatments/non-surgical' }
    ]"
  />
</template>
