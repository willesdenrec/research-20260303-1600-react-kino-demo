import React from 'react';
import { Kino } from 'react-kino';
import DemoPage from './pages/DemoPage';
import './styles/globals.css';

function App() {
  return (
    <Kino>
      <div className="app">
        <header className="app-header">
          <h1>React-Kino Demo</h1>
          <p className="subtitle">Cinematic Scroll-Driven Storytelling for React</p>
          <nav className="nav-links">
            <a href="#demo">Live Demo</a>
            <a href="https://github.com/btahir/react-kino" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://react-kino.dev" target="_blank" rel="noopener noreferrer">Documentation</a>
          </nav>
        </header>
        
        <main>
          <DemoPage />
        </main>
        
        <footer className="app-footer">
          <p>
            This educational demo was created by{' '}
            <a href="https://github.com/willesdenrec" target="_blank" rel="noopener noreferrer">
              willesdenrec
            </a>
            {' '}using{' '}
            <a href="https://github.com/btahir/react-kino" target="_blank" rel="noopener noreferrer">
              React-Kino
            </a>
          </p>
          <p className="footer-note">
            Part of the OpenClaw Research Agent GitHub Project Pipeline • Created on March 3, 2026
          </p>
        </footer>
      </div>
    </Kino>
  );
}

export default App;