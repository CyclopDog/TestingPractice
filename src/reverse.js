const reverse = (string) => {
  let new_string = ""
  for(let i = string.length - 1; i >= 0; i--){
    new_string += string[i]
  }
  return new_string
}

module.exports = reverse;
