// 1. Rest Operator ('...' within method)
const myfun = (...args) => {
    return args.sort();
}
console.log(myfun(5, 4, 3, 2, 1));

// Another example
const myfun1 = (...args) => {
    return args.filter(i => i === 1);
}
console.log(myfun1(5, 4, 3, 2, 1));
