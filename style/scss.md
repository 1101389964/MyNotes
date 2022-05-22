## 一、安装与编译

* 安装：` npm install -g sass`
* 编译：
  * ` sass input.scss output.css`  获取一个 Sass 文件`input.scss`，并将该文件编译为`output.css。`
  * `sass --watch input.scss output.css`  每次修改之后重新编译
  * `sass --watch app/sass:public/styleshee`   将`app/sass`编译到`public/stylesheets`文件夹中			

---

## 二、语法

### 1、嵌套

* Sass 将允许您以遵循HTML的相同层次结构的方式嵌套CSS选择器。不过，过度嵌套的规则会导致过度限定的CSS，这可能会被证明难以维护，并且通常被认为是不好的做法。

* 编译前scss代码

  ```scss
  nav {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
  
    li { display: inline-block; }
  
    a {
      display: block;
      padding: 6px 12px;
      text-decoration: none;
    }
  }
  ```

* 编译后css代码

  ```css
  nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  nav li {
    display: inline-block;
  }
  nav a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
  ```

### 2、变量

* 定义：变量以美元符号开头，赋值方法与 CSS 属性的写法一样

~~~scss
$width: 1600px;
$pen-size: 3em;
~~~

* 使用：直接使用变量的名称即可调用变量

~~~scss
#app {
    height: $width;
    font-size: $pen-size;
}
~~~

* 作用域：变量支持块级作用域
  * 嵌套规则内定义的变量只能在嵌套规则内使用（局部变量）
  * 不在嵌套规则内定义的变量则可在任何地方使用（全局变量）
  * 将局部变量转换为全局变量可以添加 `!global` 声明

~~~scss
#foo {
  $width: 5em !global;
  width: $width;
}

#bar {
  width: $width;
}
~~~

编译后：

~~~css
#foo {
  width: 5em;
}

#bar {
  width: 5em;
}
~~~

### 3、数据类型

SassScript 支持 7 种主要的数据类型：

- 数字，`1, 2, 13, 10px`
- 字符串，有引号字符串与无引号字符串，`"foo", 'bar', baz`
- 颜色，`blue, #04a3f9, rgba(255,0,0,0.5)`
- 布尔型，`true, false`
- 空值，`null`
- 数组 (list)，用空格或逗号作分隔符，`1.5em 1em 0 2em, Helvetica, Arial, sans-serif`
- maps, 相当于 JavaScript 的 object，`(key1: value1, key2: value2)`

SassScript 也支持其他 CSS 属性值，比如 Unicode 字符集，或 `!important` 声明。然而Sass 不会特殊对待这些属性值，一律视为无引号字符串。

判断数据类型的方式：`type-of($value)`

#### 3.1、字符串 (Strings)

SassScript 支持 CSS 的两种字符串类型：`有引号字符串 (quoted strings)`，和`无引号字符串 (unquoted strings)`。

~~~scss
$name: 'Tom Bob';
$container: "top bottom";
$what: heart;
// 注：在编译 CSS 文件时不会改变其类型。只有一种情况例外，使用 `#{}` (interpolation) 时，有引号字符串将被编译为无引号字符串，这样便于在 mixin 中引用选择器名
~~~

#### 3.2、数字(Numbers)

SassScript支持两种数字类型：`带单位数字`和`不带单位数字`。（可正可负可为零，可正可浮点）

~~~scss
$my-age: 19;
$your-age: 19.5;
$height: 120px;
// 注：单位会和数字当做一个整体，进行算数运算
~~~

#### 3.3、空值(Null)

只有一个取值`null`

~~~scss
$value: null;
// 注：由于它代表空，所以不能够使用它与任何类型进行算数运算
~~~

#### 3.4、布尔型(Booleans)

只有两个取值：`true`和`false`

~~~scss
$a: true;
$b: false;
// 注：只有自身是false和null才会返回false，其他一切都将返回true
~~~

#### 3.5、数组 (Lists)

