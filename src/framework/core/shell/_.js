const fs = require('fs');
const mkdirp = require('mkdirp');
const { exec } = require('child_process')
 

class _{

	constructor(){
		this.frameworkPath = '/media/jm/labs/frameworks/webapps/startup/react';
		this.data = this.loadJSON('./data.json');
	}

	loadTemplate(name){
		return fs.readFileSync(`./templates/${name}.tpl`);
	}

	saveJSON(data, file){
		fs.writeFileSync(file, JSON.stringify(data));
	}

	loadJSON(file){
		return JSON.parse(fs.readFileSync(file));
	}

	getComponentPath(project, control, component){
		const c = control;
		var path = `${project.path}/react/src/${project.name}/themes/${c.family}/${c.version.toString().replaceAll(",",".")}/${component}.js`;
		path = path.substring(0, path.lastIndexOf('/'));
		var fname = component.substring(component.lastIndexOf('/') + 1);
		return {path : path, name: fname};
	}

	getProject(project){
		return this.data.projects.find((i) => (i.name == project) ? i : null);
	}

	async saveRecentData(projects, project, control, component, fileType){
		var com = this.getComponentPath(project, control, component);
		if(this.exists(`${com.path}/${com.name}.${fileType}`)) return;

		const controls = projects.controls
			.filter((item) => (item.family == control.family) ? item : null)
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


		var data = '/* no previous version */';
		var idx = controls.findIndex(item => item.version.toString() === control.version.toString())

		if(idx == 0){
			var p = `${project.path}/react/src/${project.name}/components/${component}.${fileType}`;
			if(this.exists(p)){
				console.log("from original file", p);
				data = this.loadFile(p);
			}
		} else {
			var controlLast = controls[idx - 1];
			var comLast = this.getComponentPath(project, controlLast, component);			
			console.log('from last file', comLast);
			data = this.loadFile(`${comLast.path}/${comLast.name}.${fileType}`);
		}
	

		await this.createDirectory(com.path)
		await this.saveFile(data, `${com.path}/${com.name}.${fileType}`);
	}

	async createDirectory(path){
		return new Promise((resolve,reject)=>{
			mkdirp(path, function(err){
				if(err) {
					reject(err);
					return;
				}
				resolve(true);
			});
		})
	}

	copyDirectory(from, to){
		return this.exec(`cp -R ${from} ${to}`);
	}

	exec(command){
		return new Promise((resolve,reject)=>{
			exec(command, (err, stdout, stderr) => {
				if(err)	{
					reject(err);
					return;
				}
				resolve(stdout + stderr);
			});			
		})
	}	

	exists(path){
		return fs.existsSync(path);
	}

	directoryExists(path){
		return fs.existsSync(path);
	}

	saveFile(data, path){
		fs.writeFileSync(path, data);
	}

	loadFile(path){
		return fs.readFileSync(path);	
	}

}

const exported = new _();
module.exports = exported;