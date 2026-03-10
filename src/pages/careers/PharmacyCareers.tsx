import CareerPageTemplate from "@/components/CareerPageTemplate";
import heroImage from "@/assets/career-pharmacy.jpg";

const PharmacyCareers = () => (
  <CareerPageTemplate
    heroImage={heroImage}
    tagline="Pharmacy Careers"
    title="We Are Pharmacy"
    titleHighlight="Professionals."
    subtitle="Make a positive difference to people's lives and wellbeing by providing expert care in a wide range of settings, often at the heart of communities."
    overviewTitle="A career in"
    overviewHighlight="Pharmacy"
    overviewParagraphs={[
      "A pharmacy career offers the chance to make a positive difference to people's lives and wellbeing. As well as having expert knowledge of medicines and how they work, you'll help people stay well by supporting healthy lifestyles.",
      "Pharmacy professionals work across hospitals, community pharmacies, GP practices, and specialist settings. The pharmacy team works together — from pharmacists and pharmacy technicians to pharmacy assistants — to deliver outstanding patient care.",
      "With ongoing training and clear progression routes, you'll be able to move into senior positions with higher pay grades while enjoying a competitive salary and generous NHS benefits.",
    ]}
    sectionTitle="Why choose a"
    sectionHighlight="pharmacy career?"
    sectionDescription="Pharmacy professionals play a crucial role in the NHS, with growing responsibility and expanding clinical roles making it an exciting time to join the profession."
    benefits={[
      "Expert knowledge of medicines and their effects",
      "Work in hospitals, community pharmacies, and GP practices",
      "Growing clinical role with prescribing opportunities",
      "Clear career progression to senior and specialist roles",
      "Competitive salary with NHS pension and benefits",
      "Help communities stay well through health promotion",
    ]}
    roles={[
      { title: "Pharmacist", description: "Use expert knowledge of medicines to optimise patient care, advise on prescriptions, and ensure safe and effective medication use." },
      { title: "Pharmacy Technician", description: "Support pharmacists in preparing and dispensing medicines, managing stock, and providing medicines information to patients." },
      { title: "Clinical Pharmacist", description: "Work directly with patients and clinical teams in hospitals or GP practices, reviewing medications and optimising treatment plans." },
      { title: "Community Pharmacist", description: "Provide medicines, health advice, and clinical services in community pharmacies, often as the first point of contact for patients." },
      { title: "Pharmacy Assistant", description: "Support the pharmacy team with dispensing, stock management, and customer service in hospital and community settings." },
      { title: "Specialist Pharmacist", description: "Develop expertise in areas like oncology, paediatrics, or mental health, providing specialist medicines advice and patient care." },
    ]}
    ctaTitle="Start Your Pharmacy Career"
    ctaDescription="Ready to join the pharmacy profession? Register with Flexzo today and discover NHS pharmacy roles that match your expertise."
  />
);

export default PharmacyCareers;
