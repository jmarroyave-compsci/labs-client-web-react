import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types';

import { setPage, setLoading, showMessage } from 'app' 

import Error from 'core/ui/error'
import Cols2Layout from "layout/cols-2-layout";
import Grid from 'com/ui/grid';
import Stack from 'com/ui/stack';
import Banner from 'com/ui/banner';

export default function Layout( props ){
  const dispatch = useDispatch();
  const router = useRouter();
  const { config } = props;
  const [ errorMessage, setErrorMessage ] = useState("")

  var state = useSelector(( state ) => state[config.automata.name] ) 
  const render = props.params.render ?? null;
  const params = { ...props.params, renderer: props.params.renderer ?? render }

  state = ( props.data ) ? { data: props.data, params: {page: props.params.page} } : state;

  var forceLoading = false;

  useEffect( () => {
    if(!state || props.data) return;
    dispatch( setLoading( { status: state.loading, sender: config.automata.name } ) )
    //console.log(config.automata.name, state);
  }, [state])

  useEffect( () => {
    if( params.breadcrumbs ){
      dispatch(setPage({
        breadcrumbs: (typeof params.breadcrumbs === 'function') ? params.breadcrumbs(state) : params.breadcrumbs,
      }));          
    }
  }, [params.breadcrumbs, state])

  const fetch = ( params ) => {
    if(!props.fetch) return;

    if(state){
      params = { ...state.params, ...params}  
    }
    
    if(props.data){
      props.fetch( params )
    } else{
      dispatch( props.fetch( params ) )
    }
  }

  useEffect( () => {
    if(!router?.isReady) return;
    if( render === "banner" && !config.banner.showData ) return
    if( props.data ) return;
  
    fetch( params )    
  }, [ router?.isReady, params.id ])

  if(!render || render == "grid"){
    return <Error from={config.page.title} data="render property wasn't set"/>
  }

  useEffect( () => {
    if(errorMessage == "") return
    dispatch( showMessage({ message: errorMessage}) )
  }, [ errorMessage ])

  return (
    <MultiLayout 
      config={props.config}
      render={render}
      state={state}
      loading={ !router?.isReady || !state || state === null || state?.loading }
      forceLoading={( render === "detail" && state?.data?.length == 0) || ( render == "list" && state?.data?.length === 0 )  || state?.error != null}      
      setErrorMessage={setErrorMessage}
      fetch={fetch}
      item={props.item}
      customDescription={ props.customDescription }
      customTitle={ props.customTitle }
      mainCol={ props.mainCol || props.dashboard || props.detail }
      skeleton={ props.skeleton }
      params={params}
    />
  )
}

function MultiLayout( props ){
  const dispatch = useDispatch();
  const { config, item, mainCol, state, render, params, fetch, setErrorMessage} = props
  var loading = props.loading || props.forceLoading;
  loading = (loading === false) ? false : true;
  const title = config.page.title;

  if( props.loading == false && state ){
    if( render === "detail" ){
      if( state.data === null || state.data?.length == 0 ){
        setErrorMessage("this is a demo version, this record was filtered out to reduce the database size")
        loading = true;
      }
    }

    if( render === "list" ){
      if( state.data?.length === 0 ){
        setErrorMessage("data not found")
        loading = true;
      }
    }

    if(state.error){
      setErrorMessage(state.error.message)
      loading = true;
    }    
  }

  const BANNER = <BannerLayout {...props} loading={loading} />

  return (
    <>
      {state && state.error && <Error from={title} data={state.error.message}/>}
      {render === "banner" && BANNER }
      {render === "list" && 
        <Cols2Layout
          {...props}
          id={config.automata.name}
          banner={ BANNER } 
          mainCol={( loading && props.skeleton ) ? props.skeleton : <ListLayout {...props}/>}
        />
      }
      {render === "page" && 
        <Cols2Layout
          {...props}
          id={config.automata.name}
          banner={ BANNER } 
          mainCol={(mainCol) ? 
            <>
              {( loading && props.skeleton )  ? props.skeleton : mainCol( { data: state?.data ?? null, loading: loading, params: params, fetch: fetch, item: item } )}
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
              {( loading && props.skeleton )  ? props.skeleton : mainCol( { data: state?.data ?? null, loading: loading } )}
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
  const { config, state, loading } = props;
  const showDataInBanner = config.banner?.showData ?? false; 
  const title = (props.customTitle) ? ((typeof props.customTitle === 'function') ? ((state) ? props.customTitle(state?.params ?? {} ) : "") : props.customTitle) : config.page?.title ?? "NO TITLE";
  const description = (props.customDescription) ? ((typeof props.customDescription === 'function') ? ((state) ? props.customDescription(state?.params ?? {}) : "") : props.customDescription) : config.page?.description ?? "NO DESCRIPTION";
  const url = config.page?.url;
  
  return (
    <Banner
      renderer={(config.banner.renderer) ? config.banner.renderer : "carousel"}
      showData={showDataInBanner}
      loading={ loading }
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
      onPageChange={ ( page ) => fetch( { page: page } ) }
      item={ item }
    />     
  )
}

MultiLayout.propTypes = {
  render: PropTypes.oneOf(["banner", "page", "list", "detail"]),
};