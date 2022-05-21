import SectionHero from "./sectionHero/SectionHero";
import SectionOwnYourMetaVerse from "./sectionOwnYourMetaVerse/SectionOwnYourMetaVerse";

const App = () => {
  return (
    <div className="app" style={{ paddingBottom: "30rem" }}>
      <SectionHero />
      <SectionOwnYourMetaVerse />
    </div>
  );
};

export default App;
