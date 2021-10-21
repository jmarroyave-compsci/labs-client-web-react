import React from 'react'
import locData from 'res/files/stats/resume.json';
import Stack from '@mui/material/Stack';
import Table from 'core/ui/table'
import { Title } from 'components/styles/infography'
import { number as format } from 'core/lib/format'

export default function Sources( props ){
  var data = getTable();
  console.log(data);
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

function getTable(){
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