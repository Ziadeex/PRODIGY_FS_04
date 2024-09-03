const express = require("express");
const {
  authenticateController,
  registerController,
  retrieveusernameController,
} = require("../controllers/authController");

const router = express.Router();

router.post("/register", registerController);

router.post("/authenticate", authenticateController);
router.get("/retrieveusernameController", retrieveusernameController);

module.exports = router;
