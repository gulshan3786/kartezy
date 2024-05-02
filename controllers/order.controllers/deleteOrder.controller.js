const { getOrderUpdate } = require("../../services/order.services/deleteOrder.service")
const { postOrderUpdate } = require("../../services/order.services/deleteOrder.service")
const { getOrderitemUpdate } =   require("../../services/order.services/deleteOrder.service")
const { postOrderitemUpdate  } = require("../../services/order.services/deleteOrder.service")
const { getOrderStatusUpdate } = require("../../services/order.services/deleteOrder.service")
const { postOrderStatusUpdate } = require("../../services/order.services/deleteOrder.service")

const orderUpdateGet = async(req, res) =>{
  try{
    let result = await getOrderUpdate(req.user.id);
    if(typeof result == 'string')
    {
      res.send({
        flag : false,
        msg : "cannot update order"
      });
    } 
    else{
      res.send({
        flag : true,
        data: result,
      });
    }
  }
  catch(error){
    res.send({
      flag : false,
      msg : "cannot update order" + error
    });
  }
};
const orderUpdatePost = async(req, res) =>{
  try{
    let result = await postOrderUpdate(req.user.id);
    if(typeof result == 'string')
    {
      res.send({
        flag : false,
        msg : "cannot update order"
      });
    } 
    else{
      res.send({
        flag : true,
        data: result,
      });
    }
  }
  catch(error){
    res.send({
      flag : false,
      msg : "cannot update order" + error
    });
  }
};
const orderitemUpdateGet = async(req, res) =>{
  try{
    let result = await getOrderitemUpdate(req.user.id);
    if(typeof result == 'string')
    {
      res.send({
        flag : false,
        msg : "cannot update order"
      });
    } 
    else{
      res.send({
        flag : true,
        data: result,
      });
    }
  }
  catch(error){
    res.send({
      flag : false,
      msg : "cannot update order" + error
    });
  }
};
const orderitemUpdatePost = async(req, res) =>{
  try{
    let result = await postOrderitemUpdate(req.user.id);
    if(typeof result == 'string')
    {
      res.send({
        flag : false,
        msg : "cannot update order"
      });
    } 
    else{
      res.send({
        flag : true,
        data: result,
      });
    }
  }
  catch(error){
    res.send({
      flag : false,
      msg : "cannot update order" + error
    });
  }
};
const orderStatusUpdateGet = async(req, res) =>{
  try{
    let result = await getOrderStatusUpdate(req.user.id);
    if(typeof result == 'string')
    {
      res.send({
        flag : false,
        msg : "cannot update order status"
      });
    } 
    else{
      res.send({
        flag : true,
        data: result,
      });
    }
  }
  catch(error){
    res.send({
      flag : false,
      msg : "cannot update order status" + error
    });
  }
};
const orderStatusUpdatePost = async(req, res) =>{
  try{
    let result = await postOrderStatusUpdate(req.user.id);
    if(typeof result == 'string')
    {
      res.send({
        flag : false,
        msg : "cannot update order"
      });
    } 
    else{
      res.send({
        flag : true,
        data: result,
      });
    }
  }
  catch(error){
    res.send({
      flag : false,
      msg : "cannot update order" + error
    });
  }
};

module.exports = {orderUpdateGet, orderUpdatePost, orderitemUpdateGet, orderitemUpdatePost, orderStatusUpdateGet, orderStatusUpdatePost};