<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title></title>
	</head>
	<style type="text/css">
		/*p img{
			width: 90px;
			height: 90px;
		}*/
	</style>
	<body>
		<p id="1" class="123"></p>
<!--//		<?php 
//			include("fun.inc.php");
//			$a=$_COOKIE['username']; 			
//			echo '<script type="text/javascript">
//			 var a = document.getElementById("1");
//			 a.innerHTML="'.$a.'";
//		</script>';
//			?>-->
		<script type="text/javascript">
			var a=document.getElementById("1")
           	var imgbg=document.createElement("img");
           	imgbg.src="img/logo.png";
           	a.appendChild(imgbg);
           	imgbg.style.width="90px";
           	imgbg.style.height="90px";
		</script>
	</body>
</html>
