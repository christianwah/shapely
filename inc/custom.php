<?php
$servername = "u487870496_pajah";
$username = "u487870496_luhys";
$password = "p@ssw0rd";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
		echo '<script type="text/javascript">alert("Connection failed");</script>';
}
else {
	ob_start();
	QRCode::png('https://sites.google.com/view/yunus-delfina-wedding/home', null);
	$imageString = base64_encode( ob_get_contents() );
	ob_end_clean();
}
?>