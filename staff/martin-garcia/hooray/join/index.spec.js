describe('Hooray.prototype.join', function() {

    it('Should join the elements of the array in a single string, without second parameter', function() {
        var h = new Hooray(1, 2, 3);
        expect(h.join()).toBe('1,2,3');
    });

    it('Should join the elements of the array in a single string, with second parameter', function() {
        var h = new Hooray(1, 2, 3);
        var caract = '*'
        expect(h.join(caract)).toBe('1*2*3');
    });

    it('Hooray should be the same after the method', function() {
        var h = new Hooray(1, 2, 3);
        var expectedHooray = new Hooray(1, 2, 3);
        h.join();
        expect(h).toEqual(expectedHooray);
    });

    it('Should join the elements of the array(with internal array) in a single string, without second parameter', function() {
        var h = new Hooray([1, 2], 3, 4);
        expect(h.join()).toBe('1,2,3,4');
    });


    it('Should join the elements of the array(with internal array) in a single string, with second parameter', function() {
        var h = new Hooray([1, 2], 3, 4);
        var caract = '*'
        expect(h.join(caract)).toBe('1,2*3*4');
    });

});