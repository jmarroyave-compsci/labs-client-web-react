import React from 'react'
import { getLoC } from 'data/loc';
import Stack from 'com/ui/stack';
import Table from 'core/ui/table'
import { Title } from 'style/infography'
import { number as format } from 'core/lib/format'

export default function Sources( props ){
  var data = getLoC();
  data = getTable(data);

  return (
    <Stack>
      <Title>Lines of Code</Title>

      <Table
        tableHeader={data.header}
        tableData={data.rows}
        showHeader={true}
      />
    </Stack>
  )

}

function getTable( locData ){
  var resp = [];
  var header = ["area", "files", "loc", "node_modules", "loc", "project", "loc"]  
  Object.keys(locData).forEach( key => {
    var obj = locData[key]
    var dates = Object.keys(obj)
    obj = obj[dates[dates.length - 1]]
    var r = [key, format(obj.nm.files + obj.own.files, "0,0"), format(obj.nm.lines + obj.own.lines, "0,0"), format(obj.nm.files, "0,0"), format(obj.nm.lines, "0,0"), format(obj.own.files, "0,0"), format(obj.own.lines, "0,0")]
    resp.push(r)
  })

  return {rows: resp, header: header};
}