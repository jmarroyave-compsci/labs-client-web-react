import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Stack from 'com/ui/stack';
import Parameters from 'com/ui/parameters';
import DecadeParameters from './parameters';
import Grid from 'com/ui/grid';

function Content(props){
    const { data, loading, fetch, params, item } = props;

    const parametersChanged = ( state ) => {
      fetch( { ...state, page: 1 } )
    }

    return (
      <Stack>
        <Parameters             
          onChange={parametersChanged}
          filters={ ( { onChange } ) => <DecadeParameters onChange={onChange} params={ params } /> }
        />
        <Grid 
            data={data}
            loading={loading}
            item={item}
            page={props.params.page}
            params={params}
            onPageChange={ ( page ) => fetch( params ) } 
        />
      </Stack>
    )

}

export default Content