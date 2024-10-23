const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyWorkerController,
  getAllNotificationController,
  deleteAllNotificationController,
  bookAppointmnetController,
  getAllWorkerController,
  bookingAvailabilityController,
  userAppointmentsController
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");
//router object
const router = express.Router();

//routes
//LOGIN||POST
router.post("/login", loginController);

//REGISTER||POST

router.post("/register", registerController);

//Auth||POST
router.post("/getUserData", authMiddleware, authController);
module.exports = router;

//APply Worker || POST
router.post("/apply-worker", authMiddleware, applyWorkerController);
module.exports = router;

//Notifiaction  Doctor || POST
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);

//Notifiaction  Doctor || POST
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);
//GET ALL DOC
router.get("/getAllWorkers", authMiddleware, getAllWorkerController);

//BOOK APPOINTMENT
router.post("/book-appointment", authMiddleware, bookAppointmnetController);

//Booking Avliability
router.post(
  "/booking-availbility",
  authMiddleware,
  bookingAvailabilityController
);

//Appointments List
router.get("/user-appointments", authMiddleware, userAppointmentsController);

module.exports = router;
