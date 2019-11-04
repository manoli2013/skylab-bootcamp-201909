describe('fill', function() {
  // Happy path
  it('should fill the array with the item', function() {
    var array = [1, 2, 3];
    var item = 'a';
    var expected = ['a', 'a', 'a'];
    fill(array, item);

    expect(array).toEqual(expected);
  });

  it('should modify the original array', function() {
    var array = [1, 2, 3];
    var item = 'a';
    var _expected = ['a', 'a', 'a'];
    fill(array, item);

    expect(array).toEqual(_expected);
  });

  it('should receive an array with an item and first index', function() {
    var array = [1, 2, 3, 4, 5];
    var item = 'a';
    var indexIni = 1;
    var _expected = [1, 'a', 'a', 'a', 'a'];
    fill(array, item, indexIni);

    expect(array).toEqual(_expected);
  });

  it('should receive an array with an item, first index and final index', function() {
    var array = [1, 2, 3, 4, 5];
    var item = 'a';
    var indexIni = 1;
    var indexEnd = 4;
    var _expected = [1, 'a', 'a', 'a', 5];
    var result = fill(array, item, indexIni, indexEnd); // [1, 'a', 'a', 'a', 5];

    expect(array).toEqual(_expected);
    //expect(JSON.stringify(result)).toBe(JSON.stringify([1, 'a', 'a', 'a', 5]));
  });

  it('should fail on non-received array', function() {
    var array;

    expect(function() { fill(array); }).toThrowError(TypeError, 'undefined is not an array');
  });

  it('should return an empty array when an empty array is passed', function() {
    var array = [];
    var expected = [];

    expect(fill(array, '1')).toEqual(expected);
  });

  it('should fail on receive a non-string or number as item', function() {
    var array = [1, 2, 3];
    var fn = function(x) { return x + 2; }

    expect(function() { fill(array, fn); }).toThrowError(TypeError, 'function is not a string or a number');
    expect(function() { fill(array, [1, 2, 3]); }).toThrowError(TypeError, 'object is not a string or a number');
    expect(function() { fill(array, false); }).toThrowError(TypeError, 'boolean is not a string or a number');
  });

  it('should fail on receive a non-number as index', function() {
    var array = [1, 2, 3];
    var item = 'a';
    var fn = function(x) { return x + 2; };

    expect(function() { fill(array, 'a', fn); }).toThrowError(TypeError, 'index should be a number');
    expect(function() { fill(array, 'a', [1, 2, 3]); }).toThrowError(TypeError, 'index should be a number');
    expect(function() { fill(array, 'a', true); }).toThrowError(TypeError, 'index should be a number');
    expect(function() { fill(array, 'a', 1, 'hello'); }).toThrowError(TypeError, 'index should be a number');
  });
});
