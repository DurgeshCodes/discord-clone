import React from "react";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import classes from "./voice.module.css";

const Voice = () => {
  return (
    <div className={classes.voice}>
      <SignalCellularAltIcon fontSize="large" className={classes.voiceIcon} />

      <div className={classes.voiceInfo}>
        <h3>Voice Connected</h3>
        <p>Stream</p>
      </div>

      <div className={classes.voiceIcons}>
        <InfoOutlinedIcon />
        <CallIcon />
      </div>
    </div>
  );
};

export default Voice;
