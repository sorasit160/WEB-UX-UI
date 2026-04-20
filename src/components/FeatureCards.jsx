import React from 'react';
import './FeatureCards.css';

const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    description: "Built on optimal rendering architectures ensuring pages load instantly and perform at maximum efficiency.",
    delay: "delay-1"
  },
  {
    icon: "🎨",
    title: "Stunning Visuals",
    description: "Crafted with premium design systems. Advanced aesthetics including glass effects, smooth gradients, and depth.",
    delay: "delay-2"
  },
  {
    icon: "🛡️",
    title: "Secure Architecture",
    description: "Enterprise-grade protection with best-in-class security patterns out of the box. Your data is safe.",
    delay: "delay-3"
  }
];

const FeatureCards = () => {
  return (
    <section id="features" className="features-section">
      <div className="features-header reveal">
        <h2 className="section-title">
          Everything You <span className="gradient-text">Need</span>
        </h2>
        <p className="section-subtitle">
          A suite of premium tools designed to elevate your workflow and user experience.
        </p>
      </div>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className={`feature-card glass-panel reveal ${feature.delay}`}>
            <div className="feature-icon-wrapper">
              <span className="feature-icon">{feature.icon}</span>
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-desc">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
