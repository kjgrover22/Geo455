//Creating the map variable
var mymap = L.map("map", {
    center: [42.433754350687515, -85.77635567694074], 
    zoom: 4});

// Set up baselayers
var satellite = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/satellite-v9',
    tileSize: 512,
    zoomOffset: -1
});

var outdoors = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/outdoors-v11',
    tileSize: 512,
    zoomOffset: -1
});

var grayscale = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);


//Set up icon variables
var myIcon1 = L.icon({
    iconUrl: 'map-marker-icon.png',
    iconSize: [20, 20],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon2 = L.icon({
    iconUrl: 'map-marker-icon.png',
    iconSize: [20, 20],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon3 = L.icon({
    iconUrl: 'map-marker-icon.png',
    iconSize: [20, 20],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon4 = L.icon({
    iconUrl: 'map-marker-icon.png',
    iconSize: [20, 20],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon5 = L.icon({
    iconUrl: 'map-marker-icon.png',
    iconSize: [20, 20],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon6 = L.icon({
    iconUrl: 'map-marker-icon.png',
    iconSize: [20, 20],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon7 = L.icon({
    iconUrl: 'map-marker-icon.png',
    iconSize: [20, 20],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon8 = L.icon({
    iconUrl: 'map-marker-icon.png',
    iconSize: [20, 20],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var myIcon9 = L.icon({
    iconUrl: 'map-marker-icon.png',
    iconSize: [20, 20],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
    
});
var myIcon10 = L.icon({
    iconUrl: 'map-marker-icon.png',
    iconSize: [20, 20],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

// Create custom popups with images
var minneapolisPopup = "<a href='https://dsl.richmond.edu/panorama/redlining/#loc=11/44.89/-93.263&city=minneapolis-mn' target='_blank'> Minneapolis, Minnesota <br/><img src='minneapolis1953.jpg' width=350px'/><br/><img src='minneapolis2014.jpg' width=350px'/>";
var milwaukeePopup = "<a href='https://dsl.richmond.edu/panorama/redlining/#loc=10/42.851/-87.965&city=milwaukee-co.-wi' target='_blank'> Milwaukee, Wisconsin<br/><img src='milwaukee1953.jpg' width=350px'/><br/><img src='milwaukee2014.jpg' width=350px'/>";
var detroitPopup = "<a href='https://dsl.richmond.edu/panorama/redlining/#loc=9/41.986/-83.137&city=detroit-mi' target='_blank'> Detroit, Michigan<br/><img src='detroit1951.jpg' width=350px'/><br/><img src='detroit2010.jpg' width=350px'/>";
var kansascityPopup = "<a href='https://dsl.richmond.edu/panorama/redlining/#loc=11/38.968/-94.545&city=greater-kansas-city-mo' target='_blank'> Kansas City, Missouri<br/><img src='kansascity1955.jpg' width=350px'/><br/><img src='kansascity2014.jpg' width=350px'/>";
var bostonPopup = "<a href='https://dsl.richmond.edu/panorama/redlining/#loc=11/42.224/-71.081&city=boston-ma' target='_blank'> Boston, Massachusetts<br/><img src='Boston1938.jpg' width=350px'/><br/><img src='Boston2013.jpg' width=350px'/>";
var okcityPopup = "<a href='https://dsl.richmond.edu/panorama/redlining/#loc=12/35.49/-97.523' target='_blank'> Oklahoma City, Oklahoma<br/><img src='okc1953.jpg' width=350px'/><br/><img src='okc2014.jpg' width=350px'/>";
var dallasPopup = "<a href='https://dsl.richmond.edu/panorama/redlining/#loc=10/32.578/-96.799&city=dallas-tx' target='_blank'> Dallas, Texas<br/><img src='dallas1953.jpg' width=350px'/><br/><img src='dallas2013.jpg' width=350px'/>";
var atlantaPopup = "<a href='https://dsl.richmond.edu/panorama/redlining/#loc=10/33.55/-84.356&city=atlanta-ga' target='_blank'> Atlanta, Georgia<br/><img src='atlanta1952.jpg' width=350px'/><br/><img src='atlanta2013.jpg' width=350px'/>";
var denverPopup = "<a href='https://dsl.richmond.edu/panorama/redlining/#loc=12/39.71/-105.057&city=denver-co' target='_blank'> Denver, Colorado <br/><img src='denver1953.jpg' width=350px'/><br/><img src='denver2014.jpg' width=350px'/>";
var sanfranPopup = "<a href='https://dsl.richmond.edu/panorama/redlining/#loc=11/37.661/-122.436&city=san-francisco-ca' target='_blank'> San Francisco, California<br/><img src='sanfrancisco1946.jpg' width=350px'/><br/><img src='sanfrancisco2014.jpg' width=350px'/>";

var customOptions ={'maxWidth': '600','className' : 'custom'};

          
// Data points
coords = [
    [44.966348, -93.269938],
    [43.035873, -87.922848],
    [42.340299, -83.05312],
    [39.101366, -94.576659],
    [42.347991, -71.062379],
    [35.462569, -97.496683],
    [32.779294, -96.782555],
    [33.745662, -84.389522],
    [39.7392, -104.9903],
    [37.770366, -122.407354]
];

// Marker Layergroup
var loc = L.layerGroup();
L.marker(coords[0], {icon: myIcon1}).bindPopup(minneapolisPopup, customOptions).addTo(loc);
L.marker(coords[1], {icon: myIcon2}).bindPopup(milwaukeePopup, customOptions).addTo(loc);
L.marker(coords[2], {icon: myIcon3}).bindPopup(detroitPopup, customOptions).addTo(loc);
L.marker(coords[3], {icon: myIcon4}).bindPopup(kansascityPopup, customOptions).addTo(loc);
L.marker(coords[4], {icon: myIcon5}).bindPopup(bostonPopup, customOptions).addTo(loc);
L.marker(coords[5], {icon: myIcon6}).bindPopup(okcityPopup, customOptions).addTo(loc);
L.marker(coords[6], {icon: myIcon7}).bindPopup(dallasPopup, customOptions).addTo(loc);
L.marker(coords[7], {icon: myIcon8}).bindPopup(atlantaPopup, customOptions).addTo(loc);
L.marker(coords[8], {icon: myIcon9}).bindPopup(denverPopup, customOptions).addTo(loc);
L.marker(coords[9], {icon: myIcon10}).bindPopup(sanfranPopup, customOptions).addTo(loc);
loc.addTo(mymap);


// Add a scalebar 
L.control.scale({position: 'bottomright', maxWidth: '150', metric: 'True'}).addTo(mymap);


// Create menu items
var baseLayers = {
    'Grayscale': grayscale,
    'Outdoors': outdoors,
    'Satellite': satellite,
	};


//Create the menu window
var layerControl = L.control.layers(baseLayers, overlays, {collapsed: false}).addTo(mymap); 