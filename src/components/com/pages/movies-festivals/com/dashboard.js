import React, { useState } from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Stack from 'com/ui/stack';
import { Title } from 'style/infography'
import BottomSheetData from 'com/pages/dashboard/com/bottom-sheet-data';
import { tileIndicator, tileChart } from 'com/ui/dashboard'
import { getDashboardQuery } from 'com/entities/movie-festival/query';

function Dashboard( props ){
  const [ query, setQuery ] = useState(null);
  const { data, loading } = props;
  const { startYear, startDecade, countries, continent, total } = data || {};

  const onClick = (data, title) => {
    const op = getDashboardQuery(data, title);
    setQuery({ op: op, title: `${title}: ${data.label}`, type: "movieFestival"})
  }


  return (
      <Stack spacing={2}>
        <BottomSheetData query={query}/>
        <Title>general</Title>
        <GridContainer justifyContent='center' fill>
          {tileIndicator(loading, "movie festivals", total, "festival")}
        </GridContainer>

        <Title>segments</Title>
          <GridContainer justifyContent='center' fill>
              {tileChart(loading, "started", startDecade, [], onClick)}
              {tileChart(loading, "country", countries, [5], onClick)}
              {tileChart(loading, "continent", continent, [], onClick)}
          </GridContainer>
      </Stack>
  )
}


export default Dashboard;