import React from 'react';

const PricingPage = () => {
  const plans = [
    { 
      name: 'Starter', 
      price: '$0', 
      desc: 'Perfect for exploring our platform and small side projects.',
      features: ['Basic UI Kit', 'Community Support', '1 Project Slot', 'Standard Performance'] 
    },
    { 
      name: 'Pro', 
      price: '$29', 
      desc: 'The best value for individual developers and startups.',
      features: ['Premium UI Kit', 'Priority Support', 'Unlimited Projects', 'Enhanced Performance'], 
      popular: true 
    },
    { 
      name: 'Enterprise', 
      price: 'Custom', 
      desc: 'Tailored solutions for large companies and specific needs.',
      features: ['Dedicated Support', 'Custom Components', 'Full Source Code', 'Maximum Security'] 
    }
  ];

  return (
    <div className="page-fade-in" style={{ padding: '80px 20px', textAlign: 'center' }}>
      <div className="badge reveal">Flexible Plans</div>
      <h1 className="hero-title reveal delay-1" style={{ marginBottom: '20px' }}>
        Choose Your <span className="gradient-text">Power</span>
      </h1>
      <p className="hero-subtitle reveal delay-1" style={{ margin: '0 auto 60px' }}>
        Unlock the full potential of NexGen with a plan that scales with your ambition.
      </p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '30px', 
        maxWidth: '1200px', 
        margin: '0 auto',
        paddingBottom: '60px'
      }}>
        {plans.map((plan, i) => (
          <div key={i} className={`glass-panel reveal delay-${i+1}`} style={{ 
            padding: '40px', 
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            border: plan.popular ? '1px solid var(--accent-primary)' : '1px solid var(--glass-border)',
            boxShadow: plan.popular ? '0 0 30px rgba(124, 58, 237, 0.2)' : 'var(--glass-shadow)',
            transition: 'transform 0.3s ease'
          }}>
            {plan.popular && (
              <div style={{ 
                position: 'absolute', 
                top: '-15px', 
                left: '50%', 
                transform: 'translateX(-50%)', 
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))', 
                padding: '6px 20px', 
                borderRadius: '20px', 
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '1px',
                color: 'white'
              }}>
                MOST POPULAR
              </div>
            )}
            
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{plan.name}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px' }}>{plan.desc}</p>
              <h2 style={{ fontSize: '3.5rem', marginBottom: '30px', fontWeight: '800' }} className="gradient-text">
                {plan.price}<span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: '400' }}>{plan.price !== 'Custom' ? '/mo' : ''}</span>
              </h2>
              
              <ul style={{ 
                textAlign: 'left', 
                marginBottom: '40px', 
                color: 'var(--text-secondary)',
                listStyle: 'none'
              }}>
                {plan.features.map((f, j) => (
                  <li key={j} style={{ 
                    marginBottom: '15px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '10px',
                    fontSize: '0.95rem' 
                  }}>
                    <span style={{ color: 'var(--accent-secondary)', fontWeight: 'bold' }}>✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            
            <button 
              className={plan.popular ? 'primary-btn' : 'secondary-btn'} 
              style={{ width: '100%', padding: '16px' }}
            >
              Get Started Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
