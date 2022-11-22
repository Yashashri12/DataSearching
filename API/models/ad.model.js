const mongoose = require("mongoose");
const Company = require("./company.model");
const Schema = mongoose.Schema;

const adSchema = new Schema({
  companyId: {type: Schema.Types.ObjectId, ref: 'Company'},
  primaryText: { type: String, required: true },
  hedline: { type: String, required: true },
  description: { type: String, required: true },
  CTA: { type: String, required: true },
  imageUrl: { type: String, required: true }
});

const Ad = mongoose.model("Ad", adSchema);
module.exports = Ad;
