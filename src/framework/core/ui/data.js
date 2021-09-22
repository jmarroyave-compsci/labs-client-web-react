import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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