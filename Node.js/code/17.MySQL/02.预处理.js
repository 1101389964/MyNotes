const mysql = require("mysql2");

//创建数据库连接
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: "students",
  user: "root",
  password: "tqa3507016",
});

/*
Prepared Statement SQL预处理,
通过预处理可以有效的增加SQL查询效率
将原有的SQL语句的条件改为值得插入，
还可以防止SQL注入
*/
const statement = `
  SELECT * FROM products WHERE price > ?;
`;

connection.execute(statement, [8000], (err, result) => {
  console.log(result);
});
