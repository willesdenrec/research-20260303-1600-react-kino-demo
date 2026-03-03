import React from 'react';
import { Scene, CompareSlider } from 'react-kino';

const BeforeAfter = () => {
  return (
    <section className="component-section" id="before-after">
      <h2 className="component-title">Before/After Comparison</h2>
      <p className="component-description">
        Scroll-driven comparison slider for visual transformations.
        Perfect for showcasing design improvements, restoration projects, or A/B testing results.
      </p>
      
      <Scene duration="300vh">
        <div className="comparison-container">
          <div style={{ 
            width: '100%', 
            maxWidth: '900px',
            height: '600px',
            borderRadius: 'var(--border-radius)',
            overflow: 'hidden'
          }}>
            <CompareSlider
              scrollDriven
              before={
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                  display: 'grid',
                  placeItems: 'center',
                  color: 'white',
                  padding: '2rem'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>
                      Before
                    </div>
                    <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
                      Legacy design with outdated UI patterns
                    </p>
                    <div style={{ 
                      marginTop: '2rem',
                      display: 'flex',
                      justifyContent: 'center',
                      gap: '1rem',
                      flexWrap: 'wrap'
                    }}>
                      <span style={{
                        background: 'rgba(255, 255, 255, 0.2)',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.9rem'
                      }}>Cluttered Layout</span>
                      <span style={{
                        background: 'rgba(255, 255, 255, 0.2)',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.9rem'
                      }}>Poor Contrast</span>
                      <span style={{
                        background: 'rgba(255, 255, 255, 0.2)',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.9rem'
                      }}>Slow Performance</span>
                    </div>
                  </div>
                </div>
              }
              after={
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  display: 'grid',
                  placeItems: 'center',
                  color: 'white',
                  padding: '2rem'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>
                      After
                    </div>
                    <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
                      Modern design with improved user experience
                    </p>
                    <div style={{ 
                      marginTop: '2rem',
                      display: 'flex',
                      justifyContent: 'center',
                      gap: '1rem',
                      flexWrap: 'wrap'
                    }}>
                      <span style={{
                        background: 'rgba(255, 255, 255, 0.2)',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.9rem'
                      }}>Clean Design</span>
                      <span style={{
                        background: 'rgba(255, 255, 255, 0.2)',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.9rem'
                      }}>Accessible</span>
                      <span style={{
                        background: 'rgba(255, 255, 255, 0.2)',
                        padding: '0.5rem 1rem',
                        borderRadius: '20px',
                        fontSize: '0.9rem'
                      }}>Fast & Responsive</span>
                    </div>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </Scene>
      
      <div className="code-example mt-8">
        <pre>{`import { Scene, CompareSlider } from "react-kino";

function BeforeAfter() {
  return (
    <Scene duration="300vh">
      <div className="comparison-container">
        <CompareSlider
          scrollDriven
          before={
            <div className="before-content">
              <h3>Before</h3>
              <p>Legacy design with outdated UI patterns</p>
            </div>
          }
          after={
            <div className="after-content">
              <h3>After</h3>
              <p>Modern design with improved user experience</p>
            </div>
          }
        />
      </div>
    </Scene>
  );
}`}</pre>
      </div>
    </section>
  );
};

export default BeforeAfter;