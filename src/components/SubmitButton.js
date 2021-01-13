import React from "react";
import Button from "@material-ui/core/Button"
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1)
  }
}));
const SubmitButton = ({children, ...props}) => {
  const styles = useStyles();
  return (
    <Button className={styles.root} type="submit" variant="contained" color="primary" {...props}>
      {children}
    </Button>)
}

export default SubmitButton;
