import React, { useState } from "react";
import "./Styles/About.css";
import headshot from "../images/headshot.jpeg";

const About = () => {
  const [learnMore, toggleMore] = useState(false);
  function learnMoreFlipper() {
    if (learnMore) {
      toggleMore(false);
    } else toggleMore(true);
  }

  return (
    <div className="aboutContainer" id="About">
      <div className="outerContainer">
        <div className="aboutSection grid grid-2-col about-grid">
          <div className="photoSection">
            <img src={headshot} alt="Penny Smiley" className="bioPhoto" />
          </div>
          <div className="bioSection">
            <h1 className="bioHeader">Who I am</h1>
            <p className="bioText">
              Penny is a human resources executive with over 35 years of
              experience in police, municipal government, education and health.
              Penny is currently Principal Consultant at People and Strategy
              Consulting, having recently retired as Senior Director of Member
              Services for the Waterloo Regional Police Service. People and
              Strategy Consulting, provides Human Resources, Labour Relations,
              Negotiating and Organizational Development expertise to employers
              in the public, not for profit and for-profit sectors. Penny is
              currently working with a team of leaders with Trent University in
              the development and delivery of new academic programming with
              respect to Labour Relations and Strategic Human Resources.
            </p>
            <p className="bioText newP">
              <br />
              <br />
              As Senior Director of Member Services for the Waterloo Regional
              Police Service (WRPS) Penny provided leadership to the Human
              Resources, Professional Standards, Training, and Organizational
              Culture Development areas.
              <br /> <br />
              Prior to joining the WRPS, Penny was Commissioner of Human
              Resources for the Region of Waterloo, overseeing all aspects of
              Human Resources and Labour Relations and the Internal
              Audit/Program Review function. Penny presented both internally at
              the Region and across the province on topics related to labour
              relations and human resources management.
            </p>
            <button className="toggleBtn" onClick={learnMoreFlipper}>
              <span className="buttonText">
                {!learnMore ? "Learn more" : "Show Less"}
              </span>
            </button>
            <div
              className={learnMore ? "collapseableDiv show" : "collapseableDiv"}
            >
              <p className="bioText newP">
                <br /> <br />
                Penny has attended numerous Labour Interest and Rights
                Arbitration hearings, as well as hearings at the Ontario Human
                Rights Commission, Ontario Labour Relations Board and the
                Workplace Safety and Insurance Board and acted as the Chief
                Negotiator for many public sector organizations and has
                negotiated with provincial and national unions such as Unifor,
                CUPE, ONA, ETFO, OSSTF and others.
                <br /> <br />
                Penny has held a variety of governance board appointments
                including the Chair of the Board for: Empowered Kids Ontario
                (EKO); KidsAbility Center for Child Development; Eastern Lake
                Ontario Branch of Victorian Order of Nurses and Kingston and
                District Immigrant Services. Currently Penny is the Vice Chair
                of the Board of Governors for Martin Luther University and on
                the Board of the Public Sector Health and Safety Association of
                Ontario.
                <br /> <br />
                Penny holds a LLM (Master of Laws) from the London School of
                Economics, a Master of Industrial Relations from Queen’s
                University and a BA from Carleton University, Penny is also
                certified in Mediation and Dispute Resolution and has a Green
                Belt in Lean Six Sigma. Penny enjoys contributing to the vision,
                mission and strategy of organizations and bringing people
                together to effect positive change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
