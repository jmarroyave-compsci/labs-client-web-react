import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Config from 'config/constants';
import ChartCard from 'core/ui/cards/chart';
import Button from "core/ui/button"
import PanelCard from 'core/ui/cards/panel';
import HorizontalBarsChart from "./charts/horizontal-bars-chart";
import Table from './table';
import TreeMap from "./charts/tree-map";


export default function Dataset( params ){
  const { loading, error, data, title, ranges, height } = params;
  const [ format , setFormat] = useState("chart");

  if (loading === true) return <p>Loading...</p>;
  if (error) return <p>Error { error.toString() }</p>;

  if (!data || data.length === 0) return "NO DATA";

  const button = (ico, f) => <Button outlined={true} color='primary' icon={ico} render="icon" disabled={f === format} onClick={()=> setFormat(f)}>{f}</Button>
  
  return (
    <div>
      <PanelCard
        title={title} 
        footer={<div style={{padding: '0.5rem'}}>
              {button("bar_chart", "chart")}
              {button("table_chart", "tree")}
              {button("table_rows", "table")}
            </div>}
        color="primary"
      >
        <div>
          {(format === "table") && renderText( data, ranges, height )}
          {(format === "chart") && renderGraph( title, data, ranges, height )}
          {(format === "tree") && renderTreeMap( title, data, ranges, height )}
        </div>
      </PanelCard>
    </div>
    )
}

function renderText( data, ranges, height ){
  return (
    <div style={{height: height + 8, overflowY: 'scroll'}}> 
      <Table data={data} ranges={ranges}/>
    </div>
  )
}

function renderGraph( title, data, ranges, height ){
  return(
    <HorizontalBarsChart title={title} data={data} ranges={ranges} small={true} height={height}/>
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
  format: PropTypes.oneOf(['text', 'graph', "tree"]),
  height: PropTypes.number,
};

Dataset.defaultProps = {
  title: "Title",
  data: {},
  format: "text",
  ranges: [],
  height: 300,
};


