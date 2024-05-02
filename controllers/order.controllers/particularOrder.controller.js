const { orderParticularPageRender, getParticularOrder } = require("../../services/order.services/particularOrder.service")
const express = require('express');
const app = express();

// const orderParticularPageRender('components/userOrdersDetail') = (req,res) =>{
//   res.render('components/userOrdersDetail.component.ejs');
// }

// app.get('/particularorder', (req, res) => {
//   orderParticularPageRender(req,res)
// });




const particularOrderGet = async(req, res) =>{
  try{
    let result = await getParticularOrder(req.params.id);
    if(typeof result == 'string')
    {
      res.send({
        flag : false,
        msg : "cannot find order page"
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
      msg : "cannot find order page" + error
    });
  }
}

module.exports = particularOrderGet;