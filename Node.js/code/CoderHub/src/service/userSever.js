const connection = require("../app/database");

class UserSever {
  async create(user) {
    const { account, password } = user;
    //将user存储到数据库中
    const statement = `INSERT INTO user (account, password) VALUES(?, ?);`;
    await connection.execute(statement, [account, password]);
    return "用户创建成功";
  }
  async getUserByName(account) {
    //检查用户是否已经创建
    const testExist = `SELECT * FROM user WHERE account = ?;`;
    const testResult = await connection.execute(testExist, [account]);
    //筛选数据库中account的字段，看是否为空，不为空则证明该账户已被创建
    return testResult[0];
  }
}

module.exports = new UserSever();
