import config from 'app/config'
import dataProd from './data.json'
import dataTest from './data.test.json'

const data = (config.TEST) ? dataTest : dataProd;

const get = function(current, area=null, n=0 ){
	 var d = data.stories;

	 if(current){
	 	d = d.filter( r => r.url != current )	
	 }

	 if(area){
	 	d = d.filter( r => r.tags.includes(area) )
	 }

	 d = ( n > 0 ) ? d.slice(0,n) : d;

	 //console.log(current, area, n, d)
	 return d;
}

export const getBy = ( ID, breadcrumbs ) =>{	
	var resp = [];

	breadcrumbs = breadcrumbs.split("/")
	if( breadcrumbs[ breadcrumbs.length - 1 ].includes("index") ) {
		breadcrumbs = breadcrumbs.slice(0, breadcrumbs.length - 1 )
	}

	breadcrumbs = breadcrumbs.join("/")

	//console.log("stories:", area, ID, breadcrumbs)

	var areas = [];
	// same area
	var area = getArea(breadcrumbs); 
	areas.push(area)
	resp = resp.concat(getAreaRelated(breadcrumbs, area, 2))

	// near
	area = data.relatedness[area][0]
	areas.push(area)
	resp = resp.concat(getAreaRelated(breadcrumbs, area, 2))

	// far
	area = data.relatedness[area][1]
	areas.push(area)
	resp = resp.concat(getAreaRelated(breadcrumbs, area, 1))

	// newest
	//console.log(areas)
	area = Object.keys(data.relatedness).filter( k => !areas.includes(k) )[0]
	areas.push(area)
	resp = resp.concat(getNewest(1, breadcrumbs, area))

	return resp;
}

const getArea = ( breadcrumbs ) => {
	if(!breadcrumbs) return "?";
	if(breadcrumbs.includes("/festivals/")) return "festivals";
	const area = breadcrumbs?.split("/")?.slice(1)[0] ?? "?";
	if( data.relatedness[area] ) return area;
	return "?"
}

export const getAreaRelated = (current, area, n) => {
	return get(current, area, n);
}

export const getNewest = (n, current=null, area=null) => {
	return get(current, area, 0).reverse().slice(0,n)
}
