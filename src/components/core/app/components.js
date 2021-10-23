class Components{

	getCurrentVersion(){
		return window.__api.getComponentsVersion(); 
	}

	getResolvedVersion(index, title){
		const conf = window.__api.getComponentsVersion(); 
		const family = conf.family;
		const version = conf.version;
		var Control;

		//console.debug('Components: resolving', title, family, version.toString());

		const controls = index
			.filter((item) => (item.family == family) ? item : null)
			.sort((a,b)=>{
				if(a.version[0] == b.version[0]){
					return (a.version[0] > b.version[0]) ? -1 : 1;
				}
				if(a.version[1] == b.version[1]){
					return (a.version[1] > b.version[1]) ? -1 : 1;
				}
				if(a.version[2] == b.version[2]){
					return (a.version[2] > b.version[2]) ? -1 : 1;
				}
			});

		

		if(controls.length > 0){

			Control = controls.find((item) => (JSON.stringify(version) == JSON.stringify(item.version)) ? item : null);

			if(Control != null){
				//console.debug('Components: resolve', 'exact version');
			} else {
				// Major, Minor, Revision
				var ver = version.slice(0);
				var controlsMajor;
				for(var major = ver[0]; major >= 0; major--){
					controlsMajor = controls.filter((item) => (item.version[0] == major) ? item : null);
					if(controlsMajor.length > 0) {
						if(major != version[0]){
							ver[0] = major;
							ver[1] = controlsMajor[0].version[1];
							ver[2] = controlsMajor[0].version[2];
						}
						break;
					}
				}

				//console.log(controlsMajor, version, ver);

				var controlsMinor;
				for(var minor = ver[1]; minor >= 0; minor--){
					controlsMinor = controlsMajor.filter((item) => (item.version[1] == minor) ? item : null);
					if(controlsMinor.length > 0) {
						if(minor != version[1]){
							ver[1] = minor;
							ver[2] = controlsMinor[0].version[2];
						}
						break;
					}
				}
								
				//console.log(controlsMinor, version, ver);

				for(var rev = ver[2]; rev >= 0; rev--){
					var controlsRev = controlsMinor.filter((item) => (item.version[2] == rev) ? item : null);

					if(controlsRev.length > 0) {
						Control = controlsRev[0];
						break;
					}
				}
			}
		}

		if(Control == null){		
			Control = index[0];
			console.debug('Components: resolve', '[0]', title, index, family, version.toString(), controls);
		}


		if(Control == null || Control.control == null){
			console.error("Component Configuration", title, family, version.toString(), index);
		}

		return Control;
	}


	resolve(index, title){
		const Control = this.getResolvedVersion(index, title);
		return Control.control;
	}
} 

window.__components = new Components();

export default Components;