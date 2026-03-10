import CareerPageTemplate from "@/components/CareerPageTemplate";
import heroImage from "@/assets/career-ahp.jpg";

const AlliedHealthProfessionals = () => (
  <CareerPageTemplate
    heroImage={heroImage}
    tagline="Allied Health Professionals"
    title="15 Unique Roles."
    titleHighlight="One Mission."
    subtitle="Allied health professionals play a crucial role in helping patients live their lives as fully as possible — from emergency response and radiography to podiatry and speech therapy."
    overviewTitle="A career as an"
    overviewHighlight="Allied Health Professional"
    overviewParagraphs={[
      "There are 15 allied health professional roles in the NHS, including physiotherapists, occupational therapists, diagnostic and therapeutic radiographers, paramedics, podiatrists, speech and language therapists, and more.",
      "AHPs work across hospitals, community settings, and patients' homes — helping people overcome physical and mental health challenges. You'll be part of a multidisciplinary team working alongside doctors and nurses.",
      "With world-class training and ongoing professional development, you'll build expertise that makes a real difference to patients every day.",
    ]}
    sectionTitle="Why choose an"
    sectionHighlight="AHP career?"
    sectionDescription="Allied health professionals are essential to the NHS. With growing demand and diverse specialities, there's never been a better time to explore AHP roles."
    benefits={[
      "15 diverse career paths from physiotherapy to prosthetics",
      "Work in hospitals, community settings, and patients' homes",
      "World-class training and continuous professional development",
      "Competitive NHS salary and pension scheme",
      "Make a tangible difference to patients' lives every day",
      "Growing demand across the NHS for AHP professionals",
    ]}
    roles={[
      { title: "Physiotherapist", description: "Help patients recover movement and function after injury, illness, or disability through tailored exercise programmes and manual therapy." },
      { title: "Occupational Therapist", description: "Support people to participate in daily activities and live independently by adapting environments and teaching new skills." },
      { title: "Diagnostic Radiographer", description: "Use advanced imaging technology including X-rays, CT, and MRI to help diagnose injuries and diseases." },
      { title: "Paramedic", description: "Provide emergency medical care in the community, responding to 999 calls and delivering life-saving treatment." },
      { title: "Speech & Language Therapist", description: "Assess and treat people with speech, language, communication, and swallowing difficulties across all age groups." },
      { title: "Podiatrist", description: "Diagnose and treat conditions affecting the feet and lower limbs, helping patients maintain mobility and independence." },
    ]}
    ctaTitle="Start Your AHP Career"
    ctaDescription="Ready to join one of 15 allied health professional roles in the NHS? Register with Flexzo today to discover opportunities that match your skills."
  />
);

export default AlliedHealthProfessionals;
