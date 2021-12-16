<?php
/*
 * @Author: your name
 * @Date: 2018-01-09 13:09:41
 * @LastEditTime: 2021-11-29 15:25:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /yonbuilder-mdf-extend/Users/yangjz0/workspace/phpweb/index.php
 */
@ini_set("display_errors", "off");
$arr = [1,2,3];
//Access-Control-Allow-Credentials:true
//Access-Control-Allow-Headers:X-Requested-With, X-HTTP-Method-Override, origin, content-type, accept, authorization
//Access-Control-Allow-Methods:GET, POST, PUT, DELETE, OPTIONS, HEAD
//Access-Control-Allow-Origin:*
//header('Access-Control-Allow-Methods: PUT,GET,POST');
//header('Access-Control-Allow-Credentials:true');
//header('Access-Control-Allow-Headers: X-Requested-With, X-HTTP-Method-Override, origin, content-type, accept, authorization');
//header('Access-Control-Allow-Origin: *');

//echo time();
//echo '<script>window.domain=127.0.0.1</script>';
// echo (json_encode($arr));
echo (json_encode($_REQUEST));
//echo 'callback('.json_encode($arr).')'
//echo $_REQUEST['callback'].'('.json_encode($arr).')';


//$link = mysql_connect('10.2.112.21', 'root', 'root');
//if (!$link) {
//  die('Could not connect: ' . mysql_error());
//}
//
//mysql_select_db("portal", $link);
// mysql_query("SET NAMES 'UTF8'"); 
// mysql_query("SET CHARACTER SET UTF8"); 
//mysql_query("SET CHARACTER_SET_RESULTS=UTF8'"); 
//$result = mysql_query("SELECT distinct ps.name,pl.siteid,pl.id FROM pt_layout as pl join pt_site as ps where ps.id=pl.siteid order by ps.id");
//$res = [];
//	while($row = mysql_fetch_array($result))
//	{
//	$res[] =$row;
//	}
//	echo $_REQUEST['callback'].'('.json_encode($res).')';
////	echo json_encode($res);
////echo 'Connected successfully';
//mysql_close($link);

?>