describe('unshift', function(){

    it('should add an element in the beginning of the array', function(){
        
        var a = [4, 5, 6];
        
        unshift(a, 3);
        
        expect(a.length).toBe(4);
    });

    it('should add two or more elements in the beginning of the array', function(){
        var a = [4, 5, 6];
        
        unshift(a, 3, 4);
        
        expect(a.length).toBe(5);
    });

    it('should add two or more elements to an empty array', function(){
        
        var a = [];
        
        unshift(a, 3, 4);
        
        expect(a.length).toBe(2);
    });

    it('should not add elements if have not elements', function(){
       
        var a = [4, 5, 6];
       
        unshift(a);
        
        expect(a.length).toBe(3);
    });
});