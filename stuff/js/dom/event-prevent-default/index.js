/*
¿Qué es el preventDefault()?

Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.

En casos como <a> o <form> sus eventos tienen predefinido decirle al navegador que se recargue. Al parar las acciones predefinidas del evento, podemos recoger la información que necesitemos y llevar a cabo la acción que deseemos.

fuente: https://developer.mozilla.org/es/docs/Web/API/Event/preventDefault

*/

// con preventDefault

var form1 = document.getElementsByClassName('form1');
var button1 = form1[0][1];

function fun1 () {
  console.log('hola');
}

button1.addEventListener('click', fun1)

// sin preventDefault

var form2 = document.getElementsByClassName('form2');
var button2 = form2[0][1];

function fun2 (event) {
  event.preventDefault();
  console.log('hola');
}

button2.addEventListener('click', fun2);

/* 
¿Qué es un event?

Los gestores de eventos pueden estar atados a varios elementos en el DOM. Cuando un evento ocurre, un objeto de evento es dinámicamente creado y pasado secuencialmente a las "escuchas" (listeners) autorizadas para la gestión del evento. La interfaz Event del DOM es entonces accesible por la función de manejo, vía el objeto de evento puesto como el primer (y único) argumento.

fuente: https://developer.mozilla.org/es/docs/Web/API/Event

*/

var form = document.getElementsByClassName('form');
var button = form[0][1];

function fun (event) {
  event.preventDefault();
  console.log(event);
}

button.addEventListener('click', fun);

/*
Ejemplo de evento que no recargan página.
*/

var testDiv = document.getElementsByClassName('test__div')[0];
var testP = document.getElementsByClassName('test__p')[0];

function sayHello (event) {
  console.log(event);
  console.log('sin preventDefault');
}

testDiv.addEventListener('click', sayHello);
testP.addEventListener('click', sayHello);

/*
Ejemplo de evento que sí recargan página.
*/

var testA1 = document.getElementsByClassName('test__a-1')[0];

function sayHola (event) {
  event.preventDefault();
  console.log('hola <a> con');
}

testA1.addEventListener('click', sayHola);

var testA2 = document.getElementsByClassName('test__a-2')[0];

function sayHi () {
  console.log('hi <a> sin');
}

testA2.addEventListener('click', sayHi);