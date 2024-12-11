
const map = L.map('map').setView([-9.19, -75.0152], 5);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


const markers = [
    { coords: [-12.0464, -77.0428], text: '¡Estás a 0 kms. de vivir experiencias únicas!' },
    { coords: [-13.1631, -72.545], text: '¡Estás a 489.26 kms. de vivir experiencias únicas!' }
];

markers.forEach(marker => {
    L.marker(marker.coords).addTo(map)
        .bindPopup(marker.text)
        .openPopup();
});
