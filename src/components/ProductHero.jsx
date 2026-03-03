import React from 'react';
import { Scene, Reveal, Parallax } from 'react-kino';

const ProductHero = () => {
  return (
    <section className="component-section" id="product-hero">
      <h2 className="component-title">Product Hero</h2>
      <p className="component-description">
        Apple-style product launch page with parallax background and staggered text reveals.
        The background scrolls at a different speed than the foreground, creating depth.
      </p>
      
      <Scene duration="400vh">
        {(progress) => (
          <div className="hero-container">
            {/* Parallax background - scrolls slower for depth effect */}
            <Parallax speed={0.3}>
              <div 
                className="hero-bg"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  width: '100%',
                  height: '140vh',
                  transform: `scale(${1 + progress * 0.1})`,
                }}
              />
            </Parallax>
            
            {/* Foreground content */}
            <div className="hero-content">
              <Reveal animation="fade-up" at={0.1}>
                <h1 style={{ fontSize: '5rem', color: '#fff' }}>iPhone 20</h1>
              </Reveal>
              
              <Reveal animation="fade" at={0.3}>
                <p style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.9)' }}>
                  The future in your hands.
                </p>
              </Reveal>
              
              <Reveal animation="scale" at={0.5}>
                <div style={{ marginTop: '2rem' }}>
                  <button 
                    style={{
                      background: 'white',
                      color: '#667eea',
                      border: 'none',
                      padding: '1rem 2rem',
                      fontSize: '1.1rem',
                      borderRadius: '50px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    Learn More
                  </button>
                </div>
              </Reveal>
            </div>
          </div>
        )}
      </Scene>
      
      <div className="code-example mt-8">
        <pre>{`import { Scene, Reveal, Parallax } from "react-kino";

function ProductHero() {
  return (
    <Scene duration="400vh">
      {(progress) => (
        <div className="hero-container">
          <Parallax speed={0.3}>
            <div className="hero-bg" />
          </Parallax>
          
          <div className="hero-content">
            <Reveal animation="fade-up" at={0.1}>
              <h1>iPhone 20</h1>
            </Reveal>
            
            <Reveal animation="fade" at={0.3}>
              <p>The future in your hands.</p>
            </Reveal>
          </div>
        </div>
      )}
    </Scene>
  );
}`}</pre>
      </div>
    </section>
  );
};

export default ProductHero;