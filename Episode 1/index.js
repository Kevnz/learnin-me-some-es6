// Default Parameters

function doSomething(obj, otherThing = 1) {

}
doSomething('my object');

doSomething('my obj', 25);
// Rest Parameters

function add(first, ...numbers) {
    let result = first;

    for (var i = 0; i < numbers.length; i++) {
        result = result + numbers[i];
    }

    return result;
}
// Spread Operator

let numbers = [54, 32, 45, 12, 36, 89];

let min = Math.min(...numbers);
//old way
var oldMin = Math.min.apply(Math, numbers);
