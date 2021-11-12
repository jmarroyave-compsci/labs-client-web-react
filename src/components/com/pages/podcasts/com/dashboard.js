import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Indicator from 'com/ui/dashboard/indicator';
import Dataset from "com/ui/dashboard/dataset";
import Stack from 'com/ui/stack';
import { Title } from 'style/infography'

function Dashboard( props ){
  const { data, loading, route } = props;
  const { total, category, language, author, yearCreated, countries, languages } = data || {};

  const tileIndicator = (title, data, icon) =>               
            <GridItem xs={12} sm={6} md={6} lg={3} style={{paddingRight: '1rem'}}>
              <Indicator loading={loading} title={title} data={(data) ? data.toString() : data} icon={icon}/>
            </GridItem>
  const tileChart = (title, data, ranges) =>               
            <GridItem xs={12} sm={6} md={6} lg={6} style={{paddingRight: '1rem'}}>
              <Dataset loading={loading} title={title} data={(data) ? data : {}} ranges={ranges}/>
            </GridItem>

  return (
      <Stack spacing={2}>
        <Title>general</Title>
        <GridContainer justifyContent='center' fill>
          {tileIndicator("podcasts", total, "podcasts")}
        </GridContainer>

        <Title>segments</Title>
          <GridContainer justifyContent='center' fill>
              {tileChart("category", category, [10, 100])}
              {tileChart("languages", languages, [10, 50])}
              {tileChart("countries", countries, [10, 50])}
              {tileChart("author", author, [10, 35])}
          </GridContainer>
      </Stack>
  )
}


export default Dashboard;