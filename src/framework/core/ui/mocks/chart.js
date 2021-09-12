import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import AreaChart from 'recharts/lib/chart/AreaChart';
import Area from 'recharts/lib/cartesian/Area';
import XAxis from 'recharts/lib/cartesian/XAxis';

const data = [
  { name: 'Mon', Visits: 2200, Orders: 3400 },
  { name: 'Tue', Visits: 1280, Orders: 2398 },
  { name: 'Wed', Visits: 5000, Orders: 4300 },
  { name: 'Thu', Visits: 4780, Orders: 2908 },
  { name: 'Fri', Visits: 5890, Orders: 4800 },
  { name: 'Sat', Visits: 4390, Orders: 3800 },
  { name: 'Sun', Visits: 4490, Orders: 4300 },
];

function SimpleLineChart() {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart data={data} margin={{top: 0, right: 0, left: 0, bottom: 0}}>
        <Area type="monotone" fillOpacity={1} dataKey="Visits" stroke="#333" fill="#efefef" />
        <XAxis dataKey="name" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default SimpleLineChart;
