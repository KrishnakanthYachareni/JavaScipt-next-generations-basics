// 1. if more than one parameters in the function Parenthesis are required.
const printMyName1 = (name, age) => {
    console.log(name, age);
};
printMyName1('Krishnakanth Yachareni', '22');

// 2. Arrow if single parameter no Parenthesis required
const printMyName2 = name => {
    console.log(name);
};
printMyName2('Krishnakanth Yachareni')


// 3. If there are no prameters in the function
const printMyName3 = () => {
    console.log('Krishnakanth Yachareni');
};
printMyName3();

// 4. return statement ex1
const add1 = (num1, num2) => {
    return num1 * num2;
};
console.log(add1(10, 20));

// 4. return statement ex2
const add2 = (num1, num2) => num1 * num2;
console.log(add2(100, 20));