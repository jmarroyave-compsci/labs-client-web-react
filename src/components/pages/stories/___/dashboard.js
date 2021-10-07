import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Indicator from 'components/entities/dashboard/indicator';
import Dataset from "components/entities/dashboard/dataset";

class Dashboard extends React.Component {
  render(){
    const { data, loading } = this.props;
    const { total, awards, classification, country, genre, type, rating, yearReleased, streamBy } = data || {};

    const tileIndicator = (title, data, icon) =>               
              <GridItem xs={12} sm={6} md={4} lg={3} style={{paddingRight: '1rem'}}>
                <Indicator loading={loading} title={title} data={(data) ? data.toString() : data} icon={icon}/>
              </GridItem>
    const tileChart = (title, data, ranges) =>               
              <GridItem xs={12} sm={6} md={6} lg={6} style={{paddingRight: '1rem'}}>
                <Dataset loading={loading} title={title} data={(data) ? data : {}} ranges={ranges}/>
              </GridItem>

    return (
      <div style={{width: '100%'}}>
        <GridContainer justifyContent='center' fill style={{width: '100%'}}>
          <GridItem xs={12} sm={12} md={12}>
            <GridContainer justifyContent='center' fill>
              {tileIndicator("movies", total, "local_movies")}
            </GridContainer>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <GridContainer justifyContent='center' fill>
                {tileChart("awards", awards, [1, 5, 10, 20, 30, 70, 100, 250])}
                {tileChart("classification", classification, [])}
                {tileChart("countries", country, [1, 5, 10, 20, 30, 70, 100, 250])}
                {tileChart("genres", genre, [100, 250])}
                {tileChart("stream by", streamBy, [])}
                {tileChart("types", type, [])}
                {tileChart("rated by", rating, [])}
                {tileChart("years released", yearReleased, [10, 25, 50])}
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    )
  }

}

export default Dashboard;