import React, { useState, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { sidebarStyles, chatAppStyles } from "./css/chatapp";
import SendIcon from '@mui/icons-material/Send';
import { useNavigate, NavLink } from "react-router-dom";
import RoomService from "../../services/roomService";  
import MessageService from "../../services/MessageServices";  
import io from 'socket.io-client'; 
import { getLocalStorageUser } from "../../UTILS/localStorageUtils";
import UserService from "../../services/UserService";

const ChatApp = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [rooms, setRooms] = useState([]); 
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [usernames, setUsernames] = useState({});
  const navigate = useNavigate();

  const socket = io('http://localhost:3003'); 
  const displayRoomz = () => {
    RoomService.displayRoom().then((response) => {
     
      setRooms(response.data.displayRoom.data);
    }).catch((error) => {
      console.error("Error fetching rooms:", error);
    });
  };

  useEffect(() => {
    displayRoomz();

    socket.on('new_message', (message) => {
      const updateMessages = async (message) => {
        if (!usernames[message.user_id]) {
          const response = await UserService.getusername(message.user_id);
          
          const username = response.data.user[0].username;
          setUsernames(prevUsernames => ({
            ...prevUsernames,
            [message.user_id]: username,
          }));
        }
        setMessages(prevMessages => [...prevMessages, message]);
      };

      updateMessages(message);
    });

    return () => {
      socket.disconnect(); 
    };
  }, [usernames]); 

  useEffect(() => {
    if (selectedRoom) {
      handleRoomClick(selectedRoom); 
    }
  }, [selectedRoom]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

 
  const handleRoomClick = (room) => {
 
    setSelectedRoom(room);
    setMessages([]);

    MessageService.displayMessages(room).then(response => {
      const messages = response.data.dislayMessages.data;
            const fetchUsernames = async () => {
        const usernamePromises = messages.map(async (msg) => {

          if (!usernames[msg.user_id]) {
            const response = await UserService.getusername(msg.user_id);
            const username = response.data.user[0].username;
            return { user_id: msg.user_id, username };
          }
          return null;
        });

        const fetchedUsernames = await Promise.all(usernamePromises);
        const newUsernameMap = fetchedUsernames.reduce((acc, user) => {
          if (user) acc[user.user_id] = user.username;
          return acc;
        }, {});

        setUsernames(prevUsernames => ({ ...prevUsernames, ...newUsernameMap }));
      };

      fetchUsernames();
      setMessages(messages);
    }).catch(error => {
      console.error("Error fetching messages:", error);
    });

    setSidebarOpen(false);
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const user_id = getLocalStorageUser().user_id;
    const messageData = {
      user_id: user_id,
      room_id: selectedRoom,
      message: newMessage,
    };

    MessageService.insertMessages(messageData.user_id, messageData.room_id, messageData.message)
      .then(response => {
        socket.emit('send_message', { ...messageData, messages: newMessage }); 
        setNewMessage(""); 
      })
      .catch(error => {
        console.error("Error sending message:", error);
      });
  };

  return (
    <div style={chatAppStyles.container}>
      <div style={chatAppStyles.conversationBoard}>
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <ChatMessage
              key={index}
              avatarUrl={msg.user_id}
              nickName={usernames[msg.user_id] || "Unknown"}
              messages={[msg.messages]} 
              type={msg.user_id === getLocalStorageUser().user_id ? "me" : "other"} 
            />
          ))
        ) : (
          <div style={{ color: '#f5f5f5', textAlign: 'center', marginTop: '20px' }}>
            No Chats Available
          </div>
        )}
      </div>

      <div style={chatAppStyles.conversationPanel}>
        <input
          style={{ ...chatAppStyles.input, ...chatAppStyles.panelItem }}
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <SendIcon onClick={handleSendMessage} />
      </div>

      <button style={chatAppStyles.sidebarToggle} onClick={toggleSidebar}>
        ☰
      </button>

      <div
        style={{
          ...sidebarStyles.container,
          ...(sidebarOpen && sidebarStyles.open),
        }}
      >
        <div style={sidebarStyles.header}>Let's Chat</div>

        <div style={sidebarStyles.userList}>
          {rooms.map((room, index) => (
            <div
              key={index}
              style={sidebarStyles.userItem}
              onClick={() => handleRoomClick(room.room_id)}
            >
              <div style={sidebarStyles.avatars}>{room.room_name}</div>
            </div>
          ))}
          <div
             
            style={sidebarStyles.userItemz}
            
            onClick={() => navigate("/sign-in")}
              
            >
              <div style={sidebarStyles.avatars}>Logout</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
