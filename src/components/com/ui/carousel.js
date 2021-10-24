import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import Skeleton from '@mui/material/Skeleton';
import Stack from 'com/ui/stack';
import Paper from '@mui/material/Paper';
import { Frame, Item } from 'style/boxes'

export default function _Carousel( props ){
    var { data, loading } = props;
    loading = (loading || !data || !data.length )
    data = (data && data.length && data.length > 0) ? data : [1,2,3,4,5];

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
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 3,
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464
              },
              items: 2,
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
          <Item key={idx}>
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
      <Stack spacing={1}>
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
