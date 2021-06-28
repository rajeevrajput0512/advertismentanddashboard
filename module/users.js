const mysqli = require("./users_mysqli");
const mysqliClass = new mysqli();

class Users {
  constructor() {}

  async getUsersDetails(type) {
    let mysql = {};
    let escape_data;
    if (type === "vendor") {
      escape_data = ["0"];
    } else {
      escape_data = ["1"];
    }
    let strQuery = await mysqliClass.mysqli(mysql, "all_users");
    return await global.mysql.query(strQuery, escape_data);
  }
  //super user
  async getUser(req) {
    let mysql = {};
    let escape_data = [req.body.id];
    let strQuery = await mysqliClass.mysqli(mysql, "single_user");
    return await global.mysql.query(strQuery, escape_data);
  }
  //super user

  async get_user_month(type) {
    let mysql = {};
    let end_day = "31";
    let start_day = "1";
    var myVariable = new Date();
    var makeDate = new Date(myVariable);
    makeDate.setMonth(makeDate.getMonth() - 1);
    let nv = makeDate.toISOString();
    let end_date = nv.slice(0, 8) + "31";
    let start_date = nv.slice(0, 8) + "01";
    let escape_data = [type, start_date, end_date];
    let strQuery = await mysqliClass.mysqli(mysql, "get_user_month");
    return await global.mysql.query(strQuery, escape_data);
  }

  async order_detail() {
    let mysql = {};
    let userid = [];
    let vendorid = [];
    let escape_data;
    let strQuery = await mysqliClass.mysqli(mysql, "order_details");
    let result = await global.mysql.query(strQuery, escape_data);
    for (var i = 0; i < result.length; i++) {
      if (
        result[i].accepted_vendor !== null &&
        result[i].accepted_vendor !== undefined
      ) {
        vendorid.push(result[i].accepted_vendor);
      }
      if (result[i].user_id !== null && result[i].user_id !== undefined) {
        userid.push(result[i].user_id);
      }
    }
  }

  async insert_user(req) {
    let mysql = {};
    let escape_data = [req.body.email, req.body.password];
    let strQuery = await mysqliClass.mysqli(mysql, "insert_user");
    return await global.mysql.query(strQuery, escape_data);
  }
  async signup(req) {
    let mysql = {};
    let escape_data = [
      req.body.email,
      req.body.phone_no,
      req.body.password,
      req.body.isUser,
    ];
    let strQuery = await mysqliClass.mysqli(mysql, "signup");
    return await global.mysql.query(strQuery, escape_data);
  }
  async signInWithOtp(req) {
    let mysql = {};
    let escape_data = [req.body.phone_no];
    let strQuery = await mysqliClass.mysqli(mysql, "signInWithOtp");
    return await global.mysql.query(strQuery, escape_data);
  }
  async signInWithEmail(req) {
    let mysql = {};
    let escape_data = [req.body.email, req.body.password];
    let strQuery = await mysqliClass.mysqli(mysql, "signInWithEmail");
    return await global.mysql.query(strQuery, escape_data);
  }

  async get_user(req) {
    let mysql = {};
    // console.log(req.body.id)
    let escape_data = [req.body.id];
    let strQuery = await mysqliClass.mysqli(mysql, "get_user");

    return await global.mysql.query(strQuery, escape_data);
  }
  async get_vendor(req) {
    let mysql = {};
    // console.log(req.body.Uid)
    let escape_data = [req.body.Uid];
    let strQuery = await mysqliClass.mysqli(mysql, "get_user");

    return await global.mysql.query(strQuery, escape_data);
  }

