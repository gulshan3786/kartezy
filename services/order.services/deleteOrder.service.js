const { res } = require("pino-std-serializers");
const database = require("../../helpers/database.helper");
const { userInfo } = require("os");

const getOrderUpdate = async (userid) => {
  try {
    const db = new database();
    let result = await db.executeQuery(`select * from orders where user_id`, [userid]);
    return result;
    // data1 = await con.promise().query(sql);
    // result = data1[0][0];
    // console.log(result);
  }
  catch (err) {
    throw err;
  }
  // res.render(" ", { result })

};

const postOrderUpdate = async (userid) => {
  try{
    const db = new database();
    var { is_delete } = req.body;
    let result = await db.executeQuery(`update orders set is_delete = 1 where user_id`, [userid]);
    // result = await con.promise().query(sql, [ is_delete ])
    res.send("delete order");
  }
  catch (err) {
    throw err;
  }
};

const getOrderitemUpdate = async (userid) => {
  try{
    const db = new database();
    let result = await db.executeQuery(`select * from order_items where user_id`, [userid]);
    return result;
  }
  catch (err) {
    throw err;
  }
};

const postOrderitemUpdate = async (userid) => {
  try{
    const db = new database();
    var { is_delete } = req.body;
    let result = await db.executeQuery(`update order_items set is_delete = 1 where user_id`, [userid]);
    res.send("delete order");
  }
  catch (err) {
    throw err;
  }
};

const getOrderStatusUpdate = async (userid) => {
  try{
    const db = new database();
    let result = await db.executeQuery(`select * from orders where user_id`, [userid]);
    return result;
  }
  catch (err) {
    throw err;
  }
};

const postOrderStatusUpdate = async (userid) => {
  try{
    const db = new database();
    var { order_status } = req.body;
    let result = await db.executeQuery(`update orders set order_status = 1 where user_id`, [userid]);
    return result;
  }
  catch (err){
    throw err;
  }
};

module.exports = { getOrderUpdate , postOrderUpdate, getOrderitemUpdate, postOrderitemUpdate, getOrderStatusUpdate, postOrderStatusUpdate };