function mhJhzh() {
	var mhxzzh = document.getElementById("mh_jhzh").checked;
	//var b=document.getElementById("mh_qbzh").checked;
	var sss = document.getElementById("mh_zhuce_gerenzc");
	var sss1 = document.getElementById("mh_zhuce_zhanghaozc");
	if(mhxzzh == true) {
		sss.style.display = "block";
		sss1.style.display = "none";
		//d.style.display="none"
		//c.style.display="block"
	} else {
		sss.style.display = "none";
		sss1.style.display = "block";
		//c.style.display="block"
		//d.style.display="none"

	}
}
//function mhJhqb(){
//	//var a=document.getElementById("mh_jhzh").checked;
//	var b=document.getElementById("mh_qbzh").checked;
//	var c=document.getElementById("mh_zhuce_gerenzc");
//	var d=document.getElementById("mh_zhuce_zhanghaozc");
//	if(b==true){
//		d.style.display="none"
//		c.style.display="block"		
//	}else{
//		c.style.display="block"
//		d.style.display="none"
//	}
//}

//第三页与第二页的变换
function mhNext(){
	var a=document.getElementById("zhuce_page2");
	var b=document.getElementById("zhuce_page3");
	var s=document.getElementById("zhuce_nav2");
	var s1=document.getElementById("zhuce_nav3");
	a.style.display="none";
	b.style.display="block";
	s.style.color="#999999";
	s1.style.color="#0066B3";
}
function mhNext2(){
	var a=document.getElementById("zhuce_page2");
	var b=document.getElementById("zhuce_page3");
	var s=document.getElementById("zhuce_nav2");
	var s1=document.getElementById("zhuce_nav3");
	a.style.display="none";
	b.style.display="block";
	s.style.color="#999999";
	s1.style.color="#0066B3";
}
function mhNext3(){
	var a=document.getElementById("zhuce_page3");
	var b=document.getElementById("zhuce_page4");
	var s=document.getElementById("zhuce_nav3");
	var s1=document.getElementById("zhuce_nav4");
	a.style.display="none";
	b.style.display="block";
	s.style.color="#999999";
	s1.style.color="#0066B3";
}

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

function mhLast1(){
	var a=document.getElementById("zhuce_page2");
	var b=document.getElementById("zhuce_page3");
	var s=document.getElementById("zhuce_nav2");
	var s1=document.getElementById("zhuce_nav3");
	a.style.display="block";
	b.style.display="none";
	s.style.color="#0066B3";
	s1.style.color="#999999";
}

function mhHuoqcoad(){
	var reg=/^1[3|4|5|7|8]\d{9}$/;
	var phonenum=document.getElementById("mh_phonecoad");
	var phonebums=document.getElementById("mh_zhucedxcode");
	if(reg.test(phonenum.value)==true){
		phonenum.value="";
		alert("短信验证码已发送,请在30分钟内填写！");
		phonebums.focus();
	}else{
		phonenum.value="";
		alert("手机号码填写错误，请更改号码！");
	}
}

function mhLast2(){
	var a=document.getElementById("zhuce_page3");
	var b=document.getElementById("zhuce_page4");
	var s=document.getElementById("zhuce_nav3");
	var s1=document.getElementById("zhuce_nav4");
	a.style.display="block";
	b.style.display="none";
	s.style.color="#0066B3";
	s1.style.color="#999999";
}


			document.onkeyup = function(mh_input){
				var reg=/^[z-zA-z\d]+[\.\-\_\a-zA-Z\d]*\@[a-zA-Z\d]+(\.[a-zA-Z]{2,4})+$/;//邮箱正则表表达式
		    	var regs=/^1[3|4|5|7|8|9]\d{9}$/; //手机号正则表达式
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
			    if(mh1.length>1&&mh1.length<5) {
			        mhss1.style.display="inline-block";
			    }
			    if(mh1.length<2||mh1.length>4){
			    	mhss1.style.display="none";
			    }
			    if(mh2.length>5){   //密码大于5位数
			    	mhss2.style.display="inline-block";
			    }
			    if(mh2.length<6){   //密码大于5位数
			    	mhss2.style.display="none"; 
			    }
			    if(mh3==mh2&&mh3.length>5){ //第一次第二次密码相同而且大于5位数
			    	mhss3.style.display="inline-block";
			    }
			    if(mh3!=mh2||mh3.length<5){ //第一次第二次密码相同而且大于5位数
			    	mhss3.style.display="none";
			    }
			    if(reg.test(mh5)==true){ //邮箱验证正确
			    	mhss5.style.display="inline-block";
			    }
			    if(reg.test(mh5)==false){ //邮箱验证不正确
			    	mhss5.style.display="none";
			    }
			    if(regs.test(mh6)==true){ //手机号验证正确
			    	mhss6.style.display="inline-block";
			    }
			    if(regs.test(mh6)==false){ //手机号验证不正确
			    	mhss6.style.display="none";
			    }
			    if(mh8.length>8){
			    	mhss8.style.display="inline-block";
			    }
			    if(mh8.length<8){
			    	mhss8.style.display="none";
			    }
			    if(mh10.length>0){
			    	mhss10.style.display="inline-block";
			    }else{
			    	mhss10.style.display="none";
			    }
			    
			}
			
			function mhImgchuxian(){
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
function mhZhucepost(){
	var mh1=document.getElementById("mh_zhuceuser").value; //用户名
	var mh2=document.getElementById("mh_zhucepwd").value; //第一次密码
	var mh3=document.getElementById("mh_zhucepwdconfirm").value; //重复密码
	var mh4=document.getElementById("sex1").checked; //性别选择
	var mh4s=document.getElementById("sex2").checked; //性别选择
	var mh5=document.getElementById("mh_zhuceEmail").value; //邮件地址
	var mh6=document.getElementById("mh_zhucePhonenum1").value; //手机号码
	if(mh1.length>0&&mh1.length<5&&mh2.length>0&&mh3.length>0&&mh5.length>0&&mh6.length>0&&(mh4==true||mh4s==true)){
		mhNext4();
	}else{
		alert("请检查表单是否填写完整");
	}
}

function mhScuccess(){
	alert("暂时无法激活，请扫码打钱5000元！后激活，激活后账户余额5000元！")
}

document.onkeydown = function(mh_inputss){
				var reg=/^[z-zA-z\d]+[\.\-\_\a-zA-Z\d]*\@[a-zA-Z\d]+(\.[a-zA-Z]{2,4})+$/;//邮箱正则表表达式
		    	var regs=/^1[3|4|5|7|8]\d{9}$/; //手机号正则表达式
		    	var btns=document.getElementById("mh-zhuce_zhuce"); //用户名
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
			    if(mh1.length>1&&mh1.length<5&&mh2.length>5&&mh3==mh2&&mh3.length>5&&reg.test(mh5)==true&&regs.test(mh6)==true&&mh8.length>10) {
			        btns.style.background="#0066B3";
			        btns.style.border="#0066B3";
			        btns.disabled=false;
			    }else{
			    	btns.style.background="#4C9DD9";
			        btns.style.border="#4C9DD9";
			        btns.disabled=true;
			    }
			    var c=document.getElementById("mh_zhuceyzm"); //第二页验证码是否输入
			    var d=document.getElementById("mh_zhuceyzm2");//第二页验证码是否输入
			    var f=document.getElementById("mh_zhucedxcode");//第三页短信验证码是否输入
			    if(c.value=="8hmw8") {
			        mhNextbtn();
			    }
			    if(d.value=="8hmw8") {
			        mhNextbtn2();
			    }
			    if(f.value.length==4) {
			        mhNextbtn3()
			    }
			}