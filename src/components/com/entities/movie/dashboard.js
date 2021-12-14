import React, { useState } from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Stack from 'com/ui/stack';
import { Title } from 'style/infography'
import BottomSheet from 'com/modules/bottom-sheet/com/bottom-sheet-entities';
import { tileIndicator, tileChart } from 'com/ui/dashboard'
import { getDashboardQuery } from 'com/entities/movie/query';

const Dashboard = ( props ) => {
    const [ query, setQuery ] = useState(null);
    const { data, loading } = props;
    const { total, awards, writers, cast, producers, directors, countries, duration, genres, production, ratings, releaseDecade, type } = data || {};

    const onClick = (data, title) => {
      const op = getDashboardQuery(data, title);
      setQuery({ op: op, title: `${title}: ${data.label}`, type: props.type})
    }

    return (
      <Stack spacing={2}>
        <BottomSheet query={query}/>
        <Title>general</Title>
        <GridContainer justifyContent='center' fill>
          {tileIndicator(loading, props.title.toLowerCase(), total, props.icon)}
        </GridContainer>

        <Title>segments</Title>
        <GridContainer justifyContent='center' fill>
          {tileChart(loading, "type", type, [], onClick)}
          {tileChart(loading, "genre", genres, [], onClick)}
          {tileChart(loading, "countries", countries, [10,100], onClick)}
          {tileChart(loading, "ratings", ratings, [10,20,30,40,50,60,70,80,90,100], onClick)}
          {tileChart(loading, "released", releaseDecade, [], onClick)}
          {tileChart(loading, "duration", duration, [10], onClick)}
          {tileChart(loading, "production", production, [], onClick)}
        </GridContainer>

        <Title>crew</Title>
        <GridContainer justifyContent='center' fill>
          {tileChart(loading, "cast", cast, [10, 50, 250, 500], onClick)}
          {tileChart(loading, "directors", directors, [10, 50, 100, 250, 500], onClick)}
          {tileChart(loading, "producers", producers, [10, 50, 100, 250, 500], onClick)}
          {tileChart(loading, "writers", writers, [10, 50, 100, 250, 500], onClick)}
       </GridContainer>

        <Title>awards</Title>
        <GridContainer justifyContent='center' fill>
          {tileChart(loading, "awards and nominations", awards, [], onClick)}
        </GridContainer>

      </Stack>
    )
}

export default Dashboard;