class species{
    public kind:string;
    private year:number;//私有属性，只能够在类内部定义
    protected color:string;
    constructor(kind:string,year:number,color:string){
        this.kind = kind;
        this.color = color;
        this.year = year;
    }
    behavior(hobby:string){
        console.log("行为："+hobby);
    }
    //限制了属性的随意修改，现在只有满足条件才能被修改 
    /* 自定义方法访问私有属性 */
    setYear(value:number){
        if(value < 0) return;
        this.year = value;
    }
    getYear(){
        return this.year;
    }
    //ts 内置方法访问私有属性
    get Year(){
        //get 必须要有return
        return this.year;
    }
    set Year(value:number){
        //set必须要有参数
        if(value < 0) return;
        this.year = value;
    }
}

let bird = new species("bird",10,"green");
/* bird.year = '8'; //私有属性只能在类中访问
console.log(bird.year); */
bird.setYear(-1);
console.log("通过自定义方法访问",bird.getYear());//通过内置方法访问私有属性,结果还是10
bird.Year = 8;//与自定义方法不同，这是通过直接定义
console.log("通过内置方法访问",bird.Year);

class sons extends species{
    print(){
        console.log(this.kind);
        console.log(this.Year);
        //console.log(this.year); //私有属性不能子类直接访问
        console.log(this.color);  //protected可以通过子类访问
    }
}

let a = new sons("person",20,'red');
a.print();

