const strings = require('./strings');

test('length of word is 4', () => {
  expect(strings('word')).toBe(4);
});

test('length of word is 10', () => {
  expect(strings('wordwordwo')).toBe(10);
});

test('length of word is 11', () => {
  expect(() => { strings('wordwordwor'); }).toThrow();
});

test('length of word is 0', () => {
  expect(() => { strings(''); }).toThrow();
});
