describe('shuffle', function() {
  it('should mix array with string values (staff names)', function() {

    var hooray = new Hooray('adri-campo', 'adrian-zhu', 'aitor-parra', 'albert-ferrer', 'cristian-astudillo', 'diana-moreno', 'elena-rodriguez', 'fatima-mata', 'isidro-alonso', 'javier-sevilla', 'joan-luis', 'jose-rodriguez', 'luka-bontempi', 'marta-penya', 'martin-garcia', 'nacho-rivero', 'noli-pascual', 'oscar-rodriguez', 'ruben-vidales', 'xavier-navarro');

    var randomized = hooray.shuffle();

    expect(JSON.stringify(hooray)).not.toEqual(JSON.stringify(randomized));

    expect(randomized).toBeInstanceOf(Array);
    expect(randomized.length).toBe(hooray.length);

    var expected = ['adri-campo', 'adrian-zhu', 'aitor-parra', 'albert-ferrer', 'cristian-astudillo', 'diana-moreno', 'elena-rodriguez', 'fatima-mata', 'isidro-alonso', 'javier-sevilla', 'joan-luis', 'jose-rodriguez', 'luka-bontempi', 'marta-penya', 'martin-garcia', 'nacho-rivero', 'noli-pascual', 'oscar-rodriguez', 'ruben-vidales', 'xavier-navarro'];

    for (var i = 0; i < expected.length; i++)
      expect(hooray[i]).toBe(expected[i]);

    expect(randomized.length).toBe(expected.length);
    expect(randomized).not.toEqual(expected);
    expect(randomized).toContain('adri-campo', 'adrian-zhu', 'aitor-parra', 'albert-ferrer', 'cristian-astudillo', 'diana-moreno', 'elena-rodriguez', 'fatima-mata', 'isidro-alonso', 'javier-sevilla', 'joan-luis', 'jose-rodriguez', 'luka-bontempi', 'marta-penya', 'martin-garcia', 'nacho-rivero', 'noli-pascual', 'oscar-rodriguez', 'ruben-vidales', 'xavier-navarro');
  });

  it('should mix array with number values', function() {
    var hooray = new Hooray(1, 2, 3, 4, 5);
    var randomized = hooray.shuffle();

    expect(JSON.stringify(hooray)).not.toEqual(JSON.stringify(randomized));

    expect(randomized).toBeInstanceOf(Array);
    expect(randomized.length).toBe(hooray.length);

    var expected = [1, 2, 3, 4, 5];

    expect(hooray).toEqual(new Hooray(1, 2, 3, 4, 5));
    expect(randomized.length).toBe(expected.length);
    expect(randomized).not.toEqual(expected);
    expect(randomized).toContain(1, 2, 3, 4, 5);
  });

  it('should mix array with number values (one repeated)', function() {
    var hooray = new Hooray(1, 2, 3, 4, 5, 5);
    var randomized = hooray.shuffle();


    var falseRandomized = [1, 1, 2, 3, 4, 5]; //shuffle(numbers); // SH*T! TODO improve the test results checking, as this situation could happen and we are not warranting the shuffle behaves as expected.- IMPROVED!

    var addFalseRandomized = 0;
    var addRandomized = 0;
    var addHooray = 0;

    for (var i = 0; i < falseRandomized.length; i++) {
      addFalseRandomized += falseRandomized[i];
      addRandomized += randomized[i];
      addHooray += hooray[i];
    }
    expect(addRandomized).not.toBe(falseRandomized);
    expect(addHooray).toBe(addRandomized);

    expect(JSON.stringify(hooray)).not.toEqual(JSON.stringify(randomized));

    expect(randomized).toBeInstanceOf(Array);
    expect(randomized.length).toBe(hooray.length);

    var noExpected = [1, 2, 3, 4, 5, 5];

    expect(randomized.length).toBe(noExpected.length);
    expect(randomized).not.toEqual(noExpected);
    expect(randomized).toContain(1, 2, 3, 4, 5, 5);
  });
});