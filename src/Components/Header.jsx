/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div
        className="header-container"
        style={{
          position: "fixed",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 50px",
          background: "rgba(10, 15, 30, 0.8)",
          backdropFilter: "blur(20px)",
          height: "70px",
          top: 0,
          width: "100%",
          zIndex: 10,
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
          borderBottom: '1px solid rgba(100, 200, 255, 0.1)'
        }}
      >
      <a href="#home" style={{ textDecoration: 'none', cursor: 'pointer', flexShrink: 0 }}>
        <div className="header-logo" style={{
          width: '50px',
          height: '50px',
          borderRadius: '12px',
          background: 'linear-gradient(135deg, #64C8FF, #50B4FF)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: '"Inter", sans-serif',
          fontSize: '20px',
          fontWeight: '900',
          color: '#000',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(100, 200, 255, 0.3)',
          position: 'relative',
          overflow: 'hidden'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'rotate(360deg) scale(1.1)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(100, 200, 255, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(100, 200, 255, 0.3)';
        }}>
          <span style={{
            position: 'relative',
            zIndex: 2
          }}>HD</span>
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'rgba(255, 255, 255, 0.1)',
            transform: 'skewX(-20deg) translateX(-100%)',
            transition: 'transform 0.6s'
          }}></div>
        </div>
      </a>
      
      {/* Desktop Navigation */}
      <div className="header-nav desktop-nav" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <a href="#home" style={{ 
          fontFamily: '"Inter", sans-serif',
          fontSize: '14px',
          fontWeight: '600',
          color: '#ffffff',
          transition: 'all 0.3s'
        }}>Home</a>
        <a href="#about" style={{ 
          fontFamily: '"Inter", sans-serif',
          fontSize: '14px',
          fontWeight: '600',
          color: '#ffffff',
          transition: 'all 0.3s'
        }}>About</a>
        <a href="#experience" style={{ 
          fontFamily: '"Inter", sans-serif',
          fontSize: '14px',
          fontWeight: '600',
          color: '#ffffff',
          transition: 'all 0.3s'
        }}>Experience</a>
        <a href="#portfolio" style={{ 
          fontFamily: '"Inter", sans-serif',
          fontSize: '14px',
          fontWeight: '600',
          color: '#ffffff',
          transition: 'all 0.3s'
        }}>Work</a>
        <a href="#footer" style={{ 
          fontFamily: '"Inter", sans-serif',
          fontSize: '14px',
          fontWeight: '600',
          color: '#ffffff',
          transition: 'all 0.3s'
        }}>Connect</a>
      </div>

      {/* Mobile Hamburger */}
      <button 
        className="mobile-menu-btn"
        onClick={toggleMenu}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          color: '#fff',
          fontSize: '24px',
          cursor: 'pointer',
          padding: '5px',
          flexDirection: 'column',
          gap: '4px'
        }}
      >
        <span style={{
          display: 'block',
          width: '25px',
          height: '3px',
          background: '#64C8FF',
          transition: 'all 0.3s',
          transform: isMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'
        }}></span>
        <span style={{
          display: 'block',
          width: '25px',
          height: '3px',
          background: '#64C8FF',
          transition: 'all 0.3s',
          opacity: isMenuOpen ? '0' : '1'
        }}></span>
        <span style={{
          display: 'block',
          width: '25px',
          height: '3px',
          background: '#64C8FF',
          transition: 'all 0.3s',
          transform: isMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'
        }}></span>
      </button>
    </div>

    {/* Mobile Menu Overlay */}
    <div 
      className="mobile-menu"
      style={{
        position: 'fixed',
        top: '70px',
        left: 0,
        width: '100%',
        height: 'calc(100vh - 70px)',
        background: 'rgba(10, 15, 30, 0.95)',
        backdropFilter: 'blur(20px)',
        zIndex: 9,
        transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease',
        display: 'none'
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '40px 30px',
        gap: '30px'
      }}>
        <a 
          href="#home" 
          onClick={closeMenu}
          style={{ 
            fontFamily: '"Inter", sans-serif',
            fontSize: '18px',
            fontWeight: '600',
            color: '#ffffff',
            textDecoration: 'none',
            padding: '10px 0',
            borderBottom: '1px solid rgba(100, 200, 255, 0.2)'
          }}
        >Home</a>
        <a 
          href="#about" 
          onClick={closeMenu}
          style={{ 
            fontFamily: '"Inter", sans-serif',
            fontSize: '18px',
            fontWeight: '600',
            color: '#ffffff',
            textDecoration: 'none',
            padding: '10px 0',
            borderBottom: '1px solid rgba(100, 200, 255, 0.2)'
          }}
        >About</a>
        <a 
          href="#experience" 
          onClick={closeMenu}
          style={{ 
            fontFamily: '"Inter", sans-serif',
            fontSize: '18px',
            fontWeight: '600',
            color: '#ffffff',
            textDecoration: 'none',
            padding: '10px 0',
            borderBottom: '1px solid rgba(100, 200, 255, 0.2)'
          }}
        >Experience</a>
        <a 
          href="#portfolio" 
          onClick={closeMenu}
          style={{ 
            fontFamily: '"Inter", sans-serif',
            fontSize: '18px',
            fontWeight: '600',
            color: '#ffffff',
            textDecoration: 'none',
            padding: '10px 0',
            borderBottom: '1px solid rgba(100, 200, 255, 0.2)'
          }}
        >Work</a>
        <a 
          href="#footer" 
          onClick={closeMenu}
          style={{ 
            fontFamily: '"Inter", sans-serif',
            fontSize: '18px',
            fontWeight: '600',
            color: '#ffffff',
            textDecoration: 'none',
            padding: '10px 0',
            borderBottom: '1px solid rgba(100, 200, 255, 0.2)'
          }}
        >Connect</a>
      </div>
    </div>
    </>
  );
};

export default Header;
