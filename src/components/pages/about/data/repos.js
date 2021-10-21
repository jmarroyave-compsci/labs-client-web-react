import React from 'react'
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Table from 'core/ui/table'
import { Title } from 'components/styles/infography'
import { getDataRepos } from 'data/data_repos'

export default function Sources( props ){
  var data = getDataRepos();
  return (
    <Stack>
      <Title>Repos</Title>
      <Table
        tableData={data}
        tableDataExclude={[0]}
        showHeader={false}
      />
    </Stack>
  )

}
