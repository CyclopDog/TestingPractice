const reverse = (string) => {
  let new_string = ""
  for(let i = string.length - 1; i >= 0; i--){
    new_string += string[i]
  }
  return new_string
}

const calculator = (() => {
  const add = (a,b) => {
    return a + b
  }

  const subtract = (a,b) => {
    return a - b
  }

  const multiply = (a,b) => {
    return a * b
  }

  const divide = (a,b) => {
    return a / b
  }

  return {add, subtract, multiply, divide}
})()

module.exports = calculator;
