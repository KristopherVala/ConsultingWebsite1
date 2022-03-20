import React from "react";
import "./Styles/Services.css";
import servicesImage from "../images/servicesImage.png";

const Services = () => {
  return (
    <div className="servicesContainer" id="Services">
      <div className="outerContainer">
        <h2 className="servicesHeader"> Services</h2>
        <div className="lineServices"></div>

        <div className="servicesSection grid servicesGrid">
          <div className="servicesSide">
            <div className="serviceItem">
              <h2 className="servicesTitle">Consulting</h2>
              <p className="servicesDescription">
                Lorem amet sint culpa nostrud fugiat eu est qui laborum veniam
                duis excepteur elit. Sunt nulla nulla laborum laborum quis. Et
                culpa velit nulla excepteur. Sit deserunt veniam sunt laborum
                anim nostrud eiusmod dolor nisi ut cupidatat non veniam. Et
                aliquip excepteur occaecat cillum exercitation cillum enim
                reprehenderit ut et. Amet ullamco do Lorem ipsum sint dolor
                consequat excepteur.
              </p>
            </div>
            <div className="seperator"></div>
            <div className="serviceItem">
              <h2 className="servicesTitle">Negotiating</h2>
              <p className="servicesDescription">
                Lorem amet sint culpa nostrud fugiat eu est qui laborum veniam
                duis excepteur elit. Sunt nulla nulla laborum laborum quis. Et
                culpa velit nulla excepteur. Sit deserunt veniam sunt laborum
                anim nostrud eiusmod dolor nisi ut cupidatat non veniam. Et
                aliquip excepteur occaecat cillum exercitation cillum enim
                reprehenderit ut et. Amet ullamco do Lorem ipsum sint dolor
                consequat excepteur.
              </p>
            </div>
            <div className="seperator"></div>

            <div className="serviceItem">
              <h2 className="servicesTitle">Arbitration</h2>
              <p className="servicesDescription">
                Lorem amet sint culpa nostrud fugiat eu est qui laborum veniam
                duis excepteur elit. Sunt nulla nulla laborum laborum quis. Et
                culpa velit nulla excepteur. Sit deserunt veniam sunt laborum
                anim nostrud eiusmod dolor nisi ut cupidatat non veniam. Et
                aliquip excepteur occaecat cillum exercitation cillum enim
                reprehenderit ut et. Amet ullamco do Lorem ipsum sint dolor
                consequat excepteur.
              </p>{" "}
            </div>
          </div>
          <div className="servicesSideRight">
            <img src={servicesImage} alt="Services" className="servicesImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
