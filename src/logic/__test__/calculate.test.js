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
  test('should update next if there is an operation, ', () => {
    const object = { ...obj, next: '1', operation: '+' };
    expect(calculate(object, '2')).toEqual({ ...object, next: `${object.next}2` });
  });
  test('if buttonName is . ', () => {
    const object = { ...obj, next: '0.2' };
    expect(calculate(object, '.')).toEqual({ ...object });
  });
  test('if operation is = ', () => {
    const object = {
      ...obj, next: '2', total: '5', operation: '+',
    };
    expect(calculate(object, '=')).toEqual({
      ...object, total: '7', next: null, operation: null,
    });
  });
  test('should do nothing if there is no operation or no next is = ', () => {
    const object = {
      ...obj, next: '2', total: '5', operation: null,
    };
    expect(calculate(object, '=')).toEqual({});
  });
  test(" should return the object followed by '+'", () => {
    const object = { ...obj, total: '5' };
    expect(calculate(object, '+')).toEqual({ ...object, operation: '+' });
  });
  test('if obj.total and obj.next is false', () => {
    const object = { ...obj, total: '50', operation: '-' };
    expect(calculate(object, '+')).toEqual({ ...object, operation: '+' });
  });
  test('if total and next is false', () => {
    const object = { ...obj, total: '0', operation: '-' };
    expect(calculate(object, 'x')).toEqual({ ...object, total: '0', operation: 'x' });
  });

  test('Testing if obj.total is false', () => {
    const object = { ...obj, total: '0', operation: '+' };
    expect(calculate(object, '+')).toEqual({ ...object });
  });
  test("The user hasn't typed a number yet", () => {
    const object = { ...obj };
    expect(calculate(object, '+')).toEqual({ operation: '+' });
  });
});
