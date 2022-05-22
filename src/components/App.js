import SectionHero from "./sectionHero/SectionHero";
import SectionOwnYourMetaVerse from "./sectionOwnYourMetaVerse/SectionOwnYourMetaVerse";
import SectionDevEcosystem from "./sectionDevEcosystem/SectionDevEcosystem";
import SectionWhatMovesUs from "./sectionWhatMovesUs/SectionWhatMovesUs";
import SectionCTA from "./sectionCTA/SectionCTA";
import Footer from "./footer/Footer";

const App = () => {
  return (
    <div className="app" style={{ paddingBottom: "30rem" }}>
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
