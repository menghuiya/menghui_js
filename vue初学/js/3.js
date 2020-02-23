var app=new Vue({
    el:"#example",
    data:{
        message:"abcdefg"
    }
})
var vm = new Vue({
    el: '#example1',
    data: {
      message: 'Hello'
    },
    computed: {
      // 计算属性的 getter
      reversedMessage: function () {
        // `this` 指向 vm 实例
        return this.message.split('').reverse().join('')
      }
    },
    methods: {
        reversedMessage: function () {
          return this.message.split('').reverse().join('')
        }
      }
  })

// var vm1=new Vue({
//     el:"#example2",
//     message:"abcdef",
//     methods: {
//         reversedMessage1: function () {
//           return this.message.split('').reverse().join('')
//         }
//       }
// })

var vm2 = new Vue({
    el: '#demo',
    data: {
      firstName: 'Foo',
      lastName: 'Bar'
    },
    computed: {
      fullName: function () {
        return this.firstName + ' ' + this.lastName
      }
    }
  })

  var vm3 = new Vue({
    el: '#demo1',
    data: {
      firstName: 'Foo',
      lastName: 'Bar'
    },
    computed: {
        fullName: {
          // getter
          get: function () {
            return this.firstName + ' ' + this.lastName
          },
          // setter
          set: function (newValue) {
            var names = newValue.split(' ')
            this.firstName = names[0]
            this.lastName = names[names.length - 1]
          }
        }
      }
  })

  var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
      question: '',
      answer: 'I cannot give you an answer until you ask a question!'
    },
    watch: {
      // 如果 `question` 发生改变，这个函数就会运行
      question: function (newQuestion, oldQuestion) {
        this.answer = 'Waiting for you to stop typing...'
        this.debouncedGetAnswer()
      }
    },
    created: function () {
      // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
      // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
      // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
      // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
      // 请参考：https://lodash.com/docs#debounce
      this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
      getAnswer: function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Questions usually contain a question mark. ;-)'
          return
        }
        this.answer = 'Thinking...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
          })
      }
    }
  })