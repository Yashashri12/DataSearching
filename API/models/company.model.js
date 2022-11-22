const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
});

const Company = mongoose.model("Company", companySchema);
module.exports = Company;
