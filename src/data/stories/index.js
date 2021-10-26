import data from './data';

export const getBy = ( ID, breadcrumbs ) =>{
	
	var entity = breadcrumbs?.split("/")?.slice(1)[0] ?? "?";
	console.log("stories:", entity, ID, breadcrumbs)
	return data;
}
