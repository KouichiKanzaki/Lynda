<!doctype html>
<html>
<head>
<meta charset="utf-8">
<!-- <link rel="stylesheet" type="text/css" href="css/reset.css"> -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
<title>temple</title>
</head>
<style>
input#btn{
	font-size: 16px;
	margin: 20px 0 20px 0;
}
</style>
<body>

<input id="btn" type="button" value="外部取得">
<div class="">
</div>
<h1 id="area"></h1>
<section>
	<h2 id="today_weather_img"></h2>
	<p id="date_label"></p>
	<p id="date"></p>
	<p id="weather_icon"></p>
</section>
</body>
<script>
(function(){
	$("#btn").on("click",getData);
	function getData(){

		//ターゲットとなるファイルのURL
		var target_url = "convert.php";
		//var target_url = "data1.json";

		//リクエストパラメータ
		var param = {
			"city": 400040
			/*
			"name": "kouichi",
			"age": 35,
			"address": "Fukuoka"
			*/
		};
		//Ajax処理
		$.ajax({
			type: "GET",
			dataType: "json",
			url: target_url,
			//jsonpCallback: "kanzaki",
			data: param

		}).fail(function(jqXHR, textStatus, errorThrown){
			alert("Fail");
		}).done(function(data, textStatus, jqXHR){
			console.log(data);
			var area = data.location.prefecture;
			var date_label = data.forecasts[1].dateLabel;
			var date = data.forecasts[1].date;
			var weather_icon = data.forecasts[1].image.url;

			$("#area").html(area + "の天気");
			$("#date_label").html(date_label);
			$("#date").html(date);
			$("#weather_icon").html('<img src="' + weather_icon + '"">');
			//alert("Success");
			//個別にアクセス
			//var shop_name = data.kouichi[0].id;
			//$("div").append(shop_name);
			//配列の中の全データにアクセス
			/*
			$.each(data.kouichi, function(index, value){
				var test;
				$.each(value, function(key, val){
					switch(key){
						case "id":
							test = "XXX";
							break;
						case "aaa":
							test = "YYY";
							break;
						case "price":
							test = "ZZZ";
							break;
					}
					$("div").append(test + ":" + val + "<br>");
				});

			});
			*/
		});
	}
})();
</script>
</html>
