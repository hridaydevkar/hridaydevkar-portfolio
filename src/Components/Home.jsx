/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Home = ({ name, title }) => {
  const roles = ["Full Stack Developer", "Mobile App Developer", "IoT Developer"];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentString = roles[currentRole];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentString.length) {
        setDisplayText(currentString.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentString.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentString.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentRole((currentRole + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentRole]);

  return (
    <section id="home" className="min-height" style={{
      background: 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '60px',
      position: 'relative',
      padding: '0 150px',
      paddingTop: '120px',
      maxWidth: '1600px',
      margin: '0 auto'
    }}>  
      <div style={{ flex: 1, textAlign: 'left' }}>
        <div style={{
          fontFamily: '"Inter", sans-serif',
          color: '#64C8FF',
          fontSize: '18px',
          fontWeight: '600',
          marginBottom: '20px',
          textShadow: 'none'
        }}>I'm</div>
        
        <h1 style={{ 
          margin: '0 0 10px',
          background: 'linear-gradient(135deg, #64C8FF, #50B4FF)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: 'none'
        }}>{name}</h1>
        
        <h2 style={{
          color: '#909090',
          margin: '0 0 20px',
          fontSize: 'clamp(40px, 8vw, 70px)',
          minHeight: '80px',
          textShadow: 'none'
        }}>
          {displayText}
        </h2>
        
        <p style={{
          maxWidth: '540px',
          margin: '20px 0 0',
          fontSize: '18px',
          lineHeight: '1.8',
          color: '#b0b0b0',
          textShadow: 'none'
        }}>
          I build production-grade software across multiple platforms. From architecting scalable backend systems to developing native mobile apps and programming hardware controllers. Currently focused on <span style={{ color: '#64C8FF', fontWeight: '600' }}>distributed systems</span>, <span style={{ color: '#64C8FF', fontWeight: '600' }}>machine learning pipelines</span>, and <span style={{ color: '#64C8FF', fontWeight: '600' }}>IoT automation</span>.
        </p>
        
        <div style={{ marginTop: '50px', display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="#portfolio" style={{
            padding: '16px 32px',
            borderRadius: '50px',
            color: '#000',
            fontSize: '15px',
            fontFamily: '"Inter", sans-serif',
            fontWeight: '600',
            transition: 'all 0.3s',
            background: 'linear-gradient(135deg, #64C8FF, #50B4FF)',
            border: 'none',
            display: 'inline-block',
            boxShadow: '0 4px 15px rgba(100, 200, 255, 0.3)'
          }}>Explore My Work</a>
          <a href="#footer" style={{
            padding: '16px 32px',
            borderRadius: '50px',
            color: '#64C8FF',
            background: 'rgba(100, 200, 255, 0.1)',
            fontSize: '15px',
            fontFamily: '"Inter", sans-serif',
            fontWeight: '600',
            transition: 'all 0.3s',
            display: 'inline-block',
            border: '1px solid rgba(100, 200, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
          }}>Let's Talk</a>
        </div>
        
        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '20px',
          marginTop: '80px',
          maxWidth: '540px'
        }}>
          <div className="stat-box">
            <span className="stat-number">10+</span>
            <span className="stat-label">Projects Built</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">8+</span>
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">2+</span>
            <span className="stat-label">Years Experience</span>
          </div>
        </div>
      </div>

      {/* Interactive Dashboard */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          background: 'rgba(15, 25, 50, 0.5)',
          backdropFilter: 'blur(20px)',
          borderRadius: '25px',
          padding: '40px 30px',
          border: '1px solid rgba(100, 200, 255, 0.2)',
          boxShadow: '0 15px 50px rgba(0, 0, 0, 0.5)',
          width: '100%',
          maxWidth: '450px'
        }}>
          <h3 style={{
            color: '#64C8FF',
            fontSize: '18px',
            fontWeight: '700',
            marginBottom: '30px',
            textAlign: 'center',
            letterSpacing: '1px'
          }}>QUICK OVERVIEW</h3>
          
          {/* Skills Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '15px',
            marginBottom: '30px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(100, 200, 255, 0.1), rgba(100, 200, 255, 0.05))',
              padding: '25px 20px',
              borderRadius: '15px',
              border: '1px solid rgba(100, 200, 255, 0.2)',
              textAlign: 'left',
              transition: 'all 0.3s ease',
              cursor: 'default'
            }}>
              <div style={{ color: '#fff', fontSize: '16px', fontWeight: '700', marginBottom: '5px' }}>Web Development</div>
              <div style={{ color: '#64C8FF', fontSize: '13px', fontWeight: '500' }}>Full Stack Applications</div>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, rgba(100, 200, 255, 0.1), rgba(100, 200, 255, 0.05))',
              padding: '25px 20px',
              borderRadius: '15px',
              border: '1px solid rgba(100, 200, 255, 0.2)',
              textAlign: 'left',
              transition: 'all 0.3s ease',
              cursor: 'default'
            }}>
              <div style={{ color: '#fff', fontSize: '16px', fontWeight: '700', marginBottom: '5px' }}>Mobile Apps</div>
              <div style={{ color: '#64C8FF', fontSize: '13px', fontWeight: '500' }}>iOS & Android Native</div>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, rgba(100, 200, 255, 0.1), rgba(100, 200, 255, 0.05))',
              padding: '25px 20px',
              borderRadius: '15px',
              border: '1px solid rgba(100, 200, 255, 0.2)',
              textAlign: 'left',
              transition: 'all 0.3s ease',
              cursor: 'default'
            }}>
              <div style={{ color: '#fff', fontSize: '16px', fontWeight: '700', marginBottom: '5px' }}>IoT Systems</div>
              <div style={{ color: '#64C8FF', fontSize: '13px', fontWeight: '500' }}>ESP32 & Hardware</div>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, rgba(100, 200, 255, 0.1), rgba(100, 200, 255, 0.05))',
              padding: '25px 20px',
              borderRadius: '15px',
              border: '1px solid rgba(100, 200, 255, 0.2)',
              textAlign: 'left',
              transition: 'all 0.3s ease',
              cursor: 'default'
            }}>
              <div style={{ color: '#fff', fontSize: '16px', fontWeight: '700', marginBottom: '5px' }}>AI/ML</div>
              <div style={{ color: '#64C8FF', fontSize: '13px', fontWeight: '500' }}>Smart Systems</div>
            </div>
          </div>
          
          {/* Tech Stack Tags */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            justifyContent: 'center',
            marginBottom: '25px'
          }}>
            {['Python', 'JavaScript', 'React', 'Flask', 'PostgreSQL', 'Blockchain'].map((tech, index) => (
              <span key={tech} style={{
                padding: '6px 12px',
                background: 'rgba(100, 200, 255, 0.1)',
                color: '#64C8FF',
                fontSize: '11px',
                fontWeight: '600',
                borderRadius: '20px',
                border: '1px solid rgba(100, 200, 255, 0.2)',
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}>{tech}</span>
            ))}
          </div>
          
          {/* Bottom Stats */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            paddingTop: '20px',
            borderTop: '1px solid rgba(100, 200, 255, 0.1)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: '#64C8FF', fontSize: '24px', fontWeight: '800' }}>10+</div>
              <div style={{ color: '#808080', fontSize: '11px', marginTop: '5px' }}>Projects</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: '#64C8FF', fontSize: '24px', fontWeight: '800' }}>8+</div>
              <div style={{ color: '#808080', fontSize: '11px', marginTop: '5px' }}>Tech Stack</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: '#64C8FF', fontSize: '24px', fontWeight: '800' }}>2+</div>
              <div style={{ color: '#808080', fontSize: '11px', marginTop: '5px' }}>Years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
