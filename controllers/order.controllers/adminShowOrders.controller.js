const { getAdminShowOrder } = require("../../services/order.services/orderHistory.service");

const adminShowOrderGet = async(req, res) =>{
  try{
    let result = await  getAdminShowOrder(req.user.id);
    if(typeof result == 'string')
    {
      return res.send({
        flag : false,
        msg : "cannot show orders"
      });
    } 
    else{
      return res.send({
        flag : true,
        data: result,
      });
    }
  }
  catch(error){
    return res.send({
      flag : false,
      msg : "cannot show orders" + error
    });
  }
}

module.exports = { adminShowOrderGet } 