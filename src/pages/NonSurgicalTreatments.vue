<script setup lang="ts">
import TreatmentPage from '@/components/TreatmentPage.vue';
</script>

<template>
  <TreatmentPage
    title="Non-Surgical Treatments"
    subtitle="Conservative options for pain relief and improved function"
    icon="💉"
    :description="[
      'Dr. Bañuls provides a comprehensive range of non-surgical treatments at Euroclínica Jávea, serving international patients across the Costa Blanca. His honest approach means he will always explore conservative options to relieve pain and improve mobility, potentially avoiding or delaying the need for surgery.',
      'From targeted injections to structured rehabilitation programs, these treatments can address pain and improve function without an operation. For some patients, non-surgical treatment is the most effective and appropriate path forward.',
      'Dr. Bañuls works closely with physiotherapists and other specialists to ensure you receive comprehensive care tailored to your specific needs, lifestyle, and goals.'
    ]"
    :conditions="[
      'Early-Stage Arthritis',
      'Chronic Back/Neck Pain',
      'Nerve Irritation (Sciatica)',
      'Soft Tissue Inflammation',
      'Tendinitis & Bursitis',
      'Sports Injuries',
      'Mild to Moderate Joint Pain',
      'Post-Surgical Rehabilitation'
    ]"
    :procedures="[
      {
        title: 'Advanced Injection Therapies',
        description: 'A wide range of targeted injections including Epidural Steroid, Facet Joint, Nerve Root Blocks, Sacroiliac Joint, and Corticosteroid injections to reduce inflammation and block pain signals.'
      },
      {
        title: 'Regenerative Medicine',
        description: 'Using your body\'s own healing potential with treatments like PRP (Platelet-Rich Plasma) Therapy to repair tissue and reduce pain.'
      },
      {
        title: 'Viscosupplementation',
        description: 'Hyaluronic Acid injections to improve joint lubrication, reduce stiffness, and ease pain, particularly for knee arthritis.'
      },
      {
        title: 'Conservative Care Programs',
        description: 'Holistic programs that include Physical Therapy, postural correction, weight management, and activity modifications to address underlying issues.'
      }
    ]"
    :benefits="[
      'Avoid or delay surgery',
      'Minimal downtime & quick recovery',
      'Lower risk than surgical procedures',
      'Personalized, multilingual care',
      'Holistic approach to pain management',
      'Honest assessment of all treatment options'
    ]"
    :relatedTreatments="[
      { title: 'Knee Surgery', href: '/treatments/knee-surgery' },
      { title: 'Hip Replacement Surgery', href: '/treatments/hip-replacement' },
      { title: 'Spine Surgery', href: '/treatments/spine-surgery' }
    ]"
  />
</template>
