describe('join', function() {
  it('should join all elements separated by a separator ', function() {
    var hooray = new Hooray(1, 2, 3, 5, 3);

    var result = hooray.join();
    var result2 = hooray.join('');
    var result3 = hooray.join(',');
    var result4 = hooray.join('-');
    var result5 = hooray.join(2);
    var results = [result, result2, result3, result4, result5];
    var expects = ["1,2,3,5,3", "1,2,3,5,3", "1,2,3,5,3", "1-2-3-5-3", "122232523"];

    for (var i = 0; i < results.length; i++)
      for (var j = 0; j < results[i].length; j++) {
        expect(results[i][j]).toBe(expects[i][j]);
        expect(results[i].length).toBe(9);
      }
  });

  it('should return a string', function() {
    var hooray = new Hooray(1, 2, 3, 5, 3);
    var result = hooray.join();
    expect(typeof result).toBe('string');
  });

  it('should not modify the original array', function() {
    var hooray = new Hooray(1, 2, 3, 5, 3);
    var expected = [1, 2, 3, 5, 3];
    hooray.join();

    expect(hooray).toEqual(new Hooray(1, 2, 3, 5, 3));
  });

  it('should work with an empty array', function() {
    var hooray = new Hooray();
    var result = hooray.join();

    expect(result.length).toBe(0);
  });

  it('should fail on function passed as separator', function() {
    var hooray = new Hooray();
    const fn = function() { return 'fake'; };

    expect(function() { hooray.join(fn); }).toThrowError(TypeError, 'separator cannot be a function');
  });
});