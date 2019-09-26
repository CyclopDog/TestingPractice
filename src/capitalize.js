const capitalize = (string) => {
  const beg = string[0].toUpperCase()
  const end = string.slice(1)
  return beg + end
}

export default capitalize
