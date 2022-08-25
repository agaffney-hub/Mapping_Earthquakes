// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/tiles/{z}/{x}/{y}?access_token={accessToken}',{
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});


// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Coordinates for each point to be used in the polyline.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];

// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
   color: "yellow"
}).addTo(map);

// SKILL DRILL  // Coordinates for each point to be used in the polyline.
// let line = [
//     [37.6213, -122.3790],
//     [30.1974292, -97.6663058],
//     [43.6775, -79.6308333333],
//     [40.641766, -73.780968]
//   ];

// // Create a polyline using the line coordinates and make the line yellow.
// L.polyline(line, {
//    color: "blue",
//    opacity: 0.5,
//    weight: 4,
// }).addTo(map);

