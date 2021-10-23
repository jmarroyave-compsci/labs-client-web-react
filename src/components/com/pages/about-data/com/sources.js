import React from 'react'
import Stack from 'com/ui/stack';
import Table from 'core/ui/table'
import { Title } from 'style/infography'
import { getDataSources } from 'data/data-sources'

export default function Sources( props ){
  const data = getDataSources()
  return (
    <Stack>
      <Title>Sources</Title>
      <Table
        tableData={data}
        tableDataExclude={[0]}
        showHeader={false}
      />
    </Stack>
  )

}
