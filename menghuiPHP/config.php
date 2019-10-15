<?php
$db = [
	'db_host'=>'localhost',
	'db_user'=>'mhceshi',
	'db_pwd'=>'CX5201314',
	'db_name'=>'mhceshi'
];

//	//创建连接
	$conn = mysqli_connect($db['db_host'],$db['db_user'],$db['db_pwd'],$db['db_name']);
	//检测连接
//	if(!$conn){
//		die("数据库连接失败：".mysqli_connect_error());		
//	}else{
//		echo "数据库连接成功";
//	}
?>