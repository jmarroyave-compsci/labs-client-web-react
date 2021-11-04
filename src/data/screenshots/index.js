import config from 'app/config'
import data from './data.json'
import dataTest from './data.test.json'

export const getScreenshots = function( page ){
	var recs = (config.TEST) ? dataTest : data;
	var resp = recs.filter( (r) => r.page == page );
	return resp;
}