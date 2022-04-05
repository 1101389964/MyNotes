type myType = 1 | 2 | 3 | 4;

//声明把1 | 2 | 3 | 4赋值给一个变量类型，可以直接定义一个变量
let aozige: myType;
let aozige2: myType;

aozige = 4;

console.log(aozige);


type addType = (x: number, y: number) => number

function add(num1:number,num2:number):number{
    return num1 + num2;
}

let sum:addType = add;

//联合类型：有两种参数，传入参数不同返回的类型也不一样；
//1.当传入为字符串时直接返回字符串；2.当传入为函数则返回函数的执行结果；

type fun = () => string;//定义函数类型；
type funOrString = string | fun;//联合类型，string或者fun

let getSult = function(arguments:funOrString):string{
    if(typeof arguments === 'string') return arguments;
    else return arguments();
}

