describe ('Hooray.prototype.join', function () {

    it('should return the horray as string', function () {
        var horray = new Hooray ('one', 'two', 'three');

        expect (horray.join()).toBe('one,two,three');
    })

    it('should return the horray as string with the * separator', function () {
        var horray = new Hooray ('one', 'two', 'three');

        expect (horray.join("*")).toBe('one*two*three');
    })

    it('should return an empty String when an empty horray is sent, even when a separator is sent too', function () {
        var horray = new Hooray ();

        expect (horray.join()).toBe('');
        expect (horray.join('*')).toBe('');
    })

});