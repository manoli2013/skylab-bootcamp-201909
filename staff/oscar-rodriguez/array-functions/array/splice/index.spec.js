describe ("splice", function () {

    it ("Should add items in the array at especified index", function () {

        var array = [1,2,5,6];

        var test = [1,2,3,4,5,6];
        
        splice (array,2,0,3,4);

        expect(array).toEqual(test);

    })

    it ("Should delete the specified items in the array from specified index", function () {

        var array = [1,2,3,4,5,6,7,8,9,0];
        var test = [1,2,3,8,9,0];

        splice (array,3,4);
        expect(array).toEqual(test);


    })

    it ("Should delete & add the specified items in the array from specified index", function () {

        var array = [1,2,3,4,5,6];
        var test = [1,2,"A","B","C",5,6];

        splice (array,2,2,"A","B","C");

        expect(array).toEqual(test);

    })


    it ("Should delete items until end of Hooray when deleteCount is greater than itself length", function () {
        var array = [1,2,3,4,5,6,7,8,9,0];
        var test = [1,2,3];
        splice (array,3,10);
        expect(array).toEqual(test);
    })


    it ("Should delete items from the end of Hooray when negative starting is specified", function () {
        var array = [1,2,3,4,5,6,7,8,9,0];
        var test = [1,2,3,4,5,8,9,0];

        splice (array,-5,2);
        expect(array).toEqual(test);
    })


    it ("Should add & delete items from the end of Hooray when negative starting is specified", function () {
        var array = [1,2,3,4,5,6,7,8,9,0];
        var test = [1,2,3,4,5,"A","B",8,9,0];

        splice (array,-5,2, "A", "B");
        expect(array).toEqual(test);
    })
    
})