/* 
有的变量只有几种可能取值。如人的性别只有两种可能取值，
星期只有七种可能取值。而这些变量取值为string类型，
string类型非常占用空间，所以可以代替为number类型，
而number不太直观，枚举就很好的解决了这个问
*/
enum Gender{
    male = 1,
    frmale = 0
}

let humman: {name: string, sex: Gender};//定义sex属性为Gender类型

humman = {
    name:'猴哥',
    sex:Gender.male//直接去值为枚举里面的male
}