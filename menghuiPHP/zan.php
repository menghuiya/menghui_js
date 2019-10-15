
<!DOCTYPE html>
<html lang="zh">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<title>Document</title>
	</head>
	<body>
		<span>0</span>
		<button onclick="goodplus(1);">good+1</button>
		
		<span>0</span>
		<button onclick="goodplus(2);">good+1</button>
		
		<span>0</span>
		<button onclick="goodplus(3);">good+1</button>
		
		<span>0</span>
		<button onclick="goodplus(4);">good+1</button>
		
		<script type="text/javascript">
		 var span = document.getElementsByTagName('span');
		 var num;
		 var flag = 0;
		 
		 for(var i = 1; i < span.length + 1; i++){
		 senddata(i); 
		 }
		 
		 function goodplus(gindex){
		 flag = 1;
		 num = parseInt(span.item(gindex-1).innerHTML);
		 if(checkcookie(gindex) == true){
		 num = num + 1;
		 senddata(gindex);
		 }else{
		 alert("你已经点过赞咯！") 
		 }
		 }
		 
		 function senddata(aindex){
		 var xmlhttp;
		 var txt;
		 if(window.XMLHttpRequest){
		 xmlhttp=new XMLHttpRequest();
		 }else{
		 xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		 }
		 xmlhttp.onreadystatechange=function(){
		 if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		 txt = xmlhttp.responseText;
		 var cookieindex = aindex - 1;
		 document.getElementsByTagName('span').item(cookieindex).innerHTML = txt;
		 }
		 }
		 xmlhttp.open("GET","json.php?num=" + num + '&flag=' + flag + '&aindex=' + aindex,true);
		 xmlhttp.send();
		 }
		 
		//判断是否已经存在了cookie
		 function checkcookie(gindex){
		 var thiscookie = 'sdcity_foodmap_goodplus' + gindex;
		 var mapcookie = getCookie(thiscookie)
		 if (mapcookie!=null && mapcookie!=""){
		 return false;
		 }else {
		 setCookie(thiscookie,thiscookie,365);
		 return true;
		 } 
		 }
		 
		//获取cookie
		 function getCookie(c_name){
		//获取cookie，参数是名称。
		 if (document.cookie.length > 0){
		//当cookie不为空的时候就开始查找名称 
		 c_start = document.cookie.indexOf(c_name + "=");
		 if (c_start != -1){
		//如果开始的位置不为-1就是找到了、找到了之后就要确定结束的位置
		 c_start = c_start + c_name.length + 1 ;
		//cookie的值存在名称和等号的后面，所以内容的开始位置应该是加上长度和1
		 c_end = document.cookie.indexOf(";" , c_start);
		 if (c_end == -1) {
		  c_end = document.cookie.length;
		 }
		 return unescape(document.cookie.substring(c_start , c_end));//返回内容，解码。
		 } 
		 }
		 return "";
		 }
		 
		//设置cookie
		 function setCookie(c_name,value,expiredays){
		//存入名称，值，有效期。有效期到期事件是今天+有效天数。然后存储cookie，
		 var exdate=new Date();
		 exdate.setDate( exdate.getDate() + expiredays )
		 document.cookie = c_name + "=" + escape(value) + ((expiredays==null) ? "" : "; expires=" + exdate.toGMTString())
		 }
		</script>
	</body>
</html>