import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';

class Dashboard extends React.Component {
  render(){
    return (
        <GridContainer flex justify='center' fill>
          <GridItem xs={12} fill>
            <div className='section-title'>on TV</div>
            <br/>
            <div className='section-text'>Netflix data</div>
          </GridItem>
        </GridContainer>
    );
  }
}

export default Dashboard;