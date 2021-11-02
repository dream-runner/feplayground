<?php
header('Access-Control-Allow-Methods: PUT,GET,POST');
// header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: X-Requested-With, X-HTTP-Method-Override, origin, content-type, accept, authorization');
header('Access-Control-Allow-Origin:* ');
setcookie('test', 'testcookie', time()+3600*24, '/', '.b.com', false);
echo 'console.log(">>>>>")'
?>