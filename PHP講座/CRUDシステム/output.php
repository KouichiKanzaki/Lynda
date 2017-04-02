<?php
include('dbconect.php');
define('COUNT_PER_PAGE', 3);

if(isset($_GET['page'])){
	$page = $_GET['page'];
}else{
	$page = 1;
}
$ofset = ($page - 1) * COUNT_PER_PAGE;

//最大ページを算出する
$count = mysql_query('SELECT count(*) FROM item_table') or die(mysql_error());
$cnt = mysql_fetch_array($count);
$maxpage = ceil($cnt[0] / COUNT_PER_PAGE);

//パラメータの検査
if($page <= 0 || $page > $maxpage){
	$page = 1;
	$ofset = 0;
}

//データベース取得
$rows = mysql_query('SELECT * FROM item_table LIMIT '.$ofset.', '.COUNT_PER_PAGE) or die(mysql_error());

?>
<html>
<head>
<meta charset="utf-8">
<title>標品管理</title>
</head>
<style>
	table tr td{
		height: 50px;
	}
	#to_page{
		margin-top: 10px;
		text-align: center;
	}
</style>
<body>
	<h1>標品管理</h1>
	<p><a href="index.php">商品を登録する</a></p>
<table>
	<tr>
		<th></th>
		<th>商品名</th>
		<th>価格</th>
		<th></th>
	</tr>
<?php
	while($row = mysql_fetch_assoc($rows)):
?>
	<tr>
		<th><?php print($row['id']); ?></th>
		<td><?php print($row['item_name']); ?></td>
		<td><?php print($row['price']); ?></td>
		<td><a href="update.php?id=<?php print($row['id']); ?>">変更</a>|
		<a href="delete.php?id=<?php print($row['id']); ?>"">削除</a></td>
	</tr>
<?php
	endwhile;
?>
</table>

<p id="to_page">

<?php if($page == 1): ?>
	前のページへ |
<?php else: ?>
	<a href="output.php?page=<?php print($page - 1); ?>">前のページへ |</a>
<?php endif; ?>

<?php if($page == $maxpage): ?>
	次のページへ
<?php else: ?>
<a href="output.php?page=<?php print($page + 1); ?>">次のページへ</a>
<?php endif; ?>
</p>
</body>
</html>