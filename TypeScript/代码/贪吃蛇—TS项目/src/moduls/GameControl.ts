import Food from "./Food.js";
import Snake from "./Snake.js";
import ScorePanel from "./ScorePanel.js";

class GameControl{
    snake : Snake;
    food : Food;
    scorePanel : ScorePanel;
    /* 表示蛇的移动方向 */
    direction: string;
    time: number;//定时器
    engGame = true;
    constructor(){
        this.food = new Food;
        this.snake = new Snake;
        this.scorePanel = new ScorePanel;
    }
    /* 游戏开始的方法 */
    init(){
        /* 监听键盘按下事件 */
        document.addEventListener('keydown',this.keyDownHandler.bind(this));
    }
    /* 键盘相应函数 */
    keyDownHandler(event:KeyboardEvent){//KeyboardEvent键盘事件
        //console.log(this); 
        //document.addEventListener调用该函数，所有this指向document,通过bind改变this指向
        /* 判断是否按下上下左右键 */
        if(this.engGame == false) return;
        this.direction = event.key;
        //console.log(this.direction);
        this.remove();
    }
    //判断蛇是否撞墙
    checkout(){
        if(this.snake.X < 0 || this.snake.X > this.food.length){
            this.snake.X = 0;
            this.engGame = false;
            alert("游戏结束！");
        }
        else if(this.snake.Y < 0 || this.snake.Y > this.food.length){
            this.engGame = false;
            this.snake.Y = 0;
            alert("游戏结束！");
        }
    }
    // 蛇移动的方法
    remove(){
        /*
        根据driection使蛇哪个方向移动 
        */
        let x = this.snake.X;
        let y = this.snake.Y;
        switch(this.direction){
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
            case "ArrowLeft" :
            case "Left" :
                x -= 10;
                break;
        }
        this.checkEat(x,y);
        let divs = this.snake.element.querySelectorAll('div');
        /* 下面这两个if是防止蛇在移动的时候不会掉头 */
        if(divs[1] && divs[1].offsetLeft == x && divs[0].offsetTop == y){
            console.log(divs[1].offsetLeft,x);
            if(x < divs[0].offsetLeft){
                x += 20;
            }
            else{
                x -= 20;
            }
        }
        else if(divs[1] && divs[1].offsetTop == y && divs[0].offsetLeft == x){
            if(y < divs[0].offsetTop){
                y += 20;
            }
            else{
                y -= 20;
            }
        }
        this.moveBody(divs);
        this.snake.X = x;
        this.snake.Y = y;
        this.checkhead(divs);
        this.checkout();
        clearInterval(this.time);
        this.engGame && (this.time = setInterval(this.remove.bind(this),300 /
        Math.sqrt(
          Math.sqrt(
            this.scorePanel.level *
              (this.scorePanel.level + this.scorePanel.score)
          )
        )));
    }
    //检查蛇是否吃到食物
    checkEat(x:number,y:number){
        //吃到食物
        if(x == this.food.X && y == this.food.Y){
            this.scorePanel.addscore();//分数增加
            this.snake.addBody();//蛇增加一截
            this.food.change();//改变食物的位置
        }
    }
    //添加身体移动的方法
    moveBody(divs:any){
        /*
        将后面的位置设置为前面的位置
        例如：蛇长3节
            第3节为第2节位置
            第2节为第1节位置
            第1节为向指定方向移动
        */
        //let divs = this.snake.element.querySelectorAll('div');
        //console.log(divs);
        
        for(let i = divs.length-1; i > 0; i--){
            let x = divs[i - 1].offsetLeft;
            let y = divs[i - 1].offsetTop;
            divs[i].style.left = x + 'px';
            divs[i].style.top = y + 'px';
        }
    }
    /* 检查身体是否相撞 */
    checkhead(divs:any){
        for(let i = 1; i < divs.length; i++){
            if(this.snake.X == divs[i].offsetLeft && this.snake.Y ==divs[i].offsetTop){
                this.engGame = false;
                alert("游戏结束！")
            }
        }
    }
}

export default GameControl;