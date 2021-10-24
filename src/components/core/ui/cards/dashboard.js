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
  const {icon, title, subtitle, footer, color, width } = props;
  const classes = useStyles();
  return (
      <Card className={classes.cardHeader} style={{width: width}}>
        <CardHeader color={color} stats icon>
          {icon &&
            <CardIcon color={color}>
              <Icon>{icon}</Icon>
            </CardIcon>
          }
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
  subtitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  icon: PropTypes.string,
  footer: PropTypes.object,
  color: PropTypes.string,
};

CardDashboard.defaultProps = {
  title: "Title",
  footer: null,
  color: "primary",
}