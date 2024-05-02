const database = require("../../helpers/database.helper");

const getAdminShowOrder = async(userid) =>{
  const sql = `select o.id, o.user_id, o.address_id, o.order_note, o.shipping_cost, o.total_price, o.deliver_date, o.create_at, o.is_delete, o.order_status,
  u.id, u.role_id, u.first_name, u.last_name, u.email, u.mobile_no, u.dob, u.create_at,
  ca.id 
  from orders as o
  inner join users as u 
  on o.user_id = u.id
  inner join customer_addresses as ca
  where ca.user_id = 1;`
  try {
    const db = new database();
    const result = await db.executeQuery(sql, [userid])
    return result;
  } catch (error) {
    throw error
  }
};
module.exports = { getAdminShowOrder }
