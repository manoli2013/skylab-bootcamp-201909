describe('unshift', function() {
  it('should add a single item to the first position of the array', function() {
    var array = ['a', 'b', 'c'];

    expect(unshift(array, 'd')).toBe(4);
    expect(array.length).toBe(4);
    expect(array[0]).toBe('d');
  });

  it('should add a multiple items to the first positions of the array', function() {
    var array = ['a', 'b', 'c'];

    expect(unshift(array, 'd', 'e', 'f')).toBe(6);
    expect(array.length).toBe(6);

    var expected = ['d', 'e', 'f', 'a', 'b', 'c'];
    expect(array).toEqual(expected);
  });

  it('should modify the original array', function() {
    var array = ['a', 'b', 'c'];
    unshift(array, 3, 5);
    var expected = [3, 5, 'a', 'b', 'c'];

    expect(array).toEqual(expected);
    expect(array.length).toBe(5);
  });

  it('should return the array length', function() {
    var array = ['a', 'b', 'c'];
    unshift(array, 3, 5);

    expect(array.length).toBe(5);
  });

  it('should return 0 when an empty array is passed', function() {
    var array = [];

    expect(unshift(array)).toEqual(0);
  });

  it('should fail when others types different to array are passed', function() {

    expect(function() { unshift('hello'); }).toThrowError(TypeError, 'hello is not an array');
    expect(function() { unshift(1); }).toThrowError(TypeError, '1 is not an array');
  });

  it('should fail on undefined array', function() {
    var array;

    expect(function() { shift(array); }).toThrowError(TypeError, 'undefined is not an array');
  });
});
