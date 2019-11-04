describe('join', function() {
  it('should join all elements separated by a separator ', function() {
    var array = [1, 2, 3, 5, 3];

    var result = join(array);
    var result2 = join(array, '');
    var result3 = join(array, ',');
    var result4 = join(array, '-');
    var result5 = join(array, 2);
    var results = [result, result2, result3, result4, result5];
    var expects = ["1,2,3,5,3", "1,2,3,5,3", "1,2,3,5,3", "1-2-3-5-3", "122232523"];

    for (var i = 0; i < results.length; i++)
      for (var j = 0; j < results[i].length; j++) {
        expect(results[i][j]).toBe(expects[i][j]);
        expect(results[i].length).toBe(9);
      }
  });

  it('should return a string', function() {
    var array = [1, 2, 3, 5, 3];
    var result = join(array);
    expect(typeof result).toBe('string');
  });

  it('should not modify the original array', function() {
    var array = [1, 2, 3, 5, 3];
    var expected = [1, 2, 3, 5, 3];
    join(array);

    expect(array).toEqual(expected);
  });

  it('should work with an empty array', function() {
    var array = [];
    var result = join(array);

    expect(result.length).toBe(0);
  });

  it('should fail on undefined array', function() {
    var array;

    expect(function() { join(array); }).toThrowError(TypeError, 'undefined is not an array');
  });

  it('should fail on different type to array passed', function() {
    expect(function() { join('hello'); }).toThrowError(TypeError, 'hello is not an array');
    expect(function() { join(1, ''); }).toThrowError(TypeError, '1 is not an array');
    expect(function() { join(true, '-'); }).toThrowError(TypeError, 'true is not an array');
  });

  it('should fail on function passed as separator', function() {
    array = [];
    const fn = function() { return 'fake'; };

    expect(function() { join(array, fn) }).toThrowError(TypeError, 'separator cannot be a function');
  });
});
