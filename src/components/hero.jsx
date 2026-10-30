
function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-text">
        <h1>
          Upgrade Your Lifestyle With Smart Shopping
        </h1>

        <p>
          Discover premium products, trending collections,
          exclusive offers and amazing deals at affordable prices.
        </p>

        <button
          type="button"
          onClick={() =>
            document.getElementById("products").scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Shop Now
        </button>
      </div>

      <div className="hero-image">
        <img
          src="/images/watch2.jpg"
          alt="Smart Watch"
        />
      </div>

    </section>
  );
}

export default Hero;