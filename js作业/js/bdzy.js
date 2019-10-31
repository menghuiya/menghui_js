//确认协议后，选中打勾
function mhQueRen() {
	var mhch = document.getElementById("zhuce_qrzc").checked;
	var mhqr = document.getElementById("mh_zhuce_qr");
	if (mhch == true) {
		mhqr.style.background = "#0066B3";
		mhqr.style.border = "#0066B3";
		mhqr.disabled = false;
	} else {
		mhqr.style.background = "#CCCCCC";
		mhqr.style.border = "#CCCCCC";
	}

}
//确认协议后，点击同意后
function csshi() {
	var a = document.getElementById("zhuce_page1");
	var b = document.getElementById("zhuce_page4");
	var s = document.getElementById("zhuce_nav1");
	var s1 = document.getElementById("zhuce_nav4");
	a.style.display = "none";
	b.style.display = "block";
	s.style.color = "#999999";
	s1.style.color = "#0066B3";
}



//返回上一页
function mhLast2() {
	var a = document.getElementById("zhuce_page1");
	var b = document.getElementById("zhuce_page4");
	var s = document.getElementById("zhuce_nav1");
	var s1 = document.getElementById("zhuce_nav4");
	a.style.display = "block";
	b.style.display = "none";
	s.style.color = "#0066B3";
	s1.style.color = "#999999";
}

function mhNextbtn4() {
	var mh1s = document.getElementById("mh-zhuce_zhuce")//获取提交按钮
	var mh1 = document.getElementById("mh_zhuceuser").value; //用户名
	var mh2 = document.getElementById("mh_zhucepwd").value; //第一次密码
	var mh3 = document.getElementById("mh_zhucepwdconfirm").value; //重复密码
	var mh4 = document.getElementById("sex1").checked; //性别选择
	var mh4s = document.getElementById("sex2").checked; //性别选择
	var mh5 = document.getElementById("mh_zhuceEmail").value; //邮件地址
	var mh6 = document.getElementById("mh_zhucePhonenum1").value; //手机号码
	if (mh1.length > 2 && mh2.length > 6 && mh3.length > 6 && mh5.length > 0 && mh6.length == 11 && (mh4 == true || mh4s == true)) {
		mh1s.style.background = "#0066B3";
		mh1s.style.border = "#0066B3";
		mh1s.disabled = false;
	} else {
		alert("请检查信息完整性，正确性");
	}
}
//跳转到最后一页
function mhNext4(){
	var a=document.getElementById("zhuce_page4");
	var b=document.getElementById("zhuce_page5");
	var s=document.getElementById("zhuce_nav4");
	var s1=document.getElementById("zhuce_nav5");
	a.style.display="none";
	b.style.display="block";
	s.style.color="#999999";
	s1.style.color="#0066B3";
}
//判断图片是否显示

