import React from 'react';
import CoreProxy from 'core/ui/layout/proxy';
import Cols2Layout from "layout/cols-2-layout";
import Grid from 'com/ui/masonry';
import Banner from 'com/ui/banner';
import TextLink from "core/ui/text-link"

export default function Proxy( props ){
  const BANNER = (
    <Banner 
      showData={props.showDataInBanner}
      loading={ props.loading }
      title={props.title}
      description={props.description}
      data={props.data}
      item={props.item}
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
          mainCol={
            <Grid
              loading={ props.loading }
              page={ props.params.page }
              data={ props.data }
              onPageChange={ props.onPageChange }
              item={ props.item }
            />     
          }
        />
      }
    </>
  )
} 
