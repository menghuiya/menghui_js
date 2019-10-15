<?php
//$name = $_POST["u"];
//$pwd = md5($_POST["p"]);
include("config.php");
$name=$_COOKIE['username'];
$sql = "select * from user where username='$name'";
$result = mysqli_query($conn,$sql);
if($result && mysqli_num_rows($result)>0){
$row = mysqli_fetch_assoc($result);
//echo $row['password'];
if($row['password'] == $_COOKIE['password'] &&$row['username'] == $_COOKIE['username'] )
{	
    echo "alert('您已登录');"; //调用函数写出是否已经登录
}
else
{
    echo "alert('用户未登录');location.href='login.php';";
}
}else{
	echo "alert('请先登录');location.href='login.php';";
}

//echo $_COOKIE['admin'];
//echo'function getdlrs(){
//			onload =function(){
//				var denglu=document.getElementById("getdenglu");
//				denglu.innerHTML="你好";
//			}
//			
//		}'
?>
