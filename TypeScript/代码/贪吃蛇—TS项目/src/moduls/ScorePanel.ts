/* 定义记分牌的类 */
class ScorePanel{
    score = 0;
    level = 1;
    scoreEle:HTMLElement;//当前分数
    leveEle:HTMLElement;//当前等级
    maxLevel:number;//leveEle大于maxLevel不升级
    upScore:number;//多少分数省一级
    constructor(maxLevel:number = 10, upScore:number = 10){
        this.scoreEle = document.getElementById("score");
        this.leveEle = document.getElementById("level");
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }
    //加法器
    addscore(){
        this.score++;
        this.scoreEle.innerHTML = this.score + '';
        if(this.score % this.upScore === 0){
            this.leveUp();//分数每this.upScore会升一级
        }
    }
    //等级提升
    leveUp(){
        if(this.level >= this.maxLevel){
            return;
        }
        this.leveEle.innerHTML = ++this.level + '';
    }
}

export default ScorePanel;
