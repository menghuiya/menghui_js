<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>梦回注册页面</title>
	</head>
	<style type="text/css">
		html,body{
			width: 100%;
			height: 100%;
		}
		#registbox{
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			background: #73686f4a;
		}
		#registpage{
			width: 600px;
			height: 500px;
			font-size: 18px;
			background: #00bcd49e;
			border-radius: 10px;
			position: absolute;
			text-align: center;
		    top: 30%;
		    left: 50%;
		    margin: -150px 0 0 -300px;
		}
		#user_name,#user_psw,#user_psws,#user_qq,#user_email{
			width: 500px;
			height: 40px;
		    margin-bottom: 20px;
		    border: 2px solid #3F51B5;
		    border-radius: 5px;
		}
		.registbtn{
			    font-size: 18px;
			    width: 120px;
			    height: 45px;
			    margin: 20px;
			    background: #3F51B5;
			    color: white;
			    border: 1px solid #4259d8;
			    border-radius: 10px;
			    box-shadow: 3px 1px 5px #283682;
		}
	</style>
	<body>
		<p>111111111111111111111</p>
		<div id="registbox">
			<div id="registpage">
				<h2>梦回留言注册页面</h2>
				<form action="action.php?action=regist" method="post">
					<input type="text" name="username" id="user_name" placeholder="请输入用户名"/ required> <br />
					<input type="password" name="username" id="user_psw" placeholder="请输入密码"/ required> <br />
					<input type="password" name="username" id="user_psws" placeholder="请二次输入密码"/ required> <br />
					<input type="text" name="username" id="user_qq" placeholder="请输入qq"/ required> <br />
					<input type="email" name="username" id="user_email" placeholder="请输入邮箱"/ required> <br />
					<input type="submit" value="提交注册"/ class="registbtn" id="registbtn">
					<input type="button" value="取消注册"/ class="registbtn" id="regiveup">
				</form>
			</div>
		</div>
	</body>
	<script type="text/javascript" src="js/jquery-1.11.0.js" ></script>
  <script src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
	<script>
  $(function() {
    $( "#registpage" ).draggable();
  });
  </script>
</html>
