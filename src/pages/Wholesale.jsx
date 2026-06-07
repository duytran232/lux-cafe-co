import Button from "../components/Button";
import Reveal from "../components/Reveal";
import TextReveal from "../components/TextReveal";
import { useLanguage } from "../context/useLanguage";

function Wholesale() {
  const { t } = useLanguage();

  return (
    <>
      <section className="wholesale-hero">
        <div className="wholesale-hero-pattern" aria-hidden="true" />

        <div className="container wholesale-hero-grid">
          <Reveal variant="left">
            <div className="wholesale-hero-copy">
              <p className="eyebrow">{t.wholesale.heroEyebrow}</p>

              <h1>
                <TextReveal>{t.wholesale.heroTitle}</TextReveal>
              </h1>

              <p>{t.wholesale.heroBody}</p>

              <div className="hero-actions">
                <Button to="/contact">{t.wholesale.primaryButton}</Button>
                <Button to="/products" variant="secondary">
                  {t.wholesale.secondaryButton}
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} variant="right">
            <aside className="wholesale-hero-visual">
              <div className="partner-ledger-card">
                <div className="partner-ledger-main">
                  <span>{t.wholesale.heroCardLabel}</span>
                  <strong>2.5kg</strong>
                  <p>{t.wholesale.heroCardText}</p>
                </div>

                <div className="partner-ledger-specs">
                  <div>
                    <small>Supply</small>
                    <b>Consistent daily service</b>
                  </div>

                  <div>
                    <small>Use Case</small>
                    <b>Cafés, retail, hospitality</b>
                  </div>

                  <div>
                    <small>Origin</small>
                    <b>Colombian coffee identity</b>
                  </div>
                </div>
              </div>

              <div className="partner-film-card">
                <video
                  src="/videos/colombian-coffee-origin.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />

                <div>
                  <span>{t.wholesale.mediaVideoLabel}</span>
                  <p>
                    {t.wholesale.mediaVideoText}
                  </p>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="section wholesale-overview">
        <div className="container wholesale-overview-grid">
          <Reveal variant="left">
            <div className="wholesale-overview-copy">
              <p className="eyebrow">{t.wholesale.overviewEyebrow}</p>
              <h2 className="section-title">{t.wholesale.overviewTitle}</h2>
              <p className="section-copy">{t.wholesale.overviewBody}</p>
            </div>
          </Reveal>

          <Reveal delay={0.15} variant="right">
            <div className="wholesale-snapshot">
              {t.wholesale.stats.map((stat, index) => (
                <div className="snapshot-row" key={stat.label}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{stat.value}</strong>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section wholesale-partners">
        <div className="container">
          <Reveal>
            <div className="wholesale-section-heading centered">
              <p className="eyebrow">{t.wholesale.partnerEyebrow}</p>
              <h2 className="section-title">{t.wholesale.partnerTitle}</h2>
              <p className="section-copy">{t.wholesale.partnerBody}</p>
            </div>
          </Reveal>

          <div className="partner-grid">
            {t.wholesale.partners.map((partner, index) => (
              <Reveal key={partner.title} delay={index * 0.08} variant="scale">
                <article className="partner-card">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{partner.title}</h3>
                  <p>{partner.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section wholesale-format">
        <div className="container wholesale-format-grid">
          <Reveal variant="left">
            <div className="format-showcase">
              <div className="format-product-frame">
                <img
                  src="/images/products/signature_collection.png"
                  alt="Lux Café Co wholesale coffee product"
                />
              </div>

              <div className="format-product-meta">
                <span>{t.wholesale.formatBadge}</span>
                <strong>2.5kg</strong>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} variant="right">
            <div className="format-copy-panel">
              <p className="eyebrow">{t.wholesale.formatEyebrow}</p>
              <h2 className="section-title">{t.wholesale.formatTitle}</h2>
              <p className="section-copy">{t.wholesale.formatBody}</p>

              <div className="format-list">
                {t.wholesale.formatPoints.map((point) => (
                  <div key={point.title}>
                    <strong>{point.title}</strong>
                    <span>{point.body}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section wholesale-process">
        <div className="container wholesale-process-grid">
          <Reveal variant="left">
            <div className="process-sticky-copy">
              <p className="eyebrow">{t.wholesale.processEyebrow}</p>
              <h2 className="section-title">{t.wholesale.processTitle}</h2>
            </div>
          </Reveal>

          <div className="process-timeline">
            {t.wholesale.process.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08} variant="right">
                <div className="process-step">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section wholesale-cta">
        <div className="container wholesale-cta-panel">
          <Reveal variant="scale">
            <p className="eyebrow">{t.wholesale.ctaEyebrow}</p>
            <h2 className="section-title">{t.wholesale.ctaTitle}</h2>
            <p className="section-copy">{t.wholesale.ctaBody}</p>

            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <Button to="/contact">{t.wholesale.ctaButton}</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Wholesale;