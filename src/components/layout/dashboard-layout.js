import React from 'react';
import CoreProxy from 'core/ui/layout/proxy';
import Cols2Layout from "layout/cols-2-layout";
import Grid from 'com/ui/grid';
import Banner from 'com/ui/banner';
import TextLink from "core/ui/text-link"

export default function Proxy( props ){
  const { config, loading, data, item, type } = props
  const showDataInBanner = config?.banner?.showData ?? false; 
  const title = config?.page?.title ?? "NO TITLE";
  const description = config?.page?.description ?? "NO DESCRIPTION";
  const url = ( props.url ) ? props.url : config.page.url;

  const BANNER = (
    <Banner 
      loading={ props.loading }
      title={title}
      description={description}
      actions={[
        {url: props.url, title: "See all"}
      ]}
      hero={ (props.type !== "banner") }                    
    />
  )

  return (
    <>
      {props.type === "banner" && BANNER }
      {props.type === "grid" && 
        <Cols2Layout 
          banner={BANNER} 
          mainCol={props.dashboard}
        />
      }
    </>
  )
} 
