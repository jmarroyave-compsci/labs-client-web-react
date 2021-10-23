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

export default function ChartPanel(props) {
  const { chart, children, color } = props;
  const classes = useStyles();
  return (
    <Card>
      <CardHeader color={color}>
        {chart}
      </CardHeader>
      <CardBody>
        {children}
      </CardBody>
    </Card>
  );
}

ChartPanel.propTypes = {
  chart: PropTypes.object,
  color: PropTypes.string,
};

ChartPanel.defaultProps = {
  chart: null,
  color: "primary",
}