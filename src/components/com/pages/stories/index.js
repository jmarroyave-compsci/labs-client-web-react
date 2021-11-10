import React, { useEffect } from 'react';
import Layout from "layout/cols-2-layout";
import Content from './com/content';
import Banner from 'com/ui/banner'
import config from './.config'
import { setPage } from 'app' 
import { useDispatch } from 'react-redux'

export default function PageComponent( props ){
  const dispatch = useDispatch();
  
  useEffect( () => {
    if( props.breadcrumbs ){
      dispatch(setPage({
        breadcrumbs: props.breadcrumbs,
      }));          
    }
  }, [props.breadcrumbs])


  return (
    <Layout 
      banner={
        <Banner 
          title={config.page.title}
          description={config.page.description}
          hero
        />
      }
      mainCol={<Content tag={props.tag}/>}
    />
  )
}
