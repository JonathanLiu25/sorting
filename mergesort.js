function split(wholeArray) {
  var firstHalf = wholeArray.slice(0, Math.ceil(wholeArray.length / 2))
  var secondHalf = wholeArray.slice(Math.ceil(wholeArray.length / 2))

  return [firstHalf, secondHalf];
}

function merge(firstArray, secondArray) {
  var sortedArray = [];
  while (firstArray.length && secondArray.length) {
    if (firstArray[0] < secondArray[0]) {
      sortedArray.push(firstArray.shift())
    } else {
      sortedArray.push(secondArray.shift())
    }
  }
  if (firstArray.length === 0) {
    sortedArray = sortedArray.concat(secondArray);
  } else {
    sortedArray = sortedArray.concat(firstArray);
  }
  return sortedArray;
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  var splitArray = split(array);
  var left = mergeSort(splitArray[0])
  var right = mergeSort(splitArray[1])
  return merge(left, right)
}
