import React from 'react'
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Table from 'core/ui/table'
import { Title } from 'components/styles/infography'

export default function Sources( props ){
  const { data, loading } = props;
  if(!data) return <div/>
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
