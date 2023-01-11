import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import MathApp from './MathApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MathApp />
  </React.StrictMode>,
);
