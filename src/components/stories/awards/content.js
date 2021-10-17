import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Stack from '@mui/material/Stack';
import Parameters from './parameters';
import Grid from 'components/ui/grid';

function Content(props){
    var { data, loading, onPageChange, params } = props;

    const [ year, setYear ] = useState( params.year );
    const [ entity, setEntity ] = useState( params.entity );
    const page = params.page;

    const parametersChanged = ( year, entity ) => {
      setYear(year)
      setEntity(entity)
      window.scrollTo(0,0);
      onPageChange( { year: year, entity: entity, page: page} )
    }

    return (
      <Stack>
        <Parameters year={year} entity={entity} onChange={parametersChanged}/>
        <Grid {...props} 
            page={props.params.page}
            onPageChange={ ( page ) => onPageChange( { year: year, entity: entity, page: page} ) } 
        />
      </Stack>
    )

}

export default Content