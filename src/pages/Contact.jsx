import { useLanguage } from "../context/useLanguage";

function Contact() {
  const { t } = useLanguage();

  return (
    <section className="page-placeholder">
      <div>
        <p className="eyebrow">{t.pages.contactEyebrow}</p>
        <h1>{t.pages.contactTitle}</h1>
        <p>{t.pages.contactBody}</p>
      </div>
    </section>
  );
}

export default Contact;