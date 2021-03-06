import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@mui/styles";
// core components
import styles from "assets/jss/material-dashboard-react/components/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function Muted(props) {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.mutedText}>
      {children}
    </div>
  );
}

Muted.propTypes = {
  children: PropTypes.node,
};