通过空格或者逗号分隔的一系列的值。事实上，独立的值也被视为数组 —— 只包含一个值的数组。索引从`1`开始

~~~scss
$list0: 1px 2px 5px 6px;
$list1: 1px 2px, 5px 6px;
$list2: (1px 2px) (5px 6px);
~~~

数组中可以包含子数组，比如 `1px 2px, 5px 6px` 是包含 `1px 2px` 与 `5px 6px` 两个数组的数组。如果内外两层数组使用相同的分隔方式，需要用圆括号包裹内层，所以也可以写成 `(1px 2px) (5px 6px)`。变化是，之前的 `1px 2px, 5px 6px` 使用逗号分割了两个子数组 (comma-separated)，而 `(1px 2px) (5px 6px)` 则使用空格分割(space-separated)。

当数组被编译为 CSS 时，Sass 不会添加任何圆括号（CSS 中没有这种写法），所以 `(1px 2px) (5px 6px)` 与 `1px 2px, 5px 6px` 在编译后的 CSS 文件中是完全一样的，但是它们在 Sass 文件中却有不同的意义，前者是包含两个数组的数组，而后者是包含四个值的数组。

用 `()` 表示不包含任何值的空数组（在 Sass 3.3 版之后也视为空的 map）。空数组不可以直接编译成 CSS，比如编译 `font-family: ()` Sass 将会报错。如果数组中包含空数组或空值，编译时将被清除，比如 `1px 2px () 3px` 或 `1px 2px null 3px`。

基于逗号分隔的数组允许保留结尾的逗号，这样做的意义是强调数组的结构关系，尤其是需要声明只包含单个值的数组时。例如 `(1,)` 表示只包含 `1` 的数组，而 `(1 2 3,)` 表示包含 `1 2 3` 这个以空格分隔的数组的数组。

#### 3.6、映射(Maps)

Maps必须被圆括号包围，可以映射任何类型键值对（任何类型，包括内嵌maps，不过不推荐这种内嵌方式）

~~~scss
$map: ( 
  $key1: value1, 
  $key2: value2, 
  $key3: value3 
)
~~~

#### 3.7、颜色 (Colors)

CSS原有颜色类型，十六进制、RGB、RGBA、HSL、HSLA和色彩单词

SCSS提供了内置Colors函数，从而更方便地使用颜色

~~~scss
$color0: green;
$color1: lighten($color, 15%);
$color2: darken($color, 15%);
$color3: saturate($color, 15%);
$color4: desaturate($color, 15%);
$color5: (green + red);
~~~

### 4、运算

#### 4.1.数字运算符

SassScript 支持数字的加减乘除、取整等运算 (`+, -, *, /, %`)，如果必要会在不同单位间转换值
如果要保留运算符号，则应该使用插值语法

- `+`

  ~~~scss
  // 纯数字
  $add1: 1 + 2;	// 3
  $add2: 1 + 2px; // 3px
  $add3: 1px + 2; // 3px
  $add4: 1px + 2px;//3px
  
  // 纯字符串
  $add5: "a" + "b"; // "ab"
  $add6: "a" + b;	  // "ab"
  $add7: a + "b";	  // ab
  $add8: a + b;	  // ab
  
  // 数字和字符串
  $add9: 1 + a;	// 1a
  $adda: a + 1;	// a1
  $addb: "1" + a; // "1a"
  $addc: 1 + "a"; // "1a"
  $addd: "a" + 1; // "a1"
  $adde: a + "1"; // a1
  $addf: 1 + "1"; // "11"
  ~~~

  ~~~scss
  // 总结：
  a.纯数字：只要有单位，结果必有单位
  b.纯字符串：第一个字符串有无引号决定结果是否有引号
  c数字和字符串：第一位有引号，结果必为引号；第一位对应数字非数字且最后一位带有引号，则结果必为引号
  ~~~

