import React from 'react';
import ProductHero from '../components/ProductHero';
import StatsSection from '../components/StatsSection';
import DeviceTilt from '../components/DeviceTilt';
import BeforeAfter from '../components/BeforeAfter';
import FeatureShowcase from '../components/FeatureShowcase';

const DemoPage = () => {
  return (
    <div className="demo-page">
      <section className="intro-section">
        <div style={{
          padding: '4rem 2rem',
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: 'var(--border-radius)',
          margin: '2rem auto',
          maxWidth: '800px'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            color: 'white',
            marginBottom: '1rem'
          }}>
            Interactive Demo Gallery
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '1.6'
          }}>
            Scroll through this page to experience React-Kino's capabilities.
            Each section demonstrates a different component with live animations.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '2rem',
            flexWrap: 'wrap'
          }}>
            <a 
              href="#product-hero"
              style={{
                background: 'rgba(59, 130, 246, 0.2)',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: 'var(--border-radius)',
                textDecoration: 'none',
                border: '1px solid rgba(59, 130, 246, 0.4)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.background = 'rgba(59, 130, 246, 0.4)'}
              onMouseLeave={(e) => e.target.style.background = 'rgba(59, 130, 246, 0.2)'}
            >
              Product Hero
            </a>
            <a 
              href="#stats"
              style={{
                background: 'rgba(139, 92, 246, 0.2)',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: 'var(--border-radius)',
                textDecoration: 'none',
                border: '1px solid rgba(139, 92, 246, 0.4)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.background = 'rgba(139, 92, 246, 0.4)'}
              onMouseLeave={(e) => e.target.style.background = 'rgba(139, 92, 246, 0.2)'}
            >
              Animated Stats
            </a>
            <a 
              href="#device-tilt"
              style={{
                background: 'rgba(16, 185, 129, 0.2)',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: 'var(--border-radius)',
                textDecoration: 'none',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.background = 'rgba(16, 185, 129, 0.4)'}
              onMouseLeave={(e) => e.target.style.background = 'rgba(16, 185, 129, 0.2)'}
            >
              3D Device Tilt
            </a>
            <a 
              href="#before-after"
              style={{
                background: 'rgba(245, 158, 11, 0.2)',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: 'var(--border-radius)',
                textDecoration: 'none',
                border: '1px solid rgba(245, 158, 11, 0.4)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.background = 'rgba(245, 158, 11, 0.4)'}
              onMouseLeave={(e) => e.target.style.background = 'rgba(245, 158, 11, 0.2)'}
            >
              Before/After
            </a>
            <a 
              href="#feature-showcase"
              style={{
                background: 'rgba(239, 68, 68, 0.2)',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: 'var(--border-radius)',
                textDecoration: 'none',
                border: '1px solid rgba(239, 68, 68, 0.4)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.background = 'rgba(239, 68, 68, 0.4)'}
              onMouseLeave={(e) => e.target.style.background = 'rgba(239, 68, 68, 0.2)'}
            >
              Feature Showcase
            </a>
          </div>
        </div>
      </section>

      <ProductHero />
      <StatsSection />
      <DeviceTilt />
      <BeforeAfter />
      <FeatureShowcase />

      <section className="conclusion-section" style={{
        padding: '4rem 2rem',
        textAlign: 'center',
        background: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 'var(--border-radius)',
        margin: '4rem auto',
        maxWidth: '800px'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          color: 'white',
          marginBottom: '1.5rem'
        }}>
          Ready to Build?
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: 'rgba(255, 255, 255, 0.8)',
          lineHeight: '1.6',
          marginBottom: '2rem'
        }}>
          React-Kino makes it easy to create cinematic scroll experiences.
          Start with the official documentation or explore more examples.
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <a 
            href="https://github.com/btahir/react-kino"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'white',
              color: '#3b82f6',
              padding: '1rem 2rem',
              borderRadius: 'var(--border-radius)',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            View on GitHub
          </a>
          <a 
            href="https://react-kino.dev"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'transparent',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: 'var(--border-radius)',
              textDecoration: 'none',
              fontWeight: '600',
              border: '2px solid white',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'white';
              e.target.style.color = '#3b82f6';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = 'white';
            }}
          >
            Documentation
          </a>
        </div>
      </section>
    </div>
  );
};

export default DemoPage;