import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Stack from '@mui/material/Stack';
import Parameters from './parameters';
import Grid from 'components/ui/grid';
import Item from './item';
import withData from './data/with-data-stories-movie-awards'

function Dashboard(props){
    const router = useRouter();
    var { data, loading, route } = props;
    route = (route) ? route : {};
 
    const [ year, setYear ] = useState((props.route && props.route.year) ? props.route.year : new Date().getFullYear());
    const [ entity, setEntity ] = useState((props.route && props.route.entity) ? props.route.entity : "movies");

    const page = (props.route && props.route.page) ? props.route.page : 1;

    const parametersChanged = ( year, entity ) => {
      setYear(year)
      setEntity(entity)
      router.push(`/stories/awards/${year}/${entity}`)
      window.scrollTo(0,0);
    }

    return (
      <Stack>
        <Parameters year={year} entity={entity} onChange={parametersChanged}/>
        <Grid {...props} 
            url={`/stories/awards/${year}/${entity}`}
            item={(data) => <Item full all year={year} {...data}/>}
        />
      </Stack>
    )

}

export default withData(Dashboard)