import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Placeholder from 'core/ui/placeholder';
import Indicador from 'components/dashboard/indicador';
import Dataset from "components/dashboard/dataset";


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

  renderTemplate( { movies, countries, genres, types, yearsAdded, yearsReleased, people, actors, directors } ){
    const tileIndicador = (title, data, icon) =>               
              <GridItem xs={6} sm={6} md={4} lg={3}>
                <Indicador title={title} data={(data) ? data.toString() : data} icon={icon}/>
              </GridItem>
    const tileChart = (title, data, ranges) =>               
              <GridItem xs={12} sm={12} md={6} lg={6}>
                <Dataset title={title} data={(data) ? data : {}} ranges={ranges}/>
              </GridItem>

    return (
      <div style={{padding: '1rem', width: '100%'}}>
        <GridContainer justifyContent='center' fill spacing={8} style={{width: '100%'}}>
          <GridItem xs={12} sm={12} md={12}>
            <GridContainer justifyContent='center' fill spacing={2}>
              {tileIndicador("movies", movies, "local_movies")}
            </GridContainer>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <GridContainer justifyContent='center' fill spacing={4}>
                {tileChart("countries", countries, [1, 5, 10, 20, 30, 70, 100, 250])}
                {tileChart("genres", genres, [100, 250])}
                {tileChart("types", types, [])}
                {tileChart("years added", yearsAdded, [50, 100])}
                {tileChart("years released", yearsReleased, [10, 25, 50])}
            </GridContainer>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <GridContainer justifyContent='center' fill spacing={2}>
              {tileIndicador("people", people, "people")}
              {tileIndicador("actors", actors, "person_outline")}
              {tileIndicador("directors", directors, "person")}
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    )
  }

}

export default Dashboard;