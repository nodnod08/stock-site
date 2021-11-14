const mongoose = require("mongoose");
const { Schema } = mongoose;

const sellerSchema = new Schema({
  seller_verified_date: Date,
  first_valid_card: String,
  second_valid_card: String,
  first_valid_card_id_number: String,
  second_valid_card_id_number: String,
});

const Seller = mongoose.model("sellers", sellerSchema);

module.exports = Seller;
