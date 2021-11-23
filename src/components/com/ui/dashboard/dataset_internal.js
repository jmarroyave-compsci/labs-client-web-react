import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ChartCard from 'core/ui/cards/chart';
import Button from "core/ui/button"
import PanelCard from 'core/ui/cards/panel';
import HorizontalBarsChart from "./charts/horizontal-bars-chart";
import Table from './table';
import TreeMap from "./charts/tree-map";

export default function Dataset( params ){
  const { format, data, title, ranges, height, onClick } = params;

  return (
      <>
        {(format === "table") && renderText( params.data, ranges, height, onClick )}
        {(format === "chart") && renderChart( title, params.data, ranges, height, onClick )}
        {(format === "tree") && renderTreeMap( title, params.data, ranges, height )}
      </>
   )
}

function renderText( data, ranges, height, onRowClick ){
  return (
    <div style={{height: height + 8, overflowY: 'scroll'}}> 
      <Table data={data} ranges={ranges} onRowClick={(params)=>onRowClick({label: params[0], value: params[1] })}/>
    </div>
  )
}

function renderChart( title, data, ranges, height, onBarClick ){
  return(
    <HorizontalBarsChart interactive={+(onBarClick != null)} onBarClick={(d,i) => onBarClick(i)} title={title} data={data} ranges={ranges} small={true} height={height}/>
  )
}

function renderTreeMap( title, data, ranges, height ){
  return(
      <TreeMap title={title} data={data} ranges={ranges} height={height}/>
  )
}

Dataset.propTypes = {
  title: PropTypes.string,
  data: PropTypes.object,
  format: PropTypes.oneOf(['table', 'chart', "tree"]),
  height: PropTypes.number,
};

Dataset.defaultProps = {
  title: "Title",
  data: {},
  format: "table",
  ranges: [],
  height: 300,
};


