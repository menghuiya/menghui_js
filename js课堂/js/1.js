var x, y, result, answer, go_on;
while (true) {
    x = Math.floor(Math.random() * 90) + 10;
    y = Math.floor(Math.random() * 90) + 10;
    var a = parseInt(3 * Math.random()) + 1;
    if (a == 1) {
        result1 = x - y;
        answer = parseFloat(prompt(x + "+" + y + "=", "0"));//接受用户的答案
        go_on = confirm((answer == result1 ? "答对" : "答错") + "!\t继续测试嘛?");
        if (!go_on) break;  //若单击取消，按钮则返回false，即结束
    }
    if (a == 2) {
        result2 = x - y;  //标准答案
        answer = parseFloat(prompt(x + "-" + y + "=", "0"));//接受用户的答案
        go_on = confirm((answer == result2 ? "答对" : "答错") + "!\t继续测试嘛?");
        if (!go_on) break;  //若单击取消，按钮则返回false，即结束
    }
    if (a == 3) {
        result3 = x * y;  //标准答案
        answer = parseFloat(prompt(x + "*" + y + "=", "0"));//接受用户的答案
        go_on = confirm((answer == result3 ? "答对" : "答错") + "!\t继续测试嘛?");
        if (!go_on) break;  //若单击取消，按钮则返回false，即结束
    }
    //						answer=parseFloat(prompt(x+"+"+y+"=","0"));//接受用户的答案
    //						go_on=confirm((answer==result?"答对":"答错")+"!\t继续测试嘛?");
    //						if(!go_on)break;  //若单击取消，按钮则返回false，即结束
}