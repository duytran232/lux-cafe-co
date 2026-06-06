import { motion } from "framer-motion";

import Button from "../components/Button";
import Reveal from "../components/Reveal";
import SectionDivider from "../components/SectionDivider";
import TextReveal from "../components/TextReveal";
import { useLanguage } from "../context/useLanguage";

const originSteps = [
  {
    id: "harvest",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "roast",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "distribution",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",
  },
];

function About() {
  const { t } = useLanguage();
  const origin = t.origin;

  return (
    <div className="origin-page">
      <section className="origin-hero">
        <motion.video
          className="origin-hero-video"
          src="/videos/origin-hero-video.mp4"
          poster="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1800&q=85"
          autoPlay
          muted
          loop
          playsInline
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className="origin-hero-bg" />

        <div className="container origin-hero-grid">
          <Reveal>
            <div className="origin-hero-copy">
              <p className="eyebrow">{origin.heroEyebrow}</p>

              <h1>
                <TextReveal>{origin.heroTitle}</TextReveal>
              </h1>

              <p>{origin.heroBody}</p>

              <div className="origin-hero-actions">
                <Button to="/products">{origin.primaryButton}</Button>
                <Button to="/wholesale" variant="secondary">
                  {origin.secondaryButton}
                </Button>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      <SectionDivider />

      <section className="section origin-intro">
        <div className="container origin-intro-grid">
          <Reveal variant="left">
            <div className="origin-statement">
              <div className="origin-story-slices" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <div className="origin-statement-content">
                <p className="eyebrow origin-media-eyebrow">{origin.introEyebrow}</p>
                <h2 className="section-title">{origin.introTitle}</h2>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={0.15}>
            <div className="origin-intro-copy">
              <p>{origin.introBodyOne}</p>
              <p>{origin.introBodyTwo}</p>
              <p>{origin.introBodyThree}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section origin-journey">
        <div className="container">
          <Reveal>
            <div className="section-heading-row">
              <div>
                <p className="eyebrow">{origin.journeyEyebrow}</p>
                <h2 className="section-title">{origin.journeyTitle}</h2>
              </div>
              <p className="section-copy">{origin.journeyBody}</p>
            </div>
          </Reveal>

          <div className="origin-steps">
            {originSteps.map((step, index) => (
              <Reveal key={step.id} delay={index * 0.12}>
                <article className="origin-step-card">
                  <div className="origin-step-image">
                    <img src={step.image} alt={origin.steps[step.id].title} />
                  </div>

                  <div className="origin-step-content">
                    <span className="origin-step-mark" aria-hidden="true">
                      <i />
                    </span>
                    <h3>{origin.steps[step.id].title}</h3>
                    <p>{origin.steps[step.id].body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section origin-culture">
        <div className="container origin-culture-grid">
          <Reveal variant="scale">
            <div className="origin-culture-panel">
              <span className="origin-big-number">100%</span>
              <p>{origin.cultureBadge}</p>
            </div>
          </Reveal>

          <Reveal variant="right" delay={0.15}>
            <div>
              <p className="eyebrow">{origin.cultureEyebrow}</p>
              <h2 className="section-title">{origin.cultureTitle}</h2>
              <p className="section-copy">{origin.cultureBody}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section origin-values">
        <div className="container">
          <Reveal>
            <div className="origin-values-header">
              <p className="eyebrow">{origin.valuesEyebrow}</p>
              <h2 className="section-title">{origin.valuesTitle}</h2>
            </div>
          </Reveal>

          <div className="origin-value-grid">
            {origin.values.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1}>
                <article className="origin-value-card">
                  <span className="origin-value-mark" aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section origin-cta">
        <div className="container">
          <Reveal>
            <div className="origin-cta-card">
              <p className="eyebrow">{origin.ctaEyebrow}</p>
              <h2>{origin.ctaTitle}</h2>
              <p>{origin.ctaBody}</p>

              <div className="origin-cta-actions">
                <Button to="/products">{origin.primaryButton}</Button>
                <Button to="/contact" variant="secondary">
                  {origin.contactButton}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

export default About;