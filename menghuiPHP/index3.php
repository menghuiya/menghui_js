<?php include("config.php");?>
<!DOCTYPE html>
<html lang="zh">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta http-equiv="X-UA-Compatible" content="ie=edge" />
	<title>测试分页功能</title>
</head>
<body>
<?php 
	$num =6;
	$page = isset($_GET['p'])? $_GET['p'] : 1;
	
	//如果当前已经是首页了
	$Previous = ($page - 1)<1?1:($page-1);   //防止上一页溢出
	//计算显示的偏移量
	$offset =($page-1)*$num;
	
	//总数获取
	
	$sql ="SELECT id,mh_name,mh_content,mh_qq,mh_email,mh_time FROM liuyanben LIMIT {$offset},{$num}";	
	$result =mysqli_query($conn,$sql);
	if($result && mysqli_num_rows($result)>0){ ?>  <!--//$row是一个二维数组-->
		
		<!--//获取表中记录总数-->
		<?php 
		    $sqls ="select count(*) as count from liuyanben";
			if($tempRes=mysqli_query($conn, $sqls)){
				$rows =mysqli_fetch_assoc($tempRes);
				$count =$rows['count']; //记录总数
			}
  			
			
			?>
		
		<!--//遍历-->
		<h2 align="center">留言列表</h2>
		<table border="1" cellspacing="0" cellpadding="0" align="center" width="50%">
		<tr align="center" bgcolor="#87ceeb"><td>ID</td><td>标题</td><td>内容</td></tr>
		<?php  while($row = mysqli_fetch_assoc($result)){  ?>
			<tr>
			<td><?php echo $row['id']; ?></td>
			<td><?php echo $row['mh_name']; ?></td>
			<td><?php echo $row['mh_content']; ?></td>
			</tr>
		<?php } ?>
		</table>
	<?php 
	    //释放结果集；
	    mysqli_free_result($result);
		//关闭连接
		mysqli_close($conn);
		}else{
		echo '无数据';
	}   
		// 如果到了最后一页，就不再往后跳转了
		//计算总页数， =总记录数 /单页显示数量
		$total =ceil($count / $num);
		if($page>=$total){
			$page =$total-1;
			echo '<script>alert("您已经到达最后一页");</script>';
		}
		echo '<p>总数是'.$count.'</p>';
		echo '<p align="center">';
		echo '<a href="?p='.($Previous).'">上一页</a>';
		for ($p; $p<$total;$p++){
			echo '<a href="?p='.$p.'">'.$p.'</a>';
			echo ' ';
		}
		
		echo '<a href="?p='.($page+1).'">下一页</a>';
		
	?>
		<a href=""></a>
		<p></p>
</body>
</html>