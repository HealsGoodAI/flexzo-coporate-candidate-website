import CareerPageTemplate from "@/components/CareerPageTemplate";
import heroImage from "@/assets/career-estates.jpg";

const EstatesAndFacilities = () => (
  <CareerPageTemplate
    heroImage={heroImage}
    tagline="Estates & Facilities"
    title="Keep the NHS"
    titleHighlight="Running Safely"
    subtitle="As part of the estates and facilities team, you'll look after NHS buildings and grounds, ensuring medicines, goods, and patients are where they need to be."
    overviewTitle="A career in"
    overviewHighlight="Estates & Facilities"
    overviewParagraphs={[
      "The estates and facilities team makes sure the NHS is a safe and pleasant place for patients and staff. From maintaining buildings and engineering systems to catering, portering, and security — every role is essential.",
      "There are many different roles across domestic services, estates engineering, and support services. Whether you're ensuring wards are clean, managing building systems, or transporting patients, you'll be making a difference every day.",
      "You'll enjoy a competitive salary, generous pension, and exclusive health service discounts, along with flexible working and 27 days holiday plus public holidays.",
    ]}
    sectionTitle="Why choose"
    sectionHighlight="estates & facilities?"
    sectionDescription="Without the estates and facilities team, the NHS couldn't function. These essential roles offer variety, job security, and the satisfaction of keeping the health service running."
    benefits={[
      "Essential roles that keep the NHS running safely",
      "Wide variety of career paths from engineering to catering",
      "No medical qualifications needed for many roles",
      "Competitive salary with NHS pension and benefits",
      "Flexible working patterns and generous holiday",
      "Clear progression and training opportunities",
    ]}
    roles={[
      { title: "Estates Engineer", description: "Maintain and repair hospital building systems including heating, ventilation, electrical, and plumbing to ensure safe and comfortable environments." },
      { title: "Porter", description: "Transport patients, specimens, equipment, and supplies around hospital sites, playing a vital role in keeping services running smoothly." },
      { title: "Domestic Services", description: "Keep hospital environments clean and hygienic, ensuring infection control standards are met to protect patients and staff." },
      { title: "Catering", description: "Prepare and serve nutritious meals for patients and staff, supporting recovery and wellbeing through quality hospital food service." },
      { title: "Security", description: "Ensure the safety and security of patients, staff, and visitors across NHS sites, managing access control and responding to incidents." },
      { title: "Grounds & Gardens", description: "Maintain hospital grounds and gardens, creating pleasant outdoor spaces that support patient recovery and staff wellbeing." },
    ]}
    ctaTitle="Start Your NHS Career"
    ctaDescription="Ready to be part of the team that keeps the NHS running? Register with Flexzo today and explore estates and facilities opportunities."
  />
);

export default EstatesAndFacilities;
