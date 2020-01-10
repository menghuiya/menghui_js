var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: '学习 JavaScript' },
            { text: '学习 Vue' },
            { text: '整个牛项目' }
        ]

    }
})
var app5 = new Vue({
    el: '#app-5',
    data: {
        message: '梦回资源网'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})
var app6 = new Vue({
    el: '#app-6',
    data: {
      message: '梦回最帅'
    }
  })