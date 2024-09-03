const express = require("express");
const { displayRoomsController } = require("../controllers/RoomController");

const router = express.Router();

router.get("/getrooms", displayRoomsController);

module.exports = router;
