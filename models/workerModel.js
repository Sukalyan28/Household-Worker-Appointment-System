const mongoose = require("mongoose");

const workerSchema = new mongoose.Schema(
  {
    userId: {
      type: String
    },
    firstName: {
      type: String,
      required: [true, "first name is required"]
    },
    lastName: {
      type: String,
      required: [true, "last name is required"]
    },
    phone: {
      type: String,
      required: [true, "phone no is required"]
    },
    email: {
      type: String,
      required: [true, "email is required"]
    },
    address: {
      type: String,
      required: [true, "address is required"]
    },
    speciality: {
      type: String,
      required: [true, "speciality is required"]
    },
    experience: {
      type: String,
      required: [true, "experience is required"]
    },
    fees: {
      type: Number,
      required: [true, "fee is required"]
    },
    status: {
      type: String,
      default: "approved"
    },
    timings: {
      type: Object,
      required: [false, "work timing is required"]
    }
  },
  { timestamps: true }
);

const workerModel = mongoose.model("workers", workerSchema);
module.exports = workerModel;
