// sort cities
var sortedCities = cityGrowths.sort((a,b) => 
    a.Increase_from_2016 - b.Increase_from_2016).reverse();

// slice for the top 5 cities
var topFiveCities = sortedCities.slice(0,5);

//arrays for the top 5 city names and growth figures
var topFiveCityNames = topFiveCities.map(city => city.City);

var topFiveCityGrowths = topFiveCities.map(
    city => parseInt(city.Increase_from_2016)); //parseInt() converts strings into integers

console.log(topFiveCityGrowths)

//create a Bar Chart
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };

  var data = [trace]; //The variable data encloses trace in an array to meet Plotly's format requirement
  
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017"}
  };
  
  Plotly.newPlot("bar-plot", data, layout);
