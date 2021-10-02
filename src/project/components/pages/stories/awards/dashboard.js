import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Stack from '@mui/material/Stack';
import Parameters from './parameters';
import AwardGrid from './award-grid';
import withData from './data/with-data-stories-movie-awards'

function Dashboard(props){
    var { data, loading, route } = props;
    route = (route) ? route : {};
    const history = useHistory();
    const [ year, setYear ] = useState( (route.year) ? route.year : new Date().getFullYear() )
    const [ entity, setEntity ] = useState( (route.entity) ? route.entity : "movies" )
    const page = 1;

    const parametersChanged = ( year, entity ) => {
      setYear(year);
      setEntity(entity)
      history.push(`/stories/awards/${entity}/${year}/${page}`)
      window.scrollTo(0,0);
    }

    return (
      <Stack>
        <Parameters year={year.toString()} entity={entity} onChange={parametersChanged}/>
        <AwardGrid data={data}/>
      </Stack>
    )

}

export default withData(Dashboard)