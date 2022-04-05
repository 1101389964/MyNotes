class Food{
    element:HTMLElement;//食物
    region:HTMLElement;//活动区域
    length = 290;
    constructor(){
        this.element = document.getElementById("food");
        this.region = document.getElementById("region");
    }
    //获取食物x轴
    get X(){
        return this.element.offsetLeft;
    }
    //获取食物y轴
    get Y(){
        return this.element.offsetTop;
    }
    change(){
        /* 
        生成随机位置，食物的位置最小是0，最大是290px
        每次移动10px，所以食物的位置必须是整10
        */
        let width1 = this.region.scrollWidth;//scrollWidth对象的实际内容的宽度，不包边线宽度
        let width2 = this.element.offsetWidth;//offsetWidth：对象整体的实际宽度，包滚动条等边线
        this.length = width1 - width2;//获取长度
        let len = this.length / width2;
        console.log(width2,len);
        let top = Math.round(Math.random() * len) * width2;
        //Math.random()随机获取0~1之间的数，Math.round向上取整
        let left = Math.round(Math.random() * len) * width2;
        this.element.style.left = left + 'px';
        this.element.style.top = top + "px";
    }
}
export default Food;
