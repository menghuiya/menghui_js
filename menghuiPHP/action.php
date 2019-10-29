<?php include("config.php");?>
<?php
  header("contnt-type:type/html;charset=utf-8");

if($conn){
	switch ($_GET['action']){
		case 'add':
		$mh_name=$_POST['mh_name'];
		$mh_content=$_POST['mh_content'];
		$mh_qq=$_POST['mh_qq'];
		$mh_email=$_POST['mh_email'];
		$sql="INSERT liuyanben(mh_name,mh_content,mh_qq,mh_email) VALUES('$mh_name','$mh_content','$mh_qq','$mh_email')";
		$rw=mysqli_query($conn,$sql);
		if($rw>0){
			echo "<script type='text/javascript'>alert('添加成功');location.href='index.php';</script>";
		}else{
			echo "<script type='text/javascript'>alert('添加失败');location.href='index.php';</script>";
		}
//		header('location:index.php');
      break;
		case 'login':
			$name = $_POST["u"];
			$pwd = md5($_POST["p"]);
//			include("config.php");
			//$sql ="SELECT id,mh_name,mh_content,mh_qq,mh_email,mh_time FROM liuyanben order by mh_time desc LIMIT {$offset},{$num}";
			//$result =mysqli_query($conn,$sql);
			$sql = "select * from user where username='$name'";
			$result = mysqli_query($conn,$sql);
			if($result && mysqli_num_rows($result)>0){
			$row = mysqli_fetch_assoc($result);
			//echo $row['password'];
			if($pwd == $row['password'] && $pwd!="")
			{
				setcookie("username", "$name", time()+3600);	
				setcookie("password", "$pwd", time()+3600);	
			    echo "OK";
			}
			else
			{
			    echo "NO";
			}
			}else{
				echo '没有任何数据';
			}
			break;
		case 'logout':
				$name=$_COOKIE['username'];
				$sql = "select * from user where username='$name'";
				$result = mysqli_query($conn,$sql);
				if($result && mysqli_num_rows($result)>0){
					$row = mysqli_fetch_assoc($result);
				    if(isset($_COOKIE['username']) && $_COOKIE['username']===$row['username']){
				        if(setcookie('username',$_POST['username'],time()-3600)&&setcookie('password',$_POST['password'],time()-3600)){
							echo "OK";
				        }else{
							echo "NO";
				        }
				    }
				}else{
					echo "没有数据！";
				}
				break;
		case 'regist':
			$user_name=$_POST['user_name'];
			$user_psw=md5($_POST['user_psw']);
			$user_psws=md5($_POST['user_psws']);
			$user_qq=$_POST['user_qq'];
			$user_email=$_POST['user_email'];
			if($user_psw==$user_psws){
				$sql="INSERT user (username,password,qq,email) VALUES('$user_name','$user_psw','$user_qq','$user_email')";
				$rw=mysqli_query($conn,$sql);
				if($rw>0){
					echo "<script type='text/javascript'>alert('注册成功');location.href='index.php';</script>";
				}else{
					echo "<script type='text/javascript'>alert('注册失败');location.href='index.php';</script>";
				}
		//		header('location:index.php');
			}else{
				echo "<script type='text/javascript'>alert('请检查密码是否一致');</script>";
			}
			
	    break;
		case 'dianzan':
			$contentid = $_POST["actid"];
			$sql="select * from mes_info where contentid='$contentid' and ip='$ip_address'";
			$result = mysqli_query($conn,$sql);
			$sqlallnum=mysqli_num_rows($result);
			if($result && $sqlallnum<1){
				$sqls="insert mes_info(contentid,ip) values('$contentid','$ip_address')";
				mysqli_query($conn, $sqls);
				$sql="select * from mes_info where contentid='$contentid'";
				$result = mysqli_query($conn,$sql);
				$sqlallnum=mysqli_num_rows($result);
				echo $sqlallnum;
			}else{
				$sql="select * from mes_info where contentid='$contentid'";
				$result = mysqli_query($conn,$sql);
				$sqlallnum=mysqli_num_rows($result);
				echo '已经赞+'.$sqlallnum;
			}
		 	break;
	}
}

//select contentid,count(*) as count from mes_info group by contentid having count ORDER by COUNT DESC;