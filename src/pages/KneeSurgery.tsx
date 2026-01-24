import TreatmentPage from '@/components/TreatmentPage';

const KneeSurgery = () => {
  return (
    <TreatmentPage
      title="Knee Surgery"
      subtitle="Modern techniques for lasting stability and faster recovery"
      icon="🦵"
      description={[
        "From arthroscopic keyhole surgery to total knee replacement, Dr. Bañuls offers the full spectrum of knee surgery options using the latest techniques and technology. His goal is always to restore your mobility and get you back to the activities you love.",
        "Whether you're an athlete dealing with an ACL injury or someone suffering from arthritis-related knee pain, Dr. Bañuls will carefully evaluate your condition and recommend the most appropriate treatment approach.",
        "His expertise in minimally invasive techniques means smaller incisions, less scarring, and quicker recovery times whenever possible."
      ]}
      conditions={[
        "ACL & PCL Injuries",
        "Meniscus Tears",
        "Knee Arthritis",
        "Patella Problems",
        "Cartilage Damage",
        "Knee Instability",
        "Baker's Cyst",
        "Knee Fractures"
      ]}
      procedures={[
        {
          title: "Knee Arthroscopy",
          description: "Minimally invasive keyhole surgery to diagnose and treat a variety of knee problems, including meniscus tears and cartilage damage."
        },
        {
          title: "ACL Reconstruction",
          description: "Surgical reconstruction of the anterior cruciate ligament using modern grafting techniques for athletes and active individuals."
        },
        {
          title: "Partial Knee Replacement",
          description: "When only part of the knee is affected by arthritis, a partial replacement can preserve healthy bone and tissue while relieving pain."
        },
        {
          title: "Total Knee Replacement",
          description: "Complete replacement of the knee joint with a prosthetic implant, restoring function and eliminating pain from severe arthritis."
        }
      ]}
      benefits={[
        "Expert in both arthroscopy and replacement",
        "Modern prosthetic options",
        "Rapid recovery protocols",
        "Personalized rehabilitation plans",
        "High patient satisfaction rates",
        "Experience with all age groups"
      ]}
      relatedTreatments={[
        { title: "Hip Replacement Surgery", href: "/treatments/hip-replacement" },
        { title: "Non-Surgical Treatments", href: "/treatments/non-surgical" },
        { title: "Spine Surgery", href: "/treatments/spine-surgery" }
      ]}
    />
  );
};

export default KneeSurgery;
