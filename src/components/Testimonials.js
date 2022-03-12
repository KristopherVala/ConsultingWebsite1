import React from "react";
import "./Styles/Testimonials.css";
import user1 from "../images/testimonial1.jpeg";
import user2 from "../images/testimonial2.jpeg";
import user3 from "../images/testimonial3.jpeg";

const Testimonials = () => {
  return (
    <div className="testimonialContainer" id="Testimonials">
      <div className="outerContainer">
        <h2 className="testHeader">Testimonials</h2>
        <div className="lineTestimonial"></div>
        <div className="testimonialContent grid grid-3-col">
          <div className="card">
            <img src={user2} className="testimonialImage" alt="Mary Tyler" />
            <p className="mainTextTestimonal">
              "Reprehenderit sunt ullamco culpa amet non aute. Amet sit ad
              dolore labore velit sit Lorem ea exercitation laborum aute
              proident. Nostrud voluptate consectetur do consequat excepteur. Ut
              veniam ea proident officia minim est ullamco cupidatat aliquip.
              Qui velit fugiat veniam dolor excepteur velit. Sit dolore
              adipisicing veniam ullamco qui occaecat enim labore ut nulla ex
              enim aliqua. Magna fugiat cupidatat velit est."
            </p>
            <p className="testimonialName">Mary Tyler</p>
            <p className="testimonialTitle">HR Lead</p>
          </div>
          <div className="card">
            <img src={user1} className="testimonialImage" alt="Mary Tyler" />

            <p className="mainTextTestimonal">
              "Reprehenderit sunt ullamco culpa amet non aute. Amet sit ad
              dolore labore velit sit Lorem ea exercitation laborum aute
              proident. Nostrud voluptate consectetur do consequat excepteur. Ut
              veniam ea proident officia minim est ullamco cupidatat aliquip.
              Qui velit fugiat veniam dolor excepteur velit. Sit dolore
              adipisicing veniam ullamco qui occaecat enim labore ut nulla ex
              enim aliqua. Magna fugiat cupidatat velit est."
            </p>
            <p className="testimonialName">Jared Stevens</p>
            <p className="testimonialTitle">Director of Marketing</p>
          </div>
          <div className="card">
            <img src={user3} className="testimonialImage" alt="Mary Tyler" />

            <p className="mainTextTestimonal">
              "Reprehenderit sunt ullamco culpa amet non aute. Amet sit ad
              dolore labore velit sit Lorem ea exercitation laborum aute
              proident. Nostrud voluptate consectetur do consequat excepteur. Ut
              veniam ea proident officia minim est ullamco cupidatat aliquip.
              Qui velit fugiat veniam dolor excepteur velit. Sit dolore
              adipisicing veniam ullamco qui occaecat enim labore ut nulla ex
              enim aliqua. Magna fugiat cupidatat velit est."
            </p>
            <p className="testimonialName">Nancy Wu</p>
            <p className="testimonialTitle">Design Lead</p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
