import "../../styles/sectionDevEcosystem/sectionDevEcosystem.css";

const featuresList = [
  {
    heading: "Dao As A Service",
    subHeading: "THE COMMUNITY'S METAVERSE",
    text: "The for profit DAO is where the users go, and where the transactions happen. That DAO will use their land as a service, but who actually manages that DAO is mutiple non profit DAOs of developers and creators that worked on that. So they are the one actually managing all the treasury of the for profit metaverse all done automatically with the Goldberg Governance.",
    image: "https://solarity.xyz/static/media/Thomasmeta-01.9adc62d9.jpg",
  },
  {
    heading: "A Galaxy of DAPPs",
    subHeading: "ENDLESS COWORKING EXPANSION",
    text: "Create your own solarity and do whatever you want with it. Deploy your existing Dapps or build brand new ones, here is some that we will provide for you: The developer and creator DAOs can be created indipendently from Solarity, but to speed up the process further we plan on creating different Solarity DAOs, for example a decentralized casinò where betting protocols and NFT protocols are going to be member of the DAO.",
    image:
      "https://solarity.xyz/static/media/features-split-image-02.a3cc8cd8.png",
  },
  {
    heading: "Creators Economies like never before",
    subHeading: "LIGHTNING FAST WORKFLOW",
    text: "The for profit DAO is where the users go, and where the transactions happen. That DAO will use their land as a service, but who actually manages that DAO is mutiple non profit DAOs of developers and creators that worked on that. So they are the one actually managing all the treasury of the for profit metaverse all done automatically with the Goldberg Governance.",
    image:
      "https://solarity.xyz/static/media/features-split-image-03.d258a9a7.png",
  },
];

const Features = () => {
  return (
    <div className="dev-eco-features-container">
      {featuresList.map((feature, index) => {
        return (
          <div className={`dev-eco-feature dev-eco-feature--${index + 1}`}>
            <div className="content">
              <span>{feature.subHeading}</span>
              <h3>{feature.heading}</h3>
              <p>{feature.text}</p>
            </div>
            <div className="img-wrapper">
              <img src={feature.image} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Features;
