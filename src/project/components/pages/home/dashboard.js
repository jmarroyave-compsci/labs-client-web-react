import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Placeholder from 'core/ui/placeholder';
import Indicador from 'components/dashboard/indicador';
import Countries from 'components/dashboard/countries'
import Types from 'components/dashboard/types'
import Genres from 'components/dashboard/genres'
import YearsReleased from 'components/dashboard/years_released'
import YearsAdded from 'components/dashboard/years_added'

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
    return (
      <div style={{padding: '1rem'}}>
        <GridContainer justifyContent='center' fill spacing={8}>
          <GridItem xs={12} sm={12} md={12}>
            <GridContainer justifyContent='center' fill spacing={2}>
              <GridItem xs={6} sm={4} md={3} lg={2}>
                <Indicador title={"movies"} data={movies}/>
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <GridContainer justifyContent='center' fill spacing={4}>
              <GridItem xs={12} sm={8} md={6}>
                <Countries data={countries} format="graph"/>
              </GridItem>
              <GridItem xs={12} sm={8} md={6}>
                <Genres data={genres} format="graph"/>
              </GridItem>
              <GridItem xs={12} sm={8} md={6}>
                <Types data={types} format="graph"/>
              </GridItem>
              <GridItem xs={12} sm={8} md={6}>
                <YearsReleased data={yearsAdded} format="graph"/>
              </GridItem>
              <GridItem xs={12} sm={8} md={6}>
                <YearsAdded data={yearsReleased} format="graph"/>
              </GridItem>
            </GridContainer>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <GridContainer justifyContent='center' fill spacing={2}>
              <GridItem xs={6} sm={4} md={3} lg={2}>
                <Indicador title={"people"} data={people}/>
              </GridItem>
              <GridItem xs={6} sm={4} md={3} lg={2}>
                <Indicador title={"actors"} data={actors}/>
              </GridItem>
              <GridItem xs={6} sm={4} md={3} lg={2}>
                <Indicador title={"directors"} data={directors}/>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    )
  }

}


export default Dashboard;