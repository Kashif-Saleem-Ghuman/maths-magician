import React from 'react';

export default function Quotes() {
  return (
    <>
      <section className="quotes-wrapper">
        <h1 className="quote-h1">
          &quot;Mathematics is not about numbers, equations, computations,
          or algorithms: it is about understanding.&quot;
        </h1>
        <span className="quotes-span">- William Paul Thurston</span>
      </section>
      <footer>
        <span className="footer-text">Created by Kashif Saleem</span>
        <a className="github" target="_blank" rel="noreferrer" href="https://github.com/Kashif-Saleem-Ghuman">Github</a>
      </footer>
    </>
  );
}
