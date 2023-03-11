import React from "react";
import "./footerBanner.scss";

const FooterBanner = () => {
  return (
    <section className="becomeParticipant_Section desktopMaxWidth">
      <div className="contentWrapper">
        <h4> Become a Participant - All for free </h4>
        <p>
          Are you looking to advance in your career, be notable in your stack
          and be more vast in opportunities. STS is your preferred platform to
          take your career to the next level. We are searching for people who
          desire bigger things in their careers, who are willing to take a
          bigger step to create a vision and work to achieve it
        </p>

        <div className="ctaWrapper">
          <a className="primaryButton" href="#">
            Register now
          </a>
        </div>
      </div>
    </section>
  );
};

export default FooterBanner;
