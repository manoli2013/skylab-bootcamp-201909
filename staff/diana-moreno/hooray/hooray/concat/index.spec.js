describe('concat', function() {
  it('should merge two arrays', function() {
    var hooray = new Hooray(1, 2, 3);
    var array2 = [4, 5, 6];
    var result = hooray.concat(array2);
    var expected = [1, 2, 3, 4, 5, 6];

    expect(hooray.length).toBe(3);
    expect(result).toEqual(expected);
  });

  it('should merge multiple arrays', function() {
    var hooray = new Hooray(1, 2, 3);
    var array2 = [4, 5, 6]
    var array3 = [7, 8, 9];
    var array4 = [10, 11, 12];
    var result = hooray.concat(array2, array3, array4);
    var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    expect(result.length).toBe(12);
    expect(result).toEqual(expected);
  });


  it('should not modify the original array', function() {
    var hooray = new Hooray(1, 2, 3, 5, 3);
    var array2 = ['a', 'b'];
    var expected = [1, 2, 3, 5, 3, 'a', 'b'];
    var result = hooray.concat(array2);

    expect(result).toEqual(expected);
    expect(hooray).toEqual(new Hooray(1, 2, 3, 5, 3));
  });

  it('should work with empty arrays', function() {
    var hooray = new Hooray();
    var array2 = [1, 2, 3];
    var array3 = [];
    var expected = [1, 2, 3];
    var expected2 = [1, 2, 3];
    var expected3 = [];
    var result = hooray.concat(array2); // [1, 2, 3];
    var result2 = hooray.concat(array2, array3); // [1, 2, 3];
    var result3 = hooray.concat(array3); // [];

    expect(result.length).toBe(3);
    expect(result2.length).toBe(3);
    expect(result3.length).toBe(0);
    expect(result).toEqual(expected);
    expect(result2).toEqual(expected2);
    expect(result3).toEqual(expected3);
  });

  it('should work with different type of data passed as arguments', function() {
    var hooray = new Hooray(1, 2, 3);
    var array = [1, 2, 3, 4];
    var string = 'hello';
    var number = 56;
    var boolean = true;
    var object = { 1: 'one' };
    var result = hooray.concat(string, number, boolean, object, array);
    var expected = [1, 2, 3, 'hello', 56, true, { 1: 'one' }, 1, 2, 3, 4];

    expect(result).toEqual(expected);
  });
});
