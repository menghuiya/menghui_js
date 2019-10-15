$(function(){
	//给登录按钮添加点击事件	
	$("#login").on('click',function(eveny){
		$.ajax({
			type:"post",  //提交方式为post
			url:"{:url(action.php?action=checkLogin)}",  //设置提交数据到处理的脚本文件的地址
			data:$("form").serilize(),  //将当前的表单的数据序列化后再提交
			dataType:'json',
			success: function(data){
				//只有返回标志位为1的 才进行处理
				alert(data)
			}
		});
	})
})