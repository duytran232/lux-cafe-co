import { useEffect, useMemo, useState } from "react";

import Button from "../components/Button";
import Reveal from "../components/Reveal";
import TextReveal from "../components/TextReveal";
import { useCart } from "../context/useCart";
import { useLanguage } from "../context/useLanguage";
import { getTranslatedProducts } from "../data/products";

function Products() {
  const { t } = useLanguage();
  const { addToCart } = useCart();

  const products = useMemo(() => getTranslatedProducts(t), [t]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % products.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [products.length]);

  const activeProduct = products[activeIndex];

  return (
    <>
      <section className="collection-hero">
        <div className="container collection-hero-grid">
          <Reveal variant="left">
            <p className="eyebrow">{t.products.heroEyebrow}</p>

            <h1>
              <TextReveal>{t.products.heroTitle}</TextReveal>
            </h1>

            <p>{t.products.heroBody}</p>

            <div className="hero-actions">
              <Button to="/contact">{t.products.startInquiry}</Button>
              <Button to="/about" variant="secondary">
                {t.products.discoverOrigin}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.15} variant="scale">
            <div className="collection-hero-display">
              <img
                key={activeProduct.name}
                src={activeProduct.image}
                alt={`${activeProduct.name} packaging`}
              />

              <div className="hero-product-caption">
                <span>{activeProduct.size}</span>
                <strong>{activeProduct.name}</strong>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section collection-products">
        <div className="container">
          <Reveal>
            <div className="collection-section-heading">
              <p className="eyebrow">{t.products.lineupEyebrow}</p>
              <h2 className="section-title">{t.products.lineupTitle}</h2>
              <p className="section-copy">{t.products.lineupBody}</p>
            </div>
          </Reveal>

          <div className="collection-product-list">
            {products.map((product, index) => (
              <Reveal
                key={product.id}
                delay={index * 0.08}
                variant={index % 2 === 0 ? "left" : "right"}
              >
                <article className={`collection-product-card ${product.accent}`}>
                  <div className="collection-product-image">
                    <img src={product.image} alt={`${product.name} packaging`} />
                    <span>{product.size}</span>
                  </div>

                  <div className="collection-product-content">
                    <p className="product-label">{product.tag}</p>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>

                    <div className="product-detail-grid">
                      <div>
                        <span>{t.products.collection}</span>
                        <strong>{product.collection}</strong>
                      </div>

                      <div>
                        <span>{t.products.format}</span>
                        <strong>{product.size}</strong>
                      </div>

                      <div>
                        <span>{t.products.profile}</span>
                        <strong>{product.profile}</strong>
                      </div>
                    </div>

                    <div className="product-card-actions">
                      <Button to="/contact" variant="secondary">
                        {t.products.viewCollection}
                      </Button>

                      <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => addToCart(product)}
                      >
                        {t.products.addToCart}
                      </button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section collection-shopping">
        <div className="container shopping-grid">
          <Reveal variant="left">
            <p className="eyebrow">{t.products.orderingEyebrow}</p>
            <h2 className="section-title">{t.products.orderingTitle}</h2>
            <p className="section-copy">{t.products.orderingBody}</p>
          </Reveal>

          <Reveal delay={0.15} variant="right">
            <div className="shopping-notes">
              {t.products.options.map((option, index) => (
                <div key={option.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{option.title}</strong>
                  <p>{option.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Products;