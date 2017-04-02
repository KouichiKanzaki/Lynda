<!doctype html>
<html>
<head>
<meta charset="utf-8">
<!-- <link rel="stylesheet" type="text/css" href="css/reset.css"> -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
<title>Lynda</title>

<style>
    #container{
    width:600px;
    margin:0 auto;
    padding:20px;
    background:white;
    }
    h1{
    margin-top:20px;
    font-size:large;
    color:#7CADB6;
    }

    dl dt {
    border-left:5px solid #7CADB6;
    border-bottom:1px solid #7CADB6;
    font-size:small;
    margin:0;
    padding:5px;
    }
    dl dt span{
    color:red;
    font-weight:bold;
    }
    dl dd{
    font-size:small;
    margin:0;
    padding:10px;
    }
    dl dd input{
    position:relative;
    z-index:2;
    }
    dl dd label{
    position:relative;
    padding:5px 5px 5px 25px;
    margin : 0 5px 0 -25px;
    margin-left:-25px;
    position:relative;
    z-index:1;
    }
    dl dd.error input ,
    dl dd.error textarea ,
    dl dd.error label {
    background:#FFCCCC;
    }
    * html dl dd.error label {
    background:none;
    }
    *+html dl dd.error label{
    background:none;
    }
    dl dd p.error{
    margin:0;
    color:red;
    font-weight:bold;
    margin-bottom:1em;
    }
</style>
</head>
<?php
    $fileA = "file_a.php";
    include_once($fileA);

    $fileB = "file_b.php";
    require_once($fileB);

    include_once($fileA);
?>
<body style="background:darkgray">
    <div id="container">
        <h1>当サイトへのお問い合わせ</h1>
        <form action="complete.php" method="POST">
            <dl>
                <dt>お名前<span>※</span></dt>
                <dd><input type="text" name="name" size="80" class="validate required"></dd>
                <dt>フリガナ</dt>
                <dd><input type="text" name="furi" size="80"></dd>
                <dt>郵便番号</dt>
                <dd><input type="text" name="zip1" size="4" maxlength="4" class="validate number"> - <input type="text" name="zip2" size="3" maxlength="3" class="validate number"></dd>
                <dt>メールアドレス</dt>
                <dd><input type="text" value="" size="80" name="mail" class="validate mail"></dd>
                <dt>メールアドレス(確認)</dt>
                <dd><input type="text" value="" size="80" name="mail_check" class="validate mail mail_check"></dd>
                <dt>性別<span>※</span></dt>
                <dd>
                    <input type="radio" value="男性" name="gender" id="man" class="validate required"> <label for="man">男性</label>
                    <input type="radio" value="女性" name="gender" id="woman"><label for="woman">女性</label>
                </dd>
                <dt>どこでこのサイトを知りましたか?<span>※</span></dt>
                <dd class="checkboxRequired">
                    <input type="checkbox" name="type[]" id="search" value="検索エンジン"> <label for="search">検索エンジン</label>
                    <input type="checkbox" name="type[]" id="friend" value="知人の紹介"> <label for="friend">知人の紹介</label>
                    <input type="checkbox" name="type[]" id="mail_magazine" value="メルマガ"> <label for="mail_magazine">メルマガ</label>
                    <input type="checkbox" name="type[]" value="その他" id="etc" class="validate add_text"> <label for="etc">その他</label>
                    <input type="text" name="etc_text" value="">
                </dd>
                <dt>お問い合わせ内容<span>※</span></dt>
                <dd>
                    <textarea id="inquiry" name="inquiry"rows="10" cols="60"class="validate required"></textarea>
                </dd>
            </dl>
            <p><input type="submit" value="送信"></p>
        </form>
    </div>
</body>
<script>
(function(){
	"use strict";
})();
</script>
</html>
