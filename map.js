function initMap() {
	let coordinates = { lat: 50.005724, lng: 36.229103 };
	let opt = {
		center: coordinates,
		zoom: 13,
		disableDefaultUI: true,
		styles : [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]
	};

	let map = new google.maps.Map(document.getElementById('map'), opt);

	let marker = new google.maps.Marker({		
		position: coordinates,
		map: map,
		icon: 'assets/icon/pin.svg',
	});

	let info = new google.maps.InfoWindow({
		content: '<h3>Це моє місто</h3>'
	});

	marker.addListener("click", function () {
		info.open(map, marker);
	})

};




// function initMap() {
// 	let coordinates = { lat: 50.005724, lng: 36.229103 },
// 		// popupContent = this.$popupContent.html(),
// 			zoom = 5,
// 		image = 'assets/icon/pin.svg',
			
//         map = new google.maps.Map(document.querySelector('.map'), {
// 					center: coordinates,
// 					// disableDefaultUI: boolean,
// 					zoom: zoom,
//         }),			
				
//         marker = new google.maps.Marker({
//             position: coordinates,
// 						map: map,
// 						icon: image
//         });
// };

// infowindow.open(map, marker);
// initMap()
// // window.initMap = initMap;

// $.getJSON("../mapstyle.json", function(data) {
//     map.setOptions({styles: data});
// });

// map.setOptions({ styles: styles });
// infowindow.open(map, marker);




