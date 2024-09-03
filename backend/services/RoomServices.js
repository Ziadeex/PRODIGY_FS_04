const { query } = require("../database/db");

const displayRooms = async () => {
  try {
    const displayRoom = await query(`SELECT * FROM rooms`);

    if (displayRoom.length > 0) {
      return { status: 200, message: "Successful", data: displayRoom };
    } else {
      return { status: 401, message: "nothing to be displayed" };
    }
  } catch (error) {
    return { status: 500, message: "internal error" };
  }
};

module.exports = {
  displayRooms,
};
