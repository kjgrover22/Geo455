var mymap = L.map("map").setView([43.427280, -89.732745], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2pncm92ZXIiLCJhIjoiY2t6Ym5uazl1MGRvYjJ1bW1vaXdxdTlyYyJ9.BjHlkJ9Sh_JOKKzF-DP29Q', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

L.marker([43.427280, -89.732745])
    .addTo(mymap)
    .bindPopup("<b>Well hey there!</b><br>Don't you wish it were warm so you could enjoy this beautiful beach?")
    .openPopup();