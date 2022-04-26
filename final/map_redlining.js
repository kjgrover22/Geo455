var mymap = L.map("map", {
    center: [40.70033802153813, -99.92769507953061], 
    zoom:5});

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2pncm92ZXIiLCJhIjoiY2t6Ym5uazl1MGRvYjJ1bW1vaXdxdTlyYyJ9.BjHlkJ9Sh_JOKKzF-DP29Q', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);


var minneapolis = L.icon({
    iconUrl: 'images/minneapolis_redlining.jpg',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var milwaukee = L.icon({
    iconUrl: 'images/milwaukee_redlining.jpg',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var detriot = L.icon({
    iconUrl: 'images/detroit_redlining.jpg',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var kansascity = L.icon({
    iconUrl: 'images/kansascity_redlining',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var indianapolis = L.icon({
    iconUrl: 'images/indinapolis_redlining.jpg',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var boston = L.icon({
    iconUrl: 'images/boston_redlining.jpg',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var baltimore = L.icon({
    iconUrl: 'images/baltimore_redlining.jpg',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var syacusue = L.icon({
    iconUrl: 'images/syracuse_redlining.jpg',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var providence = L.icon({
    iconUrl: 'images/providence_redlining.jpg',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var okcity = L.icon({
    iconUrl: 'images/okcity_redlining.jpg',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var dallas = L.icon({
    iconUrl: 'images/dallas_redlining.jpg',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var houston = L.icon({
    iconUrl: 'images/houston_redlining.jpg',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var miami = L.icon({
    iconUrl: 'images/miami_redlining.jpg',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var atlanta = L.icon({
    iconUrl: 'images/atlanta_redlining.jpg',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var nashville = L.icon({
    iconUrl: 'images/nashville_redlining.jpg',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var saltlake = L.icon({
    iconUrl: 'images/saltlakecity_redlining.jpg',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var sanfrancisco = L.icon({
    iconUrl: 'images/sanfran_redlining.jpg',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],



var minneapolis = L.marker([44.966348,-93.269938], {icon: minneapolis}).bindPopup("<b>Minneapolis, Minnesota").addTo(mymap);
var milwaukee = L.marker([43.035873, -87.922848], {icon: milwaukee}).bindPopup("<b>Milwaukee, Wisconsin").addTo(mymap);
var detriot = L.marker([42.340299, -83.05312], {icon: detriot}).bindPopup("<b>Detriot, Michigan").addTo(mymap);
var kansascity = L.marker([39.101366, -94.576659], {icon: kansascity}).bindPopup("<b>Kansas City, Missouri").addTo(mymap);
var indianapolis = L.marker([39.765899, -86.161687], {icon: indianapolis}).bindPopup("<b>Indianapolis, Indianapolis").addTo(mymap);
var boston = L.marker([42.347991, -71.062379], {icon: boston}).bindPopup("<b>Boston, Massachusets").addTo(mymap);
var baltimore = L.marker([39.292471, -76.608345], {icon: baltimore}).bindPopup("<b>Baltimore, Maryland").addTo(mymap);
var syacusue = L.marker([43.05067, -76.143266], {icon: syacusue}).bindPopup("<b>Syacuse, New York").addTo(mymap);
var providence = L.marker([41.826903, -71.418607], {icon: providence}).bindPopup("<b>Providence, Rhoad Island").addTo(mymap);
var okcity = L.marker([35.462569, -97.496683], {icon: okcity}).bindPopup("<b>Oklahoma City, Oklahoma").addTo(mymap);
var dallas = L.marker([32.779294, -96.782555], {icon: dallas}).bindPopup("<b>Dallas, Texas").addTo(mymap);
var houston = L.marker([29.763304, -95.36311], {icon: houston}).bindPopup("<b>Houston, Texas").addTo(mymap);
var miami = L.marker([25.749452, -80.203167], {icon: miami}).bindPopup("<b>Miami, Flordia").addTo(mymap);
var atlanta = L.marker([33.745662, -84.389522], {icon: atlanta}).bindPopup("<b>Atlanta, Georgia").addTo(mymap);
var nashville = L.marker([36.159979, -86.779847], {icon: nashville}).bindPopup("<b>Nashville, Tennessee").addTo(mymap);
var saltlake = L.marker([40.762723, -111.911644], {icon: saltlake}).bindPopup("<b>Salt Lake City, Utah").addTo(mymap);
var sanfrancisco = L.marker([37.770366, -122.407354], {icon: sanfrancisco}).bindPopup("<b>San Fransisco, California").addTo(mymap);
