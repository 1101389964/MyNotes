const connection = require("../app/database");

class loginSever {
  async loginCheck(account, password) {
    const loginTest = `SELECT * FROM user WHERE account = ? && password = ?;`;
    const testResult = await connection.execute(loginTest, [account, password]);
    return testResult[0];
  }
}

module.exports = new loginSever();
