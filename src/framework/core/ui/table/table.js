import React from "react";
import { styled } from '@mui/material/styles';
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styles from "./tableStyle.js";
const useStyles = makeStyles(styles);
import { getData } from 'core/lib/data'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '0.75rem',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

var CustomTable = function(props) {
  const classes = useStyles();
  const { tableHead, tableData, tableHeaderColor, showHeader, tableDataExclude } = props;

  if((showHeader && !tableHead) || !tableData) return "No Data";

  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined && showHeader ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <StyledTableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <StyledTableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </StyledTableCell>
                );
              })}
            </StyledTableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {getData(tableData, (prop, key) => {
            return (
              <StyledTableRow key={key} className={classes.tableBodyRow}>
                {getData(prop, (p, key) => {
                  if(tableDataExclude && tableDataExclude.includes(key)) return
                  return (
                    <StyledTableCell className={classes.tableCell} key={key}>
                      {p}
                    </StyledTableCell>
                  );
                })}
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray",
  showHeader: true
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  showHeader: PropTypes.bool,
};


export default CustomTable;