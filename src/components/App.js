import SectionHero from "./sectionHero/SectionHero";
import SectionOwnYourMetaVerse from "./sectionOwnYourMetaVerse/SectionOwnYourMetaVerse";
import SectionDevEcosystem from "./sectionDevEcosystem/SectionDevEcosystem";
import SectionWhatMovesUs from "./sectionWhatMovesUs/SectionWhatMovesUs";

const App = () => {
  return (
    <div className="app" style={{ paddingBottom: "30rem" }}>
      <SectionHero />
      <SectionOwnYourMetaVerse />
      <SectionDevEcosystem />
      <SectionWhatMovesUs />
    </div>
  );
};

export default App;
