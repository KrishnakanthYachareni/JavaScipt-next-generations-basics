// Let and const have a block scope but var has function scope.
// 1. 'var' has global scope & keep on changing the value if any modifications on it.
var myName = 'Krishnakanth Yachareni';
console.log(myName);

myName = 'Sravanthi Yachareni';
console.log(myName);


var a   //declaration
a = 5   // initialization
let b //declaration 
b = 10  //initialization
var c = 5  //declaration plus initialization in one step
let d = 5  //declaration plus initialization in one step
const a; // SyntaxError: Missing initializer in const declaration
a = 5;
console.log(a);
const a = 5
console.log(a) //5

// 1: when we start our variable with var, let is called declaration. e.g: var a; or let a;
// 2: when we start our variable and assigning value it is declaration and initialization with value
// 3: const cannot be declared only, you need to initialize it with declaration
