import Server from 'core/app/server';
import Components from 'core/app/components';
import {   BrowserView,   MobileView,   isBrowser,  isMobile} from "react-device-detect";

class API {
	constructor(props) {
		this.error = "";
		this.current_component = props.current_component;
		this.components = props.components;
		this.local = props.local;
		this.title = props.title;
		this.debug = props.debug;
		this.APIAppName = props.apiAppName;
		this.APIVersion = props.apiVersion;
		this.server = new Server({debug: this.debug, local: this.local});
	}

	search(query){
	}

	layoutIsMobile(){
		return isMobile;
	}

	getError(){
		return this.error;
	}

	setError(err){
		this.error += "\n" + err;
	}

	getComponentsVersion(){
		return this.current_component;
	}

	setComponentsVersion(id){
		var family, version;
		const data = this.components;
		const item = data.find((item) => (item.id == id) ? item : null);
		this.current_component = {id : item.id, family : item.family, version : item.version};
	}

	async getPageOnce(name, params, id = null){
	    const dataPath = ['pages', name, 'data'];
	    if (this.state.get(dataPath) != null) return;
	    const uri = `/apps/${this.APIAppName}/${this.APIVersion}/pages/${name}${(id) ? "/" + id : ""}`;
	    var data = await this.getAPI(dataPath, uri, params);
	    if("app" in data) this.state.set(['app'], data.app);
	}

	async getPage(name, params, id = null){
	    const dataPath = ['pages', name, 'data'];
	    const uri = `/apps/${this.APIAppName}/${this.APIVersion}/pages/${name}${(id) ? "/" + id : ""}`;
	    var data = await this.getAPI(dataPath, uri, params);
	    if(data && "app" in data) this.state.set(['app'], data.app);
	}

	getAPI(dataPath, uri, params){
		//console.log(dataPath, uri, params);
	    const $this = this;
	    if(dataPath){
	    	this.state.set(dataPath, null);
	    }
	    return new Promise((resolve, reject) =>{
		    $this.server.get(uri, params, function(data){
		    	if(dataPath){
		    		$this.state.set(dataPath, data);
		    	}
		    	resolve(data);
		    });
	    });
	}
  
}

export default API;