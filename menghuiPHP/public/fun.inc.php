<?php
//$name = $_POST["u"];
//$pwd = md5($_POST["p"]);
include("config.php");
$name=$_COOKIE['username'];
$sqlg = "select * from user where username='$name'";
$resultg = mysqli_query($conn,$sqlg);
if($resultg && mysqli_num_rows($resultg)>0){
$rowg = mysqli_fetch_assoc($resultg);
//	global $qq;
//	global $uname;
	$qq= $rowg['qq'];
	$uname =$rowg['username'];
}else{
	$qq=1274323054;
}
?>