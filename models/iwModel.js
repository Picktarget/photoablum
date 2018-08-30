var mongoose = require("mongoose");

var IwSchema = new mongoose.Schema(
  {
    productionName: { type: String, unique: true },
    description: String,
    image: Array,
    updated_date: { type: Date, default: Date.now }
  },
  { collection: "iwinfo" }
);

module.exports = mongoose.model("IW", IwSchema);
