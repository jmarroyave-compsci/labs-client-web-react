import React from 'react'
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Table from 'core/ui/table'

const SubTitle = styled('h4')({
  marginTop: '1rem',
  marginBottom: '0rem',
});


export default function Sources( props ){
  const { data, loading } = props;
  if(!data) return <div/>
  return (
    <Stack>
      <h4>Sources</h4>
      <Table
        tableData={data}
        tableDataExclude={[0]}
        showHeader={false}
      />
    </Stack>
  )

}
