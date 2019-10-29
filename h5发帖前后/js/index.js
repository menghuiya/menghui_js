//查找数据
window.onload = function() {
	var target = document.getElementById("content");
	if(localStorage.length > 0) {
		for(var i = 0; i < localStorage.length; i++) {
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			target.innerHTML += "<div id='conmain'><div id='qqlogs'><img src='https://q4.qlogo.cn/headimg_dl?dst_uin=1274323054&spec=100' / width='50px' height='50px' class='qqlogs fl'><span class='authers'>梦回网友1号</span> <br /><span class='dates'>今天20:06</span> <img src='img/musc.png' / height='15px' class='qqmusic'><span class='qqmusicbt'>大田后生仔-林啟得</span></div><div id='textcont'><span class='textss'>" + value + "</span></div><div id='imgcont'>" + key + "</div><div id='mainhot'><img src='img/phone.png' / height='15px'> <span class='phonexh'>xiaomi mi 8 lite(黑色)</span> <br /><img src='img/hot.png' / height='14px' width='14px' class='hotimg'> <span class='hottext'>热度 999℃</span><img src='img/zf.png' / class='dzimg fr'><img src='img/ss.png' / class='dzimg fr'><img src='img/dz.png' / class='dzimg fr'></div><input type='text' name='pinglun' id='pl' placeholder='评论' /></div>";
		}
	} else {
		target.innerHTML = "<h2>当前数据库中无内容</h2> <a href='admin/index.html'>点击增加图文信息</a>";
	}

}

function add(){
	alert("正在进入编辑页面");
	window.location.href = "admin/index.html";
}
