<?php

$filepath = './ideaIU.dmg';
$fp = fopen($filepath,"r");
Header("Content-type: application/octet-stream");
Header("Accept-Ranges: bytes");
Header("Content-Disposition: attachment; filename=xxx.pdf");
$buffer = 1024;
while (!feof($fp)) {
$file_con = fread($fp,$buffer);
  echo $file_con;
}
fclose($fp);

?>