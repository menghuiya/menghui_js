//创建我们的数据对象
var data={a:1}
//j该对象被加入一个Vue实例之中
var vm =new Vue({
    data:data 
})
//获得这个实例上的属性 返回源数据 中的对应的字段
vm.a == data.a // => true
// 设置属性也会影响到原始数据
vm.a = 2
data.a // => 2
// ……反之亦然
data.a = 3
vm.a // => 3

var obj = {
  foo: 'bar'
}

Object.freeze(obj)

new Vue({
  el: '#app',
  data: obj
})

var vms=new Vue({
    el:'#example',
    data:data 
})
vm.$data === data // => true
vm.$el === document.getElementById('example') // => true
//$watch 是一个实例方法
vms.$watch('a',function(newValue,oldValue){
    //这个回调将在vms.a改变后调用
})

//实例僧帽周期钩子
var app1=new Vue({
    data:{
        a:1
    },
    created:function(){
        //this 指向vm实例
        console.log('a is '+this.a)
    }
})
