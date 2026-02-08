/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Solar Panel Optimization System",
    description:
      "Intelligent solar tracking system featuring 180° bi-directional rotation for maximum energy capture. Built with ESP32 microcontroller, this IoT solution enables real-time remote monitoring and automated panel adjustment through a custom Android application. Combines hardware innovation with software intelligence.",
    url: "https://github.com/hridaydevkar/solar-panel-optimization",
  },
  {
    title: "E-Voting System using Blockchain",
    description:
      "Next-generation electronic voting platform that ensures transparency and security through blockchain technology. Features multi-factor authentication with facial recognition and OTP, real-time result tracking, comprehensive admin controls, and immutable audit trails. Built for democratic integrity.",
    url: "https://github.com/hridaydevkar/voting_system",
  },
  {
    title: "Emotion Recognition System",
    description:
      "Advanced AI-powered system that analyzes facial expressions to detect and classify emotions in real-time. Leverages deep learning models with OpenCV for accurate emotion detection. Applications in customer experience, healthcare, and human-computer interaction.",
    url: "https://github.com/hridaydevkar/emotion-recognition",
  },
  {
    title: " Credit Card Fraud Detection",
    description:
      "Machine learning solution designed to identify fraudulent transactions and suspicious patterns in financial data. Implements ensemble learning algorithms with scikit-learn to provide real-time risk assessment. Helps businesses protect against financial fraud with intelligent pattern recognition.",
    url: "https://github.com/hridaydevkar/fraud-detection",
  },
];

const Portfolio = () => {
  const techStacks = {
    "Solar Panel Optimization System": ["ESP32", "IoT", "Android", "Java", "C++"],
    "E-Voting System using Blockchain": ["Flask", "PostgreSQL", "Blockchain", "Face Recognition", "Python"],
    "Emotion Recognition System": ["Python", "OpenCV", "TensorFlow", "Machine Learning"],
    "Credit Card Fraud Detection": ["Python", "scikit-learn", "pandas", "Machine Learning"],
  };

  return (
    <section className="padding" id="portfolio" style={{
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
      }}>My Projects</h2>
      
      <div style={{ 
        display: 'grid',
        gap: '30px',
        marginTop: '50px'
      }}>
        {projectList.map((project, index) => (
          <div className="card" key={project.title} style={{
            padding: '2.5rem',
            position: 'relative',
            animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
          }}>
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ 
                fontSize: '26px',
                marginBottom: '15px',
                color: '#ffffff',
                fontWeight: '700'
              }}>{project.title}</h3>
            </div>
            
            <p style={{ 
              color: '#b0b0b0',
              lineHeight: '1.8',
              marginBottom: '25px',
              fontSize: '16px'
            }}>{project.description}</p>
            
            <div>
              {techStacks[project.title]?.map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
