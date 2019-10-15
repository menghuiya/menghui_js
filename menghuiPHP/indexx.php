<?php include("config.php");?>
<!DOCTYPE html>
<html>

	<head>
		<meta charset="UTF-8">
		<title>梦回留言本</title>
	</head>

	<body>
		<h2>梦回留言本</h2> 
		<h4> <a href="add.php">我也要留言</a> </h4>
		<hr />
		<?php			
			$sql ="SELECT id,mh_name,mh_content,mh_qq,mh_email,mh_time FROM liuyanben";
			$result =mysqli_query($conn,$sql);
			if($result && mysqli_num_rows($result)>0){ ?>
				<table border="1" cellpadding="5" cellspacing="0" align="center" width="50%" >
				<tr align="center">
					<td>ID</td>
					<td>评论昵称</td>
					<td>评论内容</td>
					<td>评论头像</td>
					<td>评论邮箱</td>
					<td>提交时间</td>
				</tr>
				<?php while($row = mysqli_fetch_assoc($result)){ 
					echo '<tr align="center">';
					?>
					<td><?php echo $row['id']; ?></td>
					<td><?php echo $row['mh_name']; ?></td>
					<td><?php echo $row['mh_content']; ?></td>
					<td><img src="https://q4.qlogo.cn/headimg_dl?dst_uin=<?php echo $row['mh_qq']; ?>&spec=100"/ width="76px" height="76px"></td>
					<td><?php echo $row['mh_email']; ?></td>
					<td><?php echo $row['mh_time']; ?></td>
				<?php } 
				echo '</tr>'
				?>
				
				</table>
				<?php echo '<h3>共有'.mysqli_num_rows($result).'条记录</h3>'; 
			}else{
				echo '<h2>没有任何数据</h2>';
			} ?>
			<!-- // $sql ="SELECT id,mh_name,mh_content,mh_email,mh_time FROM liuyanben";
			// $result =mysqli_query($conn,$sql);
			// if($result && mysqli_num_rows($result)>0){
			// 	$row = mysqli_fetch_assoc($result);
			// 	echo '<pre>';
			// 		print_r($row[mh_time]);
			// 		echo $row['mh_time']; 
					
			// 	// echo '<h3>共有'.mysqli_num_rows($result).'条记录</h3>';
			// }else{
			// 	echo"没有任何东西";
			// }
			// echo "<script>alert('你是猪吗');</script>";
			// echo '<script>alert("你是猪吗");</script>';
            <h2><?php echo $row['mh_time']; ?></h2> -->
             
	</body> 

</html>