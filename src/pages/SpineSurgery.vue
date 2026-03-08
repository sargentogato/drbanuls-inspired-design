<script setup lang="ts">
import TreatmentPage from '@/components/TreatmentPage.vue';
</script>

<template>
  <TreatmentPage
    title="Spine Surgery"
    subtitle="Minimally invasive techniques for lasting back and neck pain relief"
    icon="🦴"
    :description="[
      'Dr. Bañuls is a UK-trained orthopaedic surgeon specializing in minimally invasive treatments for back and neck pain. With over 20 years of experience, he offers expert care at Euroclínica Jávea for a wide range of spinal conditions.',
      'His approach focuses on preserving healthy tissue while addressing the root cause of your pain. This means smaller incisions, less post-operative pain, and faster recovery times, which is especially beneficial for international patients seeking a quick return home.',
      'Whether you are dealing with a herniated disc, spinal stenosis, or sciatica, Dr. Bañuls provides personalized, multilingual care to develop a treatment plan that gets you back to your daily activities as quickly as possible.'
    ]"
    :conditions="[
      'Herniated Discs',
      'Spinal Stenosis',
      'Vertebral Fractures',
      'Chronic Back & Neck Pain',
      'Sciatica',
      'Degenerative Disc Disease',
      'Spinal Instability',
      'Spondylolisthesis'
    ]"
    :procedures="[
      {
        title: 'Microdiscectomy',
        description: 'A minimally invasive procedure to remove the portion of a herniated disc that\'s pressing on a spinal nerve, providing relief from leg pain and numbness.'
      },
      {
        title: 'Spinal Decompression',
        description: 'Surgery to relieve pressure on the spinal cord or nerves caused by conditions like spinal stenosis, allowing for improved mobility and pain relief.'
      },
      {
        title: 'Vertebroplasty & Kyphoplasty',
        description: 'Minimally invasive procedures to stabilize vertebral compression fractures, often providing immediate pain relief for patients with osteoporotic fractures.'
      },
      {
        title: 'Spinal Fusion',
        description: 'When necessary, spinal fusion may be recommended to stabilize the spine and address conditions like spondylolisthesis or severe degenerative disc disease.'
      }
    ]"
    :benefits="[
      'UK-trained spine specialist',
      'Minimally invasive techniques',
      'Faster recovery for international patients',
      'Personalized treatment plans',
      'Multilingual care (English & Spanish)',
      'Extensive experience with elderly patients'
    ]"
    :relatedTreatments="[
      { title: 'Non-Surgical Treatments', href: '/treatments/non-surgical' },
      { title: 'Hip Replacement Surgery', href: '/treatments/hip-replacement' },
      { title: 'Knee Surgery', href: '/treatments/knee-surgery' }
    ]"
  />
</template>
