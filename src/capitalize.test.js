const capitalize = require('./capitalize')

test('Capitalize the word "word"', () => {
  expect(capitalize('word')).toBe('Word');
})
