import Button from "../components/Button";
import Reveal from "../components/Reveal";
import TextReveal from "../components/TextReveal";
import SectionDivider from "../components/SectionDivider";

function Home() {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae urna sed elit pretium fermentum non vitae sapien.";

  const products = [
    {
      name: "Signature Coffee",
      size: "250g",
      tag: "Everyday Luxury",
      image: "/images/products/signature_collection.png",
      description: lorem,
    },
    {
      name: "Estate Coffee",
      size: "250g",
      tag: "Origin Focused",
      image: "/images/products/estate_collection.png",
      description: lorem,
    },
    {
      name: "Whisky Coffee",
      size: "250g",
      tag: "Bold Expression",
      image: "/images/products/whisky_collection.png",
      description: lorem,
    },
    {
      name: "Wine Coffee",
      size: "250g",
      tag: "Distinctive Aroma",
      image: "/images/products/wine_collection.png",
      description: lorem,
    },
  ];

  return (
    <>
      <section className="home-hero" id="home">
        <div className="hero-content">
          <Reveal variant="left">
            <p className="eyebrow hero-kicker">Lux Café Co</p>

            <h1>
              <TextReveal>
                Colombian coffee, crafted for modern luxury.
              </TextReveal>
            </h1>

            <p>{lorem}</p>

            <div className="hero-actions">
              <Button to="/products">Explore 250g Collection</Button>
              <Button to="/about" variant="secondary">
                Discover Our Origin
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
                <p className="eyebrow">250g Collection</p>
                <h2 className="section-title">
                  <TextReveal>
                    Four expressions of craft.
                  </TextReveal>
                </h2>
              </div>

              <p className="section-copy">{lorem}</p>
            </div>
          </Reveal>

          <div className="product-grid">
            {products.map((product, index) => (
              <Reveal delay={index * 0.1} variant="scale" key={product.name}>
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
              <p className="eyebrow">Colombian Origin Story</p>
              <h2 className="section-title">
                <>
                  From{" "}
                  <span className="brand-colombia">Colombia</span>
                  , with aroma.
                </>
              </h2>

              <p className="section-copy">{lorem}</p>

              <div className="origin-points">
                <div className="origin-point">
                  <strong>Harvest</strong>
                  <span>{lorem}</span>
                </div>

                <div className="origin-point">
                  <strong>Roast</strong>
                  <span>{lorem}</span>
                </div>

                <div className="origin-point">
                  <strong>Ritual</strong>
                  <span>{lorem}</span>
                </div>
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

              <div className="origin-video-orbit">
                <span className="strip-red" />
                <span className="strip-gold" />
                <span className="strip-blue" />
              </div>

              <div className="origin-video-caption">
                <span>Origin Film</span>
                <p>Colombian coffee culture, captured through motion.</p>
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
                <span>Wholesale Format</span>
                <strong>2.5kg</strong>
                <p>Premium Colombian coffee supply</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} variant="right">
            <p className="eyebrow">Wholesale Section</p>
            <h2 className="section-title">
              <>
                Premium{" "}
                <span className="brand-colombia">Colombian</span>{" "}
                coffee for partners.
              </>
            </h2>

            <p className="section-copy">{lorem}</p>

            <div className="hero-actions">
              <Button to="/wholesale">Explore Wholesale</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section contact-home" id="contact">
        <div className="container contact-panel">
          <Reveal variant="scale">
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">
              <TextReveal>
                Ready to bring our products to your next moment?
              </TextReveal>
            </h2>

            <p className="section-copy">{lorem}</p>

            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <Button to="/contact">Contact Lux Café Co</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Home;