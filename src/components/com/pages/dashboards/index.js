import React from 'react';
import PropTypes from 'prop-types';
import MultiLayout from "layout/multi-layout";
import { useSelector, useDispatch } from 'react-redux';
import config from "./.config.js";
import Banner from 'com/ui/banner'
import Item from './com/item';
import Quote from 'com/quote';

export default function Layout( props ){
	return (
	    <Banner 
	      showData={true}
	      title={config.page.title}
		  description={<Quote tag="data"/>}			
	      data={getData()}
	      item={(data) => <Item full {...data} />}
	      renderer={"tiles"}
	      xs={12} sm={6} md={4} lg={4}
	    />
	)
}	

function getData(){
	return [
		{ name: "People", url: "/people", img: "/img/ba_pro_act.jpg"},
		{ name: "Movies", url: "/movies", img: "/img/ba_pro_dir.jpg"},
		{ name: "TV Shows", url: "/tv-shows", img: "/img/ba_pro_wri.jpg"},
		{ name: "Video Games", url: "/video-games", img: "/img/ba_pro_wri.jpg"},
		{ name: "Podcasts", url: "/podcasts", img: "/img/ba_pro_wri.jpg"},
		{ name: "Festivals", url: "/movies/festivals", img: "/img/ba_pro_wri.jpg"},
	]
}