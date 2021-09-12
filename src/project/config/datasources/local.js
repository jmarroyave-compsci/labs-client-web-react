class Data {
	constructor(){
		this.root = 'https://localhost:3000/res/data';
	}

	get(name, params){
		switch(name){
			case "page_home":
				return `${this.root}/home`;
			case "trends":
				return `${this.root}/trends`;
		}
	}


}

const inst = new Data();
export default inst;