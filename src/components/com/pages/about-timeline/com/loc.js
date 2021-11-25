import React from 'react'
import { getLoC } from 'data/loc';
import Stack from 'com/ui/stack';
import Table from 'core/ui/table'
import { Title, SubTitle } from 'style/infography'
import { number as format } from 'core/lib/format'
import Chart from "./loc-chart";

export default function SourcesViewer( props ){
  const data = getLoC();
  const metrics = [
    {title: "LoC", resolve: (r) => r.own.lines },
    {title: "files", resolve: (r) => r.own.files },
    {title: "modules LoC", resolve: (r) => r.nm.lines },
    {title: "modules files", resolve: (r) => r.nm.files },
  ]
  return (
    <Stack>
      <Title>Code in numbers</Title>
      { metrics.map( metric =>
        <React.Fragment key={metric}>
          <SubTitle>{metric.title}</SubTitle>
          <Sources data={data} metric={metric}/>
        </React.Fragment>
      ) }
    </Stack>
  )
}

function Sources( props ){
  const { metric, data } = props;
  const pData = getTable(data, metric);

  return (
    <Chart title={"test"} data={pData.rows} ranges={[]} small={true} height={300}/>
  )
}

function getTable( locData, metric ){
  var resp = [];
  var header = ["area", "files", "loc", "node_modules", "loc", "project", "loc"]  
  Object.keys(locData).forEach( key => {
    var rec = { name: key, values : []}
    resp.push(rec)
    var area = locData[key]
    Object.keys(area).forEach( date => {
      var obj = area[date];
      rec.values.push( { date: new Date(date), price: metric.resolve(obj) } )
    })
  })

  return {rows: resp, header: header};
}