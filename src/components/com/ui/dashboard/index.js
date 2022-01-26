import React from 'react'
import GridItem from 'core/ui/layout/grid_item';
import Indicator from 'com/ui/dashboard/indicator.server';
import Dataset from "com/ui/dashboard/dataset";

export const tileIndicator = (loading, title, data, icon) =>               
  <GridItem xs={12} sm={6} md={6} lg={3} style={{paddingRight: '1rem'}}>
    <Indicator loading={loading} title={title} data={(data) ? data.toString() : data} icon={icon}/>
  </GridItem>

export const tileChart = (loading, title, data, ranges, onClick=null) =>
  <GridItem xs={12} sm={6} md={6} lg={6} style={{paddingRight: '1rem'}}>
    <Dataset onClick={ (data) => {
      if(onClick) onClick(data, title)
    }} loading={loading} title={title} data={(data) ? data : {}} ranges={ranges}/>
  </GridItem>