/* --------start泛型结合函数的基本使用--------- */
/*
 定义泛型
 T是传递参数时的类型
 */
function fu<T>(one:T):T{
    return one;
    /* 
    参数类型为T，返回值类型也为T
     */
}

function fun<T,H>(one:T,two:H):H{
    return two;
}

console.log(fu<string>("hello"));//<string>通知函数传递的是string类型
console.log(fun("hello","bilibili"));

function swap<T,U>(tuple:[T,U]):[U,T]{
    return [tuple[1],tuple[0]];
}

const result = swap(['hello',12]);
/* --------end泛型结合函数的基本使用--------- */





/* --------start约束泛型-------- */
//返回可以得到该类型length属性
function echoArrayLength <T> (arry: T[]):number{
    return arry.length;
}
echoArrayLength([1,2,3,4]);

//但是不只数组有length属性，string也有length
interface WithLength {
    length:number
}

function echoWithLength <T extends WithLength> (type:T):number{
    return type.length;
}

echoWithLength("string");
echoWithLength( [1, 2, 3, 4, 5] );
echoWithLength( { length:6 } );
/* --------end约束泛型-------- */





/* --------start类泛型-------- */
//类名前面的<T>只是声明有这种类型T，不是作为参数，Class类部可以直接使用这个变量
class Queue<T>{
    private data:T[];

    push(item:T):void{
        this.data.push(item);
    }

    pop():T{
        return this.data.pop();
    }
}

const firstQueue = new Queue<number>();
firstQueue.push(520);
const QueueLast = firstQueue.pop;

const secondQueue = new Queue<string>();
secondQueue.push("zainuo");
secondQueue.pop;
/* --------end类泛型-------- */


/* --------start接口泛型-------- */
interface keyPair<T, U>{
    key:T;
    value:U;
}
const keyOne: keyPair<number,string> = {
    key: 66,
    value:"hhh"
}
const keyTwo: keyPair<string,number> = {
    key:'zainuo',
    value:520
}
/* --------end接口泛型-------- */



/* --------start接口实现函数类型的泛型-------- */
interface FunType<T>{
    (a: T, B: T): T //前面两个是传入参数的类型T，后面的一个是返回的类型T
}
function newFun(a:number,b:number):number{
    return a - b;
}
const otherFun: FunType<number> = newFun;//把一个函数赋值给一个变量时变量必须先声明类型,这时候直接使用接口类型声明
/* --------end接口实现函数类型的泛型-------- */