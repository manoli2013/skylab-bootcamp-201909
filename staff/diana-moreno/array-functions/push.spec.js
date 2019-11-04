describe('push', function() {
  it('should push a single item', function() {
    var array = ['a', 'b', 'c'];

    expect(push(array, 'd')).toBe(4);
    expect(array.length).toBe(4);
    expect(array[array.length - 1]).toBe('d');

    var expected = ['a', 'b', 'c', 'd'];
    expect(array).toEqual(expected);
  });

  it('should work properly with received empty array', function() {
    var array = [];
    var expected = [234];
    push(array, 234);

    expect(array.length).toBe(1);
    expect(array).toEqual(expected);
  });

  it('should push multiple items', function() {
    var array = ['a', 'b', 'c'];

    expect(push(array, 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k')).toBe(11);
    expect(array.length).toBe(11);

    var expected = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
    expect(array).toEqual(expected);
  });

  it('should modify the original array', function() {
    var array = ['a', 'b', 'c'];
    var expected = 'a,b,c,3,5';
    push(array, 3, 5);

    expect(array.toString()).toBe(expected);
  });

  it('should return the array length', function() {
    var array = ['a', 'b', 'c'];
    push(array, 3, 5);

    expect(array.length).toBe(5);
  });

  it('should fail on undefined array', function() {
    var array;

    expect(function() { forEach(array); }).toThrowError(TypeError, 'undefined is not an array');
  });

  it('should fail when others types different to array are passed', function() {
    expect(function() { push('hello'); }).toThrowError(TypeError, 'hello is not an array');
    expect(function() { push(1); }).toThrowError(TypeError, '1 is not an array');
  });
});
