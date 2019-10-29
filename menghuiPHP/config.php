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

	if (!empty($_SERVER['HTTP_CLIENT_IP']))//获取IP地址
	//ip是否来自共享互联网
	{
		$ip_address = $_SERVER['HTTP_CLIENT_IP'];
	}
	//ip是否来自代理
	elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
		$ip_address = $_SERVER['HTTP_X_FORWARDED_FOR'];
	}
	//ip是否来自远程地址
	else {
		$ip_address = $_SERVER['REMOTE_ADDR'];
	}
?>