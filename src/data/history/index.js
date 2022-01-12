import config from 'app/config'
import data from './data.json'
import dataTest from './data.test.json'

export const getHistory = function( { decade=null, year=null } ){
	const d = (config.TEST) ? dataTest : data;

	if( decade != null ){
		return d[decade]
	}

	if( year != null ){
		decade = year.toString().slice(0,3) + "0"
		return d[decade][year]
	}

	return d;
}

