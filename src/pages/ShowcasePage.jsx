import React from 'react';

const ShowcasePage = () => {
  return (
    <div className="page-fade-in" style={{ 
      minHeight: '80vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div className="badge">Showcase Gallery</div>
      <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
        Premium <span className="gradient-text">Showcase</span>
      </h1>
      <p className="hero-subtitle" style={{ maxWidth: '600px' }}>
        Explore the stunning digital experiences built with NexGen. Each project is a masterpiece of design and performance.
      </p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '20px', 
        width: '100%', 
        maxWidth: '1000px', 
        marginTop: '50px' 
      }}>
        {[1, 2, 3].map(i => (
          <div key={i} className="glass-panel" style={{ padding: '20px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="gradient-text" style={{ fontWeight: '800' }}>Project #0{i}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowcasePage;
