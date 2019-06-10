<?php

ob_start();
$email = $_POST['_email'];
QRCode::png(get_site_url() . '/qrscan?_email=' . urlencode($email), null);
$imageString = base64_encode( ob_get_contents() );
ob_end_clean();

?>