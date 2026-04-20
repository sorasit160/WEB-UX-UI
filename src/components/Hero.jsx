import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="badge reveal">
          <span className="badge-dot"></span> V2.0 Now Available
        </div>
        <h1 className="hero-title reveal delay-1">
          Build the <span className="gradient-text">Future</span> <br />
          With Premium Design
        </h1>
        <p className="hero-subtitle reveal delay-2">
          Experience the ultimate fusion of absolute performance and breathtaking visuals. We craft digital experiences that leave a lasting impression.
        </p>
        <div className="hero-actions reveal delay-3">
          <Link to="/build" className="primary-btn">Start Building</Link>
          <Link to="/showcase" className="secondary-btn">View Showcase</Link>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="hero-graphics reveal delay-3">
        <div className="glass-card element-1">
          <div className="card-header">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <div className="card-body">
            <div className="code-line w-full"></div>
            <div className="code-line w-3/4"></div>
            <div className="code-line w-1/2"></div>
            <div className="mt-4"></div>
            <div className="code-line w-5/6"></div>
            <div className="code-line w-2/3"></div>
          </div>
        </div>
        
        <div className="glass-circle circle-1"></div>
        <div className="glass-circle circle-2"></div>
      </div>
    </section>
  );
};

export default Hero;
