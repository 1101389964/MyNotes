const buffer = Buffer.alloc(8); //创建8个字节大小的buff
console.log(buffer); //默认存储的全为00，<Buffer 00 00 00 00 00 00 00 00>

//修改buffer
buffer[0] = 16; //该16位10进制下的16传给buff会变成16进制：10;
console.log(buffer); //第一个字节修改为10 <Buffer 10 00 00 00 00 00 00 00>

buffer[1] = 0x16; //0x代表16进制，会直接传给16进制的buff
console.log(buffer); // <Buffer 10 16 00 00 00 00 00 00>
