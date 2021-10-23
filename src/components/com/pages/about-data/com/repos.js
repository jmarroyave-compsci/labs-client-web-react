import React from 'react'
import Stack from 'com/ui/stack';
import Table from 'core/ui/table'
import { Title } from 'style/infography'
import { getDataRepos } from 'data/data-repos'

export default function Sources( props ){
  const data = getDataRepos()
  return (
    <Stack>
      <Title>Repositories</Title>
      <Table
        tableData={data}
        tableDataExclude={[0]}
        showHeader={false}
      />
    </Stack>
  )

}
