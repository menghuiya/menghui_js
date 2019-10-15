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
			echo "<script type='text/javascript'>alert('添加失败');</script>";
		}
//		header('location:index.php');
//    break;
		case 'checkLogin':
//			function checkLogin(Request $request){
				//初始化返回的参数
				$status = 0;
				$result = '';
				$data = $request ->param();
				
				return ['$status'=>$status,'message'=>$result,'$data'=>$data]
//			}
	}
}
//$sql="INSERT liuyanben(mh_name,mh_content,mh_email) VALUES('梦回','最帅','48893231@qq.com')";
//if(mysqli_query($conn,$sql)){
//	echo "成功的添加了'.mysqli_affected_rows($conn).'条留言";
//}else{
//	echo "新增失败".mysqli_error($conn);
//}
//
?>
