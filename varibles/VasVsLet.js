// Let and const have a block scope but var has function scope.
// References: https://codeburst.io/learn-let-var-and-const-in-easiest-way-with-guarantee-e6ecf551018a

//ES5
function adult5(age) {
    if (age > 18) {
        var status = 'adult';
    }
    console.log(status); //adult
}
adult5(20);


// ES6
function adult6(age) {
    if (age > 18) {
        let status = 'adult';
    }
    console.log(status); //ReferenceError: status is not defined
}
adult6(20);