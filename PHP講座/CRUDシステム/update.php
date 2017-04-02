<?php
	include('dbconect.php');

	//データの変更
	if(isset($_POST['id']) && is_numeric($_POST['id'])){
		mysql_query('UPDATE item_table SET 
			item_name="'.mysql_real_escape_string($_POST['item_name']).'" 
			, price="'.mysql_real_escape_string($_POST['price']).'" 
			WHERE id='.mysql_real_escape_string($_POST['id']));
		header('Location: output.php');
		exit;
	}

	$rows = mysql_query('SELECT * FROM item_table WHERE id=' .mysql_real_escape_string($_GET['id'])) or die(mysql_error());
	$row = mysql_fetch_assoc($rows);

?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>CRUDシステム</title>
</head>
<style>
	table tr td{
		height: 50px;
	}
	.kome{
		color: red;
	}
</style>
<body>
<h1>商品を更新する</h1>
<form action="update.php" method="post">
<table>
	<tr>
		<th>カテゴリ</th>
		<td>
			<select name="genre_id">
				<option value=""></option>
				<!-- くだもの -->
				<?php if($row['genre_id'] == 1): ?>
					<option value="1" selected="selected">くだもの</option>
				<?php else: ?>
					<option value="1">くだもの</option>
				<?php endif; ?>

				<!-- やさい -->
				<?php if($row['genre_id'] == 2): ?>
					<option value="2" selected="selected">やさい</option>
				<?php else: ?>
					<option value="2">やさい</option>
				<?php endif; ?>

				<!-- 菓子 -->
				<?php if($row['genre_id'] == 3): ?>
					<option value="3" selected="selected">菓子</option>
				<?php else: ?>
					<option value="3">菓子</option>
				<?php endif; ?>
			</select>
		</td>
		<td class="kome">
			<?php if(isset($_POST['genre_id']) && $error['genre_id'] == 'blank'): ?>
				※カテゴリを入れろ
			<?php endif; ?>
		</td>
	</tr>
	<tr>
		<th>商品名</th>
		<td>
			<input type="text" name="item_name" size="20"
				value="<?php print(htmlspecialchars($row['item_name'])); ?>"
			>
		</td>
	</tr>
	<tr>
		<th>価格</th>
		<td>
			<input type="text" name="price" size="10"
				value="<?php print(htmlspecialchars($row['price'])); ?>"
			>
		</td>
	</tr>
	<td>
		<input type="submit" value="更新">
	</td>
</table>
<input type="hidden" name="id" value="<?php print(htmlspecialchars($row['id'])); ?>">
</form>
</body>
</html>
