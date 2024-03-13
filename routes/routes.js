const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.post("/signup", userController.signup);
router.get("/user", userController.getAllUser);

module.exports = router;
