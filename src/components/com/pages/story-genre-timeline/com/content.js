import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Stack from 'com/ui/stack';
import Parameters from 'com/ui/parameters';
import Paper from 'com/ui/paper';
import PageParameters from './parameters';
import Topics from './topics';

function Content(props){
    const { data, loading, fetch, params, item } = props;

    const parametersChanged = ( state ) => {
      fetch( { ...state, page: 1 } )
    }

    return (
      <Stack>
        <Parameters             
          onChange={parametersChanged}
          filters={ ( { onChange } ) => <PageParameters onChange={onChange} params={ params } /> }
        />
        <Paper sx={{padding: '1rem'}}>
            <Topics loading={loading} data={(data) ? data[0].timeline : null }/>
        </Paper>
      </Stack>
    )

}

export default Content