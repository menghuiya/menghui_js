
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>梦回留言管理员登录</title>
		<script type="text/javascript" src="js/jquery-1.11.0.js" ></script>
	</head>
	<?php
		include("config.php");
		$name=$_COOKIE['username'];
		$sql = "select * from user where username='$name'";
		$result = mysqli_query($conn,$sql);
		if($result && mysqli_num_rows($result)>0){
		$row = mysqli_fetch_assoc($result);
		//echo $row['password'];
		if(basename(__FILE__)=='login.php'&&$row['password'] == $_COOKIE['password'] &&$row['username'] == $_COOKIE['username'] )
		{	
		    echo "<script>alert('您已经登录过，无需登录');location.href='index2.php';</script>";
		}
		}?>
	<body>
	<div>用户名：<input type="text" id="uid" /></div>
	<div>密码：<input type="text" id="pwd" /></div>
	<div><input type="button" value="登录" id="btn" /></div>
	</body>

	<script type="text/javascript">
	
	$(document).ready(function(e) {
	    $("#btn").click(function(){//给按钮加点击事件
	        
	        //取用户名和密码
	        var u = $("#uid").val();//取输入的用户名
	        var p = $("#pwd").val();//取输入的密码
	        
	        //调ajax
	        $.ajax({            
	            url:"action1.php",
	            data:{u:u,p:p},//第二个u和p只是变量，可以随意写，dengluchuli.php里面的u和p都是第一个。
	            type:"POST",
	            dataType:"TEXT",
	            success: function(data){
	                    if(data.trim()=="OK")//要加上去空格trim，防止内容里面有空格引起错误。
	                    {   
	                    	alert("登录成功")
	                        window.location.href="add.php";//js跳转页面，要记住。
	                    }
	                    else
	                    {
	                      alert("密码错误")
	                    }
	            
	                }
	            
	            });
	        
	        })
	});
	</script>
</html>
