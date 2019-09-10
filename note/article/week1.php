<div class="nav"><span class="nav_btf">第一周知识点:</span><input type="button" id="btns" class="nav_btr" onclick="hidetext();"  value="展示"/></div>
	<div id="con" class="morewz" style="display: none; font-size: 15px;background: url(../img/bj.png);">
     <p style="color: red;">第一点讲解了H5的发展以及历程</p>
     <p style="color: red;">第二点讲解H4与H5的区别：</p>
     1，解决浏览器之前的兼容性问题<br	>
     2,文档结构的变化 : <br />
     HTML5文档结构的变化;HTML5语法的变化;H5增加和删除的元素和属性;H5的全局属性<br> 
     <p style="color: red;">问题：Doctype的作用?严格模式与混杂模式如何区分,它们有何意义?</p>
      <p style="color: red;">答案：</p>
&ensp;Doctype的作用: 告诉浏览器该文件的类型,是HTML还是XHTML的规范来解析文档的 <br />
&ensp;严格模式: 即标准模式; 是指浏览器按照w3c标准解析代码. <br />
 &ensp;如下情况为此模式: <br />
&ensp;①文档中包含严格的Doctype <br />
&ensp;②包含过渡的DTD和URL的Doctype<br />
&ensp;混杂模式: 又叫怪异模式或者是兼容模式; 是指浏览器用自己的方式解析代码. <br />
&ensp;如下情况为此模式: <br />
&ensp;①Doctype不存在或者形式不正确 <br />
&ensp;②有过渡的DTD而没有URL(统一资源标识符,就是声明最后的地址)<br />
意义: <br />
&ensp;如果只有严格模式,那么许多旧网站必须受到影响 <br />
&ensp;如果只有混杂模式,那么每个浏览器都有自己的解析模式<br />
&ensp;HTML5没有DTD,因此没有严格模式和混杂模式区别,它有相对宽松的语法,实现时,已经尽可能大的实现了向后兼容.
   </div>