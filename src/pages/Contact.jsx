import Button from "../components/Button";
import Reveal from "../components/Reveal";
import TextReveal from "../components/TextReveal";
import { useLanguage } from "../context/useLanguage";

function Contact() {
  const { t } = useLanguage();

  return (
    <>
      <section className="contact-hero">
        <div className="container contact-hero-grid">
          <Reveal variant="left">
            <div className="contact-logo-stage">
              <img src="/images/logo.png" alt="Lux Café Co logo" />
            </div>
          </Reveal>

          <Reveal delay={0.15} variant="right">
            <div className="contact-hero-copy">
              <p className="eyebrow">{t.contact.heroEyebrow}</p>

              <h1>
                <TextReveal>{t.contact.heroTitle}</TextReveal>
              </h1>

              <p>{t.contact.heroBody}</p>

              <div className="contact-info-list">
                <a href="mailto:luxcafecanada@hotmail.com">
                  <span>Email</span>
                  luxcafecanada@hotmail.com
                </a>

                <a href="https://wa.me/YOURNUMBERHERE" target="_blank" rel="noreferrer">
                  <span>WhatsApp</span>
                  {t.contact.whatsapp}
                </a>

                <a href="#" target="_blank" rel="noreferrer">
                  <span>Instagram</span>
                  @luxcafeco
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section contact-inquiry">
        <div className="container contact-inquiry-grid">
          <Reveal variant="left">
            <div>
              <p className="eyebrow">{t.contact.inquiryEyebrow}</p>
              <h2 className="section-title">{t.contact.inquiryTitle}</h2>
              <p className="section-copy">{t.contact.inquiryBody}</p>
            </div>
          </Reveal>

          <Reveal delay={0.15} variant="right">
            <form className="inquiry-box">
              <div className="input-row">
                <input type="text" placeholder={t.contact.name} />
                <input type="email" placeholder={t.contact.email} />
              </div>

              <select defaultValue="">
                <option value="" disabled>
                  {t.contact.reason}
                </option>
                {t.contact.reasons.map((reason) => (
                  <option key={reason}>{reason}</option>
                ))}
              </select>

              <textarea placeholder={t.contact.message} rows="5" />

              <button className="btn btn-primary" type="button">
                {t.contact.send}
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="section contact-faq">
        <div className="container">
          <Reveal>
            <div className="contact-section-heading">
              <p className="eyebrow">{t.contact.faqEyebrow}</p>
              <h2 className="section-title">{t.contact.faqTitle}</h2>
            </div>
          </Reveal>

          <div className="faq-grid">
            {t.contact.faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 0.08} variant="scale">
                <article className="faq-card">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-final">
        <div className="container contact-final-panel">
          <Reveal variant="scale">
            <p className="eyebrow">{t.contact.finalEyebrow}</p>
            <h2 className="section-title">{t.contact.finalTitle}</h2>
            <p className="section-copy">{t.contact.finalBody}</p>

            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <Button to="/products">{t.contact.finalButton}</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Contact;