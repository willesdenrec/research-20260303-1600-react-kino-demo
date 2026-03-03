import React from 'react';
import { HorizontalScroll, Panel } from 'react-kino';

const FeatureShowcase = () => {
  const features = [
    { 
      title: "Tiny Core", 
      description: "Core engine under 1 KB gzipped. 33x smaller than GSAP ScrollTrigger.", 
      icon: "⚡",
      bg: "linear-gradient(135deg, #0a0a0a, #1a1a1a)"
    },
    { 
      title: "Declarative", 
      description: "Compose scenes, reveals, and animations like regular React components. No imperative timelines.", 
      icon: "🎨",
      bg: "linear-gradient(135deg, #111, #222)"
    },
    { 
      title: "Accessible", 
      description: "Respects prefers-reduced-motion. Content renders immediately when animations are disabled.", 
      icon: "♿",
      bg: "linear-gradient(135deg, #1a1a1a, #2a2a2a)"
    },
    { 
      title: "Universal", 
      description: "SSR + Next.js App Router ready. Renders on server, animates on client.", 
      icon: "🌐",
      bg: "linear-gradient(135deg, #222, #333)"
    },
    { 
      title: "GPU Accelerated", 
      description: "Uses compositor-only properties for buttery smooth 60fps performance.", 
      icon: "🚀",
      bg: "linear-gradient(135deg, #2a2a2a, #3a3a3a)"
    },
    { 
      title: "Tree-shakeable", 
      description: "Import only what you use. Unused code is eliminated at build time.", 
      icon: "🌳",
      bg: "linear-gradient(135deg, #333, #444)"
    }
  ];

  return (
    <section className="component-section" id="feature-showcase">
      <h2 className="component-title">Horizontal Feature Showcase</h2>
      <p className="component-description">
        Horizontal scroll section for feature presentations.
        Each panel represents a key feature with its own dedicated space.
      </p>
      
      <HorizontalScroll panelHeight="80vh">
        {features.map((f, index) => (
          <Panel key={f.title}>
            <div 
              className="feature-panel"
              style={{ 
                background: f.bg,
                height: '100%',
                display: 'grid',
                placeItems: 'center',
                padding: '2rem'
              }}
            >
              <div style={{ textAlign: 'center', maxWidth: '500px' }}>
                <div style={{ 
                  fontSize: '4rem',
                  marginBottom: '1.5rem',
                  opacity: 0.9
                }}>
                  {f.icon}
                </div>
                <h2 style={{ 
                  fontSize: '3rem', 
                  color: 'white',
                  marginBottom: '1rem'
                }}>
                  {f.title}
                </h2>
                <p style={{ 
                  fontSize: '1.25rem', 
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6'
                }}>
                  {f.description}
                </p>
                <div style={{ 
                  marginTop: '2rem',
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.6)'
                }}>
                  Feature {index + 1} of {features.length}
                </div>
              </div>
            </div>
          </Panel>
        ))}
      </HorizontalScroll>
      
      <div className="code-example mt-8">
        <pre>{`import { HorizontalScroll, Panel } from "react-kino";

function FeatureShowcase() {
  const features = [
    { title: "Tiny Core", description: "Core engine under 1 KB gzipped.", bg: "#0a0a0a" },
    { title: "Declarative", description: "Compose like React components.", bg: "#111" },
    { title: "Accessible", description: "Respects prefers-reduced-motion.", bg: "#1a1a1a" },
  ];

  return (
    <HorizontalScroll>
      {features.map((f) => (
        <Panel key={f.title}>
          <div className="feature-panel" style={{ background: f.bg }}>
            <div className="feature-content">
              <h2>{f.title}</h2>
              <p>{f.description}</p>
            </div>
          </div>
        </Panel>
      ))}
    </HorizontalScroll>
  );
}`}</pre>
      </div>
    </section>
  );
};

export default FeatureShowcase;