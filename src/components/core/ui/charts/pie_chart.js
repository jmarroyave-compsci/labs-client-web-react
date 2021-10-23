import React from 'react';
import PropTypes from 'prop-types';
import { PieChart as RMPieChart } from 'react-minimal-pie-chart';
import ResponsiveWrapper from 'core/ui/components/responsiveness';

const COLORS = ["5bc0eb","acd49c","fde74c","e5df49","ccd645","9bc53d","c08f39","e55934","f0692b","fa7921"]


function PieChart(params){
  var { data } = params;

  return <RMPieChart
      data={data}
      label={(lbl) => renderLabel(lbl)}
      labelStyle={{fontSize: '0.5rem'}}
    />;
}

function renderLabel(lbl){
  return `${lbl.dataEntry.title}: ${lbl.dataEntry.percentage.toFixed(0)}%`
}


PieChart.propTypes = {
  data: PropTypes.array,
};

PieChart.defaultProps = {
  data: null,
};


export default ResponsiveWrapper(PieChart)