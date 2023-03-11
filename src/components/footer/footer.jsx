import React from "react";
import "./footer.scss";
import footerLogo from "../../images/brandAssets/logoFooter.svg";

// social media link icons import

import twitterIcon from "../../images/brandAssets/socialMediaIcons/twitter.svg";
import discordIcon from "../../images/brandAssets/socialMediaIcons/discord.svg";
import linkedInIcon from "../../images/brandAssets/socialMediaIcons/linkedIn.svg";
import facebookIcon from "../../images/brandAssets/socialMediaIcons/facebook.svg";
import youtubeIcon from "../../images/brandAssets/socialMediaIcons/youtube.svg";
import instagramIcon from "../../images/brandAssets/socialMediaIcons/instagram.svg";

let socialLinks = [
  {
    icon: twitterIcon,
    url: "#",
  },
  {
    icon: discordIcon,
    url: "#",
  },
  {
    icon: linkedInIcon,
    url: "#",
  },
  {
    icon: facebookIcon,
    url: "#",
  },
  {
    icon: youtubeIcon,
    url: "#",
  },
  {
    icon: instagramIcon,
    url: "#",
  },
];

let SocialIconClass = ({ url, image }) => (
  <a href={url}>
    <img src={image} alt="" />
  </a>
);

const Footer = () => {
  return (
    <footer className="footer desktopMaxWidth">
      <div className="footerWrapper">
        <img src={footerLogo} alt="" />

        <div className="footer_links_cta">
          <form className="footer_form">
            <h3>Join the community</h3>
            <span>Get Access to our equipped state-of-the-art facility</span>
            <div className="cta">
              <input
                type="text"
                id="search"
                name="search"
                placeholder="Enter email address"
              />
              <button type="submit">Join the network</button>
            </div>
          </form>

          <nav className="footer_nav">
            <div>
              <h3>Branches</h3>
              <ul>
                <li>
                  <a href="#">STS</a>
                </li>
                <li>
                  <a href="#">SRS</a>
                </li>
              </ul>
            </div>

            <div>
              <h3>Company</h3>
              <ul>
                <li>
                  <a href="#">Our Mission</a>
                </li>
                <li>
                  <a href="#">Our Vision</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
              </ul>
            </div>

            <div>
              <h3>Support</h3>
              <ul>
                <li>
                  <a href="#">Become a Partner</a>
                </li>
                <li>
                  <a href="#">Become a Client</a>
                </li>
                <li>
                  <a href="#">Buy us coffee</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className="footer_copyRight_socialLinks">
        <span>
          © Segsalerty {new Date().getFullYear()}. All rights reserved.
        </span>

        <div>
          {socialLinks.map((item) => (
            <SocialIconClass image={item.icon} url={item.url} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
