import React, { useRef } from 'react'
import GridContainer from 'core/ui/layout/grid_container';
import GridItem from 'core/ui/layout/grid_item';
import Paper from '@material-ui/core/Paper';
import Stack from 'com/ui/stack';
import Skeleton from '@mui/material/Skeleton';
import Paging from 'com/ui/paging';
import { Frame, Item as ItemFrame } from 'style/boxes'

import { Transition } from 'react-transition-group';

const duration = 1300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

export default function Grid( props ){
    var { animations=true, data, loading, url, skeleton, item, onPageChange, page, pageSize, xs=12, sm=6, md=6, lg=4, noPaging=false, noPadding } = props;   
    const start = useRef(null)

    data = (data && data.length > 0) ? data : [1,2,3,4,5,6];

    const goToPage = ( toPage ) => {
      start.current.scrollIntoView(false)
      if(onPageChange) onPageChange(toPage)
    }

    const itemWrapper = ( data ) => (noPadding) ? data : <ItemFrame>{data}</ItemFrame>
    const animateItem = (item) =>{ return (animations) ?
      <Transition in={true} timeout={duration}>
        {state => (
          <div style={{
            ...defaultStyle,
            ...transitionStyles[state],
            width: "100%",
          }}>
            {item}
          </div>
        )}
      </Transition>
    : 
      item 
    }

    const Item = ( props ) => {
      return (
        <GridItem xs={xs} sm={sm} md={md} lg={lg}>
          {itemWrapper((loading) ?
            (skeleton) ? skeleton : <Placeholder/>
            : 
            (item) ? animateItem(item(props.data)) : null
          )} 
        </GridItem>

      )
    }

    var output = (
        <>
          <div ref={start}/>

          <GridContainer spacing={2} justify='center' fill style={{width: '100%'}}>
            {data.map( (_item, idx) => 
              <React.Fragment key={idx} >
              <Item data={_item} params={props}/>
              </React.Fragment>
            )}
          </GridContainer>
        </>
    )

    if(!noPaging){
      output = (
        <Paging pageSize={pageSize} data={ data } url={url} onPageChange={goToPage} page={page} loading={loading}>
          {output}
        </Paging>
      )      
    }

    return (
      <Frame>
        {output}
      </Frame>
    )
}

function Placeholder(){
  return (
    <Paper style={{backgroundColor: 'transparent', flexGrow: 1, padding: '0.5rem'}}>
      <Stack spacing={1}>
        <Skeleton variant="text" width={"80%"}/>
        <Skeleton variant="rectangular" height={100} />
        <Skeleton variant="text" width={"50%"}/>
        <Skeleton variant="text" width={"40%"}/>
        <Skeleton variant="text" width={"70%"}/>
      </Stack>  
    </Paper>
  )    
}