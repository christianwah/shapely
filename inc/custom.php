<?php

ob_start();
$email = $_POST['_email'];
$attendance = $_POST['_attendance'];
QRCode::png(get_site_url() . '/qrscan?_email=' . urlencode($email), null);
$imageString = base64_encode( ob_get_contents() );
ob_end_clean();
if ($attendance == "Yes, I\\'ll gladly come to your wedding")
{
	echo "
	<style>
		.form-response-no {display:none;}
		.form-response-yes {display:block;}
	</style>";
}
else
{
	echo "
	<style>
		.form-response-no {display:block;}
		.form-response-yes {display:none;}
	</style>";
}
?>