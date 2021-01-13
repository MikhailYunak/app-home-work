import React from "react";
import {makeStyles, Container} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    display: "flex",
    alignItems: "center",
  }
}));

const SearchContainer = ({children, ...props}) => {
  const styles = useStyles();
  return <Container
    className={styles.root}
    container='main'
    maxWidth="md">
    {children}
  </Container>
}

export default SearchContainer;
