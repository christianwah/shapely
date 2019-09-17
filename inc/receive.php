<?php
/*
ini_set("allow_url_fopen", 1);

$email = $_GET['_email'];

$row = 1;
if (($handle = fopen("https://delightfulyunion.online/cfdb7-2019-09-17.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
        $num = count($data);
        echo "<p> $num fields in line $row: <br /></p>\n";
        $row++;
        for ($c=0; $c < $num; $c++) {
            echo $data[$c] . "<br />\n";
        }
		if ($data[2] == $email)
		{
			echo $data[3];
		}
    }
    fclose($handle);
}*/
?>