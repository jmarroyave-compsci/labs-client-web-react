import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types';

import { setPage } from 'app' 

import Error from 'core/ui/error'
import Cols2Layout from "layout/cols-2-layout";
import Grid from 'com/ui/grid';
import Stack from 'com/ui/stack';
import Banner from 'com/ui/banner';

export default function Layout( props ){
  const dispatch = useDispatch();
  const router = useRouter();
  const { config } = props;
  const [ isRouterReady, setIsRouterReady ] = useState(false);

  var state = useSelector(( state ) => state[config.automata.name] ) 
  const render = props.params.render ?? null;
  const params = { ...props.params, renderer: props.params.renderer ?? render }

  state = ( props.data ) ? { data: props.data, params: {page: props.params.page} } : state;


  useEffect( () => {
    if(!router) return;
    setIsRouterReady(router.isReady)
  }, [router])

  useEffect( () => {
    if( params.breadcrumbs ){
      dispatch(setPage({
        breadcrumbs: (typeof params.breadcrumbs === 'function') ? params.breadcrumbs(state) : params.breadcrumbs,
      }));          
    }
  }, [params.breadcrumbs, state])

  const fetch = ( params ) => {
    //console.log("fetching", config.page.title, params)
    if(!props.fetch) return;

    if(props.data){
      props.fetch( {...params} )
    }
    else{
      dispatch( props.fetch( {...params} ) )
    }
  }

  useEffect( () => {
    if(!isRouterReady) return;
    if( render === "banner" && !config.banner.showData ) return

    //console.log(params, state)

    fetch( params )
    
  }, [ isRouterReady ])


  if(!render || render == "grid"){
    return <Error from={config.page.title} data="render property wasn't set"/>
  }

  return (
    <MultiLayout 
      config={props.config}
      render={render}
      state={state}
      loading={( !isRouterReady || !state || state.loading || (props.fetch && !state.data) )}
      fetch={fetch}
      item={props.item}
      customDescription={props.customDescription}
      customTitle={props.customTitle}
      mainCol={ props.mainCol || props.dashboard || props.detail }
      skeleton={ props.skeleton }
      params={params}
    />
  )
}

function MultiLayout( props ){
  const dispatch = useDispatch();
  const { config, error, data, item, noData, loading, mainCol, state, render, params, fetch } = props
  const title = config.page.title;

  const BANNER = <BannerLayout {...props} />

  return (
    <>
      {error && <Error from={title} data={error.message}/>}
      {render === "banner" && BANNER }
      {render === "list" && 
        <Cols2Layout
          {...props}
          id={config.automata.name}
          banner={ BANNER } 
          mainCol={(mainCol) ? mainCol( props ) : <ListLayout {...props} />}          
        />
      }
      {render === "page" && 
        <Cols2Layout
          {...props}
          id={config.automata.name}
          banner={ BANNER } 
          mainCol={(mainCol) ? 
            <>
              {( loading && props.skeleton )  ? props.skeleton : mainCol( { data: state?.data ?? null, loading: props.loading, params: params, fetch: fetch, item: item } )}
            </>                      
            : 
            <Error from={title} data="main component missing, not found in mainCol or detail prop"/>
          }
        />
      }
      {render === "detail" && 
        <Cols2Layout
          {...props}
          id={config.automata.name}
          mainCol={(mainCol) ? 
            <>
              {( loading && props.skeleton )  ? props.skeleton : mainCol( { data: state?.data ?? null, loading: props.loading } )}
            </>                      
            : 
            <Error from={title} data="main component missing, not found in mainCol or detail prop"/>
          }
        />
      }
    </>
  )
} 


function BannerLayout( props ){
  const { config, state } = props;

  const showDataInBanner = config.banner?.showData ?? false; 
  const title = (props.customTitle) ? props.customTitle : config.page?.title ?? "NO TITLE";
  const description = (props.customDescription) ? props.customDescription : config.page?.description ?? "NO DESCRIPTION";
  const url = config.page?.url;
  
  //console.log("banner", config.page.title, state, url({}))

  return (
    <Banner 
      showData={showDataInBanner}
      loading={ props.loading }
      title={title}
      description={description}
      data={ state?.data }
      item={ props.item }
      actions={[
        {url: url(state?.params ?? {}), title: "See all"}
      ]}
      hero={ ( props.render !== "banner" ) }                    
    />  
  )
}

function ListLayout( props ){
  const { loading, state, fetch, item } = props;

  return (
    <Grid
      loading={ loading }
      page={ state?.params.page ?? null }
      data={ state?.data ?? null }
      onPageChange={ ( page ) => {
          fetch( { ...state.params, page: page } ) 
        }
      }
      item={ item }
    />     
  )
}

MultiLayout.propTypes = {
  render: PropTypes.oneOf(["banner", "page", "list", "detail"]),
};