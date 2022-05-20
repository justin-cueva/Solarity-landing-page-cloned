import NavBar from "./NavBar";
import HeroContent from "./HeroContent";

import "../../styles/sectionHero/sectionHero.css";

const SectionHero = () => {
  return (
    <section className="section-hero">
      <NavBar />
      <HeroContent />
    </section>
  );
};

export default SectionHero;
