const calculator = require('./calculator');

describe('Addition', () => {
  test('1 + 1 = 2', () => {
    expect(calculator.sum(1, 1)).toBe(2);
  }),

  test('1 + 2 = 3', () => {
    expect(calculator.sum(1, 2)).toBe(3);
  })
});

describe('Subtraction', () => {
  test('1 - 1 = 0', () => {
    expect(calculator.sub(1, 1)).toBe(0);
  }),

  test('1 - 2 = -1', () => {
    expect(calculator.sub(1, 2)).toBe(-1);
  })
});

describe('Multiplication', () => {
  test('1 * 1 = 1', () => {
    expect(calculator.multiply(1, 1)).toBe(1);
  }),

  test('1 * 2 = 2', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  })
});

describe('Division', () => {
  test('1 / 1 = 1', () => {
    expect(calculator.divide(1, 1)).toBe(1);
  }),

  test('1 / 2 = 0.5', () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
  })
});