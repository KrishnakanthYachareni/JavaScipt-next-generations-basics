// When objects/Arrays assigned to another varibles that would basically copies the value 
// whwich means it's just poin to same address location, So change on original object make impact on other copy of varible.
// To avoid this we should use Rest operator to make the object immutable.
const person = {
    name: 'Krishnakanth'
};

const newPerson = person;
person.name = 'Yachareni';
console.log(newPerson);