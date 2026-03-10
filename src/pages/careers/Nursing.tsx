import CareerPageTemplate from "@/components/CareerPageTemplate";
import heroImage from "@/assets/career-nursing.jpg";

const Nursing = () => (
  <CareerPageTemplate
    heroImage={heroImage}
    tagline="Nursing Careers"
    title="We Are Nurses."
    titleHighlight="We Are Changing Lives."
    subtitle="No two days are the same in nursing — it's one of the most dynamic and rewarding roles within the NHS. With ongoing training and support, you'll make it exactly what you want it to be."
    overviewTitle="A career in"
    overviewHighlight="Nursing"
    overviewParagraphs={[
      "As a newly qualified nurse, you'll work as part of a multidisciplinary team providing direct patient care. You can choose to work in a variety of settings — from hospital wards and operating theatres to schools and patients' homes.",
      "There are many different fields of nursing to choose from, including adult nursing, children's nursing, mental health nursing, and learning disability nursing. Each offers unique challenges and rewards.",
      "When you train to be a nurse you may be eligible for financial support, and you'll benefit from a competitive salary, generous pension, and NHS discounts throughout your career.",
    ]}
    sectionTitle="Why choose a"
    sectionHighlight="nursing career?"
    sectionDescription="Nursing is one of the most in-demand and respected professions in the NHS. With clear progression pathways and diverse specialisms, your career can go wherever you want it to."
    benefits={[
      "Work across hospitals, community settings, and patients' homes",
      "Choose from adult, children's, mental health, or learning disability nursing",
      "Financial support available during training",
      "Competitive salary with NHS pension and discounts",
      "Clear career progression to senior and specialist roles",
      "Be part of a supportive, multidisciplinary team",
    ]}
    roles={[
      { title: "Adult Nurse", description: "Care for adult patients across a range of settings, managing acute and long-term conditions with compassion and clinical expertise." },
      { title: "Children's Nurse", description: "Provide specialist care for children and young people from birth to late teens, supporting families through illness and treatment." },
      { title: "Mental Health Nurse", description: "Support people experiencing mental health conditions, providing therapeutic care in hospitals, communities, and crisis settings." },
      { title: "Learning Disability Nurse", description: "Help people with learning disabilities live fulfilling lives, advocating for their needs and providing specialist health support." },
      { title: "District Nurse", description: "Deliver nursing care in patients' homes and community settings, managing complex conditions and coordinating care packages." },
      { title: "Practice Nurse", description: "Work in GP surgeries providing treatment, health screenings, immunisations, and chronic disease management." },
    ]}
    ctaTitle="Start Your Nursing Career"
    ctaDescription="Ready to make a difference in nursing? Register with Flexzo today and find NHS nursing roles that match your skills and ambitions."
  />
);

export default Nursing;
