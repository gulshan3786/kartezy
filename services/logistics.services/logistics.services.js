const Database = require('../../helpers/database.helper')
const db = new Database();
exports.cardResultFetch = async (logisticId) => {
  const sql = 'select * from order_logistics as odrlgt left join orders as odr on odrlgt.order_id=odr.id where odrlgt.logistics_id=?'
  try {
    let cardRes = {}
    let pendingOrders = 0;
    let deliveredOrders = 0;
    const result = await db.executeQuery(sql, [logisticId])
    cardRes['totalOrders'] = result.length;
    result.forEach(element => {
      if (element.status === 'delivered') {
        deliveredOrders++
      }
      if (element.status === 'In-transit') {
        pendingOrders++
      }
    });
    cardRes['pendingOrders'] = pendingOrders;
    cardRes['deliveredOrders'] = deliveredOrders;
    return cardRes
  } catch (error) {
    throw error
  }
}
exports.orderByCityResultFetch = async (logisticId) => {
  const sql = `select cadd.city , count(*) as orders from order_logistics as odrlgt 
    left join orders as odr on
    odrlgt.order_id = odr.id
    inner join customer_addresses as cadd on cadd.id = odr.address_id
    where odrlgt.logistics_id = ?
    group by cadd.city`
  try {
    const result = await db.executeQuery(sql, [logisticId]);
    let cities = []
    let orderOfCities = []
    result.forEach((obj) => {
      cities.push(obj.city)
      orderOfCities.push(obj.orders)
    })
    return ({ cities, orderOfCities })
  } catch (error) {
    throw error
  }
}
exports.pincodeFetch = async (logisticId) => {
  const sql = `SELECT pincode FROM logistic_shipping where is_delete=0 and logistic_id=?;`
  try {
    const result = await db.executeQuery(sql, [logisticId]);
    const pincodes=result.flatMap(Object.values)
    return pincodes
  } catch (error) {
    throw error
  }
}
exports.selectedCitiesFetch = async (logisticId) => {
  const sql = `SELECT id,logistic_id,city,pincode FROM kartzy_db.logistic_shipping where logistic_id=? and is_delete=0;`
  try {
    const result = await db.executeQuery(sql, [logisticId]);
    return result
  } catch (error) {
    throw error
  }
}
exports.insertServiceCity = async (jsonRsp) => {
  try {
    const result = await db.insertData('logistic_shipping', jsonRsp)
    return result
  } catch (error) {
    throw error
  }
}
exports.softDelServiceCity = async (newData,condition) => {
  try {
    const result = await db.updateData('logistic_shipping',newData,condition)
    return result
  } catch (error) {
    throw error
  }
}