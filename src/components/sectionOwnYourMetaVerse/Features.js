import { AiOutlineStar } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";
import { ImSphere } from "react-icons/im";
import { FaHeadSideVirus } from "react-icons/fa";
import { MdThumbUpOffAlt } from "react-icons/md";

import "../../styles/sectionOwnYourMetaverse/features.css";

const featuresList = [
  {
    icon: <AiOutlineStar />,
    label: "Create",
    text: "Build Your own experience easily through our SDKs and in-game tools",
  },
  {
    icon: <IoIosPaper />,
    label: "Economics",
    text: "Create your own economy easily with our templates or by just uploading your code",
  },
  {
    icon: <ImSphere />,
    label: "Infrastructure",
    text: "Assisted DAO creation to manage and raise funds for your idea. NFT as voting power",
  },
  {
    icon: <FaHeadSideVirus />,
    label: "Decentralization",
    text: "Solarity is a community platform, were all the fees pay the platform and go back to the users.",
  },
  {
    icon: <MdThumbUpOffAlt />,
    label: "Cross Chain",
    text: "Thanks to the goldberg governance, there aren't going to be barriers for creating and using Solana or any other chain",
  },
  {
    icon: <MdThumbUpOffAlt />,
    label: "Sustainability",
    text: "Economics of the main platform and the Cloud Computing Infrastructure are designed for the sustainability of the planet at their core",
  },
];

const Features = () => {
  return (
    <div className="own-your-metaverse__features">
      {featuresList.map((feature, index) => {
        let delayTime = "";
        if (index === 0 || index === 3) delayTime = "000";
        if (index === 1 || index === 4) delayTime = "200";
        if (index === 2 || index === 5) delayTime = "400";

        return (
          <div
            data-aos="fade-up"
            data-aos-delay={delayTime}
            key={index}
            className="feature"
          >
            <span className="feature__icon">{feature.icon}</span>
            <h3>{feature.label}</h3>
            <p>{feature.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Features;
