const analyze = require('./array')

test('min', () => {
  expect(analyze([1,2,3])).toBe(1);
})

test('max', () => {
  expect(analyze([1,2,3])).toBe(3);
})
