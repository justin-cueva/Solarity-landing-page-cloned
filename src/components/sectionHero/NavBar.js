import { GiHamburgerMenu } from "react-icons/gi";

import "../../styles/sectionHero/navBar.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="logo-wrapper">
        {/* needs to be downloaded and compress */}
        <img
          src="https://solarity.xyz/static/media/logo.fcb5304f.svg"
          alt="logo"
        />
      </div>
      <ul>
        <li className="not-allowed">Documentation</li>
        <li className="not-allowed">Medium</li>
        <li className="not-allowed">Twitter</li>
        <button className="nav-link-btn not-allowed">Discord</button>
      </ul>
      <span className="nav-burger-menu">
        <GiHamburgerMenu />
      </span>
    </nav>
  );
};

export default NavBar;
