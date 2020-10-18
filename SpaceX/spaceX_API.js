const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

//retrieve only first object
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0]));

//retrieve full name of the first object
d3.json(url).then(spaceXResults => 
    console.log(spaceXResults[0].full_name));

//print the latitude and longitude of each station
d3.json(url).then(spaceXResults => 
    spaceXResults.map(spaceXResults => 
        console.log(spaceXResults.location.latitude, spaceXResults.location.longitude)));

