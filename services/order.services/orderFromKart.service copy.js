// const database = require("../../helpers/database.helper");
// const db = new database();
// const logger = require('../../configs/pino.config')


// const getOrders = async(userid) =>{
//   try{
//     let result = await db.executeQuery("select * from orders where user_id = ?", [userid]);
//     const product = {
//       product_name : [result],
//       product_description : [result], 
//       price : [result],
//       quantity : [result],
//       created_at : [result],
//       main_image_path : [result]
//     }
//     return result;
//   }
//   catch (err) {
//     throw err;
//   }
// };
// const getTotalPrizeCart = async (userId) => {
//  try{
//   const db = new database();
//   let result = await db.executeQuery("select total_price from users_cart where user_id = ?  AND is_delete = 0", [userId]);
//   return result;
//  }
//  catch (err) {
//   throw err;
//  }
// };
// const getUserCartProducts = async (cartId) => {
//   try{
//     const db = new database();
//     let result = await db.executeQuery("select product_id, qty, price from users_cart_products where cart_id = 1 AND is_delete = 0", [cartId]);
//     return result;
//   }
//   catch (err) {
//     throw err;
//   }
// };
// const getProducts = async (userId) => {
//   try{
//     const db = new database();
//     let result = await db.executeQuery("select price from products where id = ? AND is_delete = 0", [userId]);
//     return result;
//   }
//   catch (err) {
//     throw err;
//   }
// };
// const getOrderId = async (userId) => {
//   try{
//     const db = new database();
//     let result = await db.executeQuery("select id from orders where user_id AND is_delete = 0", [userId]);
//     return result;
//   }
//   catch (err) {
//     throw err;
//   }
// };


// const postInsertOrders = async(userId, addressId, total_price, deliver_date) => {
//  const tableName = 'orders'
//  const data = {
//    user_id: userId,
//    address_id: addressId,
//    order_note: 'abcd',
//    total_price: total_price,
//    deliver_date: deliver_date
// }
//  try {
//   const result = await db.insertData(tableName, data)
//   return result;
// } catch (error) {
//   throw error
// }
// };
// const postInsertOrderItems = async( userOrderId,  product_id, qty,  price, cartId ) => {
//   const tableName = 'order_items';
//   const data = {
//     // address_id: addressId,
//     // payment_id: paymentId,
//     order_id: userOrderId,
//     product_id: product_id,
//     qty: qty,
//     price: price, 
//     // total_price: total_price
//   }
//   try{
//     const lastInsertedOrderId = await db.insertData(tableName, data)
//     return lastInsertedOrderId.insertId;
//   } catch (error) {
//     throw error
//   }
// };
// module.exports = { getOrders, postInsertOrders, getTotalPrizeCart, postInsertOrderItems, getUserCartProducts, getProducts, getOrderId  };