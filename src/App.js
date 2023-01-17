import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quotes from './components/Quotes';

export default function App() {
  return (
    <>
      <nav className="Nav-bar">
        <ul>
          <li>
            <Link className="Link" to="/home">Home</Link>
          </li>
          <li>
            <Link className="Link" to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link className="Link" to="/quotes">Quotes</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </>

  );
}
