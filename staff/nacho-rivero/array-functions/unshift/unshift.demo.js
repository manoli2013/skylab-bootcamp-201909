suite('unshift', function(){
    array1 = [1, 2, 3];

    test('unshift default', function(){
        var result = unshifty(array1, 4, 5); 
        check(result, 5);
    });

    test('first parameter not an array', function() {
        unshifty (null);
    
    }, function(error){
        check(error instanceof TypeError, true);
        check(error.message, "unshifty its first value is not an array");
    });

});
