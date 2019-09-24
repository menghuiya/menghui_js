//确认协议后，选中打勾
			function mhQueRen(){
				var mhch=document.getElementById("zhuce_qrzc").checked;
				var mhqr=document.getElementById("mh_zhuce_qr");
				if(mhch==true){
					mhqr.style.background="#0066B3";
					mhqr.style.border="#0066B3";
					mhqr.disabled=false;
				}else{
					mhqr.style.background="#CCCCCC";
					mhqr.style.border="#CCCCCC";
				}
				
			}
			//确认协议后，点击同意后
			function csshi(){
				var a=document.getElementById("zhuce_page1");
				var b=document.getElementById("zhuce_page2");
				var s=document.getElementById("zhuce_nav1");
				var s1=document.getElementById("zhuce_nav2");
				a.style.display="none";
				b.style.display="block";
				s.style.color="#999999";
				s1.style.color="#0066B3";
			}
			

			
			//第二页的返回上一页
			function mhLast(){
				var a=document.getElementById("zhuce_page1");
				var b=document.getElementById("zhuce_page2");
				var s=document.getElementById("zhuce_nav1");
				var s1=document.getElementById("zhuce_nav2");
				a.style.display="block";
				b.style.display="none";
				s.style.color="#0066B3";
				s1.style.color="#999999";
			}
			
		    //信息填写完成，下一页亮度的变化  //键盘回车键按下
//		    document.onkeydown = function(e){
//			    var ev = document.all ? window.event : e;
//			    var c=document.getElementById("mh_zhuceyzm"); //第二页验证码是否输入
//			    var d=document.getElementById("mh_zhuceyzm2");//第二页验证码是否输入
//			    var f=document.getElementById("mh_zhucedxcode");//第三页短信验证码是否输入
//			    if(ev.keyCode==13&&c.value.length>0) {
//			        mhNextbtn();
//			    }
//			    if(ev.keyCode==13&&d.value.length>0) {
//			        mhNextbtn2();
//			    }
//			    if(ev.keyCode==13&&f.value.length>0) {
//			        mhNextbtn3()
//			    }
//			}
		    function mhNextbtn(){
		    	var a=document.getElementById("mh_zhucename"); //获取三个输入框数据
		    	var b=document.getElementById("mh_zhuceid");
		    	var c=document.getElementById("mh_zhuceyzm");
		    	var d=document.getElementById("mh_zhuce_next"); //获取到下一步的按钮
		    	if(a.value.length>1&&a.value.length<5&&b.value.length==15&&c.value=="8hmw8"){
		    		d.style.background="#0066B3";
					d.style.border="#0066B3";
		    		d.disabled=false;
		    	}else{
		    		d.disabled=true;
		    		alert("请检查信息完整度");
		    	}
		    }
		    //钱包账号时的函数
		    function mhNextbtn2(){
		    	//获取三个输入框数据
		    	var b=document.getElementById("mh_qianbaoid");
		    	var c=document.getElementById("mh_zhuceyzm2");
		    	var d=document.getElementById("mh_zhuce_next2"); //获取到下一步的按钮
		    	if(b.value.length==10&&c.value=="8hmw8"){
		    		d.style.background="#0066B3";
					d.style.border="#0066B3";
		    		d.disabled=false;
		    	}else if(b.value.length!=10){
		    		alert("请输入正确的钱包账号");
		    	}else if(c.value!="8hmw8"){
		    		alert("请正确的输入验证码");
		    	}else{
		    		alert("请检查信息完整度");
		    	}
		    }
		    
		    function mhNextbtn3(){
		    	//获取三个输入框数据
		    	var b=document.getElementById("mh_zhucedxcode");
		    	var d=document.getElementById("mh_zhuce_next3"); //获取到下一步的按钮
		    	if(b.value.length==4){		    		
		    		d.style.background="#0066B3";
					d.style.border="#0066B3";
		    		d.disabled=false;
		    	}else if(b.value.length!=4){
		    		alert("请输入正确的验证码");
		    	}else{
		    		alert("请检查验证码正确性");
		    	}
		    }
 
		    function mhNextbtn4(){		    	
		    	var mh1s=document.getElementById("mh-zhuce_zhuce")//获取提交按钮
		    	var mh1=document.getElementById("mh_zhuceuser").value; //用户名
				var mh2=document.getElementById("mh_zhucepwd").value; //第一次密码
				var mh3=document.getElementById("mh_zhucepwdconfirm").value; //重复密码
				var mh4=document.getElementById("sex1").checked; //性别选择
				var mh4s=document.getElementById("sex2").checked; //性别选择
				var mh5=document.getElementById("mh_zhuceEmail").value; //邮件地址
				var mh6=document.getElementById("mh_zhucePhonenum1").value; //手机号码
		    	if(mh1.length>2&&mh2.length>6&&mh3.length>6&&mh5.length>0&&mh6.length==11&&(mh4==true||mh4s==true)){		    		
		    		mh1s.style.background="#0066B3";
					mh1s.style.border="#0066B3";
		    		mh1s.disabled=false;
		    	}else{
		    		alert("请检查信息完整性，正确性");
		    	}
		    }