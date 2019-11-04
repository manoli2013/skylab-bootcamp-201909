function checkCondition(item) {
    return item > 5
}

function checkConditionNoMatch(item) {
    return item > 55
}

describe('findIndex', function () {

    it('should return the index number of the first item that returns true to the condition', function () {
        var array = [1, 4, 5, 53, 23, 37];
        findIndex(array, checkCondition);

        expect(findIndex(array, checkCondition)).toBe(3);

    });

    it('should return -1 if there is no match', function () {
        var array = [1, 4, 5, 53, 23, 37];
        findIndex(array, checkConditionNoMatch);

        expect(findIndex(array, checkConditionNoMatch)).toBe(-1);

    });    

    it('should return -1 if the array is empty', function () {
        var array = [];
        findIndex(array, checkCondition);
    
        expect(findIndex(array, checkCondition)).toBe(-1);

    });   


    // ERRORES

    it('should fail if array is NOT an array', function () {
        var array = 3 ;//= [1, 4, 5, 53, 23, 37];
       
        
        expect( function() { findIndex(array, checkCondition); }).toThrowError(array + " is not defined");

    });   
    

    it('should fail on NULL array', function () {
        var array = null; //= [1, 3, 4, 6, 7, 8, 6];

        expect(function() { findIndex(array,checkCondition); }).toThrowError(null + ' is not defined');
    });

    
});
