const mysql = require("mysql2");

//创建连接池
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: "students",
  user: "root",
  password: "tqa3507016",
  connectionLimit: 10, //最多建立多少连接
});

//使用连接池
const statement = `
  SELECT * FROM products WHERE price > ?;
`;

connection.execute(statement, [8000], (err, result) => {
  console.log(result);
});
