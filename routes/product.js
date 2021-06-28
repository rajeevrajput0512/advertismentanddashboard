const express = require('express');
const app = express.Router();
const product = require('../controller/productController');


// app.post('/insert_product',product.insert_product);
app.get('/maximum_sales_count',product.maximum_sales_count);

app.post('/no_of_requests/:user_id',product.no_of_requests)
// app.post('/vendor_product_status_changed/:user_id',product.vendor_product_status_changed)
app.get('/pitched_requests/:user_id',product.pitched_requests)
app.get('/new_requests/:user_id',product.new_requests)
app.get('/saved_requests/:user_id',product.saved_requests)
app.post('/request_service/:user_id', product.request_service)
;
app.post('/notification',product.pinned_notification);

app.get('/all_notification/:user_id',product.all_notification)

// app.get('/new_requests/:user_id',api.new_requests)

//super admin
app.get('/product_performance/:product',product.productperformance);
app.get('/all_notification/:user_id',product.all_notification)
app.get('/maximum_sales/:status',product.maximum_sales);

module.exports = app