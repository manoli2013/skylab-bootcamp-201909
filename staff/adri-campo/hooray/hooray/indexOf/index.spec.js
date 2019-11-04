describe ("Hooray.prototype.indexOf", function(){

    it ("should return the first index where your item matches with the array number", function () {
        var hoorayNumbers = new Hooray (1,2,3,4,5);
      
         var result = hoorayNumbers.indexOf(2);
         
         expect(result).toBe(1);

    });  


    it ("should return -1 if the value introduced not match with any of the array items", function() {
        var hoorayNumbers = new Hooray (1,2,3,4,5); 

     var result = hoorayNumbers.indexOf(6);
         
         expect(result).toBe(-1);

    });

    it ("should return -1 if the value introduced is negative", function () {
        var hoorayNumbers = new Hooray (1,2,3,4,5); 
        function findNumber(itemHooray,item){
            return itemHooray === item
         }
         var result = hoorayNumbers.indexOf(-8 ,findNumber);
         
        expect(result).toBe(-1);

    });

    it ("should return -1 if the value introduced is not a number", function () {
        var hoorayNumbers = new Hooray (1,2,3,4,5); 
        function findNumber(itemHooray,item){
            return itemHooray === item
         }
         var result = hoorayNumbers.indexOf("hola" ,findNumber);
         
        expect(result).toBe(-1);

    });

    // ERRORS

    it('should fail if you put more than 3 arguments', function () {
        var hooray = new Hooray(1,2,3,4,5,6,7,8,9);
        expect(function () { hooray.indexOf(0, 0, 0 ,0); }).toThrowError('too many arguments');
    });
    
});