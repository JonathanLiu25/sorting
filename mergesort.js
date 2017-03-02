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
  // BASE CASE
    // split array
  // WHILE SPLIT
    // if split array is not length 1
      // split again ..
  // WHILE MERGE
    // else mere arrays
    if (array.length === 1) {
      return array;
    } else {
      var splitArray = split(array);
      // keep splitting until each array had length 1

      return merge(split(splitArray[0]), split(splitArray[1]));
    }

  // RECURSIVE CASE


}
