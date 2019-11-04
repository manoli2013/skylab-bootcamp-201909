describe('forEach', function() {
  it('should succeed on correct array and expression, adding all numbers', function() {
    var numbers = [1, 2, 3];
    var result = 0;
    var add = function(number) { result += number; };
    forEach(numbers, add);

    expect(result).toBe(6);
  });

  it('should succeed on correct array and expression, concatenating all numbers', function() {
    var numbers = [1, 2, 3];
    var result = '';
    var concatenate = function(number) { result += number; };
    forEach(numbers, concatenate);

    expect(result).toBe('123');
  });


  it('should succeed on correct array and expression, multiplying all numbers by 10', function() {
    var numbers = [1, 2, 3];
    var result = [];
    var expected = [10, 20, 30];
    var multiply = function(number, index) { result[index] = number * 10; };
    forEach(numbers, multiply);

    expect(result.length).toBe(numbers.length);
    expect(result).toEqual(expected);
  });

  it('should not modify the original array', function() {
    var numbers = [1, 2, 3];
    var expected = [1, 2, 3];
    var result = 0;
    var add = function(number) { result += number; };
    let res = forEach(numbers, add);

    expect(numbers).toEqual(expected);
  });

  it('should fail on undefined array', function() {
    var array;
    var expression = console.log;

    expect(function() { forEach(array, expression); }).toThrowError(TypeError, 'undefined is not an array');
  });

  it('should return undefined on an empty array received', function() {
    var array = [];
    var add = function(number) { result += number; };

    expect(forEach(array, add)).toBe(undefined);
  });

  it('should fail on undefined expression', function() {
    var array = [1, 2, 3];
    var expression;

    expect(function() { forEach(array, expression); }).toThrowError(TypeError, 'undefined is not a function');
  });

  it('should fail on non-function expression', function() {
    var array = [1, 2, 3];

    expect(function() { forEach(array, undefined); }).toThrowError(TypeError, 'undefined is not a function');
    expect(function() { forEach(array, true); }).toThrowError('true is not a function');
    expect(function() { forEach(array, 1); }).toThrowError('1 is not a function');
  });
});
