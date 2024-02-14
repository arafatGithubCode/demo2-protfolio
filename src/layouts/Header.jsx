import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div className="logo">
        <img src="./img/logo.svg" alt="Logo" />
      </div>
      <div className="nav_hamburger" onClick={toggleNav}>
        <span className="nav_hamburger_line"></span>
        <span className="nav_hamburger_line"></span>
        <span className="nav_hamburger_line"></span>
      </div>

      <div className={`nav_items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} className="navbar--content">
              Portfolio
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} className="navbar--content">
              About Me
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} className="navbar--content">
              Testimonials
            </Link>
          </li>
        </ul>
      </div>
      <Link className="btn btn-outline-primary">Contact Me</Link>
    </nav>
  );
};

export default Header;
