describe('Hooray.prototype.sort', function () {

    it('should sort numbers', function () {

        var hooray = new Hooray(3,6,1,2,8,5,7);
        
        hooray.sort();

        expect(hooray).toBeInstanceOf(Hooray);
        expect(hooray.length).toBe(7);
               
        var expected = new Hooray(1, 2, 3, 5, 6, 7, 8);
        expect(hooray).toEqual(expected);
    });

    it('should insert a multiple items at the beginning of the array', function () {
        
        var hooray = new Hooray('a', 'j', 'o', 'E', 'e');
        
        hooray.sort();

        expect(hooray).toBeInstanceOf(Hooray);
        expect(hooray.length).toBe(5);
               
        var expected = new Hooray("E", "a", "e", "j", "o");
        expect(hooray).toEqual(expected);
    });
});