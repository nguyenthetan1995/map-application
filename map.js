// Khai báo map: L.map(ID_div).setView([lat,lng],Zoom)
var map = L.map('map').setView([10.808289780248947, 106.6489561217121], 13);
// Khai báo tile map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
//add marker 
var marker = L.marker([10.8082897, 106.6489561]).addTo(map);
//add polyline
var latlngs = [
    [10.858289, 106.618956],
    [10.802222, 106.642222],
    [10.833333, 106.699999]
];
var polyline = L.polyline(latlngs).addTo(map);

// create a red polygon from an array of LatLng points
var latlngsPolygon = [[10.818289, 106.618956],[10.858289, 106.628956],[10.888289, 106.638956],[10.858289, 106.658956]];

var polygon = L.polygon(latlngsPolygon, {color: 'red'}).addTo(map);