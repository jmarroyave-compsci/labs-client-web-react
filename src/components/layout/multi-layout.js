import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CoreProxy from 'core/ui/layout/proxy';
import Cols2Layout from "layout/cols-2-layout";
import Grid from 'com/ui/grid';
import Stack from 'com/ui/stack';
import Banner from 'com/ui/banner';
import { useDispatch } from 'react-redux'
import { setPage } from 'app/state' 
import Error from 'core/ui/error'
import Skeleton from 'com/default/skeleton'

export default function MultiLayout( props ){
  const dispatch = useDispatch();
  const { config, loading, error, data, item, type } = props
  const showDataInBanner = config?.banner?.showData ?? false; 
  const title = config?.page?.title ?? "NO TITLE";
  const description = config?.page?.description ?? "NO DESCRIPTION";
  const url = ( props.url ) ? props.url : config.page.url;
  var mainCol = (props.mainCol) ? props.mainCol : null;
  mainCol = (props.dashboard) ? props.dashboard : mainCol;
  mainCol = (props.detail) ? props.detail : mainCol;

  useEffect( () => {
    if( props.breadcrumbs )
      dispatch(setPage({
        breadcrumbs: props.breadcrumbs,
      }));    
  }, [props.breadcrumbs])

  if( (type === "detail" && !props.data) ) return (props.skeleton) ? props.skeleton : <Skeleton/>;


  const BANNER = (
    <Banner 
      showData={showDataInBanner}
      loading={ loading }
      title={title}
      description={description}
      data={data}
      item={item}
      actions={[
        {url: url, title: "See all"}
      ]}
      hero={ (type !== "banner") }                    
    />
  )

  //console.log(props)

  if(!type || type == "grid"){
    return <Error from={title} data="render property wasn't set"/>
  }

  return (
    <>
      {error && <Error from={title} data={error.message}/>}
      {type === "banner" && BANNER }
      {type === "list" && 
        <Cols2Layout
          {...props}
          id={config.automata.name}
          breadcrumbs={props.breadcrumbs}
          banner={BANNER} 
          mainCol={(mainCol) ? mainCol( props ) : getList( loading, data, props.onPageChange, props.params.page, item)
          }
        />
      }
      {type === "page" && 
        <Cols2Layout
          {...props}
          id={config.automata.name}
          breadcrumbs={props.breadcrumbs}
          banner={BANNER} 
          mainCol={(mainCol) ? mainCol( props ) : <Error from={title} data="main component missing"/>}
        />
      }
      {type === "detail" && 
        <Cols2Layout
          {...props}
          id={config.automata.name}
          breadcrumbs={props.breadcrumbs}
          mainCol={(mainCol) ? 
            <Stack spacing={1} sx={{ display: 'flex', flexGrow: 1}}>
              {(props.loading || !props.data || props.data === null )  ? 
                (props.skeleton) ? props.skeleton : <div>loading</div>
              :
                mainCol(props.data)
              }
            </Stack>                      
            : 
            <Error from={title} data="main component missing, not found in mainCol or detail prop"/>
          }
        />
      }
    </>
  )
} 

function getList(loading, data, onPageChange, page, item){
  return (
    <Grid
      loading={ loading }
      page={ page }
      data={ data }
      onPageChange={ onPageChange }
      item={ item }
    />     
  )

}

MultiLayout.propTypes = {
  render: PropTypes.oneOf(["banner", "page", "list", "detail"]),
};