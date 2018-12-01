

let mymap = L.map('jakarta').setView([-6.238, 106.828], 11.07);

L.tileLayer('https://api.mapbox.com/styles/v1/tbasuseto/cjp4eqtaj001i2sl8ozjwpvot/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidGJhc3VzZXRvIiwiYSI6ImNqcDRhb2ZpNjBxcTMzcXA3Nm9hd25zZzgifQ.ulUGjJTCon5kmSsw4D4u3w', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

var marker1 = L.marker([-6.2479, 106.8008]).addTo(mymap).openPopup();

marker1.bindPopup("I was born here. This is the Mother and Children ASIH Hospital.");

var marker2 = L.marker([-6.193, 106.822]).addTo(mymap);

marker2.bindPopup("This is my favorite shopping mall in Indonesia. This mall is called Plaza Indonesia.");

var marker3 = L.marker([-6.231, 106.809]).addTo(mymap);

marker3.bindPopup("This was where I held my Sweet Sixteenth birthday party. This restaurant is called Branché Bistro.");

var marker4 = L.marker([-6.299, 106.785]).addTo(mymap);

marker4.bindPopup("This was where I went to high school. I attended Singapore International School.");
