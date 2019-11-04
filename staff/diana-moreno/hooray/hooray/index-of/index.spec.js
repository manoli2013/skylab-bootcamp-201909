describe('indexOf', function() {
  it('should return the fist element that satisfies the function', function() {
    var hooray = new Hooray(6, 7, 8, 9, 10);

    expect(hooray.indexOf(8)).toBe(2);
    expect(hooray.length).toBe(5);
    expect(hooray[hooray.length - 1]).toBe(10);
  });

  it('should fail indexOfing in the array', function() {
    var hooray = new Hooray(6, 7, 8, 9, 10);

    expect(hooray.indexOf(2)).toBe(-1);
    expect(hooray.length).toBe(5);
    expect(hooray[hooray.length - 1]).toBe(10);
  });

  it('should not modify the original array', function() {
    var hooray = new Hooray(6, 7, 8, 9, 10);
    var expected = [6, 7, 8, 9, 10];

    hooray.indexOf(9);

    expect(hooray.length).toBe(expected.length);
    expect(hooray).toEqual(new Hooray(6, 7, 8, 9, 10));
  });

  it('should work with an empty array', function() {
    var hooray = new Hooray();
    var result = hooray.indexOf(5);

    expect(result).toBe(-1);
  });

  it('should fail on receive an item non-string or number', function() {
    var hooray = new Hooray(6, 7, 8, 9, 10);
    var fn = function(x) { return x + 2; };

    expect(function() { hooray.fill(fn); }).toThrowError(TypeError, 'function is not a string or a number');
    expect(function() { hooray.fill([1, 2, 3]); }).toThrowError(TypeError, 'object is not a string or a number');
    expect(function() { hooray.fill(false); }).toThrowError(TypeError, 'boolean is not a string or a number');
  });
});