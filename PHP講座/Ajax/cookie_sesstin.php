<?php
//セッション開始
session_start();

//セッション変数の削除
//unset($_SESSION["visit"]);
//セッション変数の書き込み
if(!$_SESSION["visit"]){
    $_SESSION["visit"] = 1;
}else{
    $_SESSION["visit"]++;
}
echo $_SESSION["visit"]."\n";
/*
$val = "神崎";
//クッキーの有効期限(秒)
$expire = time() + 5;

//クッキーへの書き込み
setcookie("kouichi", $val, $expire);

//クッキーへのアクセス
if($_COOKIE["kouichi"]){
    echo "kanzaki ".$_COOKIE["kouichi"];
}
*/
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<!-- <link rel="stylesheet" type="text/css" href="css/reset.css"> -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
<title>PHPアプリ</title>
</head>
<style>
</style>
<body>

</body>
<script>
(function(){
	"use strict";
})();
</script>
</html>
