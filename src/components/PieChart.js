import React from 'react';
import PropTypes from 'prop-types';
import { PieChart as RMPieChart } from 'react-minimal-pie-chart';

const COLORS = ["5bc0eb","acd49c","fde74c","e5df49","ccd645","9bc53d","c08f39","e55934","f0692b","fa7921"]


function PieChart(params){
  var { data } = params;

  return <RMPieChart
      data={parseMapToData(data)}
      label={(lbl) => renderLabel(lbl)}
      labelStyle={{fontSize: '0.5rem'}}
    />;
}

function renderLabel(lbl){
  console.log(lbl)
  return `${lbl.dataEntry.title}: ${lbl.dataEntry.percentage.toFixed(0)}%`
}

function parseMapToData(map){
  var data = [];

  console.log(map)

  Object.keys(map).forEach( (key, idx) => {
    data.push( {title: key, value: map[key], color: `#${COLORS[idx]}` } );
  })

  console.log(data)

  return data;
}



PieChart.propTypes = {
  data: PropTypes.object,
};

PieChart.defaultProps = {
  data: null,
};


export default PieChart;