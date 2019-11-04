describe('reverse', function() {
    it('Should reverse the hooray', function() {
        var hooray = new Hooray(1, 2, 3, 4);
        var expectedhooray = new Hooray(4, 3, 2, 1);
        hooray.reverse();
        expect(hooray).toEqual(expectedhooray);

    });

    it('Shouldnt modify because is an empty hooray', function() {
        var hooray = new Hooray();
        var expectedhooray = new Hooray();
        hooray.reverse();
        expect(hooray).toEqual(expectedhooray);
    });

});