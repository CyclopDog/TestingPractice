const caesar = (string, num) => {
  let crypt = ''
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  for (let index = 0; index < string.length; index++) {
    const letter = string[index]
    const isUpperCase = letter === letter.toUpperCase()
    const alphabetPos = alphabet.indexOf(letter.toLowerCase())
    if (alphabetPos === -1) {
      crypt += letter
    } else {
      let newPos = alphabetPos + num
      newPos = newPos > 25 ? newPos - 26 : newPos
      const nextLetter = alphabet[newPos]
      isUpperCase === true ? crypt += nextLetter.toUpperCase() : crypt += nextLetter
    }
  }
  return crypt
}

export default caesar
