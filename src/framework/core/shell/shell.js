const parseArgs = require('minimist')
const _ = require('./_');

const frameworkPath = '/media/jm/labs/frameworks/webapps/startup/react';


String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

async function procAddComponent(project, component, theme, version, withcss){
	project = _.getProject(project);
	var vers = version.split('.');
	var idx, indexPath = `${project.path}/react/src/${project.name}/components/${component}.json`;

	if(!_.exists(indexPath)){
		console.log("File component.json does not exists");
		var idxFile = _.loadTemplate('records').toString();
		idxFile = idxFile.replaceAll("[[theme]]", theme);
		_.saveFile(idxFile, indexPath);
	}

	idx = _.loadJSON(indexPath);

	if(idx.controls.find((item) => (item.family == theme && item.version.toString() == vers.toString()) ? item : null) == null){
		idx.index.push({family: theme, version: [Number(vers[0]), Number(vers[1]), Number(vers[2])], control: idx.controls.length});
		idx.controls.push({family: theme, version: [Number(vers[0]), Number(vers[1]), Number(vers[2])]});		
	}

	var json = "", imports = "";
	for(var i = 0; i < idx.index.length; i++){
		var ix = idx.index[i];
		var c = idx.controls[ix.control];
		json += `\t\t\t{family: "${ix.family}", version: [${ix.version.toString()}], control: ${c.family}_${c.version.toString().replaceAll(",", "_")}},\n`;
	}

	for(var i = 0; i < idx.controls.length; i++){
		var c = idx.controls[i];
		imports += `import ${c.family}_${c.version.toString().replaceAll(",","_")} from '${project.name}/themes/${c.family}/${c.version.toString().replaceAll(",",".")}/${component}'\n`;		
		await _.saveRecentData(idx, project, c, component, "js");
		await _.saveRecentData(idx, project, c, component, "scss");
	}

	var idxFile = _.loadTemplate('index').toString();
	idxFile = idxFile.replaceAll("[[component]]", component);
	idxFile = idxFile.replaceAll("[[imports]]", imports);
	idxFile = idxFile.replaceAll("[[json]]", json);
	idxFile = idxFile.replaceAll("[[project]]", project);

	_.saveFile(idxFile, `${project.path}/react/src/${project.name}/components/${component}.js`);
	_.saveJSON(idx, `${project.path}/react/src/${project.name}/components/${component}.json`);
}

function procAdd(path){
	if(_.directoryExists(`${path}/react`)){
		console.log('Web app already created in', path);
		return;
	}

	console.log('Creating directory:', path);
	_.createDirectory(path).then((data)=>{
		console.log('Copying files');
		_.copyDirectory(frameworkPath, path).then((data)=>{
			console.log(data);
			console.log('Installing dependencies');
			/*
			_.exec(`cd ${path}/react; npm i`).then((data)=>{
				console.log(data);
			})
		    .catch((err)=>{
	    	    console.log(err);
		    });         
		    */
		})
	    .catch((err)=>{
    	    console.log(err);
	    });         
	})
    .catch((err)=>{
        console.log(err);
    });         
}


function showMenu(){
	console.log("Framework shell");
	console.log("Author: jmarroyave.compsci@gmail.com");
	console.log("Usage:");
	console.log("  ", "node shell.js [parameters]");
	console.log("Operations:");
	console.log('  ', "--add", ':', "add a new wapp to destination-path");
	console.log('\t', "node shell.js test --add --path=[path]");
	console.log('  ', "--addComponent", ':', "add a new component for a specified theme and version");
	console.log('\t', "node shell.js --addComponent --project=[prj] --component=[path] --theme=[theme] --version=[ver]");
}



function missingArg(arg){
	console.log("Missing argument:", arg); 
	process.exit();	
}

var opt = {
	string: [
		'path',
		'project',
		'theme',
		'version',
		'component',
	],
	boolean: [
		'add',
		'addComponent',
		'withcss',
	],
	alias: [
		['add', 'a'],
		['project', 'p'],
		['file', 'f'],
	],
	default: {
	}
};
var argv = parseArgs(process.argv, opt);

if(process.argv.length == 2){
	showMenu();
	process.exit();
}


if(argv.add){	
	var tuples = [];
	if(!argv.file) {
		if(!argv.path) missingArg("path");		
		tuples.push({name: "", path: argv.path});
	} else {
		file = _.loadJSON(argv.file);
		tuples = file.projects;
	}
	tuples.map((k)=>{
		console.log("Creating project", k.name, "in path", k.path);	
		procAdd(k.path);		
	});
} else if(argv.addComponent){
		if(!argv.project) missingArg("project");
		if(!argv.theme) missingArg("theme");
		if(!argv.version) missingArg("version");
		if(!argv.component) missingArg("component");

		console.log("Creating project component", argv.project, argv.component, argv.theme, argv.version);	
		procAddComponent(argv.project, argv.component, argv.theme, argv.version, argv.withcss);
} else {
}