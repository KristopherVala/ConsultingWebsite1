import React from "react";
import "./Styles/Contact.css";
import linkedinImage from "../images/LI-Logo.png";
import emailImage from "../images/email.png";

const Contact = () => {
  return (
    <div className="contactContainer" id="Contact">
      <div className="outerContainer socialOuter">
        <h1 className="contactPageTitle"> Lets Get In Touch</h1>
        <div className="lineContact"></div>
        <div className="grid contact-grid">
          <div className="contactForm ">
            <select name="type" id="type" className="selectPicker">
              <option value="" disabled selected hidden>
                How Can I Help?
              </option>
              <option value="Chat">Chat</option>
              <option value="Consultation">Consultation</option>
              <option value="Arbitration">Arbitration</option>
              <option value="Mediation">Mediation</option>
            </select>

            <div className="inputPortion">
              <label htmlFor="name" className="inputLabel">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                minLength="2"
                maxLength="30"
                className="inputBox"
              />
            </div>

            <div className="inputPortion">
              <label htmlFor="email" className="inputLabel">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                required
                minLength="5"
                maxLength="60"
                className="inputBox"
              />
            </div>
            <textarea
              className="messageBox"
              placeholder="Write me a message..."
            ></textarea>

            <button className="submitBtn">Submit</button>
          </div>
          <div className="photoSide">
            <img src={emailImage} alt="Email" className="emailImage" />
          </div>
        </div>
        {/* End of form */}

        <div className="socials">
          <a href="#" className="linkedInLink">
            <img src={linkedinImage} alt="Linked-In" className="linkedImage" />
          </a>
          <span className="emailDisplay">PennySmileyWork@email.com</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
