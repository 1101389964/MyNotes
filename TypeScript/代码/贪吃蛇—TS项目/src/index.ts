/* import Food from './moduls/Food.js';
/* 
虽然在ts文件里面导入的是js文件，
但没关系，因为ts是解析后才会执行的，
解析完成之后正好有js文件了；
如果没有.js扩展名，解析之后也不会有.js扩展名
 *//*
import ScorePanel from './moduls/ScorePanel.js';
import Snake from './moduls/Snake.js';
import Sanke from './moduls/Snake.js';

const food = new Food();
food.change();
console.log(food.X,food.Y);

const score = new ScorePanel(10,10);
score.leveUp();

const snake = new Snake;
//snake.fun();
//console.log(snake.X,snake.Y);
snake.addBody(); */
 import GameControl from './moduls/GameControl.js';
let satrt = new GameControl;
satrt.init();

