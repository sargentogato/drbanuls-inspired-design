<script setup lang="ts">
import TreatmentPage from '@/components/TreatmentPage.vue';
</script>

<template>
  <TreatmentPage
    title="Hand & Foot Surgery"
    subtitle="Advanced percutaneous and minimally invasive solutions for bunions and foot pain"
    icon="🦶"
    :description="[
      'Dr. Miguel Bañuls specializes in advanced foot surgery and podiatry, offering state-of-the-art treatments for patients in Jávea and the Costa Blanca.',
      'He is highly experienced in percutaneous (minimally invasive) foot surgery. Through tiny incisions of less than 3mm, specially designed surgical instruments are introduced to elegantly correct bone deformities, minimizing damage to surrounding tissues.',
      'These procedures are performed under local anesthesia, completely avoiding the risks and complications associated with general anesthesia. The surgery is strictly outpatient: patients can walk out of the clinic unassisted on the same day, wearing a special post-operative shoe.'
    ]"
    :conditions="[
      'Bunions (Hallux Valgus)',
      'Hammertoes and Claw Toes',
      'Heel Spurs',
      'Plantar Fasciitis',
      'Carpal Tunnel Syndrome',
      'Trigger Finger',
      'Hand & Foot Fractures'
    ]"
    :procedures="[
      {
        title: 'Percutaneous Bunion Surgery (Hallux Valgus)',
        description: 'Minimally invasive correction of bunions. Unlike traditional surgery, this technique often requires no screws, pins, or internal implants. The deformity is corrected precisely using specialized instruments.'
      },
      {
        title: 'Hammertoe Correction',
        description: 'Precise correction through minimal incisions to relieve pressure, straighten the toe, and restore its natural alignment with excellent aesthetic results.'
      },
      {
        title: 'Heel Spur & Plantar Fasciitis Treatment',
        description: 'Advanced minimally invasive approaches to resolve heel pain and treat the inflamed plantar fascia, allowing for a quick return to walking.'
      },
      {
        title: 'Rapid Post-Op Recovery',
        description: 'Recovery from percutaneous surgery is exceptionally fast. Patients walk the same day. Full recovery takes about 7 to 14 days for procedures without a fracture, and roughly 40 days when an osteotomy is required.'
      }
    ]"
    :benefits="[
      'Minimal invasiveness (incisions under 3mm) preventing tissue damage',
      'Rapid recovery allowing an early return to daily activities',
      'Significantly less post-operative pain',
      'Superior aesthetic results with virtually no scarring',
      'Reduced rate of surgical complications',
      'Outpatient procedure: walk out the same day'
    ]"
    :relatedTreatments="[
      { title: 'Non-Surgical Treatments', href: '/treatments/non-surgical' },
      { title: 'Knee Surgery', href: '/treatments/knee-surgery' },
      { title: 'Spine Surgery', href: '/treatments/spine-surgery' }
    ]"
  />
</template>
