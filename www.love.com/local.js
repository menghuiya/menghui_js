// function ajax_test() {
//   $.ajax({
//     url: 'data.json', //json文件位置
//     type: 'GET', //请求方式为get
//     dataType: 'json', //返回数据格式为json
//     success: function(data) {
//       //请求成功完成后要执行的方法
//       alert(data.data[0].content);
//     }
//   });
// }
// ajax_test(); //执行函数
/**上部分为jQuery的ajax实现代码
 * 下部分为js fetch()函数实现
 */

function setNewLocal(types) {
  fetch('data.json')
    .then(function(response) {
      //打印返回的json数据
      response.json().then(function(data) {
        //序列化JSON.stringify(json)     //反序列化JSON.parse(json)
        let datas = JSON.stringify(data.data[0]);
        if (types == 'storage') {
          localStorage.setItem('content-' + data.data[0].id, datas);
          alert(' localStorage添加成功 ');
        }
        if (types == 'session') {
          sessionStorage.setItem('content-' + data.data[0].id, datas);
          alert(' sessionStorage添加成功 ');
        }
      });
    })
    .catch(function(e) {
      console.log('error: ' + e.toString());
    });
}
