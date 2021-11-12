import config from 'app/config'
import data from './data.json'
import dataTest from './data.test.json'

export const getAll = function(){
	 return (config.TEST) ? dataTest : data;
}

export const getBy = ( ID, breadcrumbs ) =>{	
	var entity = breadcrumbs?.split("/")?.slice(1)[0] ?? "?";
	//console.log("stories:", entity, ID, breadcrumbs)
	return getAll();
}

export const getLast = ( n ) => {
	return getAll().slice(0, n)
}