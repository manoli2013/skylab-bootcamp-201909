describe('some', function() {
  it('at least one element should pass all the requirements of the function and return a boolean', function() {
    var hooray = new Hooray(6, 7, 8, 9, 10);
    var fn = function(x) { return x === 7; };

    expect(hooray.some(fn)).toBe(true);
    expect(hooray.length).toBe(5);
    expect(hooray[hooray.length - 1]).toBe(10);
  });

  it('should fail with the requirements of the function', function() {
    var hooray = new Hooray(6, 7, 8, 9, 10);
    var fn = function(x) { return x > 11; };

    expect(hooray.some(fn)).toBe(false);
    expect(hooray.length).toBe(5);
    expect(hooray[hooray.length - 1]).toBe(10);
  });

  it('should not modify the original array', function() {
    var hooray = new Hooray(6, 7, 8, 9, 10);
    var array = [6, 7, 8, 9, 10];
    var expected = [6, 7, 8, 9, 10];
    var fn = function(x) { return x > 5; };
    hooray.some(fn);

    expect(hooray.length).toBe(expected.length);
    expect(array).toEqual(expected);
  });

  it('should return false on empty array received', function() {
    var hooray = new Hooray();
    var fn = function(x) { return x > 5; };

    expect(hooray.some(fn)).toBe(false);
  });

  it('should fail on others types different to function are passed', function() {
    var hooray = new Hooray(3, 7, 8, 9, 10);

    expect(function() { hooray.some([1, 2, 3]); }).toThrowError(TypeError, '1,2,3 is not a function');
    expect(function() { hooray.some('hello'); }).toThrowError(TypeError, 'hello is not a function');
    expect(function() { hooray.some(1); }).toThrowError(TypeError, '1 is not a function');
    expect(function() { hooray.some(true); }).toThrowError(TypeError, 'true is not a function');
  });
});