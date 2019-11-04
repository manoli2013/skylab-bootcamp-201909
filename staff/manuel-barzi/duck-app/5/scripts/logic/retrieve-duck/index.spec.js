describe('logic - retrieve duck', function() {
    it('should succeed on correct duck id', function(done) {
        var id = '5c3853aebd1bde8520e66e1b';

        retrieveDuck(id, function(duck) {
            expect(duck).toBeDefined();
            expect(duck.id).toBe(id);

            expect(duck.title).toBeDefined();
            expect(typeof duck.title).toBe('string');
            expect(duck.title.length).toBeGreaterThan(0);

            expect(duck.imageUrl).toBeDefined();
            expect(typeof duck.imageUrl).toBe('string');
            expect(duck.imageUrl.length).toBeGreaterThan(0);

            expect(duck.description).toBeDefined();
            expect(typeof duck.description).toBe('string');
            expect(duck.description.length).toBeGreaterThan(0);

            expect(duck.link).toBeDefined();
            expect(typeof duck.link).toBe('string');
            expect(duck.link.length).toBeGreaterThan(0);

            expect(duck.price).toBeDefined();
            expect(typeof duck.price).toBe('string');
            expect(duck.price.length).toBeGreaterThan(0);

            done();
        });
    });

    // TODO other cases
});