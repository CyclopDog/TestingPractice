import calculator from './calculator'

test('add', () => {
  expect(calculator.add(3, 4)).toBe(7)
})

test('subtract', () => {
  expect(calculator.subtract(8, 4)).toBe(4)
})

test('multiply', () => {
  expect(calculator.multiply(8, 4)).toBe(32)
})

test('divide', () => {
  expect(calculator.divide(8, 4)).toBe(2)
})
