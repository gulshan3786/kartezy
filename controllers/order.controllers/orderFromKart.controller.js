const { getOrders, getTotalPrizeCart, postInsertOrders, getUserCartProducts, getProducts, getOrderId, postInsertOrderItems } = require("../../services/order.services/orderFromKart.service")
const orderServices = require('../../services/order.services/orderFromKart.service')
const logger = require('../../configs/pino.config')
// const orderPageRender = (req,res) =>{
//   res.render('views/userOrderHistory.component.ejs');
// }


const orderGet = async (req, res) => {
  try {
    let result = await getOrders(req.user.id);
    if (typeof result == 'string') {
      res.send({
        flag: false,
        msg: "cannot find order page"
      });
    }
    else {
      res.send({
        flag: true,
        data: result,
      });
    }
  }
  catch (error) {
    res.send({
      flag: false,
      msg: "cannot find order page" + error
    });
  }
}
const totalPrizeCartGet = async (req, res) => {
  try {
    let result = await getTotalPrizeCart(1);
    if (typeof result == 'string') {
      res.send({
        flag: false,
        msg: "cannot find prize"
      });
    }
    else {
      res.send({
        flag: true,
        data: result,
      });
    }
  }
  catch (error) {
    res.send({
      flag: false,
      msg: "cannot find prize" + error
    });
  }
}
const userCartProductsGet = async (req, res) => {
  try {
    let result = await getUserCartProducts(1);
    if (typeof result == 'string') {
      res.send({
        flag: false,
        msg: "cannot find Cart Products "
      });
    }
    else {
      res.send({
        flag: true,
        data: result,
      });
    }
  }
  catch (error) {
    res.send({
      flag: false,
      msg: "cannot find Cart Products " + error
    });
  }
}
const productsGet = async (req, res) => {
  try {
    let result = await getProducts(1);
    if (typeof result == 'string') {
      res.send({
        flag: false,
        msg: "cannot find Products"
      });
    }
    else {
      res.send({
        flag: true,
        data: result,
      });
    }
  }
  catch (error) {
    res.send({
      flag: false,
      msg: "cannot find Products" + error
    });
  }
}
const orderIdGet = async (req, res) => {
  try {
    let result = await getOrderId(1);
    if (typeof result == 'string') {
      res.send({
        flag: false,
        msg: "cannot find order id"
      });
    }
    else {
      res.send({
        flag: true,
        data: result,
      });
    }
  }
  catch (error) {
    res.send({
      flag: false,
      msg: "cannot find order id" + error
    });
  }
}
const orderInsertPost = async (req, res) => {
  const userId = req.user.id;
  const addressId = req.body.addressId;
  try {
    let result = await postInsertOrders(userId);
    const jsonObj = {}
    jsonObj['order_note'] = 'abcd';
    jsonObj['total_price'] = orderServices.getTotalPrizeCart('total_price');
    jsonObj['deliver_date'] = new Date();
    res.status(200).send({
      status: "Succces", msg: "order Added!"
    })
    return result
  } catch (error) {
    logger.error(error)
    console.log(error)
    res.status(500).send({
      status: "Internal Server Error", msg: "An Unexpected error occured while processing your request"
    })
  }
}

const orderItemsInsertPost = async (req, res) => {
  var { product_id } = req.body;
  console.log(req.body);

  // const userId = 1;
  const cartId = 1;
  // const addressId = req.body.addressId;
  // const paymentId = req.body.paymentId;
  try {


    // const userOrderId = await orderServices.postInsertOrderItems(addressId);
    let result = await postInsertOrderItems(cartId);

    console.log(await orderServices.getUserCartProducts('product_id'));
    const jsonObj = {}
    jsonObj['order_id'] = ' userOrderId'[0].id


    jsonObj['product_id'] = orderServices.getUserCartProducts('product_id');


    // let productidr = await orderServices.getUserCartProducts('product_id');
    // console.log(productidr);
    // return res.json({productidr})
    
    if (jsonObj.length === 0) {

    var sql = 'insert into order_items (`product_id`,`qty`,`price`) values (?, ?, ?)';
    for (let i = 0; i < jsonObj.length; i++){
      // console.log(getUserCartProducts[i][0]);
    } 
    // {

    //   var product = await con.promise().query(getUserCartProducts, sql, [product_id[i], cartId]);
    // }
    }
    


    jsonObj['qty'] = orderServices.getUserCartProducts('qty');
    // jsonObj['price'] = orderServices.getProducts('price');
    jsonObj['total_price'] = orderServices.getUserCartProducts('total_price');
    // jsonObj['total_price'] = orderServices.getUserCartProducts('total_price');

    res.status(200).send({
      status: "Succces", msg: "order Added!"
    })
    return result
  } catch (error) {
    logger.error(error)
    console.log(error)
    res.status(500).send({
      status: "Internal Server Error", msg: "An Unexpected error occured while processing your request"
    })
  }
};
module.exports = { orderGet, totalPrizeCartGet, orderInsertPost, userCartProductsGet, productsGet, orderIdGet, orderItemsInsertPost };
