<?php include("config.php");?>
<!DOCTYPE html>
<html lang="zh">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta http-equiv="X-UA-Compatible" content="ie=edge" />
	<title>梦回留言板</title>
	<script type="text/javascript">
		if(document.cookie.length>0){
			<?php include("yanzheng.php");  ?>
		}else{
			alert("请登录");
			window.location.href='login.php';
		}
		
	</script>
</head>
<body>
	<h2>梦回简易留言本添加页面</h2>
	<h3 id="getdenglu">未登录</h3>
	<hr />
	<form action="action.php?action=add" method="post">
		<label for="mh_name">留言昵称：</label>
		<input type="text" name="mh_name" id="mh_name" placeholder="输入昵称"/ value="梦回网友" required> <br /><br />
		<label for="mh_content">留言内容：</label><br />
		<textarea name="mh_content" rows="10" cols="60" required></textarea><br /><br />
		<label for="mh_email">留言QQ：</label>
		<input type="text" name="mh_qq" id="mh_qq" placeholder="输入QQ"/ required><br /><br />
		<label for="mh_email">留言邮箱：</label>
		<input type="email" name="mh_email" id="mh_email" placeholder="输入邮箱"/ required><br /><br />
		<input type="submit" value="点击提交"/> 
	</form>
<?php
// $sql ="SELECT id,mh_name,mh_content,mh_email,mh_time FROM liuyanben";
// $result =mysqli_query($conn,$sql);
// if($result && mysqli_num_rows($result)>0){
// 	$row = mysqli_fetch_assoc($result);
// 	echo '<pre>';
// 		print_r($row);
// }else{
// 	echo"没有任何东西";
// }
//echo "<script>alert('你是猪吗');</script>";
//echo '<script>alert("你是猪吗");</script>';
?>

</body>
</html>