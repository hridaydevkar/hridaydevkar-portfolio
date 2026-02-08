/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I work across the full development stack - backend APIs, frontend interfaces, native mobile apps, and hardware programming. My focus is on building reliable systems that scale. Recent work includes blockchain-based voting platforms, real-time IoT controllers, and ML-powered applications. Strong preference for Python and JavaScript ecosystems.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Python & Flask",
  "React & JavaScript",
  "Mobile App Development",
  "IoT & ESP32",
  "PostgreSQL & Database Design",
  "Machine Learning & AI",
  "Blockchain Technology",
  "Android Development",
  "RESTful APIs",
  "Cloud Deployment",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Most of my projects involve complex integrations - whether it's connecting microcontrollers to mobile dashboards, implementing cryptographic security layers, or training neural networks for computer vision tasks. I prefer working on systems where multiple technologies intersect. Currently experimenting with distributed architectures and edge computing patterns.";

const About = () => {
  return (
    <section className="padding" id="about" style={{
      background: 'transparent',
      minHeight: '100vh',
      padding: '100px 150px',
      maxWidth: '1600px',
      margin: '0 auto'
    }}>
      <h2 style={{
        fontSize: '48px',
        fontWeight: '800',
        marginBottom: '40px',
        background: 'linear-gradient(135deg, #64C8FF, #50B4FF)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>Who Am I?</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '50px' }}>
        <div>
          <p style={{ marginBottom: '20px', fontSize: '18px', color: '#c0c0c0', lineHeight: '1.8' }}>{description}</p>
          <p style={{ marginBottom: '20px', fontSize: '18px', color: '#c0c0c0', lineHeight: '1.8' }}>{detailOrQuote}</p>
          
          <div style={{ marginTop: '40px' }}>
            <h3 style={{ marginBottom: '20px', fontSize: '24px', color: '#fff', fontWeight: '700', textShadow: '0 0 20px rgba(100, 200, 255, 0.2)' }}>Tech Stack & Expertise:</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '10px'
            }}>
              {skillsList.map((skill) => (
                <div key={skill} style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '15px',
                  color: '#c0c0c0',
                  paddingLeft: '20px',
                  position: 'relative',
                  fontWeight: '500'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    color: '#64C8FF',
                    fontWeight: '700'
                  }}>▹</span>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
