import React from "react";
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardBody,
  CardIcon,
  CardFooter
} from "./creative-tim";
import Icon from "@material-ui/core/Icon";

import { makeStyles } from "@material-ui/core/styles";

import styles from "./dashboardStyle.js";
const useStyles = makeStyles(styles);

export default function CardDashboard(props) {
  const {icon, title, subtitle, footer, color } = props;
  const classes = useStyles();
  return (
      <Card className={classes.cardHeader}>
        <CardHeader color={color} stats icon>
          <CardIcon color={color}>
            <Icon>{icon}</Icon>
          </CardIcon>
          <p className={classes.cardCategory}>{title}</p>
          <h3 className={classes.cardTitle}>
            {subtitle}
          </h3>
        </CardHeader>
        {footer && <CardFooter stats>
          <div className={classes.stats}>
            {footer}
          </div>
        </CardFooter>}
      </Card>
  );
}

CardDashboard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  icon: PropTypes.string,
  footer: PropTypes.object,
  color: PropTypes.string,
};

CardDashboard.defaultProps = {
  title: "Title",
  subtitle: "This is the subtitle",
  icon: "content_copy",
  footer: null,
  color: "primary",

}