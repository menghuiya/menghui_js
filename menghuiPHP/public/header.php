<!DOCTYPE html>
<html lang="zh">

	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<title>梦回留言记录</title>
		<script type="text/javascript" src="js/jquery-1.11.0.js" ></script>
		<link rel="stylesheet" type="text/css" href="css/index.css" />
	</head>
	
		
	<body>
		<div class="header">
			<header> <span id="">设为首页</span>&ensp;<span id="">收藏本站</span><span class=" fr" id="getgetdenglu">登录</span></header>
		</div>
		<div class="logo">
			<a href="./"><img src="img/logo.png" /></a>
			<div class="searchs fr">
				<i class="searchimg"></i>
				<input type="text" name="search" id="search" placeholder="请输入任意内容搜索留言" />
				<input type="button" name="searchbtn" id="searchbtn" value="搜索一下" />
			</div>
		</div>
		<?php $a=$_COOKIE['username'];
		if($a!=''){
			echo '<script type="text/javascript">
			 var a = document.getElementById("getgetdenglu");
			 a.innerHTML="欢迎您：'.$a.'";
		</script>';
		} else{
			echo '<script type="text/javascript">
			 var a = document.getElementById("getgetdenglu");
			 a.innerHTML="欢迎您：游客";
		</script>';
		}			
		
			?>