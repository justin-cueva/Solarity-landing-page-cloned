import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

import "../../styles/sectionHero/navBar.css";

const NavBar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

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
        <li className="not-allowed hide-item">Documentation</li>
        <li className="not-allowed hide-item">Medium</li>
        <li className="not-allowed hide-item">Twitter</li>
        <button className="nav-link-btn not-allowed hide-item">Discord</button>
      </ul>
      {!menuIsOpen && (
        <span className="nav-burger-menu" onClick={() => setMenuIsOpen(true)}>
          <GiHamburgerMenu />
        </span>
      )}
      {menuIsOpen && (
        <span className="nav-burger-menu" onClick={() => setMenuIsOpen(false)}>
          <ImCross />
        </span>
      )}
      {menuIsOpen && (
        <div className="nav-burger-modal">
          <ul className="">
            <li className="not-allowed">Documentation</li>
            <li className="not-allowed">Medium</li>
            <li className="not-allowed">Twitter</li>
            <button className="nav-link-btn not-allowed">Discord</button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
