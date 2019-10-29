<?php include("config.php");?>
<?php include("public/header.php");?>
	<script type="text/javascript">
		if(document.cookie.length>0){   //判断是否有cookie 有则加载验证文件，没有则跳转
			<?php include("yanzheng.php");  ?>
		}else if('<?php echo basename(__FILE__);?>'!='index.php'){
			alert("请登录");
			window.location.href='login.php';
		}else{
			onload=function(){
				var logout=document.getElementById("indexlogout");
				logout.style.display="none";
			}
		}
		
	</script>
		<div class="main">
			<div class="content fl">
				<div class="hotnews">热门信息</div>
				<!--<div class="contentnews">					
					<div class="qqlog fl"><img src="https://q4.qlogo.cn/headimg_dl?dst_uin=1274323054&spec=100"/ width="100px" height="90px"></div>
					<div class="contnewss fr">
						<div class="auther">
							<span>留言昵称：</span>梦回
						</div>
						<div class="authercont">
							<span>留言内容：</span><span class="authercontens" id="menghuiceshi">王猪儿儿123王猪儿王猪儿儿123王猪儿王猪儿儿123王猪儿王猪儿儿123王猪儿王猪儿儿123王猪儿123王猪儿123王猪儿123王猪儿123王猪儿123王猪儿123123王猪儿123王猪儿123王猪儿123王猪儿123王猪儿123王猪儿123王猪儿123王猪儿123王猪儿123王猪儿123儿123王猪儿123王猪儿123王猪儿123王猪儿123王猪儿123王猪儿123</span>
							<em>2019-10-11 19:06:37</em>
						</div>
						
					</div>
					<button class="emailbtn"><img src="img/email.png" />邮箱联系</button>
					<input type="button" name="" class=" fr" value="👍顶一个" />
					<input type="button" name="" class=" fr" value="👎踩一个" />					
					</div>
					<hr />-->
					
				<?php
				    $num =6;
					$page = isset($_GET['p'])? $_GET['p'] : 1;
					
					//如果当前已经是首页了
					$Previous = ($page - 1)<1?1:($page-1);   //防止上一页溢出
					//计算显示的偏移量
					$offset =($page-1)*$num;
	
					$sql ="SELECT id,mh_name,mh_content,mh_qq,mh_email,mh_time FROM liuyanben order by mh_time desc LIMIT {$offset},{$num}";
					$result =mysqli_query($conn,$sql);
					if($result && mysqli_num_rows($result)>0){
						 	$sqls ="select count(*) as count from liuyanben"; //开始计算文章总数量
							if($tempRes=mysqli_query($conn, $sqls)){
								$rows =mysqli_fetch_assoc($tempRes);
								$count =$rows['count']; //记录总数
							} 
							while($row = mysqli_fetch_assoc($result)){ ?>
						        <div class="contentnews">					
									<div class="qqlog fl"><img src="https://q4.qlogo.cn/headimg_dl?dst_uin=<?php echo $row['mh_qq']; ?>&spec=100"/ width="100px" height="100px"></div>
									<!--<div class="contnewss fr"><?php echo $row['mh_content']; ?></div>-->
									<div class="contnewss fr">
										<div class="auther">
											<span class="authername"><?php echo $row['mh_name']; ?></span>
										</div>
										<div class="authercont">
											<span class="authercontens" id="mh_content"><?php echo $row['mh_content']; ?></span>
											<em><?php echo $row['mh_time']; ?></em>
										</div>
										
								    </div>
								<button class="emailbtn" onclick="alert('<?php echo $row['mh_name']; ?>的邮箱为：<?php echo $row['mh_email']; ?>')"><img src="img/email.png" alt="邮箱联系" title="邮箱联系"/></button>
								<?php 
								$contentid=$row['id'];
								$sqlss="select * from mes_info where contentid='$contentid'"; //开始计算点赞数量
								$resultss = mysqli_query($conn,$sqlss);
								$sqlallnum=mysqli_num_rows($resultss); ?>
								<button name="<?php echo $contentid;?>" id="zanyige" class="zan fr" onclick="dianzan(this)">👍 +<span id="zanshu"><?php echo $sqlallnum; ?></span></button>
								<button name="" class="zan fr">👎</button>				
								</div>
								<hr />
							<?php }
							//释放结果集；
							mysqli_free_result($result);
							//关闭连接
							mysqli_close($conn);
							}else{
								echo '无数据';
							} 
							$total =ceil($count / $num);
							if($page>=$total){
								$page =$total-1;
//								echo '<script>alert("您已经到达最后一页");</script>';
							}
							echo '<a href="?p='.($Previous).'"><input type="button" name="" class="lastpage fl" value="上一页" /></a>';
							echo '<a href="?p='.($page+1).'"><input type="button" name="" class="nextpage fr" value="下一页" /></a>';
							?>
				<!--<a href=""><input type="button" name="" class="lastpage fl" value="上一页" /></a>				 
				<a href=""><input type="button" name="" class="nextpage fr" value="下一页" /></a><br />-->
				<a href="add.php"><input type="button" class="writenws" id="writenws" value="我也想记录自己的留言"/></a>
			</div>
			<div class="contall fr">
				<div class="hotnews">个人信息</div>
				<?php include("public/fun.inc.php");?>
				<div class="myzliao" id="myzliao">
					<img src="https://q4.qlogo.cn/headimg_dl?dst_uin=<?php echo $qq; ?>&spec=100"/ width="100px" height="100px"> <br />
					<input type="button" name="indexlogin" id="loginbtns" value="登录账号" /><br />
					<input type="button" name="indexlogout" id="indexlogout" value="退出登录" /> <br />
					<input type="button" name="indexregist" id="indexregist" value="注册账号" />
				</div>
				<div class="hotnews">最新留言</div>
				<div class="newnews">111111111111111</div>
				<div class="hotnews">版权信息</div>
				<div class="footbq"></div>
			</div>
		</div>
		<!--登录页面开始-->
		<div id="boxxx">  
			<div id="loginpage">
				<h2>梦回留言登录页面</h2>
				<input type="text" name="uid"  id="uid"/ placeholder="请输入账户"> <br />
				<input type="password" name="pwd"  id="pwd"/ placeholder="请输入密码"> <br />
				<input type="button" value="登录" id="loginbtn" />
				<input type="button" value="取消" id="giveup" />
				<input type="button" value="注册" id="registbtn" />				
			</div>			
		</div>
		<!--登录页面结束-->
		<!--注册页面开始-->
		<div id="registbox">
			<div id="registpage">
				<h2>梦回留言注册页面</h2>
				<form action="action.php?action=regist" method="post">
					<input type="text" name="user_name" id="user_name" placeholder="请输入用户名"/ required> <br />
					<input type="password" name="user_psw" id="user_psw" placeholder="请输入密码"/ required> <br />
					<input type="password" name="user_psws" id="user_psws" placeholder="请二次输入密码"/ required> <br />
					<input type="text" name="user_qq" id="user_qq" placeholder="请输入qq"/ required> <br />
					<input type="email" name="user_email" id="user_email" placeholder="请输入邮箱"/ required> <br />
					<input type="submit" value="提交注册"/ class="registbtn" id="registbtns">
					<input type="button" value="取消注册"/ class="registbtn" id="regiveup">
				</form>
			</div>
		</div>
		<!--注册页面结束-->		
	</body>
	<script type="text/javascript" src="js/action.js" ></script>
</html>