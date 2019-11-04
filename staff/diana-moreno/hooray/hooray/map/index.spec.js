describe('map', function() {
  it('should map the array', function() {
    var hooray = new Hooray(1, 2, 3, 4);
    var fn = function(x) { return x * 2; };
    var result = hooray.map(fn);
    var expected = [2, 4, 6, 8];

    var fn2 = function(x) { return x * 3; };
    var result2 = hooray.map(fn2);
    var expected2 = [3, 6, 9, 12];

    expect(result).toEqual(expected);
    expect(result2).toEqual(expected2);
  });

  it('should not modify the original array', function() {
    var hooray = new Hooray(1, 2, 3, 4);
    var array = [1, 2, 3, 4];
    var fn = function(x) { return x * 2; };
    var result = hooray.map(fn);

    expect(result).not.toBe(array);
  });

  it('should return an empty array if receive an empty array',
    function() {
    var emptyHooray = new Hooray();
    var fn = function(x) { return x * 2; };
    var result = emptyHooray.map(fn);

    expect(result.length).toBe(0);
  });

  it('should fail on non-function expression', function() {
    var hooray = new Hooray(1, 2, 3, 4);

    expect(function() { hooray.map([1, 2]); }).toThrowError(TypeError, '1,2 is not a function');
    expect(function() { hooray.map(true); }).toThrowError(TypeError, 'true is not a function');
    expect(function() { hooray.map(1); }).toThrowError(TypeError, '1 is not a function');
  });
});