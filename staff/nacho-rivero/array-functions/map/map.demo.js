console.log('DEMO map');

var array = [1, 2, 3];

    console.log('array', array);

        var variation = 6;

        var result = map(array, function(value) { return value + variation; });
    
    console.log('total result ' + result);

        array = ['1', '2', '3'];

    console.log('array', array);

        var result = map(array, function(value) { return ' Our ' + value + ' in a string'; });

    console.log('total result ' + result);




