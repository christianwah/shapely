<?php

ob_start();
$email = $_POST['_email'];
$attendance = $_POST['_attendance'];
$name = $_POST['_GuestName'];
$attending = $_POST['_attending'];
$attendanceNo = $_POST['_attendanceNo'];
$phone = $_POST['_phone'];
$inviteReq = $_POST['_inviteReq'];
$address = $_POST['_address'];
$feedback = $_POST['_feedback'];
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

// requires php5
$img = $imageString;
define('UPLOAD_DIR', 'images/');
$img = str_replace('data:image/png;base64,', '', $img);
$img = str_replace(' ', '+', $img);
$data = base64_decode($img);
$file = UPLOAD_DIR . uniqid() . '.png';
$success = file_put_contents($file, $data);
if( $success)
{	
	$imgPath = get_site_url().'/'.$file;
}
$to = 'christianwahyunuspangestu@gmail.com';
$subject = 'Contact Form';
$body = "<p>Name: $name</p>
<p>Attendance: $attendance</p>
<p>Email: $email</p>
<p>Attending: $attending</p>
<p>AttendanceNo: $attendanceNo</p>
<p>Phone: $phone</p>
<p>InviteReq: $inviteReq</p>
<p>Address: $address</p>
<p>Feedback: $feedback</p>
<img src='$imgPath' width='200px'/>";
$headers = array('Content-Type: text/html; charset=UTF-8', 'Cc: ddlimputri@yahoo.com');
 
wp_mail( $to, $subject, $body, $headers );
?>