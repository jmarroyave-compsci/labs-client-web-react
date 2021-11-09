import React from 'react'
import { getLoC } from 'data/loc';
import Stack from 'com/ui/stack';
import Table from 'core/ui/table'
import { Title } from 'style/infography'
import { number as format } from 'core/lib/format'
import Chart from "./loc-chart";

export default function Sources( props ){
  var data = getLoC();
  data = getTable(data);

  return (
    <Stack>
      <Title>Lines of Code</Title>
      <Chart title={"test"} data={data.rows} ranges={[]} small={true} height={300}/>
    </Stack>
  )
}

function getTable( locData ){
  var resp = [];
  var header = ["area", "files", "loc", "node_modules", "loc", "project", "loc"]  
  Object.keys(locData).forEach( key => {
    var rec = { name: key, values : []}
    resp.push(rec)
    var area = locData[key]
    Object.keys(area).forEach( date => {
      var obj = area[date];
      rec.values.push( { date: new Date(date), price: obj.own.lines} )
    })
  })

  return {rows: resp, header: header};
}