describe('slice', function (){
    it('should return a new array correctly', function(){
        var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
        var j=2
        var result = slice(animals, 2, 4)
        for(var i=0; i<result.length; i++){
            animals[j]
            expect(result[i]).toBe(animals[j]); 
            ++j;   
        } 
        expect(result.length).toBe(2)
    });
    it('should run an error to an empty array', function(){
        var animals = [];
        expect(function() { slice(animals, 2, 4); }).toThrowError('array is empty')
        expect(function() { slice(animals, 2, 4); }).toThrow(ReferenceError, 'array is empty')
        try{
            slice(animals, 2, 4); }
        catch(error){
            expect(error.message).toBe('array is empty')
        }
    })
})




