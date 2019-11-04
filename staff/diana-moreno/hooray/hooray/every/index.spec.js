describe('every', function() {
  it('should pass all the requirements of the function', function() {
    var hooray = new Hooray(6, 7, 8, 9, 10);
    var fn = function(x) { return x > 5; };

    expect(hooray.every(fn)).toBe(true);
    expect(hooray.length).toBe(5);
    expect(hooray[hooray.length - 1]).toBe(10);
  });

  it('should return a boolean', function() {
    var hooray = new Hooray(3, 7, 8, 9, 10);
    var fn = function(x) { return x > 1; };

    expect(hooray.every(fn)).toBe(true);
  });

  it('should fail with the requirements of the function', function() {
    var hooray = new Hooray(6, 7, 8, 9, 10);
    var fn = function(x) { return x < 5; };

    expect(hooray.every(fn)).toBe(false);
    expect(hooray.length).toBe(5);
    expect(hooray[hooray.length - 1]).toBe(10);
  });

  it('should not modify the original array', function() {
    var hooray = new Hooray(6, 7, 8, 9, 10);
    var fn = function(x) { return x > 5; };
    hooray.every(fn);

    expect(hooray.length).toBe(new Hooray(6, 7, 8, 9, 10).length);
    expect(hooray).toEqual(new Hooray(6, 7, 8, 9, 10));
  });

  it('should return true on empty array received', function() {
    var hooray = new Hooray();
    var fn = function(x) { return x > 5; };

    expect(hooray.every(fn)).toBe(true);
  });

  it('should throw an error when others types different to function are passed', function() {
    var hooray = new Hooray(6, 7, 8, 9, 10);

    expect(function() { hooray.every([1, 2, 3]); }).toThrowError(TypeError, '1,2,3 is not a function');
    expect(function() { hooray.every('hello'); }).toThrowError(TypeError, 'hello is not a function');
    expect(function() { hooray.every(1); }).toThrowError(TypeError, '1 is not a function');
    expect(function() { hooray.every(true); }).toThrowError(TypeError, 'true is not a function');
  });
});
