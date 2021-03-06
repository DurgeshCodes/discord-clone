import React, { useEffect, useState } from "react";
import classes from "./sidebar.module.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel";
import Profile from "./Profile";
import Voice from "./Voice";
import db from "../../firebase";
const Sidebar = () => {
  const [channels, setChannels] = useState([]);

  const addChannel = () => {
    const channelName = prompt("Enter a new channel Name");

    if (channelName) {
      db.collection("channels").add({ channelName });
    }
  };

  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar_top}>
        <h2>Daddy React</h2>
        <ExpandMoreIcon />
      </div>

      <div className={classes.sidebar_channels}>
        <div className={classes.sidebar_ChannelsHeader}>
          <div className={classes.sidebar_header}>
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon
            onClick={addChannel}
            className={classes.sidebar_addChannels}
          />
        </div>

        <div className={classes.sidebar_channelList}>
          {channels.map(({ id, channel }) => (
            <SidebarChannel
              key={id}
              id={id}
              channelName={channel.channelName}
            />
          ))}
        </div>
      </div>
      <Voice />
      <Profile />
    </div>
  );
};

export default Sidebar;
