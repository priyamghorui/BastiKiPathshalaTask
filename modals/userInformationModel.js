const { default: mongoose } = require("mongoose");

const userInformationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "provide name"],
    },
    age: {
      type: Number,
      required: [true, "provide age"],
    },
    email: {
      type: String,
      required: [true, "provide email"],
      unique: true,
    },
    address: {
      type: String,
      required: [true, "provide address"],
    },
    remark: {
      type: String,
      required: [true, "provide remark"],
    },
    mobile: {
      type: Number,
      required: [true, "provide mobile"],
    },
  },
  {
    timestamps: true,
  }
);

const userInformationModel = mongoose.model(
  "userInformations",
  userInformationSchema
);

module.exports = userInformationModel;
