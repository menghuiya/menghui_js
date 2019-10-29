<?php
$action=$_GET['action'];
if($action == 'login'){
loginpanduan();
}

function loginpanduan(){
	include("config.php");
	$names=$_COOKIE['username'];
	$sql = "select * from user where username='admin'";
	$result = mysqli_query($conn,$sql);	
		if($result && mysqli_num_rows($result)>0){
			$row = mysqli_fetch_assoc($result);
			echo "OK";
			
		}else{
			echo "没有数据";
		}
}
?>