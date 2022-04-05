const mysql = require("mysql2");

//创建连接池
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: "students",
  user: "root",
  password: "tqa3507016",
});

//使用连接池
const statement = `
  SELECT title FROM products WHERE price > ?;
`;

const service = connection.promise();

const result = service.execute(statement, [8000]).then((result) => {
  console.log(result);
});

console.log(result);
