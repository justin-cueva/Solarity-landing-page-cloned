import SectionIntro from "../SectionIntro";
import Testimonials from "./Testimonials";
import "../../styles/sectionWhatMovesUs/sectionWhatMovesUs.css";

const SectionWhatMovesUs = () => {
  return (
    <section className="section">
      <SectionIntro
        heading={`What Moves Us`}
        text={`The dream for a better, brighter future. A future in which data is owned by the people, in which the mental health of users is more important than profit, in which algorithms are transparent and help people in becoming better versions of themselves.`}
      />
      <Testimonials />
    </section>
  );
};

export default SectionWhatMovesUs;
