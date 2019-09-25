const reverse = require('./reverse')

test('reverse the word "word"', () => {
  expect(reverse('word')).toBe('drow');
})
