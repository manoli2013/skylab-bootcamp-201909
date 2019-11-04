describe ('fill', function () {

    it ('should fill a array of 5 items with number 1', function () {
        var array = [4,5,6,7,8];

        fill(array,1);

        var test = [1,1,1,1,1];
        expect(array).toEqual(test);
        expect(array.length).toBe(5);        
    })

    it ('should fill a array of 5 items with number 1 from index 2, until the end', function () {
        var array = [4,5,6,7,8];

        fill(array,1,2);

        var test = [4,5,1,1,1];
        expect(array).toEqual(test);
        expect(array.length).toBe(5);        
    })

    it ('should fill a array of 5 items with number 1 from index 2, ending at index 4', function () {
        var array = [4,5,6,7,8];

        fill(array,1,2,4);

        var test = [4,5,1,1,8];
        expect(array).toEqual(test);
        expect(array.length).toBe(5);        
    })

    it ('should fill a array of 5 items with number 1 at 2 last items', function () {
        var array = [4,5,6,7,8];

        fill(array,1,-2);

        var test = [4,5,6,1,1];
        expect(array).toEqual(test);
        expect(array.length).toBe(5);        
    })

    it ('should fill a array of 5 items with number 1 from index -4, ending at index -2', function () {
        var array = [4,5,6,7,8];

        fill(array,1,-4,-2);

        var test = [4,1,1,7,8];
        expect(array).toEqual(test);
        expect(array.length).toBe(5);        
    })

    it ('should do nothing if start index is greater than ending index', function () {
        var array = [4,5,6,7,8];

        fill(array,1,4,2);
        
        var test = [4,5,6,7,8];
        expect(array).toEqual(test);
        expect(array.length).toBe(5);        
    })
})