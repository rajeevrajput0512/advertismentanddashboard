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

mysqliq["insert_adv"] =
  "INSERT INTO advertisment(dimenstion,format,product_type,adv_placement,adv_page,created_at) VALUES(?,?,?,?,?,now());";
mysqliq["get_all_adv"] = "SELECT * FROM advertisment";
mysqliq["get_all_adv_old_to_new"] =
  "SELECT * FROM advertisment order by created_at";
mysqliq["get_all_adv_newest"] =
  "SELECT * FROM advertisment order by created_at Desc";
mysqliq["get_all_adv_popular"] =
  "SELECT * FROM advertisment order by clicks Desc";
mysqliq["getsingle_adv"] = "select * from advertisment where id=?";
mysqliq["total_impressions"] =
  "select Sum(clicks) as Total_impression from advertisment";
mysqliq["Top_advertisment"] =
  "select Max(clicks) as Most_Popular from advertisment";
mysqliq["advertisment_performance_filter"] =
  "select clicks as number from advertisment where product_type = ?";
