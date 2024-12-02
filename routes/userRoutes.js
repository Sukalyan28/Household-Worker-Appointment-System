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
  userAppointmentsController,
  updateUserProfileController,
  getUserInfoController
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
//Apply Worker || POST
router.post("/apply-worker", authMiddleware, applyWorkerController);
module.exports = router;

//Notifiaction  Worker || POST
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);
//Notifiaction  Worker || POST
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);
//GET ALL Workers
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
router.post("/userProfile", authMiddleware, updateUserProfileController);
router.post("/getUserProfile", authMiddleware, getUserInfoController);
module.exports = router;
