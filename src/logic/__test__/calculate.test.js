import calculate from '../calculate';

const obj = {
  total: null,
  next: null,
  operation: null,
};

describe('testing each button', () => {
  test('should set data to null when button is clicked', () => {
    expect(calculate(obj, 'AC')).toEqual(obj);
  });
  test('button 0 pressed twice should return an empty object', () => {
    const object = { ...obj, next: '0' };
    expect(calculate(object, '0')).toEqual({});
  });
});
