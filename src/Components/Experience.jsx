/**
 * Experience component
 *
 * Displays professional work experience including internships and full-time roles.
 */

import React from "react";

const experiences = [
  {
    company: "Route Mobile Ltd",
    position: "Backend Developer Intern",
    duration: "Present",
    location: "India",
    description: "Working on backend infrastructure and API development for enterprise client applications. Contributing to system optimization and feature implementation.",
    technologies: ["Python", "Flask", "PostgreSQL", "REST APIs"]
  }
];

const Experience = () => {
  return (
    <section className="padding" id="experience" style={{
      background: 'transparent',
      minHeight: '100vh',
      padding: '100px 150px',
      maxWidth: '1600px',
      margin: '0 auto'
    }}>
      <h2 style={{
        fontSize: '48px',
        fontWeight: '800',
        marginBottom: '50px',
        background: 'linear-gradient(135deg, #64C8FF, #50B4FF)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>Work Experience</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {experiences.map((exp, index) => (
          <div key={index} style={{
            background: 'rgba(15, 25, 50, 0.4)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            padding: '35px 40px',
            border: '1px solid rgba(100, 200, 255, 0.2)',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
            transition: 'all 0.3s ease'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <h3 style={{ 
                  fontSize: '24px', 
                  fontWeight: '700', 
                  color: '#fff',
                  marginBottom: '5px'
                }}>{exp.position}</h3>
                <div style={{ 
                  fontSize: '18px', 
                  color: '#64C8FF',
                  fontWeight: '600'
                }}>{exp.company}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ 
                  fontSize: '15px', 
                  color: '#b0b0b0',
                  fontWeight: '600'
                }}>{exp.duration}</div>
                <div style={{ 
                  fontSize: '14px', 
                  color: '#808080',
                  marginTop: '3px'
                }}>{exp.location}</div>
              </div>
            </div>
            
            <p style={{ 
              fontSize: '16px', 
              lineHeight: '1.7', 
              color: '#c0c0c0',
              marginBottom: '20px'
            }}>
              {exp.description}
            </p>
            
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              {exp.technologies.map((tech, techIndex) => (
                <span key={techIndex} style={{
                  padding: '8px 16px',
                  background: 'rgba(100, 200, 255, 0.1)',
                  color: '#64C8FF',
                  fontSize: '13px',
                  fontWeight: '600',
                  borderRadius: '20px',
                  border: '1px solid rgba(100, 200, 255, 0.2)'
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
