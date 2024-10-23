const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true
    },
    workerId: {
      type: String,
      required: true
    },
    workerInfo: {
      type: String,
      required: true
    },

    userInfo: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true,
      default: "pending"
    },
    time: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const bookingModel = mongoose.model("bookings", bookingSchema);

module.exports = bookingModel;
