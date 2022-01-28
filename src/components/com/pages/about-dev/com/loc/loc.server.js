import React from 'react'
import { getLoC } from 'data/loc';
import Stack from 'com/ui/stack';
import Table from 'core/ui/table'
import { Title } from 'style/banner'
import { Frame } from 'style/boxes'
import { number as format } from 'core/lib/format'

export default function Sources( props ){
  var data = getLoC();
  data = getTable(data);

  return (
    <Frame>
      <Stack>
        <Title>Lines of Code (LoC)</Title>
        <Table
          tableHeader={data.header}
          tableData={data.rows}
          showHeader={true}
        />
      </Stack>
    </Frame>
  )

}

function getTable( locData ){
  var resp = [];
  var header = ["area", "files", "LoC", "node modules", "LoC"]  
  Object.keys(locData).forEach( key => {
    var obj = locData[key]
    var dates = Object.keys(obj)
    obj = obj[dates[dates.length - 1]]
    var r = [key, format(obj.own.files, "0,0"), format(obj.own.lines, "0,0"), format(obj.nm.files, "0,0"), format(obj.nm.lines, "0,0")]
    resp.push(r)
  })

  return {rows: resp, header: header};
}