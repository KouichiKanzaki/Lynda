<?php
include('dbconect.php');

$error = [];
if(isset($_POST['action']) && $_POST['action'] == 'submit'){

	if($_POST['genre_id'] == ''){
		$error['genre_id'] = 'blank';
	}
	if($_POST['item_name'] == ''){
		$error['item_name'] = 'blank';
	}
	if($_POST['price'] == ''){
		$error['price'] = 'blank';
	}else if(!is_numeric($_POST['price'])){
		$error['price'] = 'number';
	}
	print_r($error);
	if(count($error) === 0){
		mysql_query('INSERT INTO item_table SET 
		item_name="'.mysql_real_escape_string($_POST['item_name']).'",
		genre_id="'.mysql_real_escape_string($_POST['genre_id']).'",
		price='.mysql_real_escape_string($_POST['price'])) or die(mysql_error());
		header('Location: output.php');
		exit();
	}
}
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
<h1>商品を登録する</h1>
<form action="index.php" method="post">
<table>
	<tr>
		<th>カテゴリ</th>
		<td>
			<select name="genre_id">
				<option value=""></option>
				<!-- くだもの -->
				<?php if($_POST['genre_id'] == 1): ?>
					<option value="1" selected="selected">くだもの</option>
				<?php else: ?>
					<option value="1">くだもの</option>
				<?php endif; ?>

				<!-- やさい -->
				<?php if($_POST['genre_id'] == 2): ?>
					<option value="2" selected="selected">やさい</option>
				<?php else: ?>
					<option value="2">やさい</option>
				<?php endif; ?>

				<!-- 菓子 -->
				<?php if($_POST['genre_id'] == 3): ?>
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
			<?php if(isset($_POST['action']) && $_POST['action'] == 'submit'): ?>
				value="<?php print($_POST['item_name']) ?>"
			<?php endif; ?>
			>
		</td>
		<td class="kome">
			<?php if(isset($_POST['item_name']) && $error['item_name'] == 'blank'): ?>
				※商品名を入力しろ
			<?php endif; ?>
		</td>
	</tr>
	<tr>
		<th>価格</th>
		<td>
			<input type="text" name="price" size="10"
			<?php if(isset($_POST['action']) && $_POST['action'] == 'submit'): ?>
				value="<?php print($_POST['price']) ?>"
			<?php endif; ?>
			>
		</td>
		<td class="kome">
			<?php if(isset($_POST['price']) && $error['price'] == 'blank'): ?>
				※カネを入力しろ
			<?php elseif(isset($_POST['price']) && $error['price'] == 'number'): ?>
				※数値を入力しろ
			<?php endif; ?>
		</td>
	</tr>
	<td>
		<input type="submit" value="登録">
	</td>
</table>
<input type="hidden" name="action" value="submit">
</form>
</body>
</html>
