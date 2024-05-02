const cartOrderServices = require('../../services/cartOrder.services/cartOrder.services')
const singleOrderService = require('../../services/singleProduct.services/singleProduct.services')
const logger = require('../../configs/pino.config')
const addNotification = require('../../services/notification.service')
const cartOrderFromCheckout = async (req, res) => {
  const userId = req.user.id
  try {
    const result = await cartOrderServices.getUserCartAndTotal(userId)
    const paymentType = await singleOrderService.fetchTypeOfPay(req.body.paymentId);
    if (!result) {
      return res.status(500).send({
        status: "Internal Server Error", msg: "Your cart is empty!"
      })
    }
    const cartId = result.id
    const isQtyUnAvail = await cartOrderServices.userCartProductsAndPrdCheck(cartId);
    if (isQtyUnAvail) {
      return res.status(500).send({
        status: "Internal Server Error", msg: "Some of your orderd products are out of stock!"
      })
    }
    const totalPriceOfCart = result.total_price
    const shippingCost = 90
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 7);
    let deliDate = currentDate.toISOString().slice(0, 19).replace('T', ' ');
    let orderNote;
    if (req.body.orderNote) {
      orderNote = req.body.orderNote
    } else {
      orderNote = 'NONE'
    }

    const orderObj = {
      user_id: userId,
      address_id: req.body.addressId,
      order_note: orderNote,
      shipping_cost: shippingCost,
      total_price: totalPriceOfCart,
      deliver_date: deliDate,
      status: 'pending'
    }

    const orderInsertedId = await singleOrderService.singleOrderInsert(orderObj)
    const orderTransObj = {
      payment_id: req.body.paymentId,
      order_id: orderInsertedId,
      type_of_transection: paymentType,
      mode_of_transection: 'Online',
      status: 1
    }
    const productsFromCart = await cartOrderServices.insertCartProductsInOrder(orderInsertedId, cartId)
    await singleOrderService.singleOrderTransectionInsert(orderTransObj)
    await cartOrderServices.updateInventryQty(productsFromCart)
    await cartOrderServices.deleteUserCart(cartId);
    await addNotification(userId, 'Order', `Your order placed with order Id :#${orderInsertedId} !`)
    res.status(200).send({
      orderId: orderInsertedId, status: "Succces", msg: "Order placed successfully!"
    })
  } catch (error) {
    logger.error(error)
    try {
      await addNotification(userId, 'Order', `Your order is not placed !`)
    } catch (error) {
      console.log(error);
      logger.error(error)
    }
    console.log(error)
    res.status(500).send({
      status: "Internal Server Error", msg: "An Unexpected error occured while processing your request!"
    })
  }
}
module.exports = { cartOrderFromCheckout }