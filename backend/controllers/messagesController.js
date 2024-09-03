const {
  insertMessage,
  displayMessages,
} = require("../services/MessagesServices");

const insertMessageController = async (req, res) => {
  const { user_id, room_id, message } = req.body;
 
  try {
    const result = await insertMessage(user_id, room_id, message);

    if (result.status === 200) {
      return res.status(200).json({
        message: "Item added successfully",
        insertMessages: result,
        status: 200,
      });
    } else {
      return res.status(401).json({ message: "Failed to insert Messages" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const displayMessageController = async (req, res) => {
  const { room_id } = req.query;

  try {
    const dislayMessages = await displayMessages(room_id);

    if (dislayMessages.status === 200) {
      return res.status(200).json({
        message: "Successfully displayed items",
        dislayMessages: dislayMessages,
        status: 200,
      });
    } else {
      return { status: 401, message: "no messages to be displayed" };
    }
  } catch (error) {
    return { status: 500, message: "internal error" };
  }
};

module.exports = {
  insertMessageController,
  displayMessageController,
};
