const workerModel = require("../models/workerModel");
const bookingModel = require("../models/bookingModel");
const userModel = require("../models/userModel");
const getWorkerInfoController = async (req, res) => {
  try {
    const worker = await workerModel.findOne({ userId: req.body.userId });
    res.status(200).send({
      success: true,
      message: "worker data fetch success",
      data: worker
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Fetching worker Details"
    });
  }
};

// update worker profile
const updateProfileController = async (req, res) => {
  try {
    const worker = await workerModel.findOneAndUpdate(
      { userId: req.body.userId },
      req.body
    );
    res.status(201).send({
      success: true,
      message: "worker Profile Updated",
      data: worker
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Worker Profile Update issue",
      error
    });
  }
};

//get single worker
const getWorkerByIdController = async (req, res) => {
  try {
    const worker = await workerModel.findOne({ _id: req.body.workerId });
    res.status(200).send({
      success: true,
      message: "Sigle Worker Info Fetched",
      data: worker
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Single worker info"
    });
  }
};

//workerAppointmentsController
const workerAppointmentsController = async (req, res) => {
  try {
    const worker = await workerModel.findOne({ userId: req.body.userId });
    const appointments = await bookingModel.find({
      workerId: worker._id
    });
    res.status(200).send({
      success: true,
      message: "Worker Appointments fetch Successfully",
      data: appointments
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Worker Appointments"
    });
  }
};
//updateStatusController
const updateStatusController = async (req, res) => {
  try {
    const { bookingId, status } = req.body;
    const bookings = await bookingModel.findByIdAndUpdate(bookingId, {
      status
    });
    const user = await userModel.findOne({ _id: bookings.userId });
    const notifcation = user.notifcation;
    notifcation.push({
      type: "status-updated",
      message: `your appointment has been updated ${status}`,
      onCLickPath: "/worker-bookings"
    });
    await user.save();
    res.status(200).send({
      success: true,
      message: "Booking Status Updated"
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error In Update Status"
    });
  }
};

module.exports = {
  getWorkerInfoController,
  updateProfileController,
  getWorkerByIdController,
  workerAppointmentsController,
  updateStatusController
};
