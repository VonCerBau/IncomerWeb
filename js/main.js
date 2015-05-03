function initialize() {
	var latlng = new google.maps.LatLng(19.3752907, -99.18534979999998);
	var settings = {
		zoom: 15,
		center: latlng,
		mapTypeControl: true,
		mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
		navigationControl: true,
		navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	
	var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
	var companyPos = new google.maps.LatLng(19.3752907, -99.18534979999998);
	var companyMarker = new google.maps.Marker({
		position: companyPos,
		map: map,
		title:"Some title"
  });
}

function sendMail() {
	var name = $("#mail_name").val();
	var email = $("#mail_email").val();
	var message = $("#mail_message").val();
	
	alert(name);
	alert(email);
	alert(message);
}