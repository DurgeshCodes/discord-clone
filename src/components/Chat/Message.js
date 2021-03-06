import { Avatar } from "@material-ui/core";
import React from "react";
import classes from "./message.module.css";

const Message = () => {
  return (
    <div className={classes.message}>
      <Avatar />
      <div className={classes.info}>
        <h4>
          tonyDragster
          <span className={classes.timestamp}>this is timestamp</span>
        </h4>

        <p>This is message</p>
      </div>
    </div>
  );
};

export default Message;
