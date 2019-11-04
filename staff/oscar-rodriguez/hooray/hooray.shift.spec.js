describe ('Hooray.prototype.shift', function () {

    it('should return the first item of the hooray and delete it from the array', function () {
        var hooray = new Hooray ('one', 'two', 'three');
        var shifted = hooray.shift();
        
        expect(shifted).toBe('one');
        var test = new Hooray ('two', 'three');
        
        expect(hooray).toEqual(test);
        
    })

    it('should return undefined when an empty hooray is sent', function () {
        var hooray = new Hooray ();

        expect (hooray.shift()).toBe(undefined);    
    })

})