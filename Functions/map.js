//numbers
let numbers = [1, 2, 3, 4, 5]

//normal function
var doubled = numbers.map(function(num){
    return num * 2;
});

console.log(doubled)

// arrow function
let squared = numbers.map(numbers => numbers * numbers)

console.log(squared)

//cities
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

//normal function returning city names
var cityNames = cities.map(function(city){
    return city.City;
});

console.log(cityNames);