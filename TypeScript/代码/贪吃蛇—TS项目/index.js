class Food {
  constructor() {
    this.length = 290;
    this.element = document.getElementById("food");
    this.region = document.getElementById("region");
  }
  //获取食物x轴
  get X() {
    return this.element.offsetLeft;
  }
  //获取食物y轴
  get Y() {
    return this.element.offsetTop;
  }
  change() {
    /*
        生成随机位置，食物的位置最小是0，最大是290px
        每次移动10px，所以食物的位置必须是整10
        */
    let width1 = this.region.scrollWidth; //scrollWidth对象的实际内容的宽度，不包边线宽度
    let width2 = this.element.offsetWidth; //offsetWidth：对象整体的实际宽度，包滚动条等边线
    this.length = width1 - width2; //获取长度
    let len = this.length / width2;
    console.log(width2, len);
    let top = Math.round(Math.random() * len) * width2;
    //Math.random()随机获取0~1之间的数，Math.round向上取整
    let left = Math.round(Math.random() * len) * width2;
    this.element.style.left = left + "px";
    this.element.style.top = top + "px";
  }
}

/* ------------------------------------------------------------------------------------- */
/* 定义记分牌的类 */
class ScorePanel {
  constructor(maxLevel = 10, upScore = 10) {
    this.score = 0;
    this.level = 1;
    this.scoreEle = document.getElementById("score");
    this.leveEle = document.getElementById("level");
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }
  //加法器
  addscore() {
    this.score++;
    this.scoreEle.innerHTML = this.score + "";
    if (this.score % this.upScore === 0) {
      this.leveUp(); //分数每this.upScore会升一级
    }
  }
  //等级提升
  leveUp() {
    if (this.level >= this.maxLevel) {
      return;
    }
    this.leveEle.innerHTML = ++this.level + "";
  }
}

/* --------------------------------------------------------- */
class Snake {
  /*
    HTMLElement:
    HTMLCollection:可以获取同一类名或id或标签名的元素为数组，并实时刷新新元素；
     */
  constructor() {
    this.element = document.getElementById("snake"); //获取蛇的容器
    this.head = document.querySelector("#snake div");
    //this.head = document.getElementById("snake").getElementsByTagName("div");
    //this.bodies = document.querySelectorAll("#snake div"); //querySelectorAll获取的是之后就不会刷新了
    this.bodies = this.element.getElementsByTagName("div");
  }
  fun() {
    console.log(this.head);
    console.log(this.bodies);
    console.log(this.element);
  }
  //获取蛇头的坐标,获取是offsetLeft
  get X() {
    return this.head.offsetLeft;
  }
  get Y() {
    return this.head.offsetTop;
  }
  //设置蛇头坐标，设置是style.left
  set X(value) {
    this.head.style.left = value + "px";
  }
  set Y(value) {
    this.head.style.top = value + "px";
  }
  //蛇增加身体的方法
  addBody() {
    //this.element.insertBefore(this.head);
    //this.element.appendChild(this.head);
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }
}

/* ---------------------------------------------------------------- */
class GameControl {
  constructor() {
    this.engGame = true;
    this.food = new Food();
    this.snake = new Snake();
    this.scorePanel = new ScorePanel();
  }
  /* 游戏开始的方法 */
  init() {
    /* 监听键盘按下事件 */
    document.addEventListener("keydown", this.keyDownHandler.bind(this));
  }
  /* 键盘相应函数 */
  keyDownHandler(event) {
    //console.log(this);
    //document.addEventListener调用该函数，所有this指向document,通过bind改变this指向
    /* 判断是否按下上下左右键 */
    if (this.engGame == false) return;
    this.direction = event.key;
    //console.log(this.direction);
    this.remove();
  }
  //判断蛇是否撞墙
  checkout() {
    if (this.snake.X < 0 || this.snake.X > this.food.length) {
      this.snake.X = 0;
      this.engGame = false;
      alert("游戏结束！");
    } else if (this.snake.Y < 0 || this.snake.Y > this.food.length) {
      this.engGame = false;
      this.snake.Y = 0;
      alert("游戏结束！");
    }
  }
  // 蛇移动的方法
  remove() {
    /*
        根据driection使蛇哪个方向移动
        */
    let x = this.snake.X;
    let y = this.snake.Y;
    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        y += 10;
        break;
      case "ArrowRight":
      case "Right":
        x += 10;
        break;
      case "ArrowLeft":
      case "Left":
        x -= 10;
        break;
    }
    this.checkEat(x, y);
    let divs = this.snake.element.querySelectorAll("div");
    /* 下面这两个if是防止蛇在移动的时候不会掉头 */
    if (divs[1] && divs[1].offsetLeft == x && divs[0].offsetTop == y) {
      console.log(divs[1].offsetLeft, x);
      if (x < divs[0].offsetLeft) {
        x += 20;
      } else {
        x -= 20;
      }
    } else if (divs[1] && divs[1].offsetTop == y && divs[0].offsetLeft == x) {
      if (y < divs[0].offsetTop) {
        y += 20;
      } else {
        y -= 20;
      }
    }
    this.moveBody(divs);
    this.snake.X = x;
    this.snake.Y = y;
    this.checkhead(divs);
    this.checkout();
    clearInterval(this.time);
    this.engGame &&
      (this.time = setInterval(
        this.remove.bind(this),
        300 /
          Math.sqrt(
            Math.sqrt(
              this.scorePanel.level *
                (this.scorePanel.level + this.scorePanel.score)
            )
          )
      ));
  }
  //检查蛇是否吃到食物
  checkEat(x, y) {
    //吃到食物
    if (x == this.food.X && y == this.food.Y) {
      this.scorePanel.addscore(); //分数增加
      this.snake.addBody(); //蛇增加一截
      this.food.change(); //改变食物的位置
    }
  }
  //添加身体移动的方法
  moveBody(divs) {
    /*
        将后面的位置设置为前面的位置
        例如：蛇长3节
            第3节为第2节位置
            第2节为第1节位置
            第1节为向指定方向移动
        */
    //let divs = this.snake.element.querySelectorAll('div');
    //console.log(divs);
    for (let i = divs.length - 1; i > 0; i--) {
      let x = divs[i - 1].offsetLeft;
      let y = divs[i - 1].offsetTop;
      divs[i].style.left = x + "px";
      divs[i].style.top = y + "px";
    }
  }
  /* 检查身体是否相撞 */
  checkhead(divs) {
    for (let i = 1; i < divs.length; i++) {
      if (
        this.snake.X == divs[i].offsetLeft &&
        this.snake.Y == divs[i].offsetTop
      ) {
        this.engGame = false;
        alert("游戏结束！");
      }
    }
  }
}
let satrt = new GameControl();
satrt.init();
/* ------------------------------------------------------ */
