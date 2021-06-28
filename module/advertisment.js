const mysqli = require("./advertisment_mysqli");
const mysqliClass = new mysqli();

class Advertisment {
  constructor() {}
  async addAdvertisment(req) {
    let mysql = {};
    let escape_data = [
      req.body.dimension,
      req.body.format,
      req.body.product_type,
      req.body.adv_placement,
      req.body.adv_page,
    ];
    let strQuery = await mysqliClass.mysqli(mysql, "insert_adv");
    return await global.mysql.query(strQuery, escape_data);
  }

  async get_single_ad(req) {
    let mysql = {};
    let escape_data = [req.params.id];
    let strQuery = await mysqliClass.mysqli(mysql, "getsingle_adv");
    console.log(strQuery);
    await global.mysql.query(
      "UPDATE advertisment set clicks = clicks+1 where id  = ?",
      escape_data
    );
    return await global.mysql.query(strQuery, escape_data);
  }
  async getalladverisment(req) {
    let mysql = {};
    let strQuery = await mysqliClass.mysqli(mysql, "get_all_adv");

    return await global.mysql.query(strQuery);
  }
  async getalladverismentinsc(req) {
    let mysql = {};
    let strQuery = await mysqliClass.mysqli(mysql, "get_all_adv_old_to_new");
    return await global.mysql.query(strQuery);
  }
  async getalladverismentdesc(req) {
    let mysql = {};
    let strQuery = await mysqliClass.mysqli(mysql, "get_all_adv_newest");

    return await global.mysql.query(strQuery);
  }
  async getalladverismentpopular(req) {
    let mysql = {};
    let strQuery = await mysqliClass.mysqli(mysql, "get_all_adv_popular");

    return await global.mysql.query(strQuery);
  }
  async total_impressions(req) {
    let mysql = {};
    let strQuery = await mysqliClass.mysqli(mysql, "total_impressions");

    return await global.mysql.query(strQuery);
  }
  async Top_advertisment(req) {
    let mysql = {};
    let strQuery = await mysqliClass.mysqli(mysql, "Top_advertisment");

    return await global.mysql.query(strQuery);
  }
  async advertisment_performance_filter(req) {
    let mysql = {};
    let escape_data = [req.params.filter];
    let strQuery = await mysqliClass.mysqli(
      mysql,
      "advertisment_performance_filter"
    );
    return await global.mysql.query(strQuery, escape_data);
  }
}

module.exports = Advertisment;
