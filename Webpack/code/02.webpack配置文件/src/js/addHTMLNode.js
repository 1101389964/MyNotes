import "../css/index.css";
import "../css/component.less";

const Node = document.createElement("div");
Node.className = "box";
Node.innerHTML = "Hello webpack";
document.body.appendChild(Node);

const Img = new Image(); //创建img结点的另一种方式
Img.src = require("../img/龙猫.jpg").default;
document.body.appendChild(Img);

const Div = document.createElement("div");
Div.className = "imgBox";
document.body.appendChild(Div);
