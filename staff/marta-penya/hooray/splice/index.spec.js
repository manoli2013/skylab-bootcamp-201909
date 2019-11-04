describe('Hooray.prototype.splice', function() {
    it('should return a new hooray adding one element in the specific position', function() {
        var months = new Hooray('Jan', 'March', 'April', 'June');
        var result = months.splice(1, 0, 'Feb');

        expect(result).not.toBe(months);
        expect(months[1]).toBe('Feb');
        expect(months).toContain('Jan', 'Feb', 'March', 'April', 'June');
    });
    it('should return a new hooray adding more than one elements in the specific position', function() {
        var months = new Hooray('Jan', 'March', 'April', 'June');
        var result = months.splice(1, 0, 'Feb','Dic');

        expect(result).not.toBe(months);
        expect(months[1],months[2]).toBe('Feb','Dic');
        expect(months).toContain('Jan', 'Feb','Dic', 'March', 'April', 'June');
    });
    it('should return a new empty hooray if no parameters are included', function() {
        var months = new Hooray('Jan', 'March', 'April', 'June');
        var result = months.splice();

        expect(result).not.toBe(months);
        expect(result.length).toBe(0);
    });
    it('should return a new hooray with the elements eliminated from the original hooray', function() {
        var months = new Hooray('Jan', 'March', 'April', 'June');
        var result = months.splice(1, 2);

        expect(result).not.toBe(months);
        expect(result.length).toBe(2);
        expect(result[0], result[1]).toBe('March', 'April');
        expect(months).toContain('Jan','June')
        
       
    });

    it('should delete all elements after the index (index included)', function() {
        var months = new Hooray('Jan', 'March', 'April', 'June');
        var result = months.splice(1);

        expect(result).not.toBe(months);
        expect(result.length).toBe(3);
        expect(result).toContain('March', 'April', 'June');
        expect(months).toContain('Jan');     
    });

    it('should remove one element from index -2', function() {
        var months = new Hooray('Jan', 'March', 'April', 'June');
        var result = months.splice(-2,1);

        expect(result).not.toBe(months);
        expect(result.length).toBe(1); 
        expect(months.length).toBe(3);
        expect(result).toContain('April');
        expect(months).toContain('Jan', 'March', 'June');     
    });
   
});