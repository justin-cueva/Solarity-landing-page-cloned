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
        <li>Documentation</li>
        <li>Medium</li>
        <li>Twitter</li>
        <button className="nav-link-btn">Discord</button>
      </ul>
    </nav>
  );
};

export default NavBar;
