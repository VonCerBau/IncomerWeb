<?php
	$mail = $_POST["email"];
	$name = $_POST["name"];
	$message = $_POST["message"];
	
	$to = "compuleaders@gmail.com";
	
	$headers = 'From: <'.$mail.'>';
	
	// $headers = "From: portalincomer@incomer.com";
	
	$ret = mail($to, "Información Incomer - $name", $message, $headers);
	
	if(!$ret) {
		$data["success"] = false;
		$data["message"] = "Your message wasn't sent";
	} else {
		$data["success"] = true;
		$data["message"] = "Your message was sent";
	}
	
	echo json_encode($data);

?>