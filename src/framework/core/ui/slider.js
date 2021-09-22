import React from 'react';
import RSlider from "react-slick";

import './assets/css/slider.scss';

class Slider extends React.Component {
  render() {
    var { xs, sm, md, lg, xl, children, dots } = this.props;
    var responsiveSettings = []; 

    dots = (dots) ? dots : true;

    xs = (xs) ? xs : 1;
    sm = (sm) ? sm : xs;
    md = (md) ? md : sm;
    lg = (lg) ? lg : md;
    xl = (xl) ? xl : lg;

    if(xs){
    	responsiveSettings.push({ breakpoint: 360, settings: { slidesToShow: parseInt(xs) } })
    }

    if(sm){
    	responsiveSettings.push({ breakpoint: 640, settings: { slidesToShow: parseInt(sm) } })
    }

    if(md){
    	responsiveSettings.push({ breakpoint: 1280, settings: { slidesToShow: parseInt(md) } })
    }

    if(lg){
    	responsiveSettings.push({ breakpoint: 2400, settings: { slidesToShow: parseInt(lg) } })
    }

    if(xl){
    	responsiveSettings.push({ breakpoint: 4800, settings: { slidesToShow: parseInt(xl) } })
    }
    

    var settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: dots,
      arrows: false,
      initialSlide: 0,
      responsive : responsiveSettings,
    };

    return (
    	<div style={{width: '100%'}}>
  			<RSlider {...settings}>
  				{children}
  			</RSlider>
    	</div>
    );

  }
}

export default Slider;