import React from 'react';
import PropTypes from 'prop-types';
import MultiLayout from "layout/multi-layout";
import { useSelector, useDispatch } from 'react-redux';
import config from "./.config.js";
import Banner from 'com/ui/banner'
import Item from './com/item';
import { getQuote } from 'data/quotes';

export default function Layout( props ){
  	const quote = getQuote("dashboards");

	return (
	    <Banner 
	      showData={true}
	      title={config.page.title}
	      description={`"${quote.text}" ${quote.from}`}
	      data={getData()}
	      item={(data) => <Item full {...data} />}
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
	]
}