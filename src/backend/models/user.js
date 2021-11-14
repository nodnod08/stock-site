const mongoose = require("mongoose");
const { Schema } = mongoose;

const { roleSchema, Role } = require("./role");
const Seller = require("./seller");

const userSchema = new Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  role: {
    type: Schema.Types.ObjectId,
    ref: Role,
  },
  seller_details: {
    type: Schema.Types.ObjectId,
    ref: Seller,
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
