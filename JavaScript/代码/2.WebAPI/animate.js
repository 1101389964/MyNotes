function animate(obj, target, callback) {
  //obj是需要添加动画的对象,target是动画移动的目标值,callback是结束时候的调用函数
  clearInterval(obj.time);
  //每次调用函数需要先清除上次的点击时间回调函数，否则当函数执行多次时会多次进行时间回调函数，动画就会出现问题
  obj.time = setInterval(function () {
    //使用添加obj对象的方法添加调用函数可以提高执行效率，否则每次执行该函数都是相同的
    var step = (target - obj.offsetLeft) / 10;
    //step每次减小的公式
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    //如果step大于0则网上取整，小于0则往下取整
    obj.style.left = obj.offsetLeft + step + "px";
    if (obj.offsetLeft == target) {
      clearInterval(obj.time);
      //执行穿过来的函数
      if (callback) callback();
    }
  }, 10);
}