- `-`

  ~~~scss
  $add1: 1 - 2;	// -1
  $add2: 1 - 2px; // -1px
  $add3: 1px - 2; // -1px
  $add4: 1px - 2px;//-1px
  
  $sub1: a - 1;  // a-1
  $sub2: 1 - a;  // 1-a
  $sub3: "a" - 1;// "a"-1
  $sub4: a - "1";// a-"1"
  ~~~

  ~~~scss
  // 总结：
  每个字段必须前部分为数字，且两个字段只能一个后部分是字符(因为此时后缀被当被单位看待了)。
  只要其中一个值首位不为数字的，结果就按顺序去除空格后拼接起来
  ~~~

- `*`

  ~~~scss
  $num1: 1 * 2;    // 2
  $mul2: 1 * 2px;  // 2px
  $num3: 1px * 2;  // 2px
  $num4: 2px * 2px;// 编译不通过
  
  $num5: 1 * 2abc; // 2abc
  ~~~

  ~~~scss
  // 总结：
  每个字段必须前部分为数字，且两个字段只能一个后部分是字符(因为此时后缀被当被单位看待了)。其余编译不通过
  ~~~

- `/`

  ~~~scss
  // 总结：
  a.不会四舍五入，精确到小数点后5位
  b.每个字段必须前部分为数字，且当前者只是单纯数字无单位时，后者(除数)后部分不能有字符。其余结果就按顺序去除空格后拼接起来。
  (因为此时后缀被当被单位看待了)
  ~~~

- `%`

  ~~~scss
  // 总结：
  a.值与"%"之间必须要有空格，否则会被看做字符串
  ~~~

  

#### 4.2.关系运算符

大前提：两端必须为`数字` 或 `前部分数字后部分字符`

返回值：`true` or `false`


- `>`

  ~~~scss
  $a: 1 > 2; // false
  ~~~

- `<`

  ~~~scss
  $a: 1 > 2; // true
  ~~~

- `>=`

  ~~~scss
  $a: 1 >= 2; // false
  ~~~

- `<=`

  ~~~scss
  $a: 1 <= 2; // true
  ~~~

  

#### 4.3.相等运算符

作用范围：相等运算 `==, !=` 可用于所有数据类型

返回值：`true` or `false`

~~~scss
$a: 1 == 1px; // true
$b: "a" == a; // true
~~~

~~~scss
// 总结：
前部分为不带引号数字时，对比的仅仅是数字部分；反之，忽略引号，要求字符一一对应
~~~



#### 4.4.布尔运算符

SassScript 支持布尔型的 `and` `or` 以及 `not` 运算。

~~~scss
$a: 1>0 and 0>=5; // fasle
~~~

~~~scss
// 总结：
值与"and"、"or"和"not"之间必须要有空格，否则会被看做字符串
~~~



#### 4.5.颜色值运算

颜色值的运算是分段计算进行的，也就是分别计算红色，绿色，以及蓝色的值

- `颜色值与颜色值`

  ~~~scss
  p {
    color: #010203 + #040506;
  }
  
  // 计算 01 + 04 = 05 02 + 05 = 07 03 + 06 = 09，然后编译为
  // p {
    color: #050709; }
  ~~~

- `颜色值与数字`

  ~~~scss
  p {
    color: #010203 * 2;
  }
  
  // 计算 01 * 2 = 02 02 * 2 = 04 03 * 2 = 06，然后编译为
  // p {
    color: #020406; }
  ~~~

- `RGB和HSL`

  ~~~scss
  // 如果颜色值包含 alpha channel（rgba 或 hsla 两种颜色值），必须拥有相等的 alpha 值才能进行运算，因为算术运算不会作用于 alpha 值。
  
  p {
    color: rgba(255, 0, 0, 0.75) + rgba(0, 255, 0, 0.75);
  }
  
  // p {
    color: rgba(255, 255, 0, 0.75); }
  ~~~



#### 4.6.运算优先级

0. `()`

1. `*`、`/`、`%`
2. `+`、`-`
3. `>` 、`<`、`>=`、`<=