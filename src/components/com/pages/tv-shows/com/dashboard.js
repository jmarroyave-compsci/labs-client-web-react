import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Indicator from 'com/ui/dashboard/indicator';
import Dataset from "com/ui/dashboard/dataset";
import Stack from 'com/ui/stack';
import { Title } from 'style/infography'

class Dashboard extends React.Component {
  render(){
    const { data, loading } = this.props;
    const { total, awards, writers, actors, producers, directors, countries, duration, genres, production, ratings, releaseYear, type } = data || {};

    const tileIndicator = (title, data, icon) =>               
              <GridItem xs={12} sm={6} md={6} lg={4} style={{paddingRight: '1rem'}}>
                <Indicator loading={loading} title={title} data={(data) ? data.toString() : data} icon={icon}/>
              </GridItem>
    const tileChart = (title, data, ranges) =>               
              <GridItem xs={12} sm={6} md={6} lg={6} style={{paddingRight: '1rem'}}>
                <Dataset loading={loading} title={title} data={(data) ? data : {}} ranges={ranges}/>
              </GridItem>

          console.log(data)

    return (
      <Stack spacing={2}>
        <Title>general</Title>
        <GridContainer justifyContent='center' fill>
          {tileIndicator("shows", total, "tv")}
        </GridContainer>

        <Title>segments</Title>
        <GridContainer justifyContent='center' fill>
          {tileChart("type", type, [])}
          {tileChart("genre", genres, [])}
          {tileChart("countries", countries, [10])}
          {tileChart("ratings", ratings, [])}
          {tileChart("released", releaseYear, [])}
          {tileChart("duration", duration, [10])}
          {tileChart("production", production, [])}
        </GridContainer>


        <Title>crew per movie</Title>
          <GridContainer justifyContent='center' fill>
              {tileChart("actors", actors, [10, 50, 250, 500])}
              {tileChart("directors", directors, [10, 50, 100, 250, 500])}
              {tileChart("producers", producers, [10, 50, 100, 250, 500])}
              {tileChart("writers", writers, [10, 50, 100, 250, 500])}
          </GridContainer>


      </Stack>
    )
  }

}

export default Dashboard;