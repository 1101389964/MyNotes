class Snake{
    head:HTMLElement;//蛇的头部
    bodies:HTMLCollection;//蛇的身体
    element= document.getElementById("snake");//获取蛇的容器
    /*
    HTMLElement: 
    HTMLCollection:可以获取同一类名或id或标签名的元素为数组，并实时刷新新元素；
     */
    constructor(){
        this.head = document.querySelector('#snake div');
        //this.head = document.getElementById("snake").getElementsByTagName("div");
        //this.bodies = document.querySelectorAll("#snake div"); //querySelectorAll获取的是之后就不会刷新了
        this.bodies = this.element.getElementsByTagName("div");
    }
    fun(){
        console.log(this.head);
        console.log(this.bodies);
        console.log(this.element);
        
    }
    //获取蛇头的坐标,获取是offsetLeft
    get X(){
        return this.head.offsetLeft;
    }
    get Y(){
        return this.head.offsetTop;
    }
    //设置蛇头坐标，设置是style.left
    set X(value:number){
        this.head.style.left = value+'px';
    }
    set Y(value:number){
        this.head.style.top = value+'px';
    }
    //蛇增加身体的方法
    addBody(){
        //this.element.insertBefore(this.head);
        //this.element.appendChild(this.head);
        this.element.insertAdjacentHTML("beforeend","<div></div>");
    }
}

export default Snake;