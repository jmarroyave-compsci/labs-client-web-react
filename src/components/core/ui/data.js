import React from 'react';

import { withStyles } from "@mui/styles";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const styles = theme => ({
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

class Data extends React.Component {
	constructor(){
		super();
	}

  render() {
  	var { hidden, headers, classes, data, style } = this.props;
    var key = 0;
    headers = (headers === false) ? headers : true;
    hidden = (hidden) ? hidden : [];

    if(!data || data.length === 0) return <div>No data</div>

    const headersCols = Object.keys(data[0]); 

    //console.log(hidden, headersCols);

    return (
    	<Table style={style}>
        {headers === true &&
          <TableHead>
            <TableRow>
              {headersCols.map(item =>
                <TableCell key={key++} style={{padding : '4px'}}>{item}</TableCell>
              )}
            </TableRow>
          </TableHead>
        }
        <TableBody>
          {data.map(row=>
            <TableRow key={key++} className={classes.row}>
              {headersCols.map(cell=>
                (hidden.indexOf(cell) === -1) && <TableCell style={{padding : '4px'}} key={key++}>{row[cell]}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
    	</Table>
    );
  }
}

export default withStyles(styles)(Data);