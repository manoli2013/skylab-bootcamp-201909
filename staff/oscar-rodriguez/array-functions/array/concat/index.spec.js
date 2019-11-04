describe ('concat', function() {

    it ('should join two or more arrays on a new array', function () {

        var array1 = [1,2,2,4];
        var array2 = [5,6,7,8];

        var result = concat (array1,array2);

        expect(result).toContain(1,2,2,4,5,6,7,8);

        expect (result.length).toBe(array1.length+array2.length);
       
    }) 


    it ('should join the calling hooray on a new hooray when no parameters defined', function () {

        var arra1 = [1,2,2,4];
        
        var result = concat (arra1);

        
        expect(result).toEqual(arra1);

        expect (result.length).toBe(arra1.length);
    })

    it ('should join the hoorays sent by parameter on a new hooray when the calling hooray is empty', function () {

        var array1 = [];
        var array2 = [1,2,2,4];
        
        var result = concat(array1,array2);

        expect(result).toEqual(array2);

        expect (result.length).toBe(array1.length+array2.length);
    })

    it ('should concat to the returned hooray the parameters sent even they are not a hooray', function () {

        var array1 = [2,4,6];
        var number = 3;
        var string ="abc";
        var result = array1.concat (number, string);

        
        expect(result).toContain(2,4,6,4,"abc");

        expect (result.length).toBe(5);
    })

}) 