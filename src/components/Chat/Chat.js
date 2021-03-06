import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../Store/user";
import { selectChannelId, selectChannelName } from "../../Store/channel";
import classes from "./chat.module.css";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

const Chat = () => {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);

  return (
    <div className={classes.chat}>
      <ChatHeader channelName={channelName} />
      <ChatMessage channelId={channelId} />
      <ChatInput user={user} channelName={channelName} channelId={channelId} />
    </div>
  );
};

export default Chat;
