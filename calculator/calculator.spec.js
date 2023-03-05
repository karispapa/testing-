const Calculator = require('./calculator');

const calc = new Calculator(8, 4);

describe('Calculator', () => {
  test('Returns the sum of two numbers', () => {
    expect(calc.add()).toBe(12);
  });
  test('Returns the difference of two numbers', () => {
    expect(calc.subtract()).toBe(4);
  });
  test('Multiplies two numbers', () => {
    expect(calc.multiply()).toBe(32);
  });
  test('Divides two numbers', () => {
    expect(calc.divide()).toBe(2);
  });
});
