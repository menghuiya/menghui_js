
function saveStorage(id) {
    var data = document.getElementById(id).value;
    if(data.length>0){
        var time = new Date().getTime();
        localStorage.setItem(time, data);
        alert("数据已经储存");
    }else{
        alert("请输入内容再点击") 
    }
    

}

function clearStorage() {
    if (localStorage.length > 0) {
        localStorage.clear();
        alert("数据清理完毕");
        loadStorage('msg');
    } else {
        alert("已经没有数据可清理了")
    }
}
//查找数据
function loadStorage(id) {
    var target = document.getElementById(id);
    if (localStorage.length > 0) {
        var result = "<table border='1'>";
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            var data = new Date();
            data.setTime(key);
            result += "<tr><td>" + value + "</td><td>" + data + "</td></tr>";
        }
        result += "</table>";
        target.innerHTML = result;
    } else {
        target.innerHTML = "当前没有内容可查询";
    }


}
//关键字查询
function find() {
    var search_name = document.getElementById("search_name").value;
    var find_result = document.getElementById("find_result");
    var result = "";
    if (search_name.length>0) {
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            var data = new Date();
            data.setTime(key);
            var re = new RegExp(search_name);
            if (re.test(value) == true) {
                result += "<tr><td>" + value + "</td><td>" + data + "</td></tr>";
            } else {
                continue;
            }

        }
        if(result!=""){
            find_result.innerHTML = result;
        }else{
            find_result.innerHTML = "当前关键词无内容";
        }
        
    } else {
        alert("请输入查询内容")
    }

}