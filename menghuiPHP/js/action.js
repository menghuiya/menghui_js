var logins = document.getElementById("loginbtns");
var regist = document.getElementById("indexregist"); //首页显示的注册按钮
var giveup = document.getElementById("giveup");
var regiveup = document.getElementById("regiveup"); //注册页面的取消按钮
var loginpage = document.getElementById("loginpage");
var registpage = document.getElementById("registpage"); //注册隐藏页面
var box = document.getElementById("boxxx");
var registbox = document.getElementById("registbox"); //注册隐藏页面box
var loginbtn = document.getElementById("loginbtn");
var registbtn = document.getElementById("registbtn"); //登录页面的注册按钮
var zanshu = document.getElementById("zanshu"); //文章点赞数量
var zanyige = document.getElementById("zanyige"); //文章点赞数量
logins.onclick = function() {
	loginpage.style.display = "block";
	box.style.display = "block";
}
giveup.onclick = function() {
	loginpage.style.display = "none";
	box.style.display = "none";
}
regist.onclick = function() {
	registbox.style.display = "block";
	registpage.style.display = "block"
}
regiveup.onclick = function() {
	registbox.style.display = "none";
	registpage.style.display = "none"
}
registbtn.onclick = function() {
	loginpage.style.display = "none";
	box.style.display = "none";
	registbox.style.display = "block";
	registpage.style.display = "block"
}
$(function() {
	$("#registpage").draggable();
});
$(function() {
	$("#loginpage").draggable();
});
$(document).ready(function(e) {
	$("#loginbtn").click(function() { //给按钮加点击事件

		//取用户名和密码
		var u = $("#uid").val(); //取输入的用户名
		var p = $("#pwd").val(); //取输入的密码
		if(u.length > 0 && p.length > 0) {
			//调ajax
			$.ajax({
				url: "action.php?action=login",
				data: {
					u: u,
					p: p
				}, //第二个u和p只是变量，可以随意写，dengluchuli.php里面的u和p都是第一个。
				type: "POST",
				dataType: "TEXT",
				success: function(data) {
					if(data.trim() == "OK") //要加上去空格trim，防止内容里面有空格引起错误。
					{
						alert("登录成功")
						box.style.display = "none";
						loginpage.style.display = "none";
						window.location.href = "index.php"; //js跳转页面，要记住。
					} else {
						alert("密码错误")
					}
				}
			});
		} else {
			alert("请检查账号密码正确性！")
		}
	})
});
$(document).ready(function(e) {
	$("#indexlogout").click(function() { //给按钮加点击事件

		//调ajax
		$.ajax({
			url: "action.php?action=logout",
			type: "POST",
			dataType: "TEXT",
			success: function(data) {
				if(data.trim() == "OK") //要加上去空格trim，防止内容里面有空格引起错误。
				{
					alert("注销成功")
					window.location.href = "index.php"; //js跳转页面，要记住。
				} else {
					alert("注销失败，发生意外")
				}

			}

		});

	})
});
//点赞事件
//$(document).ready(function(e) {
//	$("#zanyige").click(function() { //给按钮加点击事件
//		var praise = $(this);
//		var actid=zanyige.name;
//		//调ajax
//		$.ajax({
//			url: "action.php?action=dianzan",
//			type: "POST",
//			data: {
//				actid:actid
//				},
//			dataType: "TEXT",
//			success: function(data) {				
////					zanshu.innerHTML=data;
//					alert(data)
//			},
//			error: function(){
//              alert("error");
//        	}
//		});
//
//	})
//});
function dianzan(x){
		var actid=x.name;
		var zanshu=x.getElementsByTagName('span');
		//调ajax
		$.ajax({
			url: "action.php?action=dianzan",
			type: "POST",
			data: {
				actid:actid
				},
			dataType: "TEXT",
			success: function(data) {				
					zanshu[0].innerHTML=data;
			},
			error: function(){
                alert("error");
          	}
		});
}
