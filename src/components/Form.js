import React from "react";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    width: "100%",
  }
}));

const Form = ({children, ...props}) => {
  const styles = useStyles();
  return (
    <form className={styles.root} noValidate {...props}>
      {children}
    </form>);
}

export default Form;
