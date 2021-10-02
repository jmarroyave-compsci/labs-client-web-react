import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Indicator from 'components/entities/dashboard/indicator';
import Dataset from "components/entities/dashboard/dataset";
import Stack from '@mui/material/Stack';


function Dashboard( props={} ){
  const { data, loading, route } = props;
  const { total, profession, yearBirth } = data || {};

  const tileIndicator = (title, data, icon) =>               
            <GridItem xs={12} sm={6} md={4} lg={3} style={{paddingRight: '1rem'}}>
              <Indicator loading={loading} title={title} data={(data) ? data.toString() : data} icon={icon}/>
            </GridItem>
  const tileChart = (title, data, ranges) =>               
            <GridItem xs={12} sm={6} md={6} lg={6} style={{paddingRight: '1rem'}}>
              <Dataset loading={loading} title={title} data={(data) ? data : {}} ranges={ranges}/>
            </GridItem>

  return (
      <Stack spacing={2}>
        <h1>general</h1>
          <GridContainer justifyContent='center' fill>
            {tileIndicator("people", total, "people")}
          </GridContainer>

        <h1>segments</h1>
          <GridContainer justifyContent='center' fill>
              {tileChart("profession", profession, [ 1000, 50000, 100000])}
              {tileChart("birth year", yearBirth, [ 50, 100, 1000, 2500, 5000, 6000, 7000 ])}
          </GridContainer>
      </Stack>
  )
}


export default Dashboard;