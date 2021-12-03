import React from 'react';

import { withStyles } from "@mui/styles";
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';

const styles = theme => ({
  chartContainer: {
    padding: 15,
  },
});

class Graph extends React.Component {
	constructor(){
		super();
	}

  render() {
  	const { classes, data, x, y } = this.props;
    var key = 0;

    if(!data || data.length === 0) return <div>No data</div>

    const headers = Object.keys(data[0]); 

    return (
      <div className={classes.chartContainer}>
        <ResponsiveContainer width="99%" height={320}>
          <LineChart data={data}>
            <XAxis dataKey={x} />
            <YAxis />
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            {y.map(ly=>
                <Line key={key++} type="monotone" dataKey={ly.name} stroke={ly.color} />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default withStyles(styles)(Graph);