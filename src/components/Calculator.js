import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: 0, next: null, operation: null };
  }

  gotClicked = (e) => {
    const clickedButton = e.target.innerText;
    const gotValue = calculate(this.state, clickedButton);
    this.setState(gotValue);
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <>
        <article className="container">
          <section className="result">
            <span>
              {total}
              {operation}
              {next}
            </span>
          </section>
          <section className="wrapper">
            <button type="button" onClick={this.gotClicked}>AC</button>
            <button type="button" onClick={this.gotClicked}>+/-</button>
            <button type="button" onClick={this.gotClicked}>%</button>
            <button type="button" className="operators" onClick={this.gotClicked}>{'\u00F7'}</button>
            <button type="button" onClick={this.gotClicked}>7</button>
            <button type="button" onClick={this.gotClicked}>8</button>
            <button type="button" onClick={this.gotClicked}>9</button>
            <button type="button" className="operators" onClick={this.gotClicked}>x</button>
            <button type="button" onClick={this.gotClicked}>4</button>
            <button type="button" onClick={this.gotClicked}>5</button>
            <button type="button" onClick={this.gotClicked}>6</button>
            <button type="button" className="operators" onClick={this.gotClicked}>-</button>
            <button type="button" onClick={this.gotClicked}>1</button>
            <button type="button" onClick={this.gotClicked}>2</button>
            <button type="button" onClick={this.gotClicked}>3</button>
            <button type="button" className="operators" onClick={this.gotClicked}>+</button>
            <button type="button" className="zero" onClick={this.gotClicked}>0</button>
            <button type="button" className="dot" onClick={this.gotClicked}>.</button>
            <button type="button" className="operators" onClick={this.gotClicked}>=</button>
          </section>
        </article>

      </>

    );
  }
}

export default Calculator;
