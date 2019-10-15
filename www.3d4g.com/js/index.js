function searchbd(){
	var keyword=document.getElementById("bdsearchtext").value;
	window.open("http://www.baidu.com/s?ie=UTF-8&wd="+keyword);
}
document.onkeydown = function (e) { // 回车提交表单
// 兼容FF和IE和Opera
    var theEvent = window.event || e;
    var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
    if (code == 13) {
        searchbd();
    }
}