<?php
    header('Content-type:text/html;charset=utf-8');
	include("config.php");
	$name=$_COOKIE['username'];
	$sql = "select * from user where username='$name'";
	$result = mysqli_query($conn,$sql);
	if($result && mysqli_num_rows($result)>0){
		$row = mysqli_fetch_assoc($result);
	    if(isset($_COOKIE['username']) && $_COOKIE['username']===$row['username']){
	        if(setcookie('username',$_POST['username'],time()-3600)&&setcookie('password',$_POST['password'],time()-3600)){
//	            header('location:skip.php?url=index.php&info=注销成功，正在跳转！');
				echo "OK";
	        }else{
//	            header('location:skip.php?url=index.php&info=注销失败，请稍后重试！');
				echo "NO";
	        }
	    }
	}else{
		echo "没有数据！";
	}
?>