const express = require("express");
const {
  insertMessageController,
  displayMessageController,
} = require("../controllers/messagesController");

const router = express.Router();

router.get("/displayMessages", displayMessageController);
router.post("/postMessages", insertMessageController);

module.exports = router;
