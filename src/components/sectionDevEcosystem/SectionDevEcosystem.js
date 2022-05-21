import SectionIntro from "../SectionIntro";
import Features from "./Features";

const SectionDevEcosystem = () => {
  return (
    <section className="section">
      <SectionIntro
        heading={`An Alive Developer Ecosystem`}
        text={`Solarity's goldberg structure let the creators of a content be the one actually rewarded and let them manage completely their work.`}
      />
      <Features />
    </section>
  );
};

export default SectionDevEcosystem;
