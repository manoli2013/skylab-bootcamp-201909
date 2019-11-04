describe ("indexof", function(){

    it ("should return the first index where your item matches with the array number", function () {
        var arrayNumbers = [1,2,3,4,5];
        function findNumber(itemArray,item){
            return itemArray === item
         }
         var result = indexOf(arrayNumbers, 2 ,findNumber);
         
         expect(result).toBe(1);

    });


    it ("should return -1 if the value introduced not match with any of the array items", function() {
        var arrayNumbers = [1,2,3,4,5]; 
        function findNumber(itemArray,item){
            return itemArray === item
         }
         var result = indexOf(arrayNumbers, 6 ,findNumber);
         
         expect(result).toBe(-1);


    });


    it ("should return -1 if the value introduced is negative", function () {
        var arrayNumbers = [1,2,3,4,5]; 
        function findNumber(itemArray,item){
            return itemArray === item
        }
        var result = indexOf(arrayNumbers, -8 ,findNumber);
         
        expect(result).toBe(-1);


    });


    it ("should return -1 if the value introduced is not a number", function () {
        var arrayNumbers = [1,2,3,4,5]; 
        function findNumber(itemArray,item){
            return itemArray === item
        }
        var result = indexOf(arrayNumbers, "hola" ,findNumber);
         
        expect(result).toBe(-1);


    });


    // ERRORS


    it('should fail if array is NOT an array', function () {
        var arrayNumbers = 3; //= [1, 3, 4, 6, 7, 8, 6];
        
        function findNumber(itemArray,item){
            return itemArray === item
        }

        expect(function() { indexOf(arrayNumbers, 4 ,findNumber); }).toThrowError(arrayNumbers + ' is not an array');
    });


    it('should fail on NULL array', function () {
        var arrayNumbers = null; //= [1, 3, 4, 6, 7, 8, 6];

        function findNumber(itemArray,item){
            return itemArray === item
        }

        expect(function() { indexOf(arrayNumbers, 4 ,findNumber); }).toThrowError(null + ' is not an array');

    });

    
});







