import React, { useState } from 'react'
import { useRouter } from 'next/router'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Stack from '@mui/material/Stack';
import Parameters from './parameters';
import AwardGrid from './grid';
import withData from './data/with-data-stories-movie-awards'
import Paging from 'components/ui/paging';
import Banner from './banner'

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
        <Banner hero/>
        <Parameters year={year} entity={entity} onChange={parametersChanged}/>
        <Paging {...props} url={`/stories/awards/${year}/${entity}`}>
          <AwardGrid data={data} year={year} all/>
        </Paging>
      </Stack>
    )

}

export default withData(Dashboard)