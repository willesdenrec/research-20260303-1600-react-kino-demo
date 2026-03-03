import React from 'react';
import { Scene, ScrollTransform } from 'react-kino';

const DeviceTilt = () => {
  return (
    <section className="component-section" id="device-tilt">
      <h2 className="component-title">3D Device Tilt</h2>
      <p className="component-description">
        3D perspective transforms that respond to scroll position.
        Creates immersive product showcases with realistic depth and rotation effects.
      </p>
      
      <Scene duration="350vh">
        <div style={{ 
          height: '100vh', 
          display: 'grid', 
          placeItems: 'center',
          padding: '2rem'
        }}>
          <ScrollTransform
            from={{ 
              rotateX: 40, 
              rotateY: -12, 
              scale: 0.82, 
              opacity: 0.3 
            }}
            to={{ 
              rotateX: 0, 
              rotateY: 0, 
              scale: 1, 
              opacity: 1 
            }}
            perspective={1200}
            span={0.5}
            easing="ease-out-cubic"
            transformOrigin="center bottom"
          >
            <div 
              style={{
                width: '100%',
                maxWidth: '800px',
                borderRadius: '24px',
                background: 'linear-gradient(145deg, #1e293b, #0f172a)',
                padding: '3rem',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'center',
                color: 'white'
              }}
            >
              <div style={{ 
                fontSize: '2.5rem', 
                fontWeight: '700',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                MacBook Pro M5
              </div>
              <p style={{ 
                fontSize: '1.1rem', 
                opacity: 0.8,
                marginBottom: '2rem'
              }}>
                The most powerful MacBook Pro ever
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap'
              }}>
                <div style={{
                  background: 'rgba(59, 130, 246, 0.1)',
                  padding: '1rem 1.5rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(59, 130, 246, 0.2)'
                }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '600' }}>12‑core</div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>CPU</div>
                </div>
                <div style={{
                  background: 'rgba(139, 92, 246, 0.1)',
                  padding: '1rem 1.5rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(139, 92, 246, 0.2)'
                }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '600' }}>38‑core</div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>GPU</div>
                </div>
                <div style={{
                  background: 'rgba(16, 185, 129, 0.1)',
                  padding: '1rem 1.5rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(16, 185, 129, 0.2)'
                }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '600' }}>128GB</div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>Memory</div>
                </div>
              </div>
            </div>
          </ScrollTransform>
        </div>
      </Scene>
      
      <div className="code-example mt-8">
        <pre>{`import { Scene, ScrollTransform } from "react-kino";

function DeviceTilt() {
  return (
    <Scene duration="350vh">
      <ScrollTransform
        from={{ rotateX: 40, rotateY: -12, scale: 0.82, opacity: 0.3 }}
        to={{ rotateX: 0, rotateY: 0, scale: 1, opacity: 1 }}
        perspective={1200}
        span={0.5}
        easing="ease-out-cubic"
        transformOrigin="center bottom"
      >
        <div className="device-card">
          <h3>MacBook Pro M5</h3>
          <p>The most powerful MacBook Pro ever</p>
          <div className="specs">
            <div className="spec">12‑core CPU</div>
            <div className="spec">38‑core GPU</div>
            <div className="spec">128GB Memory</div>
          </div>
        </div>
      </ScrollTransform>
    </Scene>
  );
}`}</pre>
      </div>
    </section>
  );
};

export default DeviceTilt;