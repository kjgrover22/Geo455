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


var winona = L.icon({
    iconUrl: 'images/icon_1.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var albertlea = L.icon({
    iconUrl: 'images/icon_2.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var desmoines = L.icon({
    iconUrl: 'images/icon_3.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var kc = L.icon({
    iconUrl: 'images/icon_4.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var witchita = L.icon({
    iconUrl: 'images/icon_5.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var okcity = L.icon({
    iconUrl: 'images/icon_6.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var dallas = L.icon({
    iconUrl: 'images/icon_7.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var waco = L.icon({
    iconUrl: 'images/icon_8.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var victoria = L.icon({
    iconUrl: 'images/icon_9.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var ap = L.icon({
    iconUrl: 'images/icon_10.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var pa = L.icon({
    iconUrl: 'images/icon_11.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});



var winmn = L.marker([44.04875, -91.6398], {icon: winona}).bindPopup("<b>Winona MN").addTo(mymap);
var albertl = L.marker([43.6501, -93.3564], {icon: albertlea}).bindPopup("<b>Albert Lea MN").addTo(mymap);
var dmoines = L.marker([41.5932942223522, -93.60995688161297], {icon: desmoines}).bindPopup("<b>Des Moines IA").addTo(mymap);
var kansascity = L.marker([39.11823, -94.5483], {icon: kc}).bindPopup("<b>Kansas City MO").addTo(mymap);
var witchkansas = L.marker([37.68872, -97.301], {icon: witchita}).bindPopup("<b>Witchita KS").addTo(mymap);
var oklacity = L.marker([35.47295, -97.5265], {icon: okcity}).bindPopup("<b>Oklahoma City OK").addTo(mymap);
var fwdallas = L.marker([32.77786, -96.9542], {icon: dallas}).bindPopup("<b>Dallas TX").addTo(mymap);
var wacotx = L.marker([31.54469, -97.1445], {icon: waco}).bindPopup("<b>Waco TX").addTo(mymap);
var victoriatx = L.marker([28.81093, -96.9932], {icon: victoria}).bindPopup("<b>Victoria TX").addTo(mymap);
var aransaspass = L.marker([27.90716, -97.1473], {icon: ap}).bindPopup("<b>Aransas Pass TX").addTo(mymap);
var portarasas = L.marker([27.82176, -97.059820], {icon: pa}).bindPopup("<b>Port Aransas TX").addTo(mymap);
