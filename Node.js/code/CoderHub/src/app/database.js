const mysql = require("mysql2");

const config = require("./config"); //数据库相关的域名，密码啥的都放在.env文件里面

const connection = mysql.createPool({
  host: config.MYSQL_HOST,
  port: config.MYSQL_PORT,
  database: config.MYSQL_DATABASE,
  user: config.MYSQL_ROOT,
  password: config.MYSQL_PASSWORD,
});

connection.getConnection((err, con) => {
  con.connect((err) => {
    if (err) {
      console.log("连接失败", err);
    } else {
      console.log("数据库连接成功");
    }
  });
});

module.exports = connection.promise();
