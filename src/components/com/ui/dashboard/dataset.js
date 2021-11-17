import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ChartCard from 'core/ui/cards/chart';
import Button from "core/ui/button"
import PanelCard from 'core/ui/cards/panel';
import Loading from 'core/ui/loading'; 
import ErrorBoundry from 'core/ui/error-boundry';
import DatasetInternals from './dataset_internal';

export default function Dataset( params ){
  const { loading, data, title, ranges, height, interactive } = params;
  const [ format , setFormat] = useState("chart");

  const button = (ico, f) => <Button outlined={true} color='primary' icon={ico} render="icon" disabled={f === format} onClick={()=> setFormat(f)}>{f}</Button>

  return (
    <ErrorBoundry>
      <PanelCard
        title={title} 
        footer={<div style={{padding: '0.5rem'}}>
              {button("bar_chart", "chart")}
              {button("table_chart", "tree")}
              {button("table_rows", "table")}
            </div>}
        color="primary"
      >
        <>
          { (params.loading || !params.data) ?
              <Loading>loading</Loading>
            :
              <DatasetInternals {...params} format={format}/>
          }
        </>
      </PanelCard>
    </ErrorBoundry>
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


