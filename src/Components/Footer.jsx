/**
 * Footer component
 *
 * Displays avenues to contact you.
 * Contact information is passed in from the App component that
 * renders the Footer.
 *
 * If a social value has an empty string it will not be displayed.
 */
import React from "react";
import PropTypes from "prop-types";

import devDotToIcon from "../images/socials/devdotto.svg";
import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import mediumIcon from "../images/socials/medium.svg";
import twitterIcon from "../images/socials/twitter.svg";
import youTubeIcon from "../images/socials/youtube.svg";

/**
 * 💡 Learning resources
 *
 *  HTML hyperlinks: https://www.w3schools.com/html/html_links.asp
 *  Opening links in new tabs: https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/
 */

const Footer = (props) => {
  const {
    devDotTo,
    email,
    gitHub,
    instagram,
    linkedIn,
    medium,
    name,
    primaryColor,
    twitter,
    youTube,
  } = props;

  return (
    <div
      id="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
        padding: "100px 150px 50px",
        background: "transparent",
        width: "100vw",
        maxWidth: '1600px',
        margin: '0 auto'
      }}
    >
      <h2 style={{
        fontSize: '48px',
        fontWeight: '800',
        marginBottom: '20px',
        background: 'linear-gradient(135deg, #64C8FF, #50B4FF)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textAlign: 'center'
      }}>Ready to Collaborate?</h2>
      
      <p style={{
        textAlign: 'center',
        maxWidth: '600px',
        fontSize: '18px',
        color: '#b0b0b0',
        marginBottom: '30px',
        lineHeight: '1.8'
      }}>
        Open to contract work, technical consulting, or full-time opportunities. If you're building something interesting and need an extra pair of hands, let's talk.
      </p>
      
      <a href={`mailto:${email}`} style={{
        padding: '16px 40px',
        borderRadius: '50px',
        color: '#000',
        background: 'linear-gradient(135deg, #64C8FF, #50B4FF)',
        fontSize: '15px',
        fontFamily: '"Inter", sans-serif',
        fontWeight: '600',
        transition: 'all 0.3s',
        display: 'inline-block',
        marginBottom: '40px',
        boxShadow: '0 4px 15px rgba(100, 200, 255, 0.3)'
      }}>Start a Conversation</a>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap"
        }}
      >
        {email && (
          <a href={`mailto:${email}`}>
            <img src={envelopeIcon} alt="email" className="socialIcon" />
          </a>
        )}
        {devDotTo && (
          <a href={`https://dev.to/${devDotTo}`} target="_blank" rel="noopener noreferrer">
            <img src={devDotToIcon} alt="Dev.to" className="socialIcon" />
          </a>
        )}
        {gitHub && (
          <a href={`https://github.com/${gitHub}`} target="_blank" rel="noopener noreferrer">
            <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
          </a>
        )}
        {instagram && (
          <a
            href={`https://www.instagram.com/${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" className="socialIcon" />
          </a>
        )}
        {linkedIn && (
          <a
            href={`https://www.linkedin.com/in/${linkedIn}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
          </a>
        )}
        {medium && (
          <a href={`https://medium.com/@${medium}`} target="_blank" rel="noopener noreferrer">
            <img src={mediumIcon} alt="Medium" className="socialIcon" />
          </a>
        )}
        {twitter && (
          <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" className="socialIcon" />
          </a>
        )}
        {youTube && (
          <a
            href={`https://www.youtube.com/c/${youTube}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youTubeIcon} alt="YouTube" className="socialIcon" />
          </a>
        )}
      </div>
      
      <div style={{ marginTop: '50px', textAlign: 'center' }}>        <p style={{ 
          fontFamily: '"Inter", sans-serif',
          fontSize: '14px',
          color: '#808080',
          fontWeight: '500'
        }}>
          Designed & Crafted by {name}
        </p>
        <p style={{ 
          fontFamily: '"Inter", sans-serif',
          fontSize: '12px',
          color: '#606060',
          marginTop: '10px'
        }}>
          © 2026 · All Rights Reserved
        </p>
      </div>
    </div>
  );
};

Footer.defaultProps = {
  name: "",
};

Footer.propTypes = {
  devDotTo: PropTypes.string,
  email: PropTypes.string,
  gitHub: PropTypes.string,
  instagram: PropTypes.string,
  linkedIn: PropTypes.string,
  medium: PropTypes.string,
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
  twitter: PropTypes.string,
  youTube: PropTypes.string,

};

export default Footer;
