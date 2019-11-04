describe('slice', function() {
  it('should return a new array with the values in the given limits', function() {
    var hooray = new Hooray(1, 2, 3, 4, 5, 6, 7, 8, 9);
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var result = hooray.slice(3, 7);
    var expected = [4, 5, 6, 7];

    expect(numbers).not.toEqual(result);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual(expected);
  });

  it('should return a new array with the values in from the beginning (no ending)', function() {
    var hooray = new Hooray(1, 2, 3, 4, 5, 6, 7, 8, 9);
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var result = hooray.slice(2);
    var expected = [3, 4, 5, 6, 7, 8, 9];

    expect(numbers).not.toEqual(result);
    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual(expected);
  });

  it('should return a new empty array (from an empty array) from a beginning (no ending)', function() {
    var hooray = new Hooray(1, 2, 3, 4, 5, 6, 7, 8, 9);
    var numbers = [];
    var result = hooray.slice(12);

    expect(result).not.toBe(numbers);
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(0);
  });

  it('should return a new array with the same values of the original array when no beginning and no ending', function() {
    var hooray = new Hooray(1, 2, 3, 4, 5, 6, 7, 8, 9);
    var result = hooray.slice();
    var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    expect(result).toBeInstanceOf(Array);
    expect(result).toEqual(expected);
  });


  it('should return a new array with the last values of the original array when beginning is negative and no ending', function() {
    var hooray = new Hooray(1, 2, 3, 4, 5, 6, 7, 8, 9);
    var result = hooray.slice(-4);
    var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    expect(result).toBeInstanceOf(Array);
    expect(hooray).toEqual(new Hooray(1, 2, 3, 4, 5, 6, 7, 8, 9));
    expect(result).toEqual([6, 7, 8, 9]);
  });

  it('should return a new array with values of the original array from the beginning and ending, both negatives', function() {
    var hooray = new Hooray(1, 2, 3, 4, 5, 6, 7, 8, 9);
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    var result = hooray.slice(-7, -3);

    expect(result).not.toBe(numbers);
    expect(result).toBeInstanceOf(Array);

    var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(numbers).toEqual(expected);

    expected = [3, 4, 5, 6];
    expect(result).toEqual(expected);
  });

  it('should return a new array with no values when the beginning and ending are both negatives and ending < beginning', function() {
    var hooray = new Hooray(1, 2, 3, 4, 5, 6, 7, 8, 9);
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    var result = hooray.slice(-3, -7);

    expect(result).not.toBe(numbers);
    expect(result).toBeInstanceOf(Array);

    var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(numbers).toEqual(expected);

    expect(result.length).toBe(0);
  });
});