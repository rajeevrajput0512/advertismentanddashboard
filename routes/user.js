const express = require("express");
const app = express.Router();
const api = require("../controller/api");
const user = require("../controller/userController");
const vendor = require("../controller/vendorController");
const upload = require("../middleware/multer");
const advertisement = require("../controller/advertismentcontroller");
const dashboard = require("../controller/dashboardcontroller");

app.get("/users", user.users);
app.get("/singleuser/:user_id", user.singleUser);
app.post("/", user.insert_user);
app.post("/email/", user.signInWithEmail);
app.get("/get_user/:user_id", user.get_user);
app.post("/otp", user.signInWithOtp);
app.post("/verifyotp", user.verifyOtp);
app.post("/signup", user.signup);
app.post("/updateUser/:user_id", user.updateUser);
app.post("/add_site/:user_id", user.add_site);
app.post("/update_site/:user_id", user.update_site);

app.post("/feedback/:user_id", user.add_feedback);
app.post("/user_accepted_pitch/:user_id", user.user_accepted_pitch);
app.post("/user_rejected_pitch/:user_id", user.user_rejected_pitch);

app.post("/add_service/:user_id", vendor.add_service);
app.post("/delete_service/:user_id", vendor.delete_service);
app.get("/get_services/:user_id", vendor.get_services);
app.get("/get_services_by_filter/:user_id", vendor.get_services_by_filter);
app.get("/new_leads/:user_id", vendor.new_leads);
app.get("/get_pending_leads/:user_id", vendor.get_pending_leads);
app.get("/get_saved_leads/:user_id", vendor.get_saved_leads);
app.get("/products/:user_id", vendor.products);
app.get("/total_services/:user_id", vendor.total_services);
app.get("/maximum_sales_vendor/:user_id", vendor.maximum_sales_vendor);
app.get("/most_requested_service/:user_id", vendor.most_requested_service);
app.get("/sales_vendor/:user_id", vendor.sales_vendor);
app.get("/vendor_contribution/:user_id", vendor.vendor_contribution);
app.post("/vendor_pitched/:user_id", vendor.vendor_pitched);
app.post("/vendor_rejected/:user_id", vendor.vendor_rejected);
app.get("/vendor_month_sale/:user_id", vendor.vendor_month_sale);
app.get("/get_site/:user_id", user.get_site);

app.post(
  "/request_help/:user_id",
  upload.single("attachment"),
  user.request_help
);
app.get("/vendor_sale_percentage/:user_id", vendor.vendor_sale_percentage);
app.get("/most_sold_product/:user_id", vendor.most_sold_product);
app.post("/get_price_detail/:user_id", vendor.get_price_detail);
app.get("/tabel_filter/:user_id", user.Tablefilter);
// app.get('/type_filter/:user_id',user.Typefilter)

//super admin
app.get("/users/:type", user.users);
app.get("/singleuser/:user_id", user.singleUser);
app.get("/get_user_month/:type", user.get_user_month);
app.get("/recent_order", user.recent_order);
app.get("/order_weeks", user.order_weeks);

// for advertisments
app.post("/enter_advertisement", advertisement.enter_advertisment);
app.get("/all_advertisment", advertisement.getalladv);
app.get("/advertisment/:id", advertisement.get_single_adv);
app.get("/getalladverismentinsc", advertisement.getalladverismentinsc);
app.get("/getalladverismentdesc", advertisement.getalladverismentdesc);
app.get("/getalladverismentpopular", advertisement.getalladverismentpopular);
app.get("/total_impressions", advertisement.total_impressions);
app.get("/Top_advertisment", advertisement.Top_advertisment);
app.get(
  "/advertisment_performance_filter/:filter",
  advertisement.advertisment_performance_filter
);

//dashboard

app.get("/user_vender_count", dashboard.user_vender_count);
app.get("/recent_users", dashboard.recent_users);
app.get("/recent_venders", dashboard.recent_venders);
app.get("/sales_today", dashboard.sales_today);
app.get("/sales_yesterday", dashboard.sales_yesterday);
app.get("/recent_orders_newest", dashboard.recent_orders_newest);
app.get("/recent_orders_filter/:filter", dashboard.recent_orders_filter);
app.get("/performance_this_month", dashboard.performance_this_month);
app.get("/performance_previous_month", dashboard.performance_previous_month);
module.exports = app;
