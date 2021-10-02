import React from 'react';
import Carousel from 'components/ui/carousel';
import AwardItem from './award-item';

export default function BannerCarousel( props ){
    const { data, loading } = props;
    return (
        <Carousel 
          data={data}
          renderItem={ (item) => <AwardItem {...item}/>}
        />
    )
}

