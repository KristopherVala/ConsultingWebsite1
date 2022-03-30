import React from "react";
import { Link } from "react-scroll";

import "./Styles/Home.css";

const Home = () => {
  return (
    <div className="homeContainer" id="Home">
      <div className="outerContainer">
        <h1 className="nameDisplay"> People and Strategy Consulting</h1>
        <div className="homeBox">
          <p className="homeText ">Consulting From A Seasoned Professional</p>
          <p className="homeText subHomeText">
            See how I can Help Accomplish Your Goals
          </p>

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
