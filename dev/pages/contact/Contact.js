function loadMap() {
	// alert('ho-ho-ho');
	var loc = {lat:40.67, lng: -73.94};
	worldMap = new google.maps.Map(document.querySelector('._map'),{
		zoom:16, 
		center:loc, 
		disableDefaultUI: true
	});

	new google.maps.Marker({
		position: {
			lat: +loc.lat,
			lng: +loc.lng,
		}, 
		map: worldMap, 
		icon: "../../../img/p_cont_marker.svg"
	});
}