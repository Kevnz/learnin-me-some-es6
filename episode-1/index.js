'use strict';
// Default Parameters
function doSomething(obj, otherThing = 1) {
    console.log('obj', obj);
    console.log('otherThing',otherThing);
}
doSomething('my object');

doSomething('my obj', 25);

// Rest Parameters
function add(first, ...numbers) {
    var result = first;

    for (var i = 0; i < numbers.length; i++) {
        result = result + numbers[i];
    }

    return result;
}

console.log('add(1,2,3,4,5,6)', add(1,2,3,4,5,6));

// Spread Operator
var numbers = [54, 32, 45, 12, 36, 89];

console.log('min with spread', Math.min(...numbers));
console.log('min with apply (old way)',Math.min.apply(Math, numbers));