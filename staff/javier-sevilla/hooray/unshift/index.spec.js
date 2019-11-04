describe('Hooray.prototype.unshift', function () {
    it('should insert a single item at the beginning of the array', function () {
        var hooray = new Hooray(1, 2, 3);
        
        hooray.unshift(0);

        expect(hooray).toBeInstanceOf(Hooray);
        expect(hooray.length).toBe(4);
               
        var expected = new Hooray(0, 1, 2, 3);
        expect(hooray).toEqual(expected);
    });

    it('should insert a multiple items at the beginning of the array', function () {
        var hooray = new Hooray(1, 2, 3);
        
        hooray.unshift(4,5,6);
        expect(hooray).toBeInstanceOf(Hooray);
        expect(hooray.length).toBe(6);
               
        var expected = new Hooray(4,5,6,1,2,3);
        expect(hooray).toEqual(expected);    
    });
});