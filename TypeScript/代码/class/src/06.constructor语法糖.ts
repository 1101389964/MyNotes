class A{
    name:string;
    age:number;
    constructor(a:string,b:number){
        this.name = a;
        this.age = b;
    }
}

class B{
    constructor(public name: string, public age: number){
    }
}

let c = new A('hhh',10);
let d = new B("aaa",20);
console.log(c,d);

