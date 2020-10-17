//create map
const map = L.map('mapid').setView([-22.8051035,-43.3246836], 11);

// create and add titlelayer
L.tileLayer(    
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',

).addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [40, 50],
    iconAnchor: [29, 68],
    popupAnchor: [0, -80]
})

function addMarker({ id, name, lat, lng }) {

    // create popup overlay
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}"><img src="/images/arrow-white.svg" >
    </a>`)

    //create and add marker
    L
        .marker([lat, lng], { icon })
        .addTo(map)
        .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach(span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }
    addMarker(orphanage)
})