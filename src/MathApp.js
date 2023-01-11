import React from 'react';
import Calculator from './components/Calculator';

class MathApp extends React.PureComponent {
  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

export default MathApp;
