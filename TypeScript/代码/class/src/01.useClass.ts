class people{
    name:string = '猴哥';//需要实例化来访问
    static age:number = 5000;//静态属性(类属性)可以直接通过类去访问
    readonly height:number = 180;//readonly只读属性不可以更改
}

console.log(people.age);//没有实例化直接访问
const per =  new people;
//per.height = 190;
console.log(per.name);
