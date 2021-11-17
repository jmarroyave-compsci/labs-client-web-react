import React, { useState } from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Stack from 'com/ui/stack';
import { Title } from 'style/infography'
import BottomSheetData from 'com/pages/dashboard/com/bottom-sheet-data';
import { tileIndicator, tileChart } from 'com/ui/dashboard'

function Dashboard( props={} ){
  const [ query, setQuery ] = useState(null);
  const { data, loading } = props;
  const { total, awards, writers, actors, producers, directors, professionsPerPerson, professions, birthYear, birthDecade } = data || {};

  const onClick = (data, title, field) => {
    var op;
    switch(field){
      case "birthYear":
        op = {op: "range", field: "birthYear", value: [parseInt(data.label), parseInt(data.label) + 10]}
        break;
      case "profession":
        op = {op: "eq", field: "profession", value: data.label.replace(/ /g, "_").toLowerCase()}
        break;
      case "professionPerPerson":
        op = {op: "len", field: "profession", value: parseInt(data.label)}
        break;
      case "acted":
        op = {op: "gt", field: "acted", value: parseInt(data.label)}
        break;
      case "awards":
        op = {op: "len", field: "awards", value: parseInt(data.label)}
        break;
      default: 
        value = data.label; 
    }
    setQuery({ op: op, title: `${title}: ${data.label}`, type: "person"})
  }

  return (
      <Stack spacing={2}>
        <BottomSheetData query={query}/>
        <Title>general</Title>
          <GridContainer justifyContent='center' fill>
            {tileIndicator(loading, "people", total, "people")}
          </GridContainer>

        <Title>segments</Title>
          <GridContainer justifyContent='center' fill>
              {tileChart(loading, "birth decade", birthDecade, [30], onClick, "birthYear")}
              {tileChart(loading, "professions", professions, [500], onClick, "profession")}
              {tileChart(loading, "professions per person", professionsPerPerson, [500], "professionPerPerson")}
          </GridContainer>

        <Title>movies done</Title>
          <GridContainer justifyContent='center' fill>
              {tileChart(loading, "actors", actors, [10, 50, 250, 500])}
              {tileChart(loading, "directors", directors, [10, 50, 100, 250, 500])}
              {tileChart(loading, "producers", producers, [10, 50, 100, 250, 500])}
              {tileChart(loading, "writers", writers, [10, 50, 100, 250, 500])}
          </GridContainer>

        <Title>awards</Title>
          <GridContainer justifyContent='center' fill>
            {tileChart(loading, "awards and nominations", awards, [], onClick, "awards")}
          </GridContainer>

      </Stack>
  )
}


export default Dashboard;