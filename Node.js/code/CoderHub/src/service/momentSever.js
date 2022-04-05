const connection = require("../app/database");

class momentSever {
  async createMomet(id, content) {
    const statement = "INSERT INTO moments (content, user_id) VALUES(?, ?);";
    const result = await connection.execute(statement, [content, id]);
    return result;
  }
  async getMoment(id) {
    const statement = `
    SELECT m.id id, m.content content,m.createAt createTime,m.updateAt updateTime, 
    JSON_OBJECT('id', u.id, 'account', u.account)author
    FROM moments m 
    LEFT JOIN user u ON m.user_id = u.id WHERE m.user_id = ?;`;
    const result = await connection.execute(statement, [id]);
    return result[0];
  }
  async getMomentList(offset, size) {
    const statement = `
    SELECT m.id id, m.content content,m.createAt createTime,m.updateAt updateTime, 
    JSON_OBJECT('id', u.id, 'account', u.account)user
    FROM moments m LEFT JOIN user u ON m.user_id = u.id
    LIMIT ?, ?;`;
    const result = await connection.execute(statement, [offset, size]);
    return result[0];
  }
}

module.exports = new momentSever();
