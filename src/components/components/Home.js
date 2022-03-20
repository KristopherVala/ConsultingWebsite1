import React from "react";
import { Link } from "react-scroll";

import "./Styles/Home.css";

const Home = () => {
  return (
    <div className="homeContainer" id="Home">
      <div className="outerContainer">
        <h1 className="nameDisplay"> PS Consulting</h1>
        <div className="homeBox">
          <h2 className="homeText">Consulting From An Industry Veteran</h2>
          <Link
            to="About"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
            className="meetPennyBtn"
          >
            Meet Penny
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
