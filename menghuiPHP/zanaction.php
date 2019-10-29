<?php include("config.php");?>
<?php
	$sql="select * from mes_info where contentid=13 and ip='13.15.254.112'";
	$result = mysqli_query($conn,$sql);
	$sqlallnum=mysqli_num_rows($result);
	if($result && $sqlallnum<1){
		$sqls="insert mes_info(contentid,ip) values(13,'13.15.254.112')";
		mysqli_query($conn, $sqls);
		$sql="select * from mes_info where contentid=13";
		$result = mysqli_query($conn,$sql);
		$sqlallnum=mysqli_num_rows($result);
		echo $sqlallnum;
	}else{
		$sql="select * from mes_info where contentid=13";
		$result = mysqli_query($conn,$sql);
		$sqlallnum=mysqli_num_rows($result);
		echo '已经赞+'.$sqlallnum;
	}
?>