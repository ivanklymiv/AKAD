function initMap() {
        // Styles a map in night mode.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8,
          disableDefaultUI: true
        });

    marker = new google.maps.Marker({
		  map: map,
		  draggable: false,
		  icon: "img/marker.svg",
		  animation: google.maps.Animation.DROP,
		  position: {lat: -34.397, lng: 150.644}
		});
}   

initMap();
rotate90();