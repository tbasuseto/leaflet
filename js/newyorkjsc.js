let mymap = L.map('headquarters').setView([40.736, -73.992], 11.91);

L.tileLayer('https://api.mapbox.com/styles/v1/tbasuseto/cjp4qkxoz47vm2roj914xx554/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGJhc3VzZXRvIiwiYSI6ImNqcDRhb2ZpNjBxcTMzcXA3Nm9hd25zZzgifQ.ulUGjJTCon5kmSsw4D4u3w', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

for ( let i = 0; i < places.length; i++ ) {
  L.marker( [ places[i].latitude, places [i].longitude ] ).bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].description + '</p>').addTo( mymap );
}
