<?php
	include('dbconect.php');

	mysql_query('DELETE FROM item_table WHERE id='.mysql_real_escape_string($_GET['id']).' LIMIT 1') or die(mysql_error());
	header('Location: output.php');
	exit;
?>