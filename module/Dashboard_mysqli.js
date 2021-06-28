module.exports = class mysqli {
  async mysqli(data, row) {
    let k = mysqliq[row];
    for (var i in data) {
      k = k.replace(new RegExp("{{" + i + "}}", "g"), data[i]);
    }
    return k;
  }

  async sfqli(data, row) {
    let k = mysqliq[row];
    for (var i in data) {
      k = k.replace(new RegExp("{{" + i + "}}", "g"), data[i]);
    }
    return k;
  }
};

let mysqliq = [];
mysqliq["total_vender_and_users"] =
  "SELECT CASE when isUser=0 then 'vender' else 'user' end as Who, count(*) as count from users group by isUser";
mysqliq["latest_users"] =
  "SELECT count(*) from users where datediff(now(),created_at)<=31 && isUser = 1";
mysqliq["latest_vender"] =
  "SELECT count(*) from users where datediff(now(),created_at)<=31 && isUser = 0";
mysqliq["sales_today"] =
  "select count(*) from product where status='accepted'&& datediff(now(),updated_at)=0";
mysqliq["sales_yesterday"] =
  "select count(*) from product where status='accepted'&& datediff(now(),updated_at)=1";
mysqliq["recent_orders"] =
  "select type,quantity,users.email,CASE WHEN (product.status ='pending'&& vendorproduct.product_status='rejectedPitch') THEN 'Rejected' WHEN (product.status ='pending' && vendorproduct.product_status='acceptedPitch') THEN  'Accepted' WHEN (product.status ='pending' && vendorproduct.product_status='pitched') THEN 'Pitched' ELSE 'in Process' END as statusofProduct, product.accepted_vendor = users.id as requested_by,CASE WHEN (product.status ='pending'&& vendorproduct.product_status='rejectedPitch') THEN  vendorproduct.pitch_value WHEN (product.status ='pending' && vendorproduct.product_status='acceptedPitch') THEN vendorproduct.pitch_value WHEN (product.status ='pending' && vendorproduct.product_status='pitched') THEN vendorproduct.pitch_value ELSE '-' END as AMOUNT from product join vendorproduct on product.id = vendorproduct.Pid left join users on product.user_id = users.id ORDER by product.created_at DESC LIMIT 0,5";
mysqliq["recent_order_filter"] =
  "select type,quantity,users.email,CASE WHEN (product.status ='pending'&& vendorproduct.product_status='rejectedPitch') THEN 'Rejected' WHEN (product.status ='pending' && vendorproduct.product_status='acceptedPitch') THEN  'Accepted' WHEN (product.status ='pending' && vendorproduct.product_status='pitched') THEN 'Pitched' ELSE 'in Process' END as statusofProduct, product.accepted_vendor = users.id as requested_by,CASE WHEN (product.status ='pending'&& vendorproduct.product_status='rejectedPitch') THEN  vendorproduct.pitch_value WHEN (product.status ='pending' && vendorproduct.product_status='acceptedPitch') THEN vendorproduct.pitch_value WHEN (product.status ='pending' && vendorproduct.product_status='pitched') THEN vendorproduct.pitch_value ELSE '-' END as AMOUNT from product join vendorproduct on product.id = vendorproduct.Pid left join users on product.user_id = users.id ORDER by statusofProduct='?' DESC";
mysqliq["performance_thismonth"] =
  "SELECT type , count(*) as performance from product where (status='accepted' && datediff(now(),updated_at)<=31) group by type";
mysqliq["performace_previousmonth"] =
  "SELECT type , count(*) as performance from product where (status='accepted' && datediff(now(),updated_at)<=61 && datediff(now(),updated_at)>31) group by type";

// "select type,
// quantity,
//   users.email,
//   CASE
//   WHEN (product.status ='pending'&& vendorproduct.product_status='rejectedPitch') THEN  'Rejected'
//    WHEN (product.status ='pending' && vendorproduct.product_status='acceptedPitch') THEN  'Accepted'
//    WHEN (product.status ='pending' && vendorproduct.product_status='pitched') THEN 'Pitched'
//    ELSE 'in Process'
//   END as statusofProduct,
//    product.accepted_vendor = users.id as requested_by,
//   CASE
//   WHEN (product.status ='pending'&& vendorproduct.product_status='rejectedPitch') THEN  vendorproduct.pitch_value
//    WHEN (product.status ='pending' && vendorproduct.product_status='acceptedPitch') THEN vendorproduct.pitch_value
//    WHEN (product.status ='pending' && vendorproduct.product_status='pitched') THEN vendorproduct.pitch_value
//    ELSE '-'
//    END as AMOUNT
//   from product
//   join vendorproduct on product.id = vendorproduct.Pid
//   left join users on product.user_id = users.id
//   ORDER by product.created_at DESC"
