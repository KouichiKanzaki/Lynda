<?php
    echo "<pre>";
    print_r($_POST);
    echo "</pre>";

    $onamae = $_POST["name"];
    $email = $_POST["mail"];
    $gender = $_POST["gender"];
    $type = $_POST["type"];
    /*
    echo $onamae."<br>";
    echo $email."<br>";
    echo $gender."<br>";
    */
    $type_text;
    foreach ($type as $value) {
        $type_text .= $value." ";
    }

    mb_language("japanese");
    mb_internal_encoding("UTF-8");

    $company_mail = "ksfaiof5@yahoo.co.jp";
    $mail_subject = "test";

    $mail_body = <<<EOT
    お名前: $onamae
    メールアドレス: $email
    性別: $gender
    タイプ: $type_text
EOT;

    $mail_sender = $email;

    $mail_send = mb_send_mail($company_mail,$mail_subject,$mail_body,"From:".$mail_sender);
    var_dump($mail_send);

?>
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<title>sample1</title>
<style>
    #container{
    	width:600px;
    	margin:0 auto;
    }
    h1{
    	margin-top:20px;
    	font-size:large;
    	color:#7CADB6;
    }

    p {
    	font-size:small;
    	margin:0;
    	padding:5px;
    }
</style>
</head>
	<body>
		<div id="container">
			<h1>お問い合わせ</h1>
			<p>送信いたしました。</p>
		</div>
	</body>
</html>
