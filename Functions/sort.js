//age
var familyAge = [3,2,39,37,9];

//sort with arrow function in ascending order
var sortedAge = familyAge.sort((a,b) => a - b);

console.log(sortedAge);

//sort with arrow function in decending order
var sortedAge = familyAge.sort((a,b) => b-a);

console.log(sortedAge)