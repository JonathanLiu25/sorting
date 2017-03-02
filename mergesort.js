function split(wholeArray) {
  var firstHalf = wholeArray.slice(0, Math.round(wholeArray.length / 2))
  var secondHalf = wholeArray.slice(Math.round(wholeArray.length / 2))

  return [firstHalf, secondHalf]
}

function merge(firstArray, secondArray) {
  var sortedArray = []
  while (firstArray.length && secondArray.length) {
    sortedArray.push((firstArray[0] < secondArray[0]) ? firstArray.shift() : secondArray.shift())
  }
  sortedArray = firstArray.length === 0 ? sortedArray.concat(secondArray) : sortedArray.concat(firstArray)
  return sortedArray
}

function mergeSort(array) {
  if (array.length === 1) return array
  var splitArray = split(array)
  return merge(mergeSort(splitArray[0]), mergeSort(splitArray[1]))
}
