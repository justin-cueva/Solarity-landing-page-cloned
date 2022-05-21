import SectionIntro from "../SectionIntro";
import Features from "./Features";

const SectionOwnYourMetaVerse = () => {
  return (
    <section className="section">
      <SectionIntro
        heading={"Own Your Metaverse"}
        text={`Nobody should be able to rule the Metaverse so it's vital to develop a common infrastructure that enables anyone to develop and deploy their dreams for a better future.`}
      />
      <Features />
    </section>
  );
};

export default SectionOwnYourMetaVerse;
