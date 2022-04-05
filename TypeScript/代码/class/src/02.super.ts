class Father {
    x:number;
    y:number;
    constructor(x:number, y:number) {
        this.x= x;
        this.y= y;
    }
    sum() {
    console.log(this.x + this.y);
     }
  }
 //子元素继承父类
     class Son extends Father {
            x:number;
            y:number;
             constructor(x :number, y:number) {
             
            /*  this.x = x;
             this.y = y; */
            
             super(x, y); 
              /*
              如果没有super,子类继承父类的sum()this指向是父类里面的construct
              不能指向子类的construct。
              使用super调用了父类中的contruct构造函数,把(x,y)直接传递给父类
              */
         }
     }
     let far = new Father(1, 5);
     far.sum();
     
     var son = new Son(1, 2);
     son.sum(); //结果为3