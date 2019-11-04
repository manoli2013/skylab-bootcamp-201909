describe ("splice", function () {

    it ("Should add items", function () {

        var array = [1,2,5,6];
        var expected = [1,2,3,4,5,6];
        splice (array,2,0,3,4);

        expect(array).toEqual(expected);

    })

    it ("Should delete the specified items in the array from specified index", function () {

        var array = [1,2,3,4,5,6,7,8,9,0];
        var expected = [1,2,3,8,9,0];
        splice (array,3,4);

        expect(array).toEqual(expected);


    })

    it ("Should delete & add the specified items in the array from specified index", function () {

        var array = [1,2,3,4,5,6];
        var expected = [1,2,"A","B","C",5,6];
        splice (array,2,2,"A","B","C");

        expect(array).toEqual(expected);

    })    
})