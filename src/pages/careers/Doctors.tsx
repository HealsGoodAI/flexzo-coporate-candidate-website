import CareerPageTemplate from "@/components/CareerPageTemplate";
import heroImage from "@/assets/career-doctors.jpg";

const Doctors = () => (
  <CareerPageTemplate
    heroImage={heroImage}
    tagline="Doctors"
    title="Change Lives with a"
    titleHighlight="Career in Medicine"
    subtitle="With over 50 specialties to choose from and world-class training, a career as a doctor offers purpose, variety, and the chance to make a real difference."
    overviewTitle="A career as a"
    overviewHighlight="Doctor"
    overviewParagraphs={[
      "If you have a passion for improving people's lives, a career in medicine offers incredible variety with over 50 different specialties — from anaesthesia and emergency medicine to psychiatry and tropical medicine.",
      "As a doctor in the NHS, you'll receive training from leading universities and teaching hospital trusts across the UK. You'll enjoy a competitive salary, one of the most generous pension schemes in the UK, and extensive professional development.",
      "Whether you're interested in surgery, general practice, or research, medicine provides a career with purpose and many fantastic benefits.",
    ]}
    sectionTitle="Why choose a"
    sectionHighlight="medical career?"
    sectionDescription="Doctors are at the heart of the NHS, leading patient care and driving medical innovation. The career offers unparalleled training, job security, and the chance to specialise."
    benefits={[
      "Over 50 specialties to choose from",
      "World-class training from leading universities and hospitals",
      "Competitive salary with generous NHS pension",
      "Opportunity to lead multidisciplinary teams",
      "Continuous professional development throughout your career",
      "Make a life-changing difference to patients every day",
    ]}
    roles={[
      { title: "General Practitioner", description: "Provide primary care to patients in the community, diagnosing and treating a wide range of conditions and managing long-term health." },
      { title: "Hospital Doctor", description: "Work in hospital settings across specialties like cardiology, neurology, and gastroenterology, providing specialist patient care." },
      { title: "Surgeon", description: "Perform operations to treat injuries, diseases, and deformities across surgical specialties including orthopaedics, plastics, and general surgery." },
      { title: "Psychiatrist", description: "Diagnose and treat mental health conditions, working with patients in hospitals, community settings, and outpatient clinics." },
      { title: "Emergency Medicine", description: "Provide immediate care for acute illnesses and injuries in A&E departments, making rapid clinical decisions under pressure." },
      { title: "Anaesthetist", description: "Ensure patients are safely sedated during surgery and manage pain relief, working closely with surgical teams." },
    ]}
    ctaTitle="Start Your Medical Career"
    ctaDescription="Ready to begin your journey in medicine? Register with Flexzo today to explore NHS doctor roles and locum opportunities."
  />
);

export default Doctors;
