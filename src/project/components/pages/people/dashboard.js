import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Indicator from 'components/entities/dashboard/indicator';
import Dataset from "components/entities/dashboard/dataset";


function Dashboard( props ){
  const { data, loading, route } = props;
  const { total, profession, yearBirth } = data;

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
            {tileIndicator("people", total, "people")}
          </GridContainer>
        </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <GridContainer justifyContent='center' fill>
                {tileChart("profession", profession, [])}
                {tileChart("birth year", yearBirth, [])}
            </GridContainer>
          </GridItem>
      </GridContainer>
    </div>
  )
}


export default Dashboard;