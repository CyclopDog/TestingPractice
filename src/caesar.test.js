const caesar = require('./caesar')

test('intro', () => {
  expect(caesar("hello",2)).toBe("jgnnq");
})

test('wrap', () => {
  expect(caesar("zebra",1)).toBe("afcsb");
})

test('puncuation', () => {
  expect(caesar("he.llo",1)).toBe("jg.nnq");
})

test('same case', () => {
  expect(caesar("HeLLo",2)).toBe("JgNNq");
})
