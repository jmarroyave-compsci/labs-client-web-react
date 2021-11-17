import React, { useState } from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Stack from 'com/ui/stack';
import { Title } from 'style/infography'
import BottomSheetData from 'com/pages/dashboard/com/bottom-sheet-data';
import { tileIndicator, tileChart } from 'com/ui/dashboard'

const Dashboard = ( props ) => {
    const [ query, setQuery ] = useState(null);
    const { data, loading } = props;
    const { total, awards, writers, actors, producers, directors, countries, duration, genres, production, ratings, releaseYear, type } = data || {};

    const onClick = (data, title, field) => {
      var op;
      switch(field){
        case "genre":
          op = {op: "eq", field: "genres", value: data.label}
          break;
      }
      setQuery({ op: op, title: `${title}: ${data.label}`, type: "movie"})
    }

    return (
      <Stack spacing={2}>
        <BottomSheetData query={query}/>
        <Title>general</Title>
        <GridContainer justifyContent='center' fill>
          {tileIndicator(loading, "movies", total, "local_movies")}
        </GridContainer>

        <Title>segments</Title>
        <GridContainer justifyContent='center' fill>
          {tileChart(loading, "type", type, [])}
          {tileChart(loading, "genre", genres, [], onClick, "genre")}
          {tileChart(loading, "countries", countries, [10])}
          {tileChart(loading, "ratings", ratings, [])}
          {tileChart(loading, "released", releaseYear, [])}
          {tileChart(loading, "duration", duration, [10])}
          {tileChart(loading, "production", production, [])}
        </GridContainer>


        <Title>crew per movie</Title>
          <GridContainer justifyContent='center' fill>
              {tileChart(loading, "actors", actors, [10, 50, 250, 500])}
              {tileChart(loading, "directors", directors, [10, 50, 100, 250, 500])}
              {tileChart(loading, "producers", producers, [10, 50, 100, 250, 500])}
              {tileChart(loading, "writers", writers, [10, 50, 100, 250, 500])}
          </GridContainer>


      </Stack>
    )
}

export default Dashboard;