<script setup lang="ts">
import TreatmentPage from '@/components/TreatmentPage.vue';
</script>

<template>
  <TreatmentPage
    title="Knee Surgery"
    subtitle="Modern techniques for lasting stability and faster recovery"
    icon="🦵"
    :description="[
      'At his clinic in Jávea, Dr. Bañuls offers the full spectrum of knee treatments, from joint preservation to total knee replacement. Using the latest techniques, his goal is to restore mobility and get you back to an active lifestyle.',
      'Whether you are an athlete with a ligament injury or suffering from degenerative osteoarthritis, Dr. Bañuls provides a personalized evaluation at Euroclínica Jávea, recommending the most appropriate treatment, which may include conservative options like physiotherapy or injections.',
      'His expertise in minimally invasive techniques means smaller incisions, less scarring, and quicker recovery times, allowing patients from across the Costa Blanca to return home sooner.'
    ]"
    :conditions="[
      'ACL & PCL Injuries',
      'Meniscus Tears',
      'Knee Arthritis',
      'Patella Problems',
      'Cartilage Damage',
      'Knee Instability',
      'Baker\'s Cyst',
      'Knee Fractures'
    ]"
    :procedures="[
      {
        title: 'Knee Arthroscopy',
        description: 'Minimally invasive keyhole surgery to diagnose and treat a variety of knee problems, including meniscus tears and cartilage damage.'
      },
      {
        title: 'Ligament Reconstruction (ACL)',
        description: 'Surgical reconstruction of torn ligaments, like the anterior cruciate ligament, using modern grafting techniques for athletes and active individuals.'
      },
      {
        title: 'Partial & Total Knee Replacement',
        description: 'Replacing the damaged parts of the knee (partial) or the entire joint (total) with a high-quality prosthesis to eliminate pain from severe arthritis.'
      },
      {
        title: 'Revision Knee Replacement',
        description: 'A procedure to replace a worn-out or failed knee prosthesis, restoring function and relieving pain.'
      }
    ]"
    :benefits="[
      'Focus on joint preservation',
      'Expert in arthroscopy and replacement',
      'Minimally invasive techniques',
      'Conservative (non-surgical) options available',
      'Personalized rehabilitation plans',
      'Modern, high-quality prosthetic options'
    ]"
    :relatedTreatments="[
      { title: 'Hip Replacement Surgery', href: '/treatments/hip-replacement' },
      { title: 'Non-Surgical Treatments', href: '/treatments/non-surgical' },
      { title: 'Spine Surgery', href: '/treatments/spine-surgery' }
    ]"
  />
</template>
