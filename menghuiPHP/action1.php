<?php
$name = $_POST["u"];
$pwd = md5($_POST["p"]);
include("config.php");
//$sql ="SELECT id,mh_name,mh_content,mh_qq,mh_email,mh_time FROM liuyanben order by mh_time desc LIMIT {$offset},{$num}";
//$result =mysqli_query($conn,$sql);
$sql = "select * from user where username='$name'";
$result = mysqli_query($conn,$sql);
if($result && mysqli_num_rows($result)>0){
$row = mysqli_fetch_assoc($result);
//echo $row['password'];
if($pwd == $row['password'] && $pwd!="")
{
	setcookie("username", "$name", time()+3600);	
	setcookie("password", "$pwd", time()+3600);	
    echo "OK";
}
else
{
    echo "NO";
}
}else{
	echo '没有任何数据';
}

function loginOut(){
	
}
?>