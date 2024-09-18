//create the function that takes an array with objects and returns the sum of people's budgets
const person = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
];
function getBudget(people) {
    return people.reduce((total, current) => total + current.budget, 0);
}
console.log(getBudget(person));

