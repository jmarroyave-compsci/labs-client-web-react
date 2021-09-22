import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Placeholder from 'core/ui/placeholder';
import Indicator from 'components/entities/dashboard/indicator';
import Dataset from "components/entities/dashboard/dataset";


class Dashboard extends React.Component {
  render(){
    const { data, loading } = this.props;
    if( !data || loading ) return this.renderPlaceholder();

    return this.renderContent(data);
  }

  renderContent(data){
    return this.renderTemplate(data);
  }

  renderPlaceholder(){
    var p1 = <Placeholder data={[[["-", "100", "100"]],]}/>;
    return this.renderTemplate(p1, p1);
  }

  renderTemplate( { movies, countries, genres, types, yearsAdded, yearsReleased } ){
    const tileIndicator = (title, data, icon) =>               
              <GridItem xs={12} sm={6} md={4} lg={3} style={{paddingRight: '1rem'}}>
                <Indicator title={title} data={(data) ? data.toString() : data} icon={icon}/>
              </GridItem>
    const tileChart = (title, data, ranges) =>               
              <GridItem xs={12} sm={6} md={6} lg={6} style={{paddingRight: '1rem'}}>
                <Dataset title={title} data={(data) ? data : {}} ranges={ranges}/>
              </GridItem>

    return (
      <div style={{width: '100%'}}>
        <GridContainer justifyContent='center' fill style={{width: '100%'}}>
          <GridItem xs={12} sm={12} md={12}>
            <GridContainer justifyContent='center' fill>
              {tileIndicator("movies", movies, "local_movies")}
            </GridContainer>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <GridContainer justifyContent='center' fill>
                {tileChart("countries", countries, [1, 5, 10, 20, 30, 70, 100, 250])}
                {tileChart("genres", genres, [100, 250])}
                {tileChart("types", types, [])}
                {tileChart("years added", yearsAdded, [50, 100])}
                {tileChart("years released", yearsReleased, [10, 25, 50])}
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    )
  }

}

export default Dashboard;