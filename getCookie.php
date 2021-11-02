<?php

@ini_set("display_errors", "off");
$arr = [1,2,3];
//Access-Control-Allow-Credentials:true
//Access-Control-Allow-Headers:X-Requested-With, X-HTTP-Method-Override, origin, content-type, accept, authorization
//Access-Control-Allow-Methods:GET, POST, PUT, DELETE, OPTIONS, HEAD
//Access-Control-Allow-Origin:*
header('Access-Control-Allow-Methods: PUT,GET,POST');
// header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: X-Requested-With, X-HTTP-Method-Override, origin, content-type, accept, authorization');
header('Access-Control-Allow-Origin:* ');
// setcookie('mark','leiloumou');
// header("Set-Cookie: hidden=value; SameSite=lax;");
echo var_dump($_COOKIE)
// $str = '{"data":[
// {"20171130082257zyjYR4nzWL":"?????",
// "20171204141014N4iXFfFQMr":"?????","20171129162351PjehRtPvpX":"","201711291517424Q0fVB7QPx":"",
// "startdept":"eb8d970d-c359-11e7-b18f-0242ac587003","20171204141015bKReXuXKuq":"",
// "refpk":"375263ba-1af6-4fb2-b4b3-6b3ef9c4ed3e","refcode":"375263ba-1af6-4fb2-b4b3-6b3ef9c4ed3e",
// "dr":"0","refname":"?????_?????","ts":"2017-12-04 16:45:59"},{"20171130082257zyjYR4nzWL":"",
// "20171204141014N4iXFfFQMr":"????","20171129162351PjehRtPvpX":"????????","201711291517424Q0fVB7QPx":"123",
// "startdept":"58f239fe-c357-11e7-b18f-0242ac587003","20171204141015bKReXuXKuq":"500",
// "refpk":"602fdc1c-e7cc-4501-9e29-bc80eb8a7225","refcode":"602fdc1c-e7cc-4501-9e29-bc80eb8a7225",
// "dr":"0","refname":"123_????????_????_500","ts":"2017-12-04 16:26:19"},
// {"20171130082257zyjYR4nzWL":"?????","20171204141014N4iXFfFQMr":"????","20171129162351PjehRtPvpX":"",
// "201711291517424Q0fVB7QPx":"","startdept":"eb8d970d-c359-11e7-b18f-0242ac587003","20171204141015bKReXuXKuq":"",
// "refpk":"8d437f9b-b589-436c-9bb2-d7a7202ffa19","refcode":"8d437f9b-b589-436c-9bb2-d7a7202ffa19","dr":"0",
// "refname":"?????_????","ts":"2017-12-04 14:20:05"},{"20171130082257zyjYR4nzWL":"?????",
// "20171204141014N4iXFfFQMr":"????","20171129162351PjehRtPvpX":"?????","201711291517424Q0fVB7QPx":"",
// "startdept":"eb8d970d-c359-11e7-b18f-0242ac587003","20171204141015bKReXuXKuq":"400",
// "refpk":"47d26f6b-3bb4-48ff-a9fc-3810df8b2920","refcode":"47d26f6b-3bb4-48ff-a9fc-3810df8b2920","dr":"0",
// "refname":"?????_?????_????_400","ts":"2017-12-04 14:11:10"},{"20171130082257zyjYR4nzWL":"?????",
// "20171204141014N4iXFfFQMr":"","20171129162351PjehRtPvpX":"?????","201711291517424Q0fVB7QPx":"?????",
// "startdept":"eb8d970d-c359-11e7-b18f-0242ac587003","20171204141015bKReXuXKuq":"",
// "refpk":"1ac6d4c2-a8c7-4942-870a-aeccc08a2f82","refcode":"1ac6d4c2-a8c7-4942-870a-aeccc08a2f82","dr":"0",
// "refname":"?????_?????_?????","ts":"2017-12-01 09:48:18"}],
// "page":{"pageSize":50,"currPageIndex":0,"pageCount":1},"allpks":null}';


// echo (var_dump($_COOKIE));

?>