import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Indicator from 'components/entities/dashboard/indicator';
import Dataset from "components/entities/dashboard/dataset";
import Stack from '@mui/material/Stack';
import { Title } from 'components/styles/typo'

class Dashboard extends React.Component {
  render(){
    const { data, loading } = this.props;
    const { total, awards, classification, country, genre, type, rating, yearReleased, streamBy } = data || {};

    const tileIndicator = (title, data, icon) =>               
              <GridItem xs={12} sm={6} md={6} lg={4} style={{paddingRight: '1rem'}}>
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
          {tileIndicator("movies", total, "local_movies")}
        </GridContainer>

        <Title>segments</Title>
        <GridContainer justifyContent='center' fill>
          {tileChart("by type", type, [25000, 50000])}
          {tileChart("by genre", genre, [1000, 25000, 50000, 75000, 10000, 250000])}
          {/*tileChart("classification", classification, [])*/}
          {tileChart("from", country, [1, 5, 10, 50, 100])}
          {/* tileChart("stream by", streamBy, []) */}
          {/*tileChart("rated by", rating, [])*/}
          {tileChart("released", yearReleased, [10000, 25000, 50000, 100000])}
        </GridContainer>

        <Title>awards</Title>
        <GridContainer justifyContent='center' fill>
          {tileChart("nominees", awards, [])}
        </GridContainer>

        <Title>ratings</Title>
        <GridContainer justifyContent='center' fill>
          {tileIndicator("imdb", (rating) ? rating['imdb'] : null, "local_movies")}
        </GridContainer>

        <Title>stream</Title>
        <GridContainer justifyContent='center' fill>
          {tileIndicator("netflix", (streamBy) ? streamBy['netflix'] : null, "local_movies")}
        </GridContainer>
      </Stack>
    )
  }

}

export default Dashboard;