let fu : Function;
//同Object声明一样没有意义
let fun : (a:number, b:number,c?:number)=>number;

/*
fun函数两个参数都为number，且返回值也为number
*/
fun = function(one, two){
    return one + two;
}
//第三个参数为可选参数
fun = function(one, two, three){
    return one + two + three;
}

//a: number = 10 参数a的默认值为10
function Fun(a: number = 10):number{
    return 10 * a;
}

let num1:number;
num1 = Fun(10);//没有报错
//num1 = Fun;  //报错

//若要使一个函数的引用赋值给一个变量，则需提前给该变量做类型声明
let num2 : (one: number) => number = Fun;// => number表示返回类型 