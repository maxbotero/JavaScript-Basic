let marker, map;

function initMap() {
    // console.log("Inicializando mapa")
    const posicion = {
        lat: 3.562484433208692,
        lng: -76.61629958500632
    }

    const moscu = {
        lat: 55.45,
        lng: 37.37
    }

    const santamarta = {
        lat: 11.267079149457166,
        lng: -74.19152756088795
    }

    const borreroayerbe = {
        lat: 3.562484433208692,
        lng: -76.61629958500632
    }

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion
    })

    marker = new google.maps.Marker({
        position: posicion,
        map,
        title: "Posición Inicial"
    })

    marker2 = new google.maps.Marker({
        position: moscu,
        map,
        title: "moscu"
    })

    marker3 = new google.maps.Marker({
        position: santamarta,
        map,
        title: "Santa Marta"
    })
}
