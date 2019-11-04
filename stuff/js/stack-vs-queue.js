// 1 

function f1() { console.log(1); console.log(f2()); return 1; };
function f2() { console.log(2); console.log(f3()); return 2; };
function f3() { console.log(3); return 3; };

console.log(f1()); // 1, 2, 3, 3, 2, 1

// 2

function f1() { console.log(1); console.log(f2()); return 10; };
function f2() { console.log(2); console.log(f3()); return 20; };
function f3() { console.log(3); return 30; };

console.log(f1()); // 1, 2, 3, 30, 20, 10

// 3

setTimeout(function() { console.log('hola mundo'); }, 3000);
console.log('continue...');

// 4

function f1(id) { console.log(id, 1, new Date()); var before = Date.now(); while(Date.now() - before < 1000); console.log(id, f2(id), new Date()); return 10; };
function f2(id) { console.log(id, 2, new Date()); var before = Date.now(); while(Date.now() - before < 1000); console.log(id, f3(id), new Date()); return 20; };
function f3(id) { console.log(id, 3, new Date()); var before = Date.now(); while(Date.now() - before < 1000); return 30; };

var id = 'b'; console.log(id, f1(id), new Date());

setTimeout(function() { var id = 'a'; console.log(id, f1(id), new Date()); }, 3000);

// 5

function f1(id) { console.log(id, 1, new Date()); var before = Date.now(); while(Date.now() - before < 1000); console.log(id, f2(id), new Date()); return 10; };
function f2(id) { console.log(id, 2, new Date()); var before = Date.now(); while(Date.now() - before < 1000); console.log(id, f3(id), new Date()); return 20; };
function f3(id) { console.log(id, 3, new Date()); var before = Date.now(); while(Date.now() - before < 1000); return 30; };

setTimeout(function() { var id = 'a'; console.log(id, f1(id), new Date()); }, 3000);

var id = 'b'; console.log(id, f1(id), new Date());








