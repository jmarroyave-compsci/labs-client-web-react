import React from "react";
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardBody,
  CardIcon,
  CardFooter
} from "./creative-tim";
import { makeStyles } from "@material-ui/core/styles";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};
const useStyles = makeStyles(styles);

export default function CardPanel(props) {
  const { title, subtitle, children, color, footer } = props;
  const classes = useStyles();
  return (
    <Card style={{display: 'flex', flexFlow: 'column'}}>
      {(title || subtitle) && 
        <CardHeader color={color}>
          <h4 className={classes.cardTitleWhite}>{title}</h4>
          <p className={classes.cardCategoryWhite}>
            {subtitle}
          </p>
        </CardHeader>
      }
      <CardBody style={{flex: 1}}>
        {children}
      </CardBody>
        {footer && 
        <CardFooter stats>
          {footer}
        </CardFooter>}
    </Card>
  );
}

CardPanel.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  color: PropTypes.string,
  footer: PropTypes.object,
};

CardPanel.defaultProps = {
  color: "primary",
  footer: null,

 }