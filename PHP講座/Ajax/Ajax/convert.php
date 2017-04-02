<?php
	//リクエスト先
	$target_url = "http://weather.livedoor.com/forecast/webservice/json/v1";

	//リクエストパラメーターをAjaxで受け取る
	$city = "?city=".$_GET["city"];

	//リクエストの結果を変数に格納
	$result = file_get_contents($target_url.$city);

	//リクエストの結果のJSONをPHPで出力
	header("content-type: application/json; charset=utf-8");
	echo($result);
	exit();

?>
