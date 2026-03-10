import CareerPageTemplate from "@/components/CareerPageTemplate";
import heroImage from "@/assets/career-psychology.jpg";

const Psychology = () => (
  <CareerPageTemplate
    heroImage={heroImage}
    tagline="Psychological Professions"
    title="Make a Difference to"
    titleHighlight="Mental Health"
    subtitle="Use your interest in how people think and behave to help those with mental health problems live fulfilling lives."
    overviewTitle="A career in the"
    overviewHighlight="Psychological Professions"
    overviewParagraphs={[
      "If you want to help people with mental health problems, a career in the psychological professions could be for you. There are diverse routes in — from degree-level apprenticeships to roles requiring lived experience of mental health services.",
      "Whatever role you choose, you'll be part of a committed, passionate team working alongside nurses, psychiatrists, and many other highly trained professionals to support people's mental health and wellbeing.",
      "You'll enjoy a competitive salary, generous NHS pension, and exclusive health service discounts, along with flexible working patterns and 27 days holiday plus public holidays.",
    ]}
    sectionTitle="Why choose the"
    sectionHighlight="psychological professions?"
    sectionDescription="With growing recognition of mental health's importance, there's increasing demand for psychological professionals across the NHS. Multiple entry routes make these careers accessible to a wider range of people."
    benefits={[
      "Multiple routes into the profession including apprenticeships",
      "Work as part of passionate, multidisciplinary teams",
      "Make a real difference to people's mental health and wellbeing",
      "Competitive salary with NHS pension and benefits",
      "Flexible 37.5 hour working week",
      "Continuous professional development and supervision",
    ]}
    roles={[
      { title: "Clinical Psychologist", description: "Assess and treat complex mental health conditions using evidence-based psychological therapies across a range of NHS settings." },
      { title: "Counselling Psychologist", description: "Provide therapeutic support for emotional and psychological difficulties, working in hospitals, clinics, and community settings." },
      { title: "Psychological Wellbeing Practitioner", description: "Deliver low-intensity psychological interventions for common mental health problems like anxiety and depression." },
      { title: "Cognitive Behavioural Therapist", description: "Use CBT techniques to help patients change unhelpful thinking patterns and behaviours that maintain their difficulties." },
      { title: "Health Psychologist", description: "Apply psychological research and methods to promote health, prevent illness, and improve healthcare delivery and policy." },
      { title: "Child & Adolescent Psychologist", description: "Specialise in the mental health and emotional development of children and young people, working in CAMHS and educational settings." },
    ]}
    ctaTitle="Start Your Psychology Career"
    ctaDescription="Ready to help people with their mental health? Register with Flexzo today and explore NHS psychological profession roles."
  />
);

export default Psychology;
