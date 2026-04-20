import React from 'react';

const BuildPage = () => {
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
      <div className="badge">Project Workspace</div>
      <h1 className="hero-title" style={{ fontSize: '3rem', marginBottom: '20px' }}>
        Start <span className="gradient-text">Building</span> Your Vision
      </h1>
      <p className="hero-subtitle" style={{ maxWidth: '600px' }}>
        This is where the magic happens. Our premium dashboard and development tools are currently being fine-tuned for your experience.
      </p>
      <div className="glass-panel" style={{ padding: '40px', marginTop: '40px', width: '100%', maxWidth: '600px' }}>
         <div className="code-line w-full"></div>
         <div className="code-line w-3/4"></div>
         <div className="code-line w-1/2"></div>
         <div className="primary-btn" style={{ marginTop: '20px' }}>Initialize Project</div>
      </div>
    </div>
  );
};

export default BuildPage;
