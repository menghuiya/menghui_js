function init(){
        var len = 100;      //默认显示字数
        var ctn = document.getElementById("con");  //获取div对象
        var content = ctn.innerHTML;                   //获取div里的内容
       	var absddd=document.getElementById("btns");
        //alert(content);
        var span = document.createElement("span");     //创建<span>元素
        var a = document.createElement("a");           //创建<a>元素
        span.innerHTML = content.substring(0,len);     //span里的内容为content的前len个字符

        a.innerHTML = content.length>len?"... 显示笔记":"";  //判断显示的字数是否大于默认显示的字数    来设置a的显示
        a.href = "javascript:void(0)";

        a.onclick = function(){
            if(a.innerHTML.indexOf("显示笔记")>0){      //如果a中含有"展开"则显示"收起"
              a.innerHTML = "<<&nbsp;收起笔记";
              span.innerHTML = content;
            }else{
                a.innerHTML = "... 显示笔记";
                span.innerHTML = content.substring(0,len);
                ctn.style.display="none";
       		  absddd.value="展开";
            }
        }
        // 设置div内容为空，span元素 a元素加入到div中
        ctn.innerHTML = "";
        ctn.appendChild(span);
        ctn.appendChild(a);
     }