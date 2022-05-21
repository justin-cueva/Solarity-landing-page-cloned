import SectionHero from "./sectionHero/SectionHero";
import SectionOwnYourMetaVerse from "./sectionOwnYourMetaVerse/SectionOwnYourMetaVerse";
import SectionDevEcosystem from "./sectionDevEcosystem/SectionDevEcosystem";

const App = () => {
  return (
    <div className="app" style={{ paddingBottom: "30rem" }}>
      <SectionHero />
      <SectionOwnYourMetaVerse />
      <SectionDevEcosystem />
    </div>
  );
};

export default App;
