const { jsonResponse } = require("./commonController");
const Dashboardmodule = require("../module/Dashboard");
const dashboard = new Dashboardmodule();

module.exports = {
  user_vender_count: async (req, res) => {
    try {
      let [results] = await Promise.all([
        dashboard.get_user_and_vender_count(req),
      ]);
      jsonResponse(res, "inserted_product", results);
    } catch (error) {
      console.log(error);
      jsonResponse(res, "error", error);
    }
  },
  recent_users: async (req, res) => {
    try {
      let [results] = await Promise.all([dashboard.get_latest_user(req)]);
      jsonResponse(res, "inserted_product", results);
    } catch (error) {
      console.log(error);
      jsonResponse(res, "error", error);
    }
  },
  recent_venders: async (req, res) => {
    try {
      let [results] = await Promise.all([dashboard.get_latest_vender(req)]);
      jsonResponse(res, "inserted_product", results);
    } catch (error) {
      console.log(error);
      jsonResponse(res, "error", error);
    }
  },
  sales_today: async (req, res) => {
    try {
      let [results] = await Promise.all([dashboard.sales_today(req)]);
      jsonResponse(res, "inserted_product", results);
    } catch (error) {
      console.log(error);
      jsonResponse(res, "error", error);
    }
  },
  sales_yesterday: async (req, res) => {
    try {
      let [results] = await Promise.all([dashboard.sales_yesterday(req)]);
      jsonResponse(res, "inserted_product", results);
    } catch (error) {
      console.log(error);
      jsonResponse(res, "error", error);
    }
  },
  recent_orders_newest: async (req, res) => {
    try {
      let [results] = await Promise.all([dashboard.recent_orders(req)]);
      jsonResponse(res, "inserted_product", results);
    } catch (error) {
      console.log(error);
      jsonResponse(res, "error", error);
    }
  },
  recent_orders_filter: async (req, res) => {
    try {
      let [results] = await Promise.all([dashboard.recent_order_filter(req)]);
      jsonResponse(res, "inserted_product", results);
    } catch (error) {
      console.log(error);
      jsonResponse(res, "error", error);
    }
  },
  performance_this_month: async (req, res) => {
    try {
      let [results] = await Promise.all([dashboard.performance_thismonth(req)]);
      jsonResponse(res, "inserted_product", results);
    } catch (error) {
      console.log(error);
      jsonResponse(res, "error", error);
    }
  },
  performance_previous_month: async (req, res) => {
    try {
      let [results] = await Promise.all([
        dashboard.performace_previousmonth(req),
      ]);
      jsonResponse(res, "inserted_product", results);
    } catch (error) {
      console.log(error);
      jsonResponse(res, "error", error);
    }
  },
};
