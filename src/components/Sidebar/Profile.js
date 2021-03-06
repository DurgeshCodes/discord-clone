import { Avatar } from "@material-ui/core";
import React from "react";
import classes from "./profile.module.css";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
import { useSelector } from "react-redux";
import { selectUser } from "../../Store/user";
import { auth } from "../../firebase";

const Profile = () => {
  const user = useSelector(selectUser);
  return (
    <div className={classes.profile}>
      <Avatar onClick={() => auth.signOut()} src={user.photo} />
      <div className={classes.profileInfo}>
        <h3>{user.name}</h3>
        <p>{`#${user.id.slice(0, 5)}`}</p>
      </div>

      <div className={classes.Icons}>
        <MicIcon />
        <HeadsetIcon />
        <SettingsIcon />
      </div>
    </div>
  );
};

export default Profile;
