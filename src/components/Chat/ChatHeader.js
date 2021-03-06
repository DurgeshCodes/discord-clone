import React from "react";
import classes from "./chatHeader.module.css";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
const ChatHeader = (props) => {
  return (
    <div className={classes.chatHeader}>
      <div className={classes.left}>
        <h3>
          <span className={classes.hash}>#</span>
          {props.channelName}
        </h3>
      </div>

      <div className={classes.right}>
        <NotificationsIcon className={classes.icon} />
        <EditLocationRoundedIcon className={classes.icon} />
        <PeopleAltRoundedIcon className={classes.icon} />

        <div className={classes.search}>
          <input placeholder="Search" />
          <SearchRoundedIcon className={classes.icon} />
        </div>

        <SendRoundedIcon className={classes.icon} />
        <HelpRoundedIcon className={classes.icon} />
      </div>
    </div>
  );
};

export default ChatHeader;
