<?php include("config.php");?>
<!DOCTYPE html>
<html lang="zh">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta http-equiv="X-UA-Compatible" content="ie=edge" />
	<title>Document</title>
	<script src="js/jquery-1.11.0.js" type="text/javascript" charset="utf-8"></script>
</head>
<body><?php
		$sqlss="select * from mes_info where contentid=13";
		$resultss = mysqli_query($conn,$sqlss);
		$sqlallnum=mysqli_num_rows($resultss);
	?>
	<button id="zanyige">赞 +<?php echo $sqlallnum;?>次</button>
</body>
<script type="text/javascript">
	$(document).ready(function(e) {
	$("#zanyige").click(function() { //给按钮加点击事件
		var praise = $(this);
		//调ajax
		$.ajax({
			url: "action.php?action=dianzan",
			type: "POST",
			dataType: "TEXT",
			success: function(data) {				
					zanyige.innerHTML=data;
			},
			error: function(){
                alert("error");
          	}
		});

	})
});
</script>
</html>