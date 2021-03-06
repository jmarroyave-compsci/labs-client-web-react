import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@mui/styles";
// core components
import styles from "core/ui/theme/typography";

const useStyles = makeStyles(styles);

export default function Warning(props) {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.warningText}>
      {children}
    </div>
  );
}

Warning.propTypes = {
  children: PropTypes.node,
};
