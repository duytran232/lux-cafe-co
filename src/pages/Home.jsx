import { useMemo } from "react";

import Button from "../components/Button";
import Reveal from "../components/Reveal";
import TextReveal from "../components/TextReveal";
import SectionDivider from "../components/SectionDivider";
import { getTranslatedProducts } from "../data/products";
import { useLanguage } from "../context/useLanguage";

function Home() {
  const { t } = useLanguage();
  const products = useMemo(() => getTranslatedProducts(t), [t]);

  return (
    <>
      <section className="home-hero" id="home">
        <div className="hero-content">
          <Reveal variant="left">
            <p className="eyebrow hero-kicker">{t.home.heroEyebrow}</p>

            <h1>
              <TextReveal highlightColombia>{t.home.heroTitle}</TextReveal>
            </h1>

            <p>{t.home.heroBody}</p>

            <div className="hero-actions">
              <Button to="/products">{t.home.explore}</Button>
              <Button to="/about" variant="secondary">
                {t.home.discover}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionDivider />

      <section className="section product-showcase" id="products">
        <div className="container">
          <Reveal>
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">{t.home.productEyebrow}</p>
                <h2 className="section-title">
                  <TextReveal>{t.home.productTitle}</TextReveal>
                </h2>
              </div>

              <p className="section-copy">{t.home.productBody}</p>
            </div>
          </Reveal>

          <div className="product-grid">
            {products.map((product, index) => (
              <Reveal delay={index * 0.1} variant="scale" key={product.id}>
                <article className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={`${product.name} packaging`} />
                    <span className="product-size">{product.size}</span>
                  </div>

                  <div className="product-info">
                    <span>{product.tag}</span>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-origin" id="about">
        <div className="container about-grid">
          <Reveal variant="left">
            <div className="about-copy">
              <p className="eyebrow">{t.home.originEyebrow}</p>

              <h2 className="section-title">
                {t.home.originTitleStart}{" "}
                <span className="brand-colombia">{t.home.originTitleCountry}</span>
                , {t.home.originTitleEnd}
              </h2>

              <p className="section-copy">{t.home.originBody}</p>

              <div className="origin-points">
                {t.home.originPoints.map((point) => (
                  <div className="origin-point" key={point.title}>
                    <strong>{point.title}</strong>
                    <span>{point.body}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} variant="right">
            <div className="origin-video-card">
              <video
                src="/videos/colombian-coffee-origin.mp4"
                autoPlay
                muted
                loop
                playsInline
              />

              <div className="origin-video-orbit" aria-hidden="true">
                <span className="strip-red" />
                <span className="strip-gold" />
                <span className="strip-blue" />
              </div>

              <div className="origin-video-caption">
                <span>{t.home.originFilm}</span>
                <p>{t.home.originFilmText}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section wholesale-home" id="wholesale">
        <div className="container wholesale-grid">
          <Reveal variant="left">
            <div className="wholesale-visual">
              <div className="wholesale-minimal-card">
                <span>{t.home.wholesaleFormat}</span>
                <strong>2.5kg</strong>
                <p>{t.home.wholesaleSupply}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} variant="right">
            <p className="eyebrow">{t.home.wholesaleEyebrow}</p>

            <h2 className="section-title">
              {t.home.wholesaleTitleStart}{" "}
              <span className="brand-colombia">{t.home.wholesaleTitleCountry}</span>{" "}
              {t.home.wholesaleTitleEnd}
            </h2>

            <p className="section-copy">{t.home.wholesaleBody}</p>

            <div className="hero-actions">
              <Button to="/wholesale">{t.home.wholesaleButton}</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section contact-home" id="contact">
        <div className="container contact-panel">
          <Reveal variant="scale">
            <p className="eyebrow">{t.home.contactEyebrow}</p>

            <h2 className="section-title">
              <TextReveal>{t.home.contactTitle}</TextReveal>
            </h2>

            <p className="section-copy">{t.home.contactBody}</p>

            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <Button to="/contact">{t.home.contactButton}</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Home;