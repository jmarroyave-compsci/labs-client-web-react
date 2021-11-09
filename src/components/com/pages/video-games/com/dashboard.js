import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Indicator from 'com/ui/dashboard/indicator';
import Dataset from "com/ui/dashboard/dataset";
import Stack from 'com/ui/stack';
import { Title } from 'style/infography'

export default function Dashboard( props ){
    const { data, loading } = props;

    const tileIndicator = (title, data, icon) =>               
              <GridItem xs={12} sm={6} md={6} lg={4} style={{paddingRight: '1rem'}}>
                <Indicator loading={loading} title={title} data={data} icon={icon}/>
              </GridItem>
    const tileChart = (title, data, ranges) =>               
              <GridItem xs={12} sm={6} md={6} lg={6} style={{paddingRight: '1rem'}}>
                <Dataset loading={loading} title={title} data={data} ranges={ranges}/>
              </GridItem>

    return (
      <Stack spacing={2}>
        <Title>general</Title>
        <GridContainer justifyContent='center' fill>
          {tileIndicator("video games", data?.total, "sports_esports")}
        </GridContainer>

        <Title>segments</Title>
        <GridContainer justifyContent='center' fill>
          {tileChart("by genre", data?.genre, [])}
          {tileChart("released", data?.yearReleased, [250, 500])}
        </GridContainer>

      </Stack>
    )
}

