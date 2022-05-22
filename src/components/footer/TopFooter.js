import { GrFacebookOption, GrTwitter, GrInstagram } from "react-icons/gr";

import "../../styles/footer/topFooter.css";

const TopFooter = () => {
  return (
    <div className="top-footer">
      <div className="logo-wrapper">
        <img src="https://solarity.xyz/static/media/logo.fcb5304f.svg" />
      </div>
      <ul className="social-links">
        <span className="social-link">
          <GrFacebookOption className={"col-primary"} />
        </span>
        <span className="social-link">
          <GrTwitter className={"col-primary"} />
        </span>
        <span className="social-link">
          <GrInstagram className={"col-primary"} />
        </span>
      </ul>
    </div>
  );
};

export default TopFooter;
