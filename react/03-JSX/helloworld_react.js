let i = 1;
let myStyle = {
  fontSize: 35,
  color: '#FF0000',
};
let arr = [<h2>梦回资源网</h2>, <p>梦回资源网创建于2018年8月份</p>];
ReactDOM.render(
  <div>
    <h1 style={myStyle}>Hello, world!</h1> <h2>{1 + 1}</h2>
    <h3>{i == 1 ? 'true' : 'false'}</h3>
    <div>{arr}</div>
  </div>,
  document.getElementById('example1')
);
