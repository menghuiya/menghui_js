<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<script type="text/javascript" src="js/jquery-1.11.0.js" ></script>
	<body>
		<input type="button" name="" id="2212" value="啊啊啊" />
	</body>
	<script type="text/javascript">
		$(document).ready(function(e) {
	    $("#2212").click(function(){//给按钮加点击事件
	        
	        //调ajax
	        $.ajax({            
	            url:"acss.php?action=login",
	            type:"POST",
	            dataType:"TEXT",
	            success: function(data){
	                    if(data.trim()=="OK")//要加上去空格trim，防止内容里面有空格引起错误。
	                    {   
	                    	alert(data);
	                    }
	                    else
	                    {
	                      alert(data);
	                    }
	            
	                }
	            
	            });
	        
	        })
	});
	</script>
</html>
