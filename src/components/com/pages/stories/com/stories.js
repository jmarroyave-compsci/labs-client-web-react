import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import Layout from "layout/cols-2-layout";
import { getAreaRelated } from 'data/stories'
import { Title, Subtitle } from 'style/detail'
import { Frame } from 'style/boxes'
import Tiles from 'com/ui/tiles';
import Item from './item'

export default function Stories( props ){
  const router = useRouter();
  var data = useMemo( () => {
    return getAreaRelated(null, props.tag)
  }, [])

  var tags = useMemo( () => {
    var tags = [];
    data.forEach( t => t.tags.forEach( tag => {
      if(!tags.includes(tag)) tags.push(tag)
    }))
    return tags
  }, [])

  return (
      <>
        {tags.map( (tag, idx) => 
          <React.Fragment key={idx}>
            <Frame>
              <Title>{tag}</Title>
              <Tiles 
                data={data.filter( d => d.tags.includes(tag))}
                item={(data) => <Item {...data}/>}
                xs={12} sm={6} md={4} lg={3}
              />
            </Frame>
          </React.Fragment>
        )}
      </>
  )
}
