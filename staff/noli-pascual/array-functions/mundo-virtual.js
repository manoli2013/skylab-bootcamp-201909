var Animal = function(sound, type, habitat) {
    this.sound = sound;
    this.type = type;
    this.habitat = habitat;
}

Animal.prototype.eat = function(food) {
    console.log('I eat ' + food)
}

//leon, cebra, gorila
var Mamifero = function(sound, type, habitat, patas) {
    Animal.call(this, sound, type, habitat);

    this.patas = patas;
}


Mamifero.prototype = Object.create(Animal.prototype);//heritance
// Mamifero.prototype.constructor = Mamifero; //PARA QUE SIRVE ESTA LINEA

Mamifero.prototype.move = function (type){
    console.log('I move ' + type)
}

var leon = new Mamifero('ggrrrrr', 'carnivoro', 'terrestre', 4);


//AVES

var Ave = function(sound, type, habitat, patas) {
    Animal.call(this, sound, type, habitat);

    this.patas = patas;
}

Ave.prototype = Object.create(Animal.prototype);


var aguila = new Ave('piopio', 'carnivoro', 'aereo', '2');
