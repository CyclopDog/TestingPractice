const analyze = (arr = []) => {

  const max = Math.max(...arr)
  const min = Math.min(...arr)
  const length = arr.length
  const average = arr.reduce((cur, total) => ( cur + total )) / length
  
  const obj = {
    average: average,
    min: min,
    max: max,
    length: length
  }
  return obj
}

module.exports = analyze;
