<?php
	$mail = $_POST["mail"];
	$name = $_POST["name"];
	$message = $_POST["message"];
	
	$to = "dante.cervantes.b@gmail.com";
	
	$headers = "From: $mail";
	
	mail($to, "Información Incomer", $message, $headers);
?>