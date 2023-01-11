import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <>
        <article className="container">
          <section className="result">
            <span>0</span>
          </section>
          <section className="wrapper">
            <button type="button">AC</button>
            <button type="button">+/-</button>
            <button type="button">%</button>
            <button type="button" className="operators">{'\u00F7'}</button>
            <button type="button">7</button>
            <button type="button">8</button>
            <button type="button">9</button>
            <button type="button" className="operators">x</button>
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">6</button>
            <button type="button" className="operators">-</button>
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button" className="operators">+</button>
            <button type="button" className="zero">0</button>
            <button type="button" className="dot">.</button>
            <button type="button" className="operators">=</button>
          </section>
        </article>

      </>

    );
  }
}

export default Calculator;
