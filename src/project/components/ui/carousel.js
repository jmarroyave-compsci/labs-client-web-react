import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';

export default function _Carousel( props ){
    const { data, loading } = props;
    const {  } = data || {};

    return (
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
          itemClass=""
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
        >
          {data && data.length > 0 && data.map( (item, idx) => 
            <div key={idx}>
              {(props.renderItem) ? props.renderItem(item) : renderItem(item)}
            </div>
          )}
        </Carousel>
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
