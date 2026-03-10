import CareerPageTemplate from "@/components/CareerPageTemplate";
import heroImage from "@/assets/career-midwifery.jpg";

const Midwifery = () => (
  <CareerPageTemplate
    heroImage={heroImage}
    tagline="Midwifery"
    title="Be at the Start of a"
    titleHighlight="Family's Journey"
    subtitle="Preparing women for the delivery of new life puts midwives at the very heart of every stage of pregnancy, labour, and the early postnatal period."
    overviewTitle="A career in"
    overviewHighlight="Midwifery"
    overviewParagraphs={[
      "Midwives often describe their job as 'privileged'. Helping to bring new life into the world is a great responsibility and one that needs care and compassion.",
      "Training to become a midwife is a mix of academic study and practical, hands-on experience. Because NHS training is recognised as some of the best in the world, there really is no limit to where it could take you.",
      "You'll enjoy a competitive salary, generous pension, and exclusive health service discounts. To support a healthy work/life balance, you'll work a flexible 37.5 hour week with 27 days holiday plus public holidays.",
    ]}
    sectionTitle="Why choose a"
    sectionHighlight="midwifery career?"
    sectionDescription="Midwifery is one of the most rewarding careers in healthcare. You'll support families through one of the most important times in their lives."
    benefits={[
      "Be at the heart of pregnancy, birth, and postnatal care",
      "World-class training combining academic study and practice",
      "Work in hospitals, birth centres, and community settings",
      "Competitive salary with NHS pension and benefits",
      "Flexible working patterns to support work/life balance",
      "Clear progression to senior and specialist midwifery roles",
    ]}
    roles={[
      { title: "Hospital Midwife", description: "Provide care during labour and birth in hospital maternity units, supporting women through delivery and immediate postnatal care." },
      { title: "Community Midwife", description: "Support women throughout pregnancy and after birth in their homes and community clinics, providing continuity of care." },
      { title: "Specialist Midwife", description: "Develop expertise in areas like perinatal mental health, bereavement care, or substance misuse, providing additional support for complex cases." },
      { title: "Research Midwife", description: "Contribute to advancing maternity care through clinical research, helping to improve outcomes for mothers and babies." },
      { title: "Consultant Midwife", description: "Lead midwifery practice at a senior level, driving improvements in care standards, education, and service development." },
      { title: "Birth Centre Midwife", description: "Provide care in midwife-led birth centres, supporting natural birth in a home-like environment with a focus on personalised care." },
    ]}
    ctaTitle="Start Your Midwifery Career"
    ctaDescription="Ready to support families at the start of their journey? Register with Flexzo today and discover NHS midwifery opportunities."
  />
);

export default Midwifery;
