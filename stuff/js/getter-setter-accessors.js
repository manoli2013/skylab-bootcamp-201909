// 1

function Point(x, y) {
	this.__x__ = x;
	this.__y__ = y;
}

// JAVA like
/*
Point.prototype.getX = function() { return this.__x__; };
Point.prototype.setX = function(x) { this.__x__ = x; };

Point.prototype.getY = function() { return this.__y__; };
Point.prototype.setY = function(y) { this.__y__ = y; };

var p = new Point(1, 2);

console.log(p.getX(), p.getY());

p.setX(3); p.setY(4);

console.log(p.getX(), p.getY());
*/

// JS way
Object.defineProperty(Point.prototype, 'x', {
    get: function () { return this.__x__; },
	set: function(x) { this.__x__ = x; }
});

Object.defineProperty(Point.prototype, 'y', {
    get: function () { return this.__y__; },
	set: function(y) { this.__y__ = y; }
});

var p = new Point(1, 2);

console.log(p.x, p.y);

p.x = 3; p.y = 4;

console.log(p.x, p.y);

// 2

function Person(name) {
	this.name = name;
}

Object.defineProperty(Person.prototype, 'name', {
	set: function(name) { this.__name__ = name.toLowerCase(); },
    get: function () { return this.__name__.charAt(0).toUpperCase() + this.__name__.slice(1); }
});

var p = new Person('PePITo');

console.log(p.name);
console.log(p.__name__);

p.name = 'fUlANitO'

console.log(p.name);
console.log(p.__name__);

// 3

var o = {
	__name__: '',
	set name(name) { this.__name__ = name.toLowerCase(); },
	get name() { return this.__name__.charAt(0).toUpperCase() + this.__name__.slice(1); }
};
// NOTE these accessors do just apply on this single object, they are not reusable as in the case before with prototyping

o.name = 'pepITO';
console.log(o.__name__, o.name);

o.name = 'FuLANito';
console.log(o.__name__, o.name);