import operate from '../operate';

const obj = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
};

describe('test calculation', () => {
  test('operate func return 3', () => {
    expect(Number(operate(obj.A, obj.B, '+'))).toBe(3);
  });
  test('operate func return 2', () => {
    expect(Number(operate(obj.D, obj.B, '-'))).toBe(2);
  });
  test('operate func return 2', () => {
    expect(Number(operate(obj.A, obj.B, 'x'))).toBe(2);
  });
  test('operate func return  0.6666666666666666', () => {
    expect(Number(operate(obj.B, obj.C, '÷'))).toBe(0.6666666666666666);
  });
});
