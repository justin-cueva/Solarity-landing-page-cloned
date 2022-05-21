const testimonialsList = [
  {
    english: "Liberty",
    spanish: "Libertè",
    text: "Using Solana/Ethereum as the operating system of the Metaverse we’re able to leverage on the permissionless networks to achieve a truly free experience. (Tags over contents and Blockchained Rendering enable a Parental-Control Like filter on metaverse contents for kids)",
  },
  {
    english: "Neutrality",
    spanish: "Egalitè",
    text: "Using DeFi to power the platform’s computing network expenses because if the source of revenue is decentralized then also the platform will be decentralized.",
  },
  {
    english: "Sustainability",
    spanish: "Fraternitè",
    text: "We will never distribute profit to token holders, all the platform’s revenue will be used to entirely pay for the platform’s development and the network’s expenses. Our goal is to remove barriers to the access of XR technologies giving a chance for everybody to experiment",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonial-cards">
      {testimonialsList.map((testimonial) => {
        return (
          <div className="testimonial-card">
            <h4>
              {testimonial.english} <span className="slash">/</span>{" "}
              <span className="spanish">{testimonial.spanish}</span>
            </h4>
            <p>{testimonial.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Testimonials;
