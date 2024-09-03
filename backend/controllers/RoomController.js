const { displayRooms } = require("../services/RoomServices");

const displayRoomsController = async (req, res) => {
  try {
    const displayRoom = await displayRooms();

    if (displayRoom.status === 200) {
      return res.status(200).json({
        message: "Successfully displayed items",
        displayRoom,
        status: 200,
      });
    } else {
      return { status: 401, message: "nothing to be displayed" };
    }
  } catch (error) {
    return { status: 500, message: "internal error" };
  }
};

module.exports = {
  displayRoomsController,
};
