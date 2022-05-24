import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import SectionHero from "./sectionHero/SectionHero";
import SectionOwnYourMetaVerse from "./sectionOwnYourMetaVerse/SectionOwnYourMetaVerse";
import SectionDevEcosystem from "./sectionDevEcosystem/SectionDevEcosystem";
import SectionWhatMovesUs from "./sectionWhatMovesUs/SectionWhatMovesUs";
import SectionCTA from "./sectionCTA/SectionCTA";
import Footer from "./footer/Footer";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="app" style={{ paddingBottom: "6.4rem" }}>
      <SectionHero />
      <SectionOwnYourMetaVerse />
      <SectionDevEcosystem />
      <SectionWhatMovesUs />
      <SectionCTA />
      <Footer />
    </div>
  );
};

export default App;
