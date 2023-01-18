import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });
  const { total, next, operation } = state;
  const gotClicked = (e) => {
    const clickedButton = e.target.innerText;
    const gotValue = calculate(state, clickedButton);
    setState(gotValue);
  };
  return (
    <>
      <section className="calc-head-wrapper">
        <div>
          <p className="calc-p">Lets do some math!</p>
        </div>
        <article className="container">
          <section className="result">
            <span>
              {total}
              {' '}
              {operation}
              {' '}
              {next}
            </span>
          </section>
          <section className="wrapper">
            <button type="button" onClick={gotClicked}>AC</button>
            <button type="button" onClick={gotClicked}>+/-</button>
            <button type="button" onClick={gotClicked}>%</button>
            <button type="button" className="operators" onClick={gotClicked}>{'\u00F7'}</button>
            <button type="button" onClick={gotClicked}>7</button>
            <button type="button" onClick={gotClicked}>8</button>
            <button type="button" onClick={gotClicked}>9</button>
            <button type="button" className="operators" onClick={gotClicked}>x</button>
            <button type="button" onClick={gotClicked}>4</button>
            <button type="button" onClick={gotClicked}>5</button>
            <button type="button" onClick={gotClicked}>6</button>
            <button type="button" className="operators" onClick={gotClicked}>-</button>
            <button type="button" onClick={gotClicked}>1</button>
            <button type="button" onClick={gotClicked}>2</button>
            <button type="button" onClick={gotClicked}>3</button>
            <button type="button" className="operators" onClick={gotClicked}>+</button>
            <button type="button" className="zero" onClick={gotClicked}>0</button>
            <button type="button" className="dot" onClick={gotClicked}>.</button>
            <button type="button" className="operators" onClick={gotClicked}>=</button>
          </section>
        </article>
      </section>
      <footer>
        <span className="footer-text">Created by Kashif Saleem</span>
        <a className="github" target="_blank" rel="noreferrer" href="https://github.com/Kashif-Saleem-Ghuman">Github</a>
      </footer>

    </>

  );
};

export default Calculator;
