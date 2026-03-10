import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Upload, X, FileText, AlertCircle, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRegion } from "@/hooks/useRegion";
import { useRegionText } from "@/lib/regionalize";
import { sendRegistrationEmail } from "@/lib/emailService";
import bookDemoHero from "@/assets/book-demo-hero.jpg";
import ReCaptcha from "@/components/ReCaptcha";
import SEO from "@/components/SEO";
import { trackEvent } from "@/lib/analytics";

const Register = () => {
  const navigate = useNavigate();
  const { regionPath } = useRegion();
  const { t } = useRegionText();
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", telephone: "" });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [honeypot, setHoneypot] = useState("");
  const [formLoadedAt] = useState(() => Date.now());
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeShareProfile, setAgreeShareProfile] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [recaptchaToken, setRecaptchaToken] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!validTypes.includes(file.type)) {
        setErrors((prev) => ({ ...prev, cv: "Please upload a PDF or Word document" }));
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, cv: "File must be under 10MB" }));
        return;
      }
      setCvFile(file);
      setErrors((prev) => {
        const { cv, ...rest } = prev;
        return rest;
      });
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.firstName.trim()) errs.firstName = "First name is required";
    if (!form.lastName.trim()) errs.lastName = "Last name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email";
    if (!form.telephone.trim()) errs.telephone = "Mobile number is required";
    if (!cvFile) errs.cv = "Please upload your CV/resume";
    if (!agreeTerms) errs.terms = "You must agree to the terms and conditions";
    if (!recaptchaToken) errs.recaptcha = "Please complete the reCAPTCHA verification";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    try {
      await sendRegistrationEmail({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        telephone: form.telephone,
        cvFile: cvFile!,
        recaptchaToken,
        _hp_field: honeypot,
        _form_loaded_at: formLoadedAt,
      });
      trackEvent("form_submission", { form_name: "register" });
      navigate(regionPath("/register/success"));
    } catch {
      setErrors((prev) => ({
        ...prev,
        submit: "Something went wrong. Please try again or email us at applications@flexzo.ai",
      }));
      setSubmitting(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full rounded-lg border px-4 py-3 text-sm text-foreground bg-background outline-none transition-colors placeholder:text-muted-foreground focus:border-[#0075FF] focus:ring-1 focus:ring-[#0075FF] ${errors[field] ? "border-red-400" : "border-border"}`;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Register"
        description="Register with Flexzo to access healthcare job opportunities, get AI-matched to roles, and take control of your career."
        path={`/${regionPath("/register").slice(1)}`}
      />
      <Navbar />

      <section className="bg-background pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">{t("Register")}</h1>
              <p className="mb-10 max-w-lg text-muted-foreground">
                {t("Register with Flexzo to access healthcare opportunities, get AI-matched to roles, and join our collaborative staff bank.")}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name fields */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      {t("First name")} <span className="text-[#0075FF]">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className={inputClass("firstName")}
                      placeholder="John"
                    />
                    {errors.firstName && <p className="mt-1.5 text-xs text-red-500">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      {t("Last name")} <span className="text-[#0075FF]">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className={inputClass("lastName")}
                      placeholder="Smith"
                    />
                    {errors.lastName && <p className="mt-1.5 text-xs text-red-500">{errors.lastName}</p>}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    {t("Email address")} <span className="text-[#0075FF]">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass("email")}
                    placeholder="john.smith@example.com"
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                </div>

                {/* Mobile */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    {t("Mobile number")} <span className="text-[#0075FF]">*</span>
                  </label>
                  <input
                    type="tel"
                    value={form.telephone}
                    onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                    className={inputClass("telephone")}
                    placeholder="+44 7700 900000"
                  />
                  {errors.telephone && <p className="mt-1.5 text-xs text-red-500">{errors.telephone}</p>}
                </div>

                {/* CV Upload */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    {t("CV / Resume")} <span className="text-[#0075FF]">*</span>
                  </label>
                  {cvFile ? (
                    <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/50 px-4 py-3">
                      <FileText className="h-5 w-5 shrink-0 text-[#0075FF]" />
                      <span className="flex-1 truncate text-sm text-foreground">{cvFile.name}</span>
                      <button
                        type="button"
                        onClick={() => setCvFile(null)}
                        className="shrink-0 rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <label className={`flex cursor-pointer flex-col items-center gap-3 rounded-lg border-2 border-dashed px-6 py-8 transition-colors hover:border-[#0075FF]/40 hover:bg-muted/30 ${errors.cv ? "border-red-400" : "border-border"}`}>
                      <Upload className="h-8 w-8 text-muted-foreground" />
                      <div className="text-center">
                        <p className="text-sm font-medium text-foreground">{t("Click to upload your CV")}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{t("PDF or Word document, max 10MB")}</p>
                      </div>
                      <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" />
                    </label>
                  )}
                  {errors.cv && <p className="mt-1.5 text-xs text-red-500">{errors.cv}</p>}
                </div>

                {/* Checkboxes */}
                <div className="space-y-4">
                  <label className={`flex cursor-pointer gap-3 ${errors.terms ? "text-red-500" : ""}`}>
                    <input
                      type="checkbox"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-border accent-[#0075FF]"
                    />
                    <span className="text-sm text-muted-foreground">
                      {t("I agree to the")}{" "}
                      <Link to={regionPath("/terms-and-conditions")} target="_blank" className="text-[#0075FF] underline hover:text-[#0060D0]">
                        {t("Terms and Conditions")}
                      </Link>{" "}
                      <span className="text-[#0075FF]">*</span>
                    </span>
                  </label>
                  {errors.terms && <p className="-mt-2 ml-7 text-xs text-red-500">{errors.terms}</p>}

                  <label className="flex cursor-pointer gap-3">
                    <input
                      type="checkbox"
                      checked={agreeShareProfile}
                      onChange={(e) => setAgreeShareProfile(e.target.checked)}
                      className="mt-0.5 h-4 w-4 shrink-0 rounded border-border accent-[#0075FF]"
                    />
                    <span className="text-sm text-muted-foreground">
                      {t("I agree to share my profile with Hospitals & Trusts who are employers on the Flexzo platform")}
                    </span>
                  </label>
                </div>

                {/* Honeypot */}
                <input
                  type="text"
                  name="website_url"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0 }}
                />

                {/* reCAPTCHA */}
                <div>
                  <ReCaptcha onVerify={setRecaptchaToken} onExpire={() => setRecaptchaToken("")} />
                  {errors.recaptcha && <p className="text-xs text-red-500">{errors.recaptcha}</p>}
                </div>

                {errors.submit && (
                  <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-950/30 dark:text-red-400">
                    <AlertCircle size={16} className="mt-0.5 shrink-0" />
                    <span>{errors.submit}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#0075FF] px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-[#0060D0] disabled:opacity-60"
                >
                  {submitting ? t("Submitting…") : t("Register Now")}
                  {!submitting && <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
                </button>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="hidden lg:block">
              <div className="sticky top-32 overflow-hidden rounded-2xl border border-border bg-muted/50">
                <img src={bookDemoHero} alt="Healthcare professional" className="h-56 w-full object-cover" />
                <div className="p-10">
                  <Globe className="mb-6 text-[#0075FF]" size={48} />
                  <h2 className="mb-4 text-2xl font-bold text-foreground">{t("Access a world of healthcare opportunities")}</h2>
                  <p className="mb-8 leading-relaxed text-muted-foreground">
                    {t("Register with Flexzo to get AI-matched to healthcare roles, manage your compliance, and access shifts across the UK's leading Trusts and healthcare organisations.")}
                  </p>
                  <div className="space-y-4">
                    {[
                      "AI-matched to roles in real-time",
                      "Manage your availability & shifts",
                      "Full compliance management",
                      "Collaborative staff bank access",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-[#0075FF]" />
                        <span className="text-sm text-muted-foreground">{t(item)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Register;
