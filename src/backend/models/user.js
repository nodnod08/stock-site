const mongoose = require("mongoose");
const { Schema } = mongoose;

const { roleSchema, Role } = require("./role");

const userSchema = new Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  role: {
    type: Schema.Types.ObjectId,
    ref: Role,
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;