document.onkeyup = function(input){
	var reg=/^[z-zA-z\d]+[\.\-\_\a-zA-Z\d]*\@[a-zA-Z\d]+(\.[a-zA-Z]{2,4})+$/;//邮箱正则表表达式
	var regs=/^1[3|4|5|7|8|9]\d{9}$/; //手机号正则表达式
	var btns = document.getElementById("mh-zhuce_zhuce"); //提交按钮
	var mh1=document.getElementById("mh_zhuceuser").value; //用户名
	var mhss1=document.getElementById("mh_zhuce_laterimg1");
	var mh2=document.getElementById("mh_zhucepwd").value; //第一次密码
	var mhss2=document.getElementById("mh_zhuce_laterimg2");
	var mh3=document.getElementById("mh_zhucepwdconfirm").value; //重复密码
	var mhss3=document.getElementById("mh_zhuce_laterimg3");
	var mh5=document.getElementById("mh_zhuceEmail").value; //邮件地址
	var mhss5=document.getElementById("mh_zhuce_laterimg5");
	var mh6=document.getElementById("mh_zhucePhonenum1").value; //手机号码
	var mhss6=document.getElementById("mh_zhuce_laterimg6");
	var mh8=document.getElementById("mh_zhucearea").value; //户籍地址
	var mhss8=document.getElementById("mh_zhuce_laterimg8");
	var mh10=document.getElementById("mh_zhuceBeizhu").value; //备注
	var mhss10=document.getElementById("mh_zhuce_laterimg10");
	var tps1=document.getElementById("tps1"); //提示信息1
	var tps2=document.getElementById("tps2"); //提示信息2
	var tps3=document.getElementById("tps3"); //提示信息3
	var tps5=document.getElementById("tps5"); //提示信息5
	var tps6=document.getElementById("tps6"); //提示信息6
	var tps8=document.getElementById("tps8"); //提示信息8
	if(mh1.length>1&&mh1.length<5&&"mh_zhuceuser"==document.activeElement.id) {
		mhss1.style.display="inline-block";
		mhss1.src="img/zhuce_yishuru.png"
		tps1.style.color="#00FF00";
		tps1.innerHTML="用户名输入正确！";
	}
	if((mh1.length<2||mh1.length>4)&&"mh_zhuceuser"==document.activeElement.id){
		// mhss1.style.display="none";
		mhss1.src="img/cuowu.png";
		tps1.style.color="red";
		tps1.innerHTML="用户名输入超过四个或者低于两个字符";
	}
	if(mh2.length==6&&"mh_zhucepwd"==document.activeElement.id){   //密码大于5位数
		mhss2.style.display="inline-block";
		mhss2.src="img/zhuce_yishuru.png"
		tps2.style.color="#00FF00";
		tps2.innerHTML="密码位数正确！";
	}
	if(mh2.length!=6&&"mh_zhucepwd"==document.activeElement.id){   //密码大于5位数
		// mhss2.style.display="none"; 
		mhss2.src="img/cuowu.png";
		tps2.style.color="red";
		tps2.innerHTML="密码不等于6位数";
	}
	if(mh3==mh2&&mh3.length>5&&"mh_zhucepwdconfirm"==document.activeElement.id){ //第一次第二次密码相同而且大于5位数
		mhss3.style.display="inline-block";
		mhss3.src="img/zhuce_yishuru.png";
		tps3.style.color="#00FF00";
		tps3.innerHTML="两次密码相同！";
	}
	if((mh3!=mh2||mh3.length<5)&&"mh_zhucepwdconfirm"==document.activeElement.id){ //第一次第二次密码相同而且大于5位数
		// mhss3.style.display="none";
		mhss3.src="img/cuowu.png";
		tps3.style.color="red";
		tps3.innerHTML="两次密码不相同";
	}
	if(reg.test(mh5)==true&&"mh_zhuceEmail"==document.activeElement.id){ //邮箱验证正确
		mhss5.style.display="inline-block";
		mhss5.src="img/zhuce_yishuru.png";
		tps5.style.color="#00FF00";
		tps5.innerHTML="邮箱输入正确！";
	}
	if(reg.test(mh5)==false&&"mh_zhuceEmail"==document.activeElement.id){ //邮箱验证不正确
		// mhss5.style.display="none";
		mhss5.src="img/cuowu.png";
		tps5.style.color="red";
		tps5.innerHTML="邮箱地址输入不正确";
	}
	if(regs.test(mh6)==true&&"mh_zhucePhonenum1"==document.activeElement.id){ //手机号验证正确
		mhss6.style.display="inline-block";
		mhss6.src="img/zhuce_yishuru.png";
		tps6.style.color="#00FF00";
		tps6.innerHTML="手机号码输入正确！";
	}
	if(regs.test(mh6)==false&&"mh_zhucePhonenum1"==document.activeElement.id){ //手机号验证不正确
		// mhss6.style.display="none";
		mhss6.style.display="inline-block";
		mhss6.src="img/cuowu.png";
		tps6.style.color="red";
		tps6.innerHTML="手机号输入不正确";
	}
	if(mh8.length>8&&"mh_zhucearea"==document.activeElement.id){ //户籍地址
		mhss8.style.display="inline-block";
		mhss8.src="img/zhuce_yishuru.png";
		tps8.style.color="#00FF00";
		tps8.innerHTML="户籍地址输入正确！";
	}
	if(mh8.length<8&&"mh_zhucearea"==document.activeElement.id){ //户籍地址
		// mhss8.style.display="none";
		mhss8.src="img/cuowu.png";
		tps8.style.color="red";
		tps8.innerHTML="户籍地址输入低于8个字符";
	}
	if(mh10.length>0&&"mh_zhuceBeizhu"==document.activeElement.id){ //备注
		mhss10.style.display="inline-block";
		mhss10.src="img/zhuce_yishuru.png";
	}else{
		mhss10.style.display="none";
	}
	if (mh1.length>1&&mh1.length<5&&mh2.length==6&&mh3==mh2&&reg.test(mh5)==true&&regs.test(mh6)==true) {
		btns.style.background = "#0066B3";
		btns.style.border = "#0066B3";
		btns.disabled = false;
	} else {
		btns.style.background = "#4C9DD9";
		btns.style.border = "#4C9DD9";
		btns.disabled = true;
	}
	if (mh1.length>1&&mh1.length<5&&mh2.length==6&&mh3==mh2&&reg.test(mh5)==true&&regs.test(mh6)==true) {
		btns.style.background = "#0066B3";
		btns.style.border = "#0066B3";
		btns.disabled = false;
	} else {
		btns.style.background = "#4C9DD9";
		btns.style.border = "#4C9DD9";
		btns.disabled = true;
	}
	
}
document.onchange = function(){
	var mh4=document.getElementById("sex1").checked; //性别选择
	var mh4s=document.getElementById("sex2").checked; //性别选择
	var mhss4=document.getElementById("mh_zhuce_laterimg4");
	var mh7=document.getElementById("mh_zhuceDate").value; //时间
	var mhss7=document.getElementById("mh_zhuce_laterimg7");
	if(mh4==true||mh4s==true){
		mhss4.style.display="inline-block";
	}
	if(mh4==false&&mh4s==false){
		mhss4.style.display="none";
	}
	if(mh7.length==10){
		mhss7.style.display="inline-block";
	}
	if(mh7.length!=10){
		mhss7.style.display="none";
	}
}
//提交检测内容是否输入完整
function mhZhucepost() {
	var mh1 = document.getElementById("mh_zhuceuser").value; //用户名
	var mh2 = document.getElementById("mh_zhucepwd").value; //第一次密码
	var mh3 = document.getElementById("mh_zhucepwdconfirm").value; //重复密码
	var mh4 = document.getElementById("sex1").checked; //性别选择
	var mh4s = document.getElementById("sex2").checked; //性别选择
	var mh5 = document.getElementById("mh_zhuceEmail").value; //邮件地址
	var mh6 = document.getElementById("mh_zhucePhonenum1").value; //手机号码
	if (mh1.length > 0 && mh1.length < 5 && mh2.length > 0 && mh3.length > 0 && mh5.length > 0 && mh6.length > 0 && (mh4 == true || mh4s == true)) {
		mhNext4();
	} else {
		alert("请检查表单是否填写完整");
	}
}

function mhScuccess() {
	alert("暂时无法激活，请扫码打钱5000元！后激活，激活后账户余额5000元！")
}
