import "../../styles/sectionHero/heroContent.css";

const HeroContent = () => {
  return (
    <div className="hero-content">
      <h1 data-aos="fade-up" data-aos-delay="50">
        Solarity, the metaverse <span>provider</span>
      </h1>
      <span data-aos="fade-up" data-aos-delay="300">
        Powering NFTs, Paid by DeFi, Ruled by DAOs.
      </span>
      <div
        data-aos="fade-up"
        data-aos-delay="600"
        className="hero-content__actions"
      >
        <button className="btn--economic-paper not-allowed">
          Economic Paper
        </button>
        <button className="btn--view-on-github not-allowed">
          View on Github
        </button>
      </div>
    </div>
  );
};

export default HeroContent;
