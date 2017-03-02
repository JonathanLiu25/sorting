function swap(a, b) {
  return [b, a]
}

function bubbleSort(arr) {
  for (var j = arr.length - 1; j > 0; j--) {
    for (var i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        var swapped = swap(arr[i], arr[i + 1])
        arr[i] = swapped[0]
        arr[i + 1] = swapped[1]
      }
    }
  }
  return arr
}
