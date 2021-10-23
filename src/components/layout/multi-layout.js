import React, { useEffect } from 'react';
import CoreProxy from 'core/ui/layout/proxy';
import Cols2Layout from "layout/cols-2-layout";
import Grid from 'com/ui/grid';
import Banner from 'com/ui/banner';
import TextLink from "core/ui/text-link"
import { useDispatch } from 'react-redux'
import { setPage } from 'app/state' 

export default function Proxy( props ){
  const dispatch = useDispatch();

  const { config, loading, data, item, type } = props
  const showDataInBanner = config?.banner?.showData ?? false; 
  const title = config?.page?.title ?? "NO TITLE";
  const description = config?.page?.description ?? "NO DESCRIPTION";
  const url = ( props.url ) ? props.url : config.page.url;

  useEffect( () => {
    if( props.breadcrumbs )
      dispatch(setPage({
        breadcrumbs: props.breadcrumbs,
      }));    
  }, [])


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

  return (
    <>
      {type === "banner" && BANNER }
      {(type === "grid" || type === "page") && 
        <Cols2Layout 
          {...props}
          banner={BANNER} 
          mainCol={(props.mainCol) ? props.mainCol( props ) : 
            <Grid
              loading={ loading }
              page={ props.params.page }
              data={ data }
              onPageChange={ props.onPageChange }
              item={ item }
            />     
          }
        />
      }
    </>
  )
} 
