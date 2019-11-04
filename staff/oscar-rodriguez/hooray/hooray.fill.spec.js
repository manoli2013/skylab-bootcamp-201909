describe ('Hooray.prototype.fill', function () {

    it ('should fill a hooray of 5 items with number 1', function () {
        var hooray = new Hooray (4,5,6,7,8);

        hooray.fill(1);

        var test = new Hooray (1,1,1,1,1);
        expect(hooray).toEqual(test);
        expect(hooray.length).toBe(5);        
    })

    it ('should fill a hooray of 5 items with number 1 from index 2, until the end', function () {
        var hooray = new Hooray (4,5,6,7,8);

        hooray.fill(1,2);

        var test = new Hooray (4,5,1,1,1);
        expect(hooray).toEqual(test);
        expect(hooray.length).toBe(5);        
    })

    it ('should fill a hooray of 5 items with number 1 from index 2, ending at index 4', function () {
        var hooray = new Hooray (4,5,6,7,8);

        hooray.fill(1,2,4);

        var test = new Hooray (4,5,1,1,8);
        expect(hooray).toEqual(test);
        expect(hooray.length).toBe(5);        
    })

    it ('should fill a hooray of 5 items with number 1 at 2 last items', function () {
        var hooray = new Hooray (4,5,6,7,8);

        hooray.fill(1,-2);

        var test = new Hooray (4,5,6,1,1);
        expect(hooray).toEqual(test);
        expect(hooray.length).toBe(5);        
    })

    it ('should fill a hooray of 5 items with number 1 from index -4, ending at index -2', function () {
        var hooray = new Hooray (4,5,6,7,8);

        hooray.fill(1,-4,-2);

        var test = new Hooray (4,1,1,7,8);
        expect(hooray).toEqual(test);
        expect(hooray.length).toBe(5);        
    })

    it ('should do nothing if start index is greater than ending index', function () {
        var hooray = new Hooray (4,5,6,7,8);

        hooray.fill(1,4,2);
        
        var test = new Hooray (4,5,6,7,8);
        expect(hooray).toEqual(test);
        expect(hooray.length).toBe(5);        
    })
})