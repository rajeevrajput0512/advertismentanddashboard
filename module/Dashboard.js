const mysqli = require("./Dashboard_mysqli");
const mysqliClass = new mysqli();

class Dashboard {
  constructor() {}
  async get_user_and_vender_count(req) {
    let mysql = {};
    let strQuery = await mysqliClass.mysqli(mysql, "total_vender_and_users");
    return await global.mysql.query(strQuery);
  }
  async get_latest_user(req) {
    let mysql = {};
    let strQuery = await mysqliClass.mysqli(mysql, "latest_users");
    return await global.mysql.query(strQuery);
  }
  async get_latest_vender(req) {
    let mysql = {};
    let strQuery = await mysqliClass.mysqli(mysql, "latest_vender");
    return await global.mysql.query(strQuery);
  }
  async sales_today(req) {
    let mysql = {};
    let strQuery = await mysqliClass.mysqli(mysql, "sales_today");
    return await global.mysql.query(strQuery);
  }
  async sales_yesterday(req) {
    let mysql = {};
    let strQuery = await mysqliClass.mysqli(mysql, "sales_yesterday");
    return await global.mysql.query(strQuery);
  }
  async recent_orders(req) {
    let mysql = {};
    let escape_data = [];
    let strQuery = await mysqliClass.mysqli(mysql, "recent_orders");
    return await global.mysql.query(strQuery);
  }
  async recent_order_filter(req) {
    let mysql = {};
    let escape_data = [req.params.filter];
    let strQuery = await mysqliClass.mysqli(mysql, "recent_order_filter");
    return await global.mysql.query(strQuery, escape_data);
  }
  async performance_thismonth(req) {
    let mysql = {};
    let strQuery = await mysqliClass.mysqli(mysql, "performance_thismonth");
    return await global.mysql.query(strQuery);
  }
  async performace_previousmonth(req) {
    let mysql = {};
    let strQuery = await mysqliClass.mysqli(mysql, "performace_previousmonth");
    return await global.mysql.query(strQuery);
  }
}
module.exports = Dashboard;
