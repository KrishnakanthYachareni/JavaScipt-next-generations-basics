// 1. Spread Operator(...) with non-objects
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

// 2. Spread Operator(...) with objects.
const person = {
    name:'Krishakanth'
};

const newPerson = {
    ...person,
    age:29
};

console.log(newPerson);