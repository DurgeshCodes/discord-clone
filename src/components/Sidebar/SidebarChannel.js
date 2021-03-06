import React from "react";
import classes from "./sidebarChannel.module.css";
import { setChannel } from "../../Store/channel";
import { useDispatch } from "react-redux";

const SidebarChannel = (props) => {
  const dispatch = useDispatch();

  const handleChannel = () => {
    dispatch(
      setChannel({
        channelName: props.channelName,
        channelId: props.id,
      })
    );
  };

  return (
    <div onClick={handleChannel} className={classes.sidebarChannel}>
      <h4>
        <span className={classes.hashtag}>#</span>
        {props.channelName}
      </h4>
    </div>
  );
};

export default SidebarChannel;
