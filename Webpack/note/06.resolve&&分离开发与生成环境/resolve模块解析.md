# resolve模块解析

* resolve用于设置模块如何被解析： 
  * 在开发中我们会有各种各样的模块依赖，这些模块可能来自于自己编写的代码，也可能来自第三方库； 
  * resolve可以帮助webpack从每个 require/import 语句中，找到需要引入到合适的模块代码； 
  * webpack 使用 enhanced-resolve 来解析文件路径； 

## **webpack能解析三种文件路径：**

* **绝对路径** 
  * 由于已经获得文件的绝对路径，因此不需要再做进一步解析。 
* **相对路径** 
  * 在这种情况下，使用 import 或 require 的资源文件所处的目录，被认为是上下文目录； 
  * 在 import/require 中给定的相对路径，会拼接此上下文路径，来生成模块的绝对路径；
* **模块路径** 
  * 在 resolve.modules中指定的所有目录检索模块； 默认值是 ['node_modules']，所以默认会从node_modules中查找文件； 
  * 一旦根据上述规则解析路径后，解析器(resolver)将检查路径是否指向文件或目录。**如果路径指向一个文件：**
    - 如果路径具有文件扩展名，则被直接将文件打包。
    - 否则，将使用 [`resolve.extensions`] 选项作为文件扩展名来解析，此选项告诉解析器在解析中能够接受哪些扩展名（例如 `.js`, `.jsx`）
  * **如果路径指向一个文件夹**，则采取以下步骤找到具有正确扩展名的正确文件：
    - 如果文件夹中包含 `package.json` 文件，则按照顺序查找 [`resolve.mainFields`](https://www.webpackjs.com/configuration/resolve/#resolve-mainfields) 配置选项中指定的字段。并且 `package.json` 中的第一个这样的字段确定文件路径。
    - 如果 `package.json` 文件不存在或者 `package.json` 文件中的 main 字段没有返回一个有效路径，则按照顺序查找 [`resolve.mainFiles`](https://www.webpackjs.com/configuration/resolve/#resolve-mainfiles) 配置选项中指定的文件名，看是否能在 import/require 目录下匹配到一个存在的文件名。
    - 文件扩展名通过 `resolve.extensions` 选项采用类似的方法进行解析。
  * 我们可以通过设置别名的方式来替换初识模块路径，具体后面alias的配置；

## extensions和alias配置

​	**resolve.extensions**

* extensions是解析到文件时自动添加扩展名： 

  * 默认值是 `extensions: [".js", ".json"]`； 

  * 所以如果我们代码中想要添加加载 .vue 或者 .jsx 或者 .ts 等文件时，我们必须自己写上扩展名； 

    ```js
    //webpack.config.js文件中
    resolve: {
        extensions:['.js','.jsx','json','vue','ts'],
    }
    ```

  **resolve.alias**

* 另一个非常好用的功能是配置别名alias： 

  * 特别是当我们项目的目录结构比较深的时候，或者一个文件的路径可能需要 ../../../这种路径片段； 

  * 我们可以给某些常见的路径起一个别名；

    ```js
    alias: {
      Utilities: path.resolve(__dirname, 'src/utilities/'),
      Templates: path.resolve(__dirname, 'src/templates/')
    }
    ```

    现在，替换「在导入时使用相对路径」这种方式，就像这样：

    ```js
    import Utility from '../../utilities/utility';
    ```

    你可以这样使用别名：

    ```js
    import Utility from 'Utilities/utility';
    ```

    

## 

