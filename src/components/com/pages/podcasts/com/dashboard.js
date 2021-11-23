import React, { useState } from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Stack from 'com/ui/stack';
import { Title } from 'style/infography'
import BottomSheetData from 'com/pages/dashboard/com/bottom-sheet-data';
import { tileIndicator, tileChart } from 'com/ui/dashboard'
import { getDashboardQuery } from 'com/entities/podcast/query';

function Dashboard( props ){
  const [ query, setQuery ] = useState(null);
  const { data, loading } = props;
  const { total, category, language, author, yearCreated, countries, languages } = data || {};

  const onClick = (data, title) => {
    const op = getDashboardQuery(data, title);
    setQuery({ op: op, title: `${title}: ${data.label}`, type: "podcast"})
  }

  return (
      <Stack spacing={2}>
        <BottomSheetData query={query}/>
        <Title>general</Title>
        <GridContainer justifyContent='center' fill>
          {tileIndicator(loading, "podcasts", total, "podcasts")}
        </GridContainer>

        <Title>segments</Title>
          <GridContainer justifyContent='center' fill>
              {tileChart(loading, "category", category, [10, 100], onClick)}
              {tileChart(loading, "languages", languages, [10, 50], onClick)}
              {tileChart(loading, "countries", countries, [10, 50], onClick)}
              {tileChart(loading, "author", author, [10, 35], onClick)}
          </GridContainer>
      </Stack>
  )
}


export default Dashboard;