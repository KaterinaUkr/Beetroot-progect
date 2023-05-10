function initMap() {
	let coordinates = { lat: 50.005724, lng: 36.229103 },
		// popupContent = this.$popupContent.html(),
			zoom = 5,
		image = 'assets/icon/pin.svg',
			
        map = new google.maps.Map(document.querySelector('.map'), {
					center: coordinates,
					// disableDefaultUI: boolean,
					zoom: zoom,
        }),
				
				// infowindow = new google.maps.InfoWindow({
        // content: popupContent
    		// }),
				
        marker = new google.maps.Marker({
            position: coordinates,
						map: map,
						icon: image
        });
};

// infowindow.open(map, marker);

initMap();

$.getJSON("../mapstyle.json", function(data) {
    map.setOptions({styles: data});
});

// map.setOptions({ styles: styles });
// infowindow.open(map, marker);




