/*
定义接口：interface 
接口所有的属性都不能有实际值
所有的方法都是抽象方法
 */
interface Person{
    name:string;
    characteristic():void;
}
/* 
接口可以去限制一个对象的接口：
对象只有包含接口中定义的所有属性和方法时才能匹配接口；
*/
class peo implements Person{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    characteristic(){
        console.log("hello world");
    }
}

let onePer = new peo("AoZiGe");
onePer.characteristic();