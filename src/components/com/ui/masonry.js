import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Paper from '@material-ui/core/Paper';
import Stack from 'com/ui/stack';
import Skeleton from '@mui/material/Skeleton';
import Paging from 'com/ui/paging';
import { Frame, Item } from 'style/boxes'
import Masonry from '@mui/lab/Masonry';
import MasonryItem from '@mui/lab/MasonryItem';

export default function Masonry( props ){
    var { data, loading, url, skeleton, item, onPageChange, page } = props;

    loading = (loading || !data || data.length == 0 )
    data = (data && data.length > 0) ? data : [1,2,3,4,5];

    return (
      <Frame>
        <Paging data={ data } url={url} onPageChange={onPageChange} page={page} loading={loading}>
          <Masonry columns={{ xs: 1, sm: 2, md: 2, lg: 3 }} spacing={1}>
            {data.map( (_item, idx) => 
              <MasonryItem key={idx}>
                <Item>
                  {(loading) ?
                    (skeleton) ? skeleton : <Placeholder/>
                    : 
                    (item) ? item(_item) : null
                  }          
                </Item>  
              </MasonryItem>
            )}
          </Masonry>
        </Paging>
      </Frame>
    )
}

function Placeholder(){
  return (
    <Paper style={{padding: '0.5rem'}}>
      <Stack spacing={1}>
        <Skeleton variant="text" width={"80%"}/>
        <Skeleton variant="rectangular" height={240} />
        <Skeleton variant="text"/>
      </Stack>  
    </Paper>
  )    
}