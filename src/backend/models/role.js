const mongoose = require("mongoose");
const { Schema } = mongoose;

const roleSchema = new Schema({
  role_name: String,
});

const Role = mongoose.model("roles", roleSchema);

module.exports.Role = Role;
module.exports.roleSchema = roleSchema;
