import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Indicator from 'components/entities/dashboard/indicator';
import Dataset from "components/entities/dashboard/dataset";
import Stack from '@mui/material/Stack';

function Dashboard( props ){
  const { data, loading, route } = props;
  const { total, category, language, yearCreated } = data || {};

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
          {tileIndicator("podcasts", total, "podcasts")}
        </GridContainer>

        <h1>segments</h1>
          <GridContainer justifyContent='center' fill>
              {tileChart("category", category, [10, 100, 250])}
              {tileChart("language", language, [10, 100])}
              {tileChart("created", yearCreated, [])}
          </GridContainer>
      </Stack>
  )
}


export default Dashboard;