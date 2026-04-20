import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* Left Side: Detail/Text */}
        <div className="about-content reveal delay-1">
          <div className="badge">
            <span className="badge-dot" style={{ backgroundColor: '#7c3aed', boxShadow: '0 0 10px #7c3aed' }}></span> 
            Our Mission
          </div>
          <h2 className="section-title">
            Redefining <span className="gradient-text">Excellence</span> in Digital Experiences
          </h2>
          <p className="about-desc">
            We are a team of visionary designers and engineers dedicated to pushing the boundaries of web technology. 
            NexGen was born out of a desire to merge absolute performance with breathtaking aesthetics, creating 
            applications that don't just work smoothly, but leave a lasting impression.
          </p>
          
          <div className="stats-grid">
            <div className="stat-item">
              <h3 className="stat-num">99%</h3>
              <p className="stat-label">Client Satisfaction</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-num">10x</h3>
              <p className="stat-label">Faster Loading</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-num">24/7</h3>
              <p className="stat-label">Expert Support</p>
            </div>
          </div>
        </div>

        {/* Right Side: Graphic/Image representation */}
        <div className="about-visual reveal delay-2">
          <div className="glass-panel visual-card">
            <div className="visual-graphic">
               {/* Abstract decorative elements */}
               <div className="glow-orb orb-purple"></div>
               <div className="glow-orb orb-blue"></div>
               <div className="grid-overlay"></div>
               <div className="visual-content">
                  <div className="profile-placeholder"></div>
                  <div className="text-lines">
                    <div className="line l-long"></div>
                    <div className="line l-short"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
