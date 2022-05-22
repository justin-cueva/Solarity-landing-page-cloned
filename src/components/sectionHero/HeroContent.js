import "../../styles/sectionHero/heroContent.css";

const HeroContent = () => {
  return (
    <div className="hero-content">
      <h1>
        Solarity, the metaverse <span>provider</span>
      </h1>
      <span>Powering NFTs, Paid by DeFi, Ruled by DAOs.</span>
      <div className="hero-content__actions">
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
