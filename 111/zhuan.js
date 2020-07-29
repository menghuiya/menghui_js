const data = {
  code: 10001,
  data: [
    { id: 0, name: '主菜单一' },
    { id: 1, pid: 0, name: '二级菜单1' },
    { id: 2, name: '主菜单二' },
    { id: 3, pid: 0, name: '二级菜单2' },
    { id: 4, pid: 2, name: '二级菜单1' },
    { id: 5, name: '主菜单二' },
    { id: 6, pid: 1, name: '三级菜单1' },
    { id: 7, pid: 5, name: '二级菜单1' },
  ],
};
// const formateData = (data) => {
//   let parents = data.filter((item) => item.pid == null);
//   let children = data.filter((item) => item.pid != null);
//   console.log(children);
//   const translator = (parents, children) => {
//     parents.forEach((parent) => {
//       children.forEach((current, index) => {
//         if (current.pid === parent.id) {
//           let temp = JSON.parse(JSON.stringify(children));
//           temp.splice(index, 1);
//           translator([current], temp);
//           typeof parent.children !== 'undefined'
//             ? parent.children.push(current)
//             : (parent.children = [current]);
//         }
//       });
//     });
//   };
//   translator(parents, children);
//   console.log(parents);
// };

const formateData1 = (data) => {
  let map = {};
  //通过遍历吧data 的元素放在map中
  data.forEach((item) => {
    if (!map[item.id]) {
      //map中的item.id 属性指向map数组中的元素
      map[item.id] = item;
    }
  });
  //再次遍历 为了对map属性所指的对象进行处理
  data.forEach((item) => {
    //过滤父级id  不是null 的元素
    if (item.pid != null) {
      //map[item.pid]为该元素的父级元素
      map[item.pid].children
        ? map[item.pid].children.push(item)
        : (map[item.pid].children = [item]);
    }
  });
  //过滤剩下的根节点
  return data.filter((item) => item.pid == null);
};

// formateData(data.data);

console.log(formateData1(data.data));
