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
	var err = false;
	
	if($("#mail_name").val().trim() == "") {
		err = true;
	}
	
	if($("#mail_email").val().trim() == "") {
		err = true;
	}
	
	if($("#mail_message").val().trim() == "") {
		err = true;
	}

	if(err) {
		// alert("All fields must be filled");
		$.growl.error({title: "Error!", message:"All fields must be filled"});
		return;
	}
	
	$.ajax({
		url : "../scripts_mail/mail.php",
		dataType : "JSON",
		data : $(".SendMail").serialize(),
		type : "POST"
	}).done(function(data) {
		if(data.success) {
			$(".SendMail").val("");
			$.growl.notice({message: data.message });
		} else {
			$.growl.error({ message: data.message });
		}
	});
}