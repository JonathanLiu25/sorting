describe('Bubble Sort', function() {

  // beforeEach(function (){
  //   bubble =
  //   spyOn(Object, 'swap').and.callThrough();
  // });
  //
  // it('counts how many swaps happened', function(){
  //   var bubble = bubbleSort([4,3])
  //   expect( bubble.swap.calls.count() ).toEqual( 1 );
  // });

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
});
