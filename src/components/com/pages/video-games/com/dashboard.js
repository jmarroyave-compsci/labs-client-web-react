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
    const { total, awards, writers, cast, producers, directors, countries, duration, genres, production, ratings, releaseDecade, type } = data || {};

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
          {tileIndicator("movies", total, "sports_esports")}
        </GridContainer>

        <Title>segments</Title>
        <GridContainer justifyContent='center' fill>
          {tileChart("genre", genres, [])}
          {tileChart("released", releaseDecade, [])}
          {tileChart("duration", duration, [10])}
        </GridContainer>


        <Title>crew</Title>
          <GridContainer justifyContent='center' fill>
              {tileChart("actors", cast, [])}
              {tileChart("directors", directors, [])}
              {tileChart("producers", producers, [])}
              {tileChart("writers", writers, [])}
          </GridContainer>


      </Stack>
    )
  }

}

export default Dashboard;