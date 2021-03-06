import React, { useEffect, useState } from "react";
import db from "../../firebase";
import classes from "./chatMessage.module.css";
import Message from "./Message";

const ChatMessage = (props) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (props.channelId) {
      db.collection("channels")
        .doc(props.channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data))
        );
    }
  }, [props.channelId]);
  return (
    <div className={classes.Chatmessage}>
      {messages.map((message) => {
        <Message />;
      })}
    </div>
  );
};

export default ChatMessage;
