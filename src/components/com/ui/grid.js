import React from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Paper from '@material-ui/core/Paper';
import Stack from 'com/ui/stack';
import Skeleton from '@mui/material/Skeleton';
import Paging from 'com/ui/paging';
import { Frame, Item } from 'style/boxes'

export default function Grid( props ){
    var { data, loading, url, skeleton, item, onPageChange, page } = props;

    data = (data && data.length > 0) ? data : [1,2,3,4,5,6];
    
    return (
      <Frame>
        <Paging data={ data } url={url} onPageChange={onPageChange} page={page} loading={loading}>
          <GridContainer justifyContent='center' fill style={{width: '100%'}}>
            {data.map( (_item, idx) => 
              <GridItem key={idx} xs={12} sm={6} md={6} lg={4}>
                <Item>
                  {(loading) ?
                    (skeleton) ? skeleton : <Placeholder/>
                    : 
                    (item) ? item(_item) : null
                  }          
                </Item>  
              </GridItem>
            )}
          </GridContainer>
        </Paging>
      </Frame>
    )
}

function Placeholder(){
  return (
    <Paper style={{flexGrow: 1, padding: '0.5rem'}}>
      <Stack spacing={1}>
        <Skeleton variant="text" width={"80%"}/>
        <Skeleton variant="rectangular" height={240} />
        <Skeleton variant="text"/>
      </Stack>  
    </Paper>
  )    
}