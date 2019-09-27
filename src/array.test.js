import analyze from './array'

test('min 1', () => {
  expect(analyze([1, 2, 3]).min).toBe(1)
})

test('min 2', () => {
  expect(analyze([10, 2, 3, 0, 9, 1]).min).toBe(0)
})

test('max 1', () => {
  expect(analyze([1, 2, 3]).max).toBe(3)
})

test('max 2', () => {
  expect(analyze([1, 2, 3, 4, 5]).max).toBe(5)
})

test('average 1', () => {
  expect(analyze([1, 2, 3]).average).toBe(2)
})

test('average 2', () => {
  expect(analyze([2, 2, 2, 2, 2, 2, 2]).average).toBe(2)
})

test('length 1', () => {
  expect(analyze([1, 2, 3]).length).toBe(3)
})

test('length 2', () => {
  expect(analyze([1, 2, 3, 4, 5, 6]).length).toBe(6)
})
