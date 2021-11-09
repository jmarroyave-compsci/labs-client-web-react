import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Stack from 'com/ui/stack';
import Parameters from './parameters';
import Grid from 'com/ui/grid';

function Content(props){
    var { data, loading, fetch, params, item } = props;

    const [ year, setYear ] = useState( params.year );
    const [ entity, setEntity ] = useState( params.entity );
    const page = params.page;

    useEffect( ()=> {
      setYear(params.year);
      setEntity(params.entity)
    }, [params])

    const parametersChanged = ( year, entity ) => {
      setYear(year)
      setEntity(entity)
      window.scrollTo(0,0);
      fetch( { year: year, page: page} )
    }

    return (
      <Stack>
        {!loading && <Parameters year={year} entity={entity} onChange={parametersChanged}/>}
        <Grid 
            data={data}
            loading={loading}
            item={item}
            page={props.params.page}
            params={params}
            onPageChange={ ( page ) => fetch( { year: year, page: page} ) } 
        />
      </Stack>
    )

}

export default Content