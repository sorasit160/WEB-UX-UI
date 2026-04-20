import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import FeaturesPage from './pages/FeaturesPage';
import AboutPage from './pages/AboutPage';
import BuildPage from './pages/BuildPage';
import ShowcasePage from './pages/ShowcasePage';
import PricingPage from './pages/PricingPage';
import './App.css';

function App() {
  // Intersection Observer for scroll animations (Global logic)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // We observe .reveal elements dynamically as navigation happens
    const setupObserver = () => {
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
      });
    };

    // Initial setup
    setupObserver();

    // Re-run whenever DOM might change (simple polling or we could use MutationObserver)
    const interval = setInterval(setupObserver, 1000);

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/build" element={<BuildPage />} />
            <Route path="/showcase" element={<ShowcasePage />} />
            <Route path="/pricing" element={<PricingPage />} />
          </Routes>
        </main>
        
        <footer style={{
          marginTop: '60px',
          padding: '40px 20px',
          textAlign: 'center',
          borderTop: '1px solid var(--glass-border)',
          color: 'var(--text-secondary)',
          backdropFilter: 'blur(10px)'
        }}>
          <p>© 2026 NexGen UI System. Created with precision.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
