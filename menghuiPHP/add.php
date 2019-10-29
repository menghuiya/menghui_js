<?php include("public/header.php");?>

	<script type="text/javascript">
		if(document.cookie.length>0){
			<?php include("yanzheng.php");  ?>
		}else{
			alert("请登录");
			window.location.href='index.php';
		}
		
	</script>
</head>
<body>
	<div id="mh_addpage">
			<form action="action.php?action=add" method="post">
				<label for="mh_name">留言昵称：</label>
				<input type="text" name="mh_name" id="mh_name" placeholder="输入昵称"/ value="梦回网友" required>				
				<label for="mh_email">留言QQ：</label>
				<input type="text" name="mh_qq" id="mh_qq" placeholder="输入QQ"/ required>
				<label for="mh_email">留言邮箱：</label>
				<input type="email" name="mh_email" id="mh_email" placeholder="输入邮箱"/ required> <br /><br />
				<label for="mh_content" class="contentps">请在下面输入您的留言内容</label> <br /><br />
				<textarea name="mh_content" rows="10" cols="60" id="mh_content" required></textarea><br />
				<input type="submit" value="点击提交" id="mh_addbtn"/ > 
			</form>
		</div>
</body>
</html>