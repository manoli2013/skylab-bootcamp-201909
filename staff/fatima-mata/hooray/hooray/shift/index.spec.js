describe ('Hooray.prototype.shift', function () {

    it('should return the first item of the hooray and delete it from the array', function () {
        var a = new Hooray ('one', 'two', 'three');
        var b = a.shift();
        
        expect(b).toBe('one');
        
        var c = new Hooray ('two', 'three');
        
        expect(a).toEqual(c);
    });

    it('should return undefined when an empty hooray is sent', function () {
        
        var a = new Hooray ();

        expect (a.shift()).toBe(undefined);    
    });
});