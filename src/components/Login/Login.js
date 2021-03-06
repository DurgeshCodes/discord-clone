import React from "react";
import Logo from "./Logo";
import classes from "./login.module.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className={classes.login}>
      <Logo />
      <Button className={classes.button} onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
