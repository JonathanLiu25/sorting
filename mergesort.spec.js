describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([3, 6, 2, 1])).toEqual([
      [3, 6],
      [2, 1]
    ]);
  });
  it('is able to split an odd-length array into two halves', function() {
    expect(split([3, 6, 4, 5, 10, 2, 1, 15, 12])).toEqual([
      [3, 6, 4, 5, 10],
      [2, 1, 15, 12]
    ]);
  });
});

describe('Merge Array function', function() {
  it('is able to merge an array into one', function() {
    expect(merge([3], [1])).toEqual([1, 3]);
  });
  it('is able to merge two large arrays into one', function() {
    expect(merge([3, 4, 5, 6, 10], [1, 2, 12, 15])).toEqual([1, 2, 3, 4, 5, 6, 10, 12, 15]);
  });
  it('is able to sort and merge two large arrays into one', function() {
    expect(mergeSort([3, 6, 4, 5, 10, 2, 1, 15, 12])).toEqual([1, 2, 3, 4, 5, 6, 10, 12, 15]);
  });
});
