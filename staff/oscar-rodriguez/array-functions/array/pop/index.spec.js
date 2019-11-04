describe ('pop', function (){

    it('should delete the last item on the array and return the deleted item', function () {
        var items = [1,2,3,4];

        expect(pop(items)).toBe(4);
    });

    it('should return undefined on an empty array', function (){
        var empty = [];

        expect(pop(empty)).toBe(undefined);
    })

    it('should fail on non Array parameter sent', function () {
        var number = 1;

        expect(function () {pop(number)}).toThrowError (TypeError,number + ' is not an array')
    })
})