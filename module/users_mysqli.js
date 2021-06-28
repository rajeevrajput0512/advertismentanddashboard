module.exports = class mysqli {
    async mysqli(data, row) {
        let k = mysqliq[row];
        for (var i in data) {
            k = k.replace(new RegExp('{{' + i + '}}', 'g'), data[i]);
        }
        return k;
    }

    async sfqli(data, row) {
        let k = mysqliq[row];
        for (var i in data) {
            k = k.replace(new RegExp('{{' + i + '}}', 'g'), data[i]);
        }
        return k;
    }
};


var mysqliq = []
//user
mysqliq['all_users'] = 'SELECT COUNT(id) AS user FROM users where isUser=? ';
mysqliq['single_user'] = 'SELECT * FROM users WHERE id = ?'
mysqliq['get_user_month']='SELECT count(id) FROM users WHERE isUser=? AND created_at BETWEEN ? and ?'
mysqliq['order_details'] ='Select * from product'
mysqliq['recent_order']='Select product.* , vendorproduct.status AS productstatus,vendorproduct.pitch_value,vendorproduct.vendor_name  from product inner join vendorproduct on product.id=vendorproduct.pid'
mysqliq['particular_user_details']='SELECT users.first_name,users.id,users.company_name,users.address,COUNT(vendorproduct.product_status) AS leads,vendor_services.type AS servie_type FROM users INNER join  vendorproduct ON  users.id=? AND vendorproduct.Uid=? INNER JOIN vendor_services ON vendor_services.vendor_id=? '
mysqliq['all_vendor_details']='SELECT users.first_name,users.id,users.company_name,users.address,COUNT(vendorproduct.product_status) AS leads,vendor_services.type AS servie_type FROM users INNER join  vendorproduct ON  users.id=vendorproduct.Uid INNER JOIN vendor_services ON vendor_services.vendor_id=users.id Group BY users.id';
mysqliq['all_user_details']='SELECT users.type, users.first_name,users.id,users.company_name, sum(case when product.status = "pending" then 1 else 0 end) AS Leads,sum(case when product.status = "accepted" then 1 else 0 end) AS Completed FROM users INNER join  product ON  users.id = product.user_id Group BY users.id'
mysqliq['orders_vendor']='SELECT COUNT(DISTINCT(accepted_vendor)) From product where status="accepted" AND updated_at  BETWEEN ? and ?  '
mysqliq['orders_user']='SELECT COUNT(DISTINCT(user_id)) From product where status="accepted" AND  updated_at BETWEEN ? and ?  '


mysqliq['insert_user'] = 'INSERT into users (email,password) values(?,?)';
mysqliq['signup'] = 'INSERT into users (email,phone_no,password,isUser) values(?,?,?,?)';
mysqliq['signInWithOtp'] = 'SELECT * from users WHERE phone_no=? ';
mysqliq['signInWithEmail'] = 'SELECT * from users WHERE email=? ';
mysqliq['get_user']="SELECT * from users WHERE id=?"
mysqliq['updateUser'] = 'UPDATE users SET first_name=?,email=?,pin=?,phone_no=?,whatsapp_no=?,state=?,city=?,company_detail_name=?,company_name=?,company_title=?,company_whatsapp_no=?,company_phone_no=?,company_email_address=?,company_building_name=?,company_house_no=?,company_street=?,company_landmark=?,company_city=?,company_state=?,company_pincode=?,fax=? WHERE id=? ';

mysqliq['add_site']= 'UPDATE users SET site=? where id=?';
mysqliq['get_site']= 'SELECT site from users where id=?';

mysqliq['add_feedback']='UPDATE users set feedback =? WHERE id=?' 

mysqliq['request_help'] = 'INSERT into helps (u_id,message, file_dest, file_type) values(?,?,?,?)'; 
mysqliq['user_accepted_pitch']='UPDATE vendorproduct set product_status=?,vendor_name=? WHERE Pid=? AND Uid=? '
mysqliq['product_table_status_changed']='UPDATE product set status=? , accepted_vendor=?,final_pitchValue=? WHERE id=?'

mysqliq['user_rejected_pitch']='UPDATE vendorproduct set product_status=? WHERE Pid=? AND Uid=?'

mysqliq['get_user_id']='SELECT user_id from product where id=?'
mysqliq['table_filter']='SELECT DISTINCT(type) from product where user_id=?;'
mysqliq['type_filter']='SELECT vendor_services.type,COUNT(vendor_services.type) from vendor_services INNER JOIN product ON vendor_services.type=product.type AND vendor_services.vendor_id=?  AND product.status="pending" GROUP by vendor_services.type'