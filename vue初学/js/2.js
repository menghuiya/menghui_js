var app=new Vue({
    el:'#app',
    data:{
        msg:'梦回a',
        rawHtml:'<span style="color:red;">this shuld be red</span>',
        
    }
})

var app1=new Vue({
    el:"#app1",
    data:{
        seen:true,
        url:"http://www.52mhzy.cn"
    },
    methods:{
        doSomething:function(){
            alert("hhh")
        },
        doSomething1:function(){
            alert("1111")
        },
        doSomething2:function(){
            alert("222")
        }
    }
})