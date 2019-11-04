describe('Hooray.prototype.reverse', function () {
    it('should reverse numbers', function () {
        var hooray = new Hooray(3,6,1,2,8,5,7);
        
        hooray.reverse();

        expect(hooray).toBeInstanceOf(Hooray);
        expect(hooray.length).toBe(7);
               
        var chars = [7,5,8,2,1,6,3];
        for (var i = 0; i < chars.length; i++)
        expect(hooray[i]).toBe(chars[i]);
    });

    it('should insert a multiple items at the beginning of the array', function () {
        var hooray = new Hooray('a', 'j', 'o', 'E', 'e');
        
        hooray.reverse();

        expect(hooray).toBeInstanceOf(Hooray);
        expect(hooray.length).toBe(5);

        var chars = ["e", "E", "o", "j", "a"];
        for (var i = 0; i < chars.length; i++)
        expect(hooray[i]).toBe(chars[i]);
    });

});