//一个参数为联合类型，如果为string则返回长度，如果为number则返回number本身；

//类型断言一：
function getLengthOrNumber(input: number | string):number{
    if((<string>input).length){
        return (<string>input).length
    }else{
        return <number>input;
    }
}

//类型断言二
function NumberOrgetLength(input: number | string):number{
    const str = input as string;//认定as为string
    if(str.length){
        return str.length;
    }else{
        return input as number;
    }
}