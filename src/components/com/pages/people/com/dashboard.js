import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Indicator from 'com/ui/dashboard/indicator';
import Dataset from "com/ui/dashboard/dataset";
import Stack from 'com/ui/stack';
import { Title } from 'style/infography'

function Dashboard( props={} ){
  const { data, loading, route } = props;
  const { total, awards, writers, actors, producers, directors, professionsPerPerson, professions, birthYear, birthDecade } = data || {};

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
            {tileIndicator("people", total, "people")}
          </GridContainer>

        <Title>segments</Title>
          <GridContainer justifyContent='center' fill>
              {tileChart("birth decade", birthDecade, [30])}
              {tileChart("professions", professions, [500])}
              {tileChart("professions per person", professionsPerPerson, [500])}
          </GridContainer>

        <Title>movies done</Title>
          <GridContainer justifyContent='center' fill>
              {tileChart("actors", actors, [10, 50, 250, 500])}
              {tileChart("directors", directors, [10, 50, 100, 250, 500])}
              {tileChart("producers", producers, [10, 50, 100, 250, 500])}
              {tileChart("writers", writers, [10, 50, 100, 250, 500])}
          </GridContainer>

        <Title>awards</Title>
          <GridContainer justifyContent='center' fill>
            {tileChart("awards and nominations", awards, [])}
          </GridContainer>

      </Stack>
  )
}


export default Dashboard;