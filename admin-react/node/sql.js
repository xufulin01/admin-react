const mysql = require("mysql");
// 建立与数据库之间的链接关系
const db = mysql.createPool({
  host: "127.0.0.1", //数据库的IP地址
  user: "root", //登陆数据库的账号
  password: "admin123", //登陆数据库的密码
  database: "my_db_01", //指定要操作那个数据库
});

// 测试mysql模块能否正常工作
// select 1语句没有实质性的作用，只是用来测试是否正常工作的
db.query("select 1", (err, results) => {
  // mysql模块报错信息，正常err为null
  if (err) return console.log(err.message);
  //   打印[ RowDataPacket { '1': 1 } ]说明运行正常
  console.log(results);
});
// 查询表中的全部数据
// db.query("SELECT * FROM users", (err, res) => {
//   if (err) return console.log(err.message);
//   console.log(res);
// });
module.exports = db;
