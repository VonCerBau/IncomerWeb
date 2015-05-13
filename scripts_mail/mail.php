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
		$data["message"] = "El mail no se envió";
	} else {
		$data["success"] = true;
		$data["message"] = "El mail se envió correctamente";
	}
	
	echo json_encode($data);

?>