const express = require("express");
const {
  getAllUsersController,
  getAllWorkersController
} = require("../controllers/adminCtrl");
const authMiddleware = require("../middlewares/authMiddleware");
const { changeAccountStatusController } = require("../controllers/adminCtrl");

const router = express.Router();

//GET METHOD || USERS
router.get("/getAllUsers", authMiddleware, getAllUsersController);

//GET METHOD || WORKERS
router.get("/getAllWorkers", authMiddleware, getAllWorkersController);

//POST ACCOUNT STATUS
router.post(
  "/changeAccountStatus",
  authMiddleware,
  changeAccountStatusController
);

module.exports = router;
