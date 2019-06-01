<?php

ob_start();
$email = $_GET['email'];
QRCode::png($email, null);
$imageString = base64_encode( ob_get_contents() );
ob_end_clean();

?>