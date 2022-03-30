import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [navbar, setSticky] = useState(false);
  const containerHeight = window.innerHeight;

  const addSticky = () => {
    if (window.scrollY >= containerHeight - 50) {
      setSticky(true);
    } else setSticky(false);
  };

  window.addEventListener("scroll", addSticky);

  return (
    <div>
      <div className={navbar ? "nav stickyNav" : "nav"}>
        <ul className="navItems">
          {/* <li className="item">
            <Link
              to="Home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="listLink"
            >
              Home
            </Link>
          </li> */}
          <li className="item">
            <Link
              to="About"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              className="listLink"
            >
              About
            </Link>
          </li>

          <li className="item">
            <Link
              to="Services"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              className="listLink"
            >
              Services
            </Link>
          </li>

          <li className="item">
            <Link
              to="Testimonials"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              className="listLink"
            >
              Testimonials
            </Link>
          </li>

          <li className="item">
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              className="listLink"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
