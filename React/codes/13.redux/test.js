const axios = require('axios');
// 随机生成cookie值
const token = (Math.random() * parseInt('ffffffffff', 16)).toString(16);

axios({
  url: `https://miniapp.open.taobao.com/handler/document/getCatelogConfig.json?isEn=false&tag=dev&treeId=&docId=1481&docType=20&tag=dev&_tb_token_=${token}`,
  headers: {
    cookie: `_tb_token_=${token}`
  }
})
  .then(({ data: { data } }) => {
    // 所有数据中筛选基础组件并合并为一个数组
    // flat方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
    const comps = data.treeCategories
      .find(item => item.id === 139)
      .catelogTrees.find(item => item.id === 628)
      .catelogList.find(item => item.id === 25484)
      .children.find(item => item.id === 25479)
      .children.map(item => item.children)
      .flat();

    // 存放所有的组件名称和对应的docId，依据每个组件的docId值可以获取对应的组件属性
    const componentDocIdAlias = {};
    // 每个组件的name值对应其docId值，
    comps.forEach(item => {
      componentDocIdAlias[item.name] = item.docId;
    });
    axios({
      url: `https://miniapp.open.taobao.com/handler/document/getDocument.json?isEn=false&tag=dev&treeId=&docId=1463&docType=20&_tb_token_=${token}`,
      headers: {
        cookie: `_tb_token_=${token}`
      }
    }).then(res => {
      console.log(res.data.data.requestParams);
    });
  })
  .catch(error => {
    console.error(
      `🧨 请求接口 https://miniapp.open.taobao.com/handler/document/getCatelogConfig.json?isEn=false&tag=dev&treeId=&docId=1481&docType=20&tag=dev&_tb_token_=${token}失败`,
      error
    );
  });
