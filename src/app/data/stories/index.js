import data from './data';

class Stories{
	constructor(){

	}

	getBy( ID ){
		const resp = [];
		data.forEach( item => {
			if(item.id === ID) return;
			if(item.tags.includes(ID)) resp.push(item);	
		})
		return resp;
	}
}

const stories = new Stories();
export default stories;