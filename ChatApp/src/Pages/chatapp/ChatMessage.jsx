import React from "react";
import { chatMessageStyles } from "./css/chatmessages";

const ChatMessage = ({ avatarUrl, nickName, messages, type }) => {
  console.log(`nickname ${nickName}`)
  const avatarLetter = nickName.charAt(0).toUpperCase();

  return (
    <div
      style={{
        ...chatMessageStyles.messageContainer,
        ...(type === "me" && chatMessageStyles.reversed),
      }}
    >
      <div style={chatMessageStyles.person}>
        {avatarUrl ? (
          <img src={require('../../Components/Images/red.jpg')} alt={avatarLetter} style={chatMessageStyles.avatar} />
        ) : (
          <div style={{ ...chatMessageStyles.avatar, ...chatMessageStyles.avatarPlaceholder }}>
            {avatarLetter}
          </div>
        )}
        <div style={chatMessageStyles.nickname}>{nickName}</div>
      </div>
      <div style={chatMessageStyles.context}>
        {messages.map((msg, index) => (
          <div key={index} style={chatMessageStyles.bubble}>
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatMessage;