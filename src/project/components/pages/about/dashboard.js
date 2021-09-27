import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Placeholder from 'core/ui/placeholder';
import Indicator from 'components/entities/dashboard/indicator';
import Roadmap from './roadmap';


class Dashboard extends React.Component {
  render(){
    const { data, loading } = this.props;
    const { movies, people, lastUpdate } = data | {};

    const tileIndicator = (title, data, icon, type) =>               
              <GridItem xs={12} sm={6} md={4} lg={3} style={{paddingRight: '1rem'}}>
                <Indicator loading={loading} title={title} data={(data) ? data.toString() : data} icon={icon} type={type}/>
              </GridItem>

    return (
      <div style={{width: '100%'}}>
        <GridContainer justifyContent='center' fill style={{width: '100%'}}>
          <GridItem xs={12} sm={12} md={12}>
            <GridContainer justifyContent='center' fill>
              {tileIndicator("people", people, "people", "number")}
              {tileIndicator("movies", movies, "local_movies", "number")}
              {tileIndicator("last update", lastUpdate, "local_movies", "date")}
            </GridContainer>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <GridContainer justifyContent='center' fill>
              <Roadmap/>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    )
  }

}

export default Dashboard;