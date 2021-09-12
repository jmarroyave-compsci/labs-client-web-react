import Constants from '../constants';

class Data {
	constructor(){
		this.root  = `${Constants.SERVER_PATH}/apps`;
	}

	get(name, params){
		switch(name){
			case "page_home":
				return `${this.root}/jmarroyave_cs/1.0/pages/home`;
			case "trends":
				return `${this.root}/trends/1.0/tops`;
		}
	}


}

const inst = new Data();
export default inst;