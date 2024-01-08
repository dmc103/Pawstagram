const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },

    userName: {
      type: String,
      required: [true, "Username is required."],
      unique: true,
    },

    firstName: {
      type: String,
      required: [true, "First name is required."],
    },


    lastName: {
      type: String,
      required: [true, "Last name is required."],
    },

    password: {
      type: String,
      required: [true, "Password is required."],
    }
    
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
