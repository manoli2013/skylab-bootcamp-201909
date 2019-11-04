describe ("Hooray.prototype.splice", function () {

    it ("Should add items in the hooray at especified index", function () {

        var hooray = new Hooray (1,2,5,6);

        var test = new Hooray (1,2,3,4,5,6);
        
        hooray.splice (2,0,3,4);

        expect(hooray).toEqual(test);

    })

    it ("Should delete the specified items in the hooray from specified index", function () {

        var hooray = new Hooray (1,2,3,4,5,6,7,8,9,0);
        var test = new Hooray (1,2,3,8,9,0);

        hooray.splice (3,4);
        expect(hooray).toEqual(test);


    })

    it ("Should delete & add the specified items in the hooray from specified index", function () {

        var hooray = new Hooray (1,2,3,4,5,6);
        var test = new Hooray (1,2,"A","B","C",5,6);

        hooray.splice (2,2,"A","B","C");

        expect(hooray).toEqual(test);

    })


    it ("Should delete items until end of Hooray when deleteCount is greater than itself length", function () {
        var hooray = new Hooray (1,2,3,4,5,6,7,8,9,0);
        var test = new Hooray (1,2,3);
        hooray.splice (3,10);
        expect(hooray).toEqual(test);
    })


    it ("Should delete items from the end of Hooray when negative starting is specified", function () {
        var hooray = new Hooray (1,2,3,4,5,6,7,8,9,0);
        var test = new Hooray (1,2,3,4,5,8,9,0);

        hooray.splice (-5,2);
        expect(hooray).toEqual(test);
    })


    it ("Should add & delete items from the end of Hooray when negative starting is specified", function () {
        var hooray = new Hooray (1,2,3,4,5,6,7,8,9,0);
        var test = new Hooray (1,2,3,4,5,"A","B",8,9,0);

        hooray.splice (-5,2, "A", "B");
        expect(hooray).toEqual(test);
    })
    
    
})