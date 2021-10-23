import React from 'react';
import Cols2Layout from "layout/cols-2-layout";
import Stack from 'com/ui/stack';

export default function Layout( props ){
  return (
    <>
      <Cols2Layout 
        mainCol={
          <Stack>
            {(props.loading || !props.data || props.data === null )  ? 
              (props.skeleton) ? props.skeleton : <div>loading</div>
            :
              (props.detail) ? props.detail(props.data) : <div>detail not set</div>    
            }
          </Stack>          
        }
      />
    </>
  )
} 
