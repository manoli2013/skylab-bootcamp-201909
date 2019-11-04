describe('filter', function() {
  it('should work correctly filtering the values', function() {
    var hooray = new Hooray(1, 2, 3, 4);
    var fn = function(x) { return x > 2; };
    var expected = [3, 4];
    var result = hooray.filter(fn);

    expect(result).toEqual(expected);
  });

  it('should return an empty array if receive an empty array',
    function() {
      var hooray = new Hooray();
      var fn = function(x) { return x * 2; };
      var result = hooray.filter(fn);

      expect(result.length).toBe(0);
    });

  it('should not modify the original array', function() {

    var hooray = new Hooray(1, 2, 3, 4);
    var array = [1, 2, 3, 4];
    var fn = function(x) { return x * 2; };
    var result = hooray.map(fn);

    expect(result).not.toEqual(array);
  });

  it('should fail on non-function expression', function() {
    var hooray = new Hooray(1, 2, 3, 4);

    expect(function() { hooray.filter([1, 2]) }).toThrowError(TypeError, '1,2 is not a function');
    expect(function() { hooray.filter(true); }).toThrowError(TypeError, 'true is not a function');
    expect(function() { hooray.filter(1); }).toThrowError(TypeError, '1 is not a function');
  });
});
