function setNew(tbDate) {
	var oldDate = tbDate.innerHTML; //获得元素之前的内容	　
	var newDate = document.createElement('input'); //新创建一个input元素	　
	newDate.type = 'text'; //为新创建的input标签添加元素
	newDate.value = oldDate;　//默认开始时input里面的值为原来的值
	newDate.select(); //全选之前旧的内容
	tbDate.innerHTML = '';　　 //设置元素内容为空	　
	tbDate.appendChild(newDate); //添加子元素,也就是在其中再添加一个新的内容	
	newDate.focus(); //获得焦点
	//设置newDate失去焦点的事件
	newDate.onblur = function() {
		//当触发时判断新输入的值是否为空，为空则不修改，并返回原来的值
		tbDate.innerHTML = this.value ? this.value : oldDate;
	}
}
