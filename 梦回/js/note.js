function spanClick(){
    var obj=document.getElementById("details1");
    var att=obj.getAttribute("open");
    if(att!="open"){
        obj.setAttribute("open","open");
        }
    else{
        obj.removeAttribute("open");
        }
    }