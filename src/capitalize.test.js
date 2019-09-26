//const capitalize = require('./capitalize')

import capitalize from './capitalize'

test('Capitalize the word "word"', () => {
  expect(capitalize('word')).toBe('Word');
})
