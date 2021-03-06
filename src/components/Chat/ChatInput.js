import React, { useState } from "react";
import classes from "./chatInput.module.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import db from "../../firebase";
import firebase from "firebase";

const ChatInput = (props) => {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("channels").doc(props.channelId).collection("messages").add({
      user: props.user,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  return (
    <div className={classes.input}>
      <AddCircleIcon className={classes.Icon} fontSize="large" />
      <form>
        <input
          value={input}
          disabled={!props.channelId}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${props.channelName}`}
        />
        <button
          disabled={!props.channelId}
          className={classes.inputButton}
          type="submit"
          onClick={sendMessage}
        >
          Send Message
        </button>
      </form>

      <div className={classes.inputIcons}>
        <CardGiftcardIcon className={classes.Icon} fontSize="large" />
        <GifIcon fontSize="large" />
        <EmojiEmotionsIcon className={classes.Icon} fontSize="large" />
      </div>
    </div>
  );
};

export default ChatInput;
