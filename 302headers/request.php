<?php
header("Content-Type: application/force-download");
header("Content-Type: application/octet-stream");
header("Content-Type: application/download");
header("Content-Transfer-Encoding: binary");
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");
header("Cache-Control: must-revalidate, post-check=0, pre-check=0");
header("Pragma: no-cache");
header("Accept-Length: ");
header('Content-Disposition: attachment; filename="1595504473IFMU.jpg.jpg"');
// 调整文件名包含空格的类型 modify by shiying 2013/3/22
// $bakFileName = urldecode($fileName);
// $ua = $_SERVER["HTTP_USER_AGENT"];
// $encoded_filename = urlencode($fileName);
// $encoded_filename = str_replace("+", "%20", $encoded_filename);
// header('Content-Disposition;filename="rename.jpg"');
// header('HTTP/1.1 302 Moved Permanently');
// header( "Location:http://test.yyuap.com/302headers/target.php");
header( "Location:https://static.yonyoucloud.com/102462/2837107/202007/23/1595504473IFMU.jpg.jpg");
?>