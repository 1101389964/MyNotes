## HTTP：

HTTP协议[超文本传输协议]，协议详细规定了游览器与万维网服务器之间通信的规则。

## 请求报文(请求)

**格式：**

* 请求行    
  * 请求类型：GET\POST...
  * URL 路径
  * HTTP协议版本：http1.1
* 请求头
  * Host: atguigu.
  * comCookie: name=guigu
  * Content-type: application/x-Www-form-urlencoded
  * User-Agent: chrome 83
* 空行
* 请求体(get请求请求体为空，post请求体可以不为空)

## 响应报文(响应)

* 响应行

  * http版本(http1.1)
  * 状态码（一般成功为200）
  * 响应字符串

* 响应头

  * Content-Type: text/html; 
  * charset=utf-8
  * content-length: 2048
  * Content-encoding: gzip

* 空行

* 响应体：HTML标签组成的

  