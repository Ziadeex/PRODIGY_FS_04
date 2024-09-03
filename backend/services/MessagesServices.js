const { query } = require("../database/db");

const insertMessage = async (user_id, room_id, message) => {
  const sql = `INSERT INTO messages (room_id , user_id,messages) VALUES (?, ?,?)`;

  try {
    const insertMessages = await query(sql, [room_id, user_id, message]);

    if (insertMessages.affectedRows === 1) {
      await query(`SELECT * FROM messages`);
      return {
        status: 200,
        message: "Successful",
        insertID: insertMessages.insertId,
      };
    } else {
      return { status: 401, message: "messages isn't inserted" };
    }
  } catch (error) {
    return { status: 500, message: "internal error" };
  }
};

const displayMessages = async (room_id) => {
  const sql = `SELECT * FROM messages WHERE room_id = ?;`;

  try {
    const displayMessage = await query(sql, room_id);

    if (displayMessage.length > 0) {
      return { status: 200, message: "Successful", data: displayMessage };
    } else {
      return { status: 401, message: "no messages will be displayed" };
    }
  } catch (error) {
    return { status: 500, message: "internal error" };
  }
};

module.exports = {
  insertMessage,
  displayMessages,
};
