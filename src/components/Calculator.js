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

    </>

  );
};

export default Calculator;
