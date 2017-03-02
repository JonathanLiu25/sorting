describe('Bubble Sort', function() {

  beforeEach(function() {
    spyOn(window, 'swap').and.callThrough();
  });

  it('handles a large array', function() {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(swap.calls.count()).toEqual(10);
  });

  it('handles a large array', function() {
    expect(bubbleSort([6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(swap.calls.count()).toEqual(15);
  });

  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles an array of size 1', function() {
    expect(bubbleSort([1])).toEqual([1]);
  });

  it('handles an array of size 2', function() {
    expect(bubbleSort([4, 3])).toEqual([3, 4]);
  });

  it('handles a large array', function() {
    expect(bubbleSort([75, 34, 2, 45, 3, 0, 97])).toEqual([0, 2, 3, 34, 45, 75, 97]);
  });

  it('handles a large array w/ negative numbers', function() {
    expect(bubbleSort([75, 34, 2, -12, 45, 3, 0, 97])).toEqual([-12, 0, 2, 3, 34, 45, 75, 97]);
  });
  it('handles a large array', function() {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });
});
