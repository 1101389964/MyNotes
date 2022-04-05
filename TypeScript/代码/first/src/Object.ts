let obj1 : Object;
/*
定义为对象类型，没用啥用处，因为JS中万物皆为对象，所以很这样定义类型 
 */
let obj2 : {name:string, age:number};
obj2 = {name:'猴哥', age:1000};
//obj2 = {name:'师傅'};
//报错，必须包含name和age两个类型，少一个多一个都不行

let obj3 : {name:string, age?:number};
//表示必须有name属性，但不一定要age属性，多其他则不行

let obj4 : {name:string, [name:string]:any};
//该方法表示必须有string型的name属性，其他的属性为任意类型，可加可不加
obj4 = {
    name:'澳子哥',
    year:20,
    height:180,
}//不会报错