const mysql = require("mysql2");

//创建数据库连接
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: "students",
  user: "root",
  password: "tqa3507016",
});

//执行SQL语句
const statement = `
  SELECT * FROM products WHERE brand = '华为';
`;

connection.query(statement, (err, result, fields) => {
  console.log(result);
});
