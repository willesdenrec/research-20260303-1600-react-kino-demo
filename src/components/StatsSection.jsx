import React from 'react';
import { Scene, Reveal, Counter } from 'react-kino';

const StatsSection = () => {
  return (
    <section className="component-section" id="stats">
      <h2 className="component-title">Animated Statistics</h2>
      <p className="component-description">
        Scroll-triggered counters that animate from starting values to target values.
        Perfect for showcasing metrics, statistics, and achievements.
      </p>
      
      <Scene duration="250vh">
        <div className="stats-grid">
          <Reveal animation="fade-up" at={0.1}>
            <div className="stat">
              <Counter 
                from={0} 
                to={50} 
                at={0.15} 
                span={0.4} 
                className="stat-number"
              />
              <p>Countries</p>
            </div>
          </Reveal>
          
          <Reveal animation="fade-up" at={0.2}>
            <div className="stat">
              <Counter 
                from={0} 
                to={10000000} 
                at={0.25} 
                span={0.4} 
                className="stat-number"
              />
              <p>Users</p>
            </div>
          </Reveal>
          
          <Reveal animation="fade-up" at={0.3}>
            <div className="stat">
              <Counter 
                from={0} 
                to={99.9} 
                at={0.35} 
                span={0.4} 
                format={(n) => \`\${n.toFixed(1)}%\`}
                className="stat-number"
              />
              <p>Uptime</p>
            </div>
          </Reveal>
          
          <Reveal animation="fade-up" at={0.4}>
            <div className="stat">
              <Counter 
                from={100} 
                to={4.9} 
                at={0.45} 
                span={0.4} 
                format={(n) => \`\${n.toFixed(1)}/5\`}
                className="stat-number"
              />
              <p>Rating</p>
            </div>
          </Reveal>
        </div>
      </Scene>
      
      <div className="code-example mt-8">
        <pre>{`import { Scene, Reveal, Counter } from "react-kino";

function StatsSection() {
  return (
    <Scene duration="250vh">
      <div className="stats-grid">
        <Reveal animation="fade-up" at={0.1}>
          <div className="stat">
            <Counter from={0} to={50} at={0.15} span={0.4} />
            <p>Countries</p>
          </div>
        </Reveal>
        
        <Reveal animation="fade-up" at={0.2}>
          <div className="stat">
            <Counter from={0} to={10000000} at={0.25} span={0.4} />
            <p>Users</p>
          </div>
        </Reveal>
        
        <Reveal animation="fade-up" at={0.3}>
          <div className="stat">
            <Counter 
              from={0} 
              to={99.9} 
              format={(n) => \`\${n.toFixed(1)}%\`}
            />
            <p>Uptime</p>
          </div>
        </Reveal>
      </div>
    </Scene>
  );
}`}</pre>
      </div>
    </section>
  );
};

export default StatsSection;