import React from 'react';
import PropTypes from 'prop-types';
import config from "./.config.js";
import Banner from 'com/ui/banner'
import Item from './com/item';
import Quote from 'com/quote';

export default function Layout( props ){

	return (
	    <Banner 
	      showData={true}
	      title={config.page.title}
	      description={<Quote tag="director,actor,writer"/>}
	      data={getData()}
	      item={(data) => <Item full {...data} />}
	      renderer={"tiles"}
	      xs={6} sm={6} md={3} lg={3}
	    />
	)
}	

function getData(){
	return [
		{ name: "Actors", url: "/movies/stories/actors", img: "/img/ba_pro_act.jpg"},
		{ name: "Directors", url: "/movies/stories/directors", img: "/img/ba_pro_dir.jpg"},
		{ name: "Writers", url: "/movies/stories/writers", img: "/img/ba_pro_wri.jpg"},
		{ name: "Producers", url: "/movies/stories/producers", img: "/img/ba_pro_wri.jpg"},
	]
}