  async updateUser(req) {
    let mysql = {};
    let escape_data;
    // let strQuery;
    // for(const [key,value] of Object.entries(req.body)){
    //     escape_data = [key,value,req.body.id];

    //     strQuery = await mysqliClass.mysqli(mysql, 'updateUser');
    //     return await global.mysql.query(strQuery, escape_data);
    // }
    var obj = new Date();
    req.body.updated_at = obj.getTime();

    escape_data = [
      req.body.first_name,
      req.body.email,
      req.body.pin,
      req.body.phone_no,
      req.body.whatsapp_no,
      req.body.state,
      req.body.city,
      req.body.company_detail_name,
      req.body.company_name,
      req.body.company_title,
      req.body.company_whatsapp_no,
      req.body.company_phone_no,
      req.body.company_email_address,
      req.body.company_building_name,
      req.body.company_house_no,
      req.body.company_street,
      req.body.company_landmark,
      req.body.company_city,
      req.body.company_state,
      req.body.company_pincode,
      req.body.fax,
      req.body.id,
    ];

    console.log(req.body, escape_data);
    let strQuery = await mysqliClass.mysqli(mysql, "updateUser");
    return await global.mysql.query(strQuery, escape_data);
  }
  async add_site(req, arr) {
    let mysql = {};
    let escape_data;

    escape_data = [JSON.stringify(arr), req.body.id];
    // escape_data=[req.body.id]
    // console.log(escape_data,"escape data")
    let strQuery = await mysqliClass.mysqli(mysql, "add_site");
    return await global.mysql.query(strQuery, escape_data);
  }
  async update_site(req) {
    let mysql = {};
    let escape_data;

    escape_data = [JSON.stringify(req.body), req.body.id];
    // escape_data=[req.body.id]
    // console.log(escape_data,"escape data")
    let strQuery = await mysqliClass.mysqli(mysql, "add_site");
    return await global.mysql.query(strQuery, escape_data);
  }
  async get_site(req) {
    let mysql = {};
    let escape_data;

    // escape_data=[req.body.id]
    escape_data = [req.body.id];
    let strQuery = await mysqliClass.mysqli(mysql, "get_site");
    return await global.mysql.query(strQuery, escape_data);
  }
  async add_feedback(req) {
    let mysql = {};
    let escape_data;

    const feedback = req.body;
    const value = feedback.feed + "," + feedback.rate;
    escape_data = [value, req.body.id];
    let strQuery = await mysqliClass.mysqli(mysql, "add_feedback");
    return await global.mysql.query(strQuery, escape_data);
  }
  async request_help(req) {
    let mysql = {};
    let dest = undefined;
    let file_type = undefined;
    if (req.file) {
      dest = `/public/assets/help_files/${req.file.filename}`;
      const type = req.file.originalname.split(".");
      file_type = type[type.length - 1];
    }
    let escape_data = [req.body.id, req.body.message, dest, file_type];
    // console.log("escape", escape_data)
    let strQuery = await mysqliClass.mysqli(mysql, "request_help");
    return await global.mysql.query(strQuery, escape_data);
  }

  async user_accepted_pitch(req, vendor) {
    let mysql = {};
    let escape_data;
    escape_data = ["acceptedPitch", vendor, req.body.Pid, req.body.Uid];
    console.log(escape_data, "escape data");
    let strQuery = await mysqliClass.mysqli(mysql, "user_accepted_pitch");
    return await global.mysql.query(strQuery, escape_data);
  }

  async product_table_status_changed(req) {
    let mysql = {};
    let escape_data;
    escape_data = [
      "accepted",
      req.body.Uid,
      req.body.pitch_value,
      req.body.Pid,
    ];
    // console.log(escape_data,"escape data")
    let strQuery = await mysqliClass.mysqli(
      mysql,
      "product_table_status_changed"
    );
    return await global.mysql.query(strQuery, escape_data);
  }
  async user_rejected_pitch(req) {
    let mysql = {};
    let escape_data;

    escape_data = ["rejectedPitch", req.body.Pid, req.body.Uid];
    // console.log(escape_data,"escape data")
    let strQuery = await mysqliClass.mysqli(mysql, "user_rejected_pitch");
    return await global.mysql.query(strQuery, escape_data);
  }
  async Table_filter(req) {
    let mysql = {};
    let escape_data;
    escape_data = [req.body.id];
    let strQuery = await mysqliClass.mysqli(mysql, "table_filter");
    return await global.mysql.query(strQuery, escape_data);
  }
  async Type_filter(req) {
    let mysql = {};
    let escape_data;
    escape_data = [req.body.id];
    let strQuery = await mysqliClass.mysqli(mysql, "type_filter");
    return await global.mysql.query(strQuery, escape_data);
  }

  async order_year() {
    let mysql = {};
    var myVariable = new Date();
    var makeDate = new Date(myVariable);
    let nv1 = makeDate.toISOString();
    let end_date = nv1.slice(0, 5) + "01-01";
    makeDate.setFullYear(makeDate.getFullYear() - 1);
    let nv = makeDate.toISOString();
    let start_date = nv.slice(0, 5) + "01-01";
    console.log(end_date, start_date);
    let escape_data = [start_date, end_date];
    let strQuery = await mysqliClass.mysqli(mysql, "orders_vendor");
    let strQuery1 = await mysqliClass.mysqli(mysql, "orders_user");
    let vendor_order = await global.mysql.query(strQuery, escape_data);
    let user_order = await global.mysql.query(strQuery1, escape_data);
  }
}

module.exports = Users;
