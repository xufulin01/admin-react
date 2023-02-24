const db = require("./sql");
const express = require("express");
const router = express.Router();
// 查询表中的全部数据
// db.query("SELECT * FROM ev_users", (err, res) => {
//   if (err) return console.log(err.message);
//   console.log(res);
// });

// 登陆接口
router.get("/login", (req, res) => {
  const sqlStr = "SELECT * FROM ev_users ";
  db.query(sqlStr, (err, resulte) => {
    const username = req.query.username;
    const pasw = req.query.password;
    if (err) return console.log(err.message);
    const resa = resulte.filter((item) => {
      return item.username === username;
    });
    const pas = resa.filter((item) => {
      return item.password === pasw;
    });
    console.log(pas);
    if (pas?.length) {
      res.send({ code: 200, result: true, data: 7777777 });
    } else {
      res.send({ code: 200, result: false });
    }
  });
});
// 注册接口
router.get("/insert", (req, res) => {
  const data = req.query;
  const sqlStr = "INSERT INTO ev_users set ?";
  db.query(sqlStr, data, (err, resulte) => {
    if (err) {
      res.send({ code: 200, resulte: false });
    } else {
      res.send({ code: 200, resulte: true });
    }
  });
});

// my_db_01.addition_list  数据表
/**
 * 添加部门api
 */
router.get("/addition", (req, res) => {
  const data = req.query;
  const sqlStr = "INSERT INTO addition_list set ?";
  db.query(sqlStr, data, (err, resulte) => {
    if (err) {
      console.log(err);
      res.send({ code: 200, resulte: false });
    } else {
      res.send({ code: 200, resulte: true });
    }
  });
});
/**
 * 部门列表获取、、搜索
 */
router.get("/department/list", (req, res) => {
  const sqlStr = "SELECT * FROM addition_list where status=0";
  db.query(sqlStr, (err, resulte) => {
    if (err) return console.log(err);
    const username = req.query.name;
    if (username) {
      console.log(username, "username");
      const list = resulte.filter((item) => {
        return item.name === username;
      });
      console.log(list, "list");
      res.send({ code: 200, data: list });
    } else {
      res.send({ code: 200, data: resulte });
    }
  });
});
/**
 * 详情接口
 */
router.get("/department/detial", (req, res) => {
  const sqlStr = "SELECT * FROM addition_list where id=?";
  const id = req.query.id;
  db.query(sqlStr, id, (err, resulte) => {
    if (err) return console.log(err);
    res.send({ code: 200, data: resulte });
  });
});
// 标记删除，假删除、、部门删除
router.get("/department/delete", (req, res) => {
  const id = req.query.id;
  const sqlStr = "UPDATE addition_list SET status=1 WHERE id=?";
  db.query(sqlStr, id, (err, resulte) => {
    if (err) return console.log(err.message);
    res.send({ code: 200, data: resulte });
  });
});

/**
 * 修改部门接口
 */
//修改数据
router.get("/department/updata", (req, res) => {
  console.log(req.query);
  const userParams = req.query;
  const sqlStr = "UPDATE addition_list SET ? WHERE id=?";
  db.query(sqlStr, [userParams, userParams.id], (err, resulte) => {
    if (err) {
      console.log(err.message);
      res.send({ code: 200, data: false });
    } else {
      res.send({ code: 200, data: true });
    }
  });
});

// 直接删除数据删除接口,不推荐使用
// router.get("/delete", (req, res) => {
//   const id = req.query.id;
//   const sqlStr = "DELETE FROM ev_users WHERE id=?";
//   db.query(sqlStr, id, (err, resulte) => {
//     if (err) return console.log(err.message);
//     res.send({ code: 200, data: resulte });
//   });
// });
// 标记删除，假删除
// router.get("/delete", (req, res) => {
//   const id = req.query.id;
//   const sqlStr = "UPDATE ev_users SET status=0 WHERE id=?";
//   db.query(sqlStr, id, (err, resulte) => {
//     if (err) return console.log(err.message);
//     res.send({ code: 200, data: resulte });
//   });
// });

// 新增数据
// router.post("/insert", (req, res) => {
//   console.log(123);
//   const data = req.query;
//   const sqlStr = "INSERT INTO ev_users set ?";
//   db.query(sqlStr, data, (err, resulte) => {
//     if (err) return console.log(err.message);
//     res.send({ code: 200, data: resulte });
//   });
// });
//修改数据
// router.post("/setList", (req, res) => {
//   console.log(req.query);
//   const userParams = req.query;
//   const sqlStr = "UPDATE ev_users SET ? WHERE id=?";
//   db.query(sqlStr, [userParams, userParams.id], (err, resulte) => {
//     if (err) return console.log(err.message);
//     res.send({ code: 200, data: resulte });
//   });
// });
module.exports = router;
