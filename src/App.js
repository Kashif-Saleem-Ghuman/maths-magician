import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quotes from './components/Quotes';

export default function App() {
  return (
    <>
      <nav className="Nav-bar">
        <h1 className="calc-heading">Maths Magician</h1>
        <ul>
          <li>
            <Link className="Link" to="/home">Home</Link>
          </li>
          <div className="vertical-line" />
          <li>
            <Link className="Link" to="/calculator">Calculator</Link>
          </li>
          <div className="vertical-line" />
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
