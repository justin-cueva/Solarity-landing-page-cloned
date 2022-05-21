const SectionIntro = ({ text, heading }) => {
  return (
    <div className="section-intro">
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  );
};

export default SectionIntro;
