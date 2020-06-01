var app=new Vue({
    el:"#app",
    data:{
        isActive:true,
        isBg:true,
    }
})
var app1=new Vue({
    el:"#app1",
    data:{
        classObject:{
            active:true,
            'text-danger':false
        }
    }
})

var app2=new Vue({
    el:"#app2",
    data:{
        isActive:true,
        error:null
    },
    computed:{
        classObject:function(){
            return{
                active:this.isActive&& !this.error,
                'text-danger':this.error && this.error.type ==="false"
            }
        }
    }
})

var app3=new Vue({
    el:"#app3",
    data:{
        activeClass:'active',
        bgClass:'bgcolor',
        isActive:true,
    }
})

//组件


Vue.component('my-component', {
    template: '<p class="foo bar">Hi</p>'
})

Vue.component('button-counter',{
    data:function(){
        return{
            count:0
        }
    },
    template:'<button v-on:click="clickFun">你已经点击了{{count}}次啦</button>',
    methods:{
        clickFun:function(){
            this.count++;
            this.$emit('clickNow',this.count);
        }
    }
})

var app4=new Vue({
    el:"#app4",
    data:{
        
    },
    methods:{
        clickNow:function(e){
            console.log(e)
        }
    }
})

var app5=new Vue({
    el:'#app5',
    data: {
        posts: [
          { id: 1, title: '梦回',content:'梦回资源网是一个资源网平台',publishedAt:'06',comments:'暂无' },
          { id: 2, title: '平台',content:'平台内收费注册后暂无收费',publishedAt:'06',comments:'暂无' },
          { id: 3, title: '资源网',content:'梦回资源网就是一个资源网哦',publishedAt:'06',comments:'暂无' }
        ]
    }
})

Vue.component('blog-post', {
    props: ['post'],
    template: `
      <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <div v-html="post.content"></div>
      </div>
    `
  })