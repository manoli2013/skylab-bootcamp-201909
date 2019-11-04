function Counter(initial) {
	this.value = initial || 0;
}

Counter.prototype.countUp = function() { 
	//this.value++; 
	this.value = 11;	
};

Counter.prototype.countDown = function() { this.value--; };

// TDD
/*(function() {
	var counter = new Counter(10);
	counter.countUp();
	
	assert(counter.value === 11, 'it should increment 10 to 11');	
})();*/
// NOTE this test doesn't fail, it is centered on fixed input / output values, not fully on behavior.

// BDD
(function() {
	var initial = Math.floor(Math.random() * 1000);
	var counter = new Counter(initial);
	counter.countUp();
	
	assert(counter.value === initial + 1, 'it should increment initial value one unit');	
})();
// NOTE this test fails, it is centered on behavior, playing with different random input / output values.

function assert(condition, message) {
	if (!condition) throw Error(message);
}