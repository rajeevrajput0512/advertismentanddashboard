const { jsonResponse } = require("./commonController");
const advertismentmodule = require("../module/advertisment");
const advertisments = new advertismentmodule();

module.exports = {
  enter_advertisment: async (req, res) => {
    try {
      let [results] = await Promise.all([advertisments.addAdvertisment(req)]);
      jsonResponse(res, "inserted_product", results);
    } catch (error) {
      console.log(error);
      jsonResponse(res, "error", error);
    }
  },

  getalladv: async (req, res) => {
    try {
      let [results] = await Promise.all([advertisments.getalladverisment(req)]);
      console.log(results);
      jsonResponse(res, "your data", results);
    } catch (error) {
      console.log(error);
      jsonResponse(res, "error", error);
    }
  },
  get_single_adv: async (req, res) => {
    try {
      let [results] = await Promise.all([advertisments.get_single_ad(req)]);
      console.log(results);
      jsonResponse(res, "sucess", results);
    } catch (error) {
      console.log(error);
      jsonResponse(res, "error", error);
    }
  },
  getalladverismentinsc: async (req, res) => {
    try {
      let [results] = await Promise.all([
        advertisments.getalladverismentinsc(req),
      ]);
      console.log(results);
      jsonResponse(res, "sucess", results);
    } catch (error) {
      console.log(error);
      jsonResponse(res, "error", error);
    }
  },
  getalladverismentdesc: async (req, res) => {
    try {
      let [results] = await Promise.all([
        advertisments.getalladverismentdesc(req),
      ]);
      console.log(results);
      jsonResponse(res, "sucess", results);
    } catch (error) {
      console.log(error);
      jsonResponse(res, "error", error);
    }
  },
  getalladverismentpopular: async (req, res) => {
    try {
      let [results] = await Promise.all([
        advertisments.getalladverismentpopular(req),
      ]);
      console.log(results);
      jsonResponse(res, "sucess", results);
    } catch (error) {
      console.log(error);
      jsonResponse(res, "error", error);
    }
  },
  total_impressions: async (req, res) => {
    try {
      let [results] = await Promise.all([advertisments.total_impressions(req)]);
      console.log(results);
      jsonResponse(res, "sucess", results);
    } catch (error) {
      console.log(error);
      jsonResponse(res, "error", error);
    }
  },
  Top_advertisment: async (req, res) => {
    try {
      let [results] = await Promise.all([advertisments.Top_advertisment(req)]);
      console.log(results);
      jsonResponse(res, "sucess", results);
    } catch (error) {
      console.log(error);
      jsonResponse(res, "error", error);
    }
  },
  advertisment_performance_filter: async (req, res) => {
    try {
      let [results] = await Promise.all([
        advertisments.advertisment_performance_filter(req),
      ]);
      console.log(results);
      jsonResponse(res, "sucess", results);
    } catch (error) {
      console.log(error);
      jsonResponse(res, "error", error);
    }
  },
};
