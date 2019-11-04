describe('splice', function() {
  it('should modify the array with the values in the given limits', function() {
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var result = splice(nums, 4, 4);

    expect(result).not.toEqual(nums);
    expect(result).toBeInstanceOf(Array);
    expect(nums.length).not.toBe(11);
  });

  it('should cut the array starting at indexIni to specified final', function() {
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var result = splice(nums, 4, 3);
    var expected = [5, 6, 7];
    var array = [1, 2, 3, 4, 8, 9, 10];

    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(3);
    expect(nums).toEqual(array);
    expect(result).toEqual(expected);
  });

  it('should return an empty array if indexIni is longer than the array length', function() {
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var result = splice(nums, 20);
    var expected = [];

    expect(result).toEqual(expected);
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(expected.length);
    expect(result).toEqual(expected);
  });

  it('should set deleteCount to array length if the provided value is longer', function() {
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var result = splice(nums, 3, 20);
    var array = [1, 2, 3];
    var expected = [4, 5, 6, 7, 8, 9, 10];

    expect(result).toEqual(expected);
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(7);
    expect(result.length).toBe(expected.length);
  });

  it('should cut the array starting at indexIni, if not end given, the end is the final of the array', function() {
    var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var result = splice(nums, 4);
    var array = [1, 2, 3, 4];
    var expected = [5, 6, 7, 8, 9, 10];

    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(6);
    expect(result.length).toBe(expected.length);
    expect(nums).toEqual(array);
  });

  it('should not cut the array when specified an item, but if deleteCount is equal to 0, should put the items at indexIni, after the others', function() {
    var months = ['Jan', 'March', 'April', 'June'];
    var result = splice(months, 1, 0, 'Feb');
    var array = ['Jan', 'Feb', 'March', 'April', 'June']
    var expected = [];

    expect(result).toEqual(expected);
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(expected.length);
    expect(result.length).toBe(0);
    expect(months).toEqual(array);
  });

  it('should replace as many elements as specified in deleteCount at indexIni by items, an then, put the rest', function() {
    var months = ['Jan', 'Feb', 'March', 'April', 'June'];
    var result = splice(months, 4, 1, 'May');
    var array = ['Jan', 'Feb', 'March', 'April', 'May'];
    var expected = ['June'];

    expect(result).toEqual(expected);
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(expected.length);
    expect(result.length).toBe(1);
    expect(months).toEqual(array);
  });

  it('should work replacin for multiple items', function() {
    var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
    var result = splice(myFish, 0, 2, 'parrot', 'anemone', 'blue');
    var array = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];
    var expected = ['angel', 'clown'];


    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(expected.length);
    expect(result.length).toBe(2);
    expect(myFish).toEqual(array);
  });

  it('it should return en empty array if receives an empty array', function() {
    var empty = [];
    var result = splice(empty, 2);
    var expected = [];

    expect(result).toEqual(empty);
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(empty.length);
    expect(result.length).toBe(0);
    expect(empty).toEqual(expected);
  });

  it('should fail on first parameter non-array', function() {
    expect(function() { splice(); }).toThrowError(TypeError, 'undefined is not an array');

    expect(function() { splice(true); }).toThrowError(TypeError, 'true is not an array');

    expect(function() { splice(1); }).toThrowError(TypeError, '1 is not an array');

    expect(function() { splice('a'); }).toThrowError(TypeError, 'a is not an array');
  });
});
