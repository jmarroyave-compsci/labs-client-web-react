import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import Skeleton from '@mui/material/Skeleton';
import Stack from 'com/ui/stack';
import Paper from '@mui/material/Paper';
import { Frame, Item } from 'style/boxes'

export default function _Carousel( props ){
    var { data, loading, xs=12, sm=6, md=3, lg=3 } = props;
    loading = (loading || !data || !data.length )
    data = (data && data.length && data.length > 0) ? data : [1,2,3,4,5];

    console.log(parseInt(12 / xs), parseInt(12 / sm))

    return (
      <Frame>
        <Carousel
          additionalTransfrom={0}  
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass="ui-carousel-item"
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            widescren: {
              breakpoint: {
                max: 3000,
                min: 1600
              },
              items: parseInt(12 / lg),
              partialVisibilityGutter: 40
            },
            desktop: {
              breakpoint: {
                max: 1600,
                min: 1024
              },
              items: parseInt(12 / md),
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 650,
                min: 0
              },
              items: parseInt(12 / xs),
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 650
              },
              items: parseInt(12 / sm),
              partialVisibilityGutter: 30
            }
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
          style={{display: 'flex'}}
        >
          {data.map( (item, idx) => 
          <Item paper={true} key={idx}>
              {(loading) ? 
                <Placeholder/>
              :
                (props.renderItem) ? props.renderItem(item) : renderItem(item)
              }
          </Item>
          )}
        </Carousel>
      </Frame>
    )
}

function Placeholder(){
  return (
      <Stack spacing={1} sx={{ padding: '1rem', display: 'flex', flexGrow: 1}}>
        <Skeleton variant="text" width={"80%"}/>
        <Skeleton variant="rectangular" height={118} />
        <Skeleton variant="text" />
      </Stack>  
  )    
}

function renderItem(item){
  const { id, description, title, image, link} = item;
  return (
      <div>
        <h1>{title}</h1>
        <span>{description}</span>
      </div>
  )
  
}