describe ("some", function() { 

    it ("Should return true if any of the array items accomplish the condition", function () {
        var arrayNumbers = [1,4,5,53,23,37];
        function checkCondition(item) {
            return item > 5
        }

        var result = some(arrayNumbers, checkCondition);

        expect(result).toBe(true);

    });   


    it ("Should return false if there are no matches between athe array items with the condition given", function(){
        var arrayNumbers = [1,4,5,53,23,37];
        function checkCondition(item) {
            return item > 55
        }

        var result = some(arrayNumbers, checkCondition);

        expect(result).toBe(false);
    
    });


    it ("Should return false if you give an empty array", function(){
        var arrayNumbers = [];
        function checkCondition(item) {
            return item > 55
        }

        var result = some(arrayNumbers, checkCondition);

        expect(result).toBe(false);
    
    });


    it ("Should return false if you give a number", function(){
        var arrayNumbers = 3;
        function checkCondition(item) {
            return item > 55
        }

        var result = some(arrayNumbers, checkCondition);

        expect(result).toBe(false);
    
    });


// ERRORS

    it("should return expression is not a function", function() {
        var arrayNumbers = [1,2,3];

        expect(function () { some(arrayNumbers, undefined); }).toThrowError(TypeError, "undefined is not a function");
        
    });


});