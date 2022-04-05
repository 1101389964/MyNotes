abstract class add {
    //abstract 抽象类只能继承不能实例化
    x:number;
    y:number;
    constructor(one:number,two:number){
        this.x = one;
        this.y = two;
    }
    abstract sum():void;/* {
        console.log(this.x+this.y);
    } */
    //定义一个抽象方法
    //抽象方法使用abstract，不能有功能即{}
    //抽象方法定义在抽象类中，子类中必须对抽象方法进行使用
}

//let per = new add(1,2) //报错无法创建抽象类的实例

class add1 extends add{
    constructor(x:number,y:number){
        super(x,y);//使继承的this指向子类
    }
    sum(){
        console.log(this.x+this.y);   
    }
}

let person = new add1(1,2) ;
person.sum();